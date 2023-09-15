import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import useOrderStore from "../../store/useOrderStore";
import Stepper from "../Stepper/Stepper";

export default function ProductDetail({
  updateTotalToPay,
  updateTotalTaxes,
  updateTotalNet,
}) {
  const { articlesToPay, setArticlesToPay } = useOrderStore();
  // ACTUALIZAR CANTIDAD DE ARTICULOS
  const [articles, setArticles] = useState(articlesToPay);

  useEffect(() => {
    setArticles(articlesToPay);
  }, []);

  const handleAmountChange = (productId, newAmount) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId ? { ...article, amount: newAmount } : article
      )
    );
    const updatedArticlesToPay = articles.map((article) =>
      article.id === productId
        ? {
            ...article,
            amount: newAmount,
          }
        : article
    );
    setArticlesToPay(updatedArticlesToPay);

    const newTotalToPay = calculateTotalToPay(updatedArticlesToPay);
    updateTotalToPay(newTotalToPay);
  };

  // ACTUALIZAR VOLUMEN DE ARTICULOS
  const handleVolumeChange = (productId, event) => {
    const newVolume = event.target.value;
    let newPriceWithTax;

    setArticles((prevArticles) =>
      prevArticles.map((article) => {
        if (article.id === productId) {
          let updatedPrice;
          if (newVolume === "Box") {
            updatedPrice = article.price_box;
          } else if (newVolume === "Kg") {
            updatedPrice = article.price_kg;
          } else {
            updatedPrice = article.price_unit;
          }
          newPriceWithTax = updatedPrice + updatedPrice * article.tax
          const updatedArticle = {
            ...article,
            volume: newVolume,
            priceWithTax: newPriceWithTax,
          };
          return updatedArticle;
        }
        return article;
      })
    );
    const updatedArticlesToPay = articlesToPay.map((article) => {
      if (article.id === productId) {
        return { ...article, volume: newVolume , priceWithTax: newPriceWithTax};
      }
      return article;
    });

    setArticlesToPay(updatedArticlesToPay);
  };

  // ELIMINAR ARTICULOS DEL CARRITO
  const handleTrashClick = (productId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId
          ? { ...article, amount: 0, totalItemToPay: 0 }
          : article
      )
    );

    const updatedArticlesToPay = articlesToPay.map((article) =>
      article.id === productId
        ? { ...article, amount: 0, totalItemToPay: 0 }
        : article
    );
    setArticlesToPay(updatedArticlesToPay);

    const newTotalToPay = calculateTotalToPay(updatedArticlesToPay);
    updateTotalToPay(newTotalToPay);
  };

  // CALCULAR EL NETO
  const calculateItemNet = (
    price_unit,
    price_box,
    price_kg,
    amount,
    volume
  ) => {
    let price;
    if (volume === "Box") {
      price = price_box;
    } else if (volume === "Kg") {
      price = price_kg;
    } else {
      price = price_unit;
    }
    const net = price * amount;
    return parseFloat(net.toFixed(2));
  };

  const calculateTotalNet = (articles) => {
    const totalNet = articles.reduce((total, article) => {
      const itemNet = calculateItemNet(
        article.price_unit,
        article.price_box,
        article.price_kg,
        article.amount,
        article.volume
      );
      return total + itemNet;
    }, 0);
    return parseFloat(totalNet.toFixed(2));
  };

  // CALCULAR TAXES
  const calculateItemTaxes = (
    price_unit,
    price_box,
    price_kg,
    tax,
    amount,
    volume
  ) => {
    let price;
    if (volume === "Box") {
      price = price_box;
    } else if (volume === "Kg") {
      price = price_kg;
    } else {
      price = price_unit;
    }
    const taxes = price * tax * amount;
    return parseFloat(taxes.toFixed(2));
  };

  const calculateTotalTaxes = (articles) => {
    const totalTaxes = articles.reduce((total, article) => {
      const itemTaxes = calculateItemTaxes(
        article.price_unit,
        article.price_box,
        article.price_kg,
        article.tax,
        article.amount,
        article.volume
      );
      return total + itemTaxes;
    }, 0);
    return parseFloat(totalTaxes.toFixed(2));
  };

  // CALCULAR TOTAL A PAGAR
  const calculateItemToPay = (article, amount) => {
    let updatedPrice;
    if (article.volume === "Box") {
      updatedPrice = article.price_box;
    } else if (article.volume === "Kg") {
      updatedPrice = article.price_kg;
    } else {
      updatedPrice = article.price_unit;
    }
    const priceWithTax = updatedPrice + updatedPrice * article.tax;
    const total = priceWithTax * amount;
    const totalItemToPay = parseFloat(total.toFixed(2));

    if ("totalItemToPay" in article) {
      article.totalItemToPay = totalItemToPay;
    } else {
      Object.assign(article, { totalItemToPay });
    }
    return totalItemToPay;
  };

  const calculateTotalToPay = (articles) => {
    const filteredArticles = articles.filter((article) => article.amount > 0);
    const totalToPay = filteredArticles.reduce((total, article) => {
      return total + article.totalItemToPay;
    }, 0);
    return parseFloat(totalToPay.toFixed(2));
  };

  useEffect(() => {
    const newTotalTaxes = calculateTotalTaxes(articles);
    updateTotalTaxes(newTotalTaxes);

    const newTotalToPay = calculateTotalToPay(articles);
    updateTotalToPay(newTotalToPay);

    const newTotalNet = calculateTotalNet(articles);
    updateTotalNet(newTotalNet);
  }, [articles]);

  return (
    <>
      {articles
        .filter((article) => article.amount > 0)
        .map((article) => (
          <div key={article.id}>
            <div className="product-detail">
              <h3>{article.name}</h3>
              <div className="product-detail">
                <h3>£{calculateItemToPay(article, article.amount)}</h3>
                <Icon
                  id="trash"
                  icon="ph:trash"
                  onClick={() => handleTrashClick(article.id)}
                />
              </div>
            </div>
            <div className="product-detail">
              <Stepper
                productData={article}
                onAmountChange={handleAmountChange}
              />
              <Form.Select
                aria-label="Select Volume"
                value={article.volume}
                onChange={(event) => handleVolumeChange(article.id, event)}
              >
                <option value="Unit">Unit</option>
                <option value="Box">Box</option>
                <option value="Kg">Kg</option>
              </Form.Select>
            </div>
          </div>
        ))}
    </>
  );
}

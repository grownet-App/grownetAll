import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import useArticlesToPayStore from "../../store/useArticlesToPayStore";
import Stepper from "../Stepper/Stepper";

export default function ProductDetail({
  updateTotalToPay,
  updateTotalTaxes,
  updateTotalNet,
}) {
  const articlesToPay = useArticlesToPayStore((state) => state.articlesToPay);

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    if (storedArticlesToPay) {
      useArticlesToPayStore.setState({ articlesToPay: storedArticlesToPay });
      setArticles(storedArticlesToPay);
    }
  }, []);

  // ACTUALIZAR CANTIDAD DE ARTICULOS
  const [articles, setArticles] = useState(articlesToPay);
  const handleAmountChange = (productId, newAmount) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId ? { ...article, amount: newAmount } : article
      )
    );
    const updatedArticlesToPay = articles.map((article) =>
      article.id === productId ? { ...article, amount: newAmount } : article
    );
    localStorage.setItem("articlesToPay", JSON.stringify(updatedArticlesToPay));

    updatedArticlesToPay.forEach((article) =>
      console.log(
        `ID: ${article.id} - Amount: ${article.amount} - Name: ${article.name}`
      )
    );
    const newTotalToPay = calculateTotalToPay(updatedArticlesToPay);
    updateTotalToPay(newTotalToPay);
  };

  // ELIMINAR ARTICULOS DEL CARRITO
  const handleTrashClick = (productId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId ? { ...article, amount: 0 } : article
      )
    );

    const updatedArticlesToPay = articles.map((article) =>
      article.id === productId ? { ...article, amount: 0 } : article
    );
    localStorage.setItem("articlesToPay", JSON.stringify(updatedArticlesToPay));
    updatedArticlesToPay.forEach((article) =>
      console.log(
        `ID: ${article.id} - Amount: ${article.amount} - Name: ${article.name}`
      )
    );
    const newTotalToPay = calculateTotalToPay(updatedArticlesToPay);
    updateTotalToPay(newTotalToPay);
  };

  // CALCULAR EL NETO
  const calculateItemNet = (priceUnit, amount) => {
    const net = priceUnit * amount;
    return parseFloat(net.toFixed(2));
  };

  const calculateTotalNet = (articles) => {
    const totalNet = articles.reduce((total, article) => {
      const itemNet = calculateItemNet(article.price_unit, article.amount);
      return total + itemNet;
    }, 0);
    return parseFloat(totalNet.toFixed(2));
  };

  useEffect(() => {
    const newTotalNet = calculateTotalNet(articles);
    updateTotalNet(newTotalNet);
  }, [articles]);

  // CALCULAR TAXES
  const calculateItemTaxes = (priceUnit, tax, amount) => {
    const taxes = priceUnit * tax * amount;
    return parseFloat(taxes.toFixed(2));
  };

  const calculateTotalTaxes = (articles) => {
    const totalTaxes = articles.reduce((total, article) => {
      const itemTaxes = calculateItemTaxes(
        article.price_unit,
        article.tax,
        article.amount
      );
      return total + itemTaxes;
    }, 0);
    return parseFloat(totalTaxes.toFixed(2));
  };

  useEffect(() => {
    const newTotalTaxes = calculateTotalTaxes(articles);
    updateTotalTaxes(newTotalTaxes);
  }, [articles]);

  // CALCULAR TOTAL A PAGAR
  const calculateItemToPay = (priceWithTax, amount) => {
    const total = priceWithTax * amount;
    return parseFloat(total.toFixed(2));
  };

  const calculateTotalToPay = (articles) => {
    const totalToPay = articles.reduce((total, article) => {
      const subtotal = article.priceWithTax * article.amount;
      return total + subtotal;
    }, 0);
    return parseFloat(totalToPay.toFixed(2));
  };

  return (
    <>
      {articles
        .filter((article) => article.amount > 0)
        .map((article) => (
          <div key={article.id}>
            <div className="product-detail">
              <h3>{article.name}</h3>
              <div className="product-detail">
                <h3>
                  £{calculateItemToPay(article.priceWithTax, article.amount)}
                </h3>
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
                aria-label="Default select example"
                placeholder="Choose the quantity"
              >
                <option value="1">Each</option>
                <option value="2">Box</option>
                <option value="3">Kg</option>
              </Form.Select>
            </div>
            <p> Box/Boxes</p>
          </div>
        ))}
    </>
  );
}

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import useArticlesToPayStore from "../../store/useArticlesToPayStore";
import Stepper from "../Stepper/Stepper";

export default function ProductDetail({ updateTotalToPay}) {
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

  const calculateItemTotal = (priceUnit, amount) => {
    return priceUnit * amount;
  };

  const calculateTotalToPay = (articles) => {
    return articles.reduce((total, article) => {
      return total + article.price_unit * article.amount;
    }, 0);
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
                <h3>£{calculateItemTotal(article.price_unit, article.amount)}</h3>
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

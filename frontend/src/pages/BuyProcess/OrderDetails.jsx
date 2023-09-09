import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import useArticlesToPayStore from "../../store/useArticlesToPayStore";

export default function OrderDetails(props) {
  const [counter, setCounter] = useState(props.initialounter || 0);
  const [totalItemToPay, setTotalItemToPay] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);

  useEffect(() => {
    // TODO Fetch el valor de cada item de la API
    const apiTotalItemToPay = 2; 
    // TODO Fetch tax de cada producto de la  API
    const apiTax = 0.25; 
    setTotalItemToPay(apiTotalItemToPay * counter);
    setTax(apiTax * counter);
  }, [counter]);

  // TODO Actualizar totalToPay cuando totalItemToPay o los taxes cambien
  useEffect(() => {
    setTotalToPay(totalItemToPay + tax);
  }, [totalItemToPay, tax]);

  return (
    <section className="details">
      <div className="tittle-detail">
        <a href="/products">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-orderDetail">Order detail</h1>
      </div>
      <div className="card-invoices">
        <ProductDetail nameProduct={"Broccoli"} totalItemToPay={totalItemToPay} counter={counter} setCounter={setCounter}/>
        
        <div>
          <h2 id="tax-font">Payment details</h2>
          <div className="product-detail">
            <h3>Tax</h3>
            <h3>£{tax}</h3>
          </div>
        </div>
        <div className="total-detail">
          <h2>Current value</h2>
          <h2>£{totalToPay} </h2>
        </div>
      </div>
      <a className="bttn btn-primary" href="/orderInformation">Continue</a>
    </section>
  );
}

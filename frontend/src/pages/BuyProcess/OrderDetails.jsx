import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import "../../css/orderDetail.css";

export default function OrderDetails(props) {
  const [totalToPay, setTotalToPay] = useState(0);
  const [totalTaxes, setTotalTaxes] = useState(0);
  const [totalNet, setTotalNet] = useState(0);

  const updateTotalNet = (newNet) => {
    setTotalNet(newNet);
  };

  const updateTotalTaxes = (newTaxes) => {
    setTotalTaxes(newTaxes);
  };

  const updateTotalToPay = (newTotal) => {
    setTotalToPay(newTotal);
  };

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
        <ProductDetail
          updateTotalToPay={updateTotalToPay}
          updateTotalTaxes={updateTotalTaxes}
          updateTotalNet={updateTotalNet}
        />
        <div>
          <h2 id="tax-font">Payment details</h2>
          <div className="product-detail">
            <h3>Net</h3>
            <h3>£{totalNet}</h3>
          </div>
          <div className="product-detail">
            <h3>Tax</h3>
            <h3>£{totalTaxes}</h3>
          </div>
        </div>
        <div className="total-detail">
          <h2>Current value</h2>
          <h2>£{totalToPay} </h2>
        </div>
      </div>
      <a className="bttn btn-primary" href="/orderInformation">
        Continue
      </a>
    </section>
  );
}

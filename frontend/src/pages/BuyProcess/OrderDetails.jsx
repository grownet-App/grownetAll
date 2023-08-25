import React, { useState } from "react";
import { Icon } from "@iconify/react";
import css from "../../css/orderDetail.css";
import Stepper from "../../components/Stepper/Stepper";

export default function OrderDetails(props) {
  const [counter, setCounter] = useState(0);

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
        <div>
          <div className="product-detail">
            <h3>Broccoli</h3>
            <div className="product-detail">
              <h3>€{2 * counter}</h3>
              <Icon id="trash" icon="ph:trash" />
            </div>
          </div>
          <div className="product-detail">
            <Stepper counter={counter} setCounter={setCounter} />
            <p>{counter} Box/Boxes</p>
          </div>
        </div>
        <div>
          <h2 id="tax-font">Payment details</h2>
          <div className="product-detail">
            <h3>Tax</h3>
            <h3>€2.82</h3>
          </div>
        </div>
        <div className="total-detail">
          <h2>Current value</h2>
          <h2>€54.11</h2>
        </div>
      </div>
      <a className="bttn btn-primary" href="/orderInformation">Continue</a>
    </section>
  );
}

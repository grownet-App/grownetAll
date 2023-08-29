import React from "react";
import { Icon } from "@iconify/react";
import css from "../../css/orderDetail.css";

export default function OrderInformation() {
  return (
    <section className="details">
      <div className="tittle-detail">
        <a href="/details">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-orderDetail">Order detail</h1>
      </div>
      <div className="data-shipping">
        <h3 id="text-data-shipping">Address</h3>
        <input type="text" required></input>
        <h3>Deliver</h3>
        <input type="date" required></input>
        <h3>Any special requirements?</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      </div>
      <a className="bttn btn-primary" href="/orderSuccessful">
        Continue
      </a>
    </section>
  );
}

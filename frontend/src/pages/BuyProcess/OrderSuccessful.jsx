import React from "react";
import css from "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";

export default function OrderSuccessful() {

  return (
    <section className="order-succesful">
        <img src={img_succesful} />
        <h1>Succesful!</h1>
        <p>Your order is successful</p>
        <div>
          <button className="bttn btn-primary">View your orders</button>
          <button className="bttn btn-outline">Re-order</button>
        </div>
    </section>
  );
}

import React from "react";
import css from "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import Menu from "../../components/Menu/Menu";
export default function OrderSuccessful() {

  return (
    <section className="order-succesful">
        <img src={img_succesful} />
        <h1>Succesful!</h1>
        <p>Your order is successful</p>
        <div className="buttons-succesful">
          <a className="bttn btn-primary" href="/record">View your orders</a>
          <a className="bttn btn-outline" href="/restaurants">Re-order</a>
        </div>
        <Menu/>
    </section>
  );
}

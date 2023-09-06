import React from "react";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";
export default function OrderSuccessful() {

  return (
    <section className="order-succesful">
        <img src={img_succesful} />
        <h1>Succesful!</h1>
        <p>Your order is successful</p>
        <div className="buttons-succesful">
          <Link className="bttn btn-primary" to="/record">Your orders</Link>
          <Link className="bttn btn-outline" to="/restaurants">Download PDF</Link>
        </div>
        <Menu/>
    </section>
  );
}

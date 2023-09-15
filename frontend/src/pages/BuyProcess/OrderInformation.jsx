import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate, Link } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore";

export default function OrderInformation() {
  const [ data, setData ] = useState([]);
  const form = useRef();
  const navigate = useNavigate();
  const { selectedRestaurant, articlesToPay } = useOrderStore();

  useEffect(() => {
    setData(articlesToPay);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm( "service_2voynei", "template_1mqbyuu",form.current, "ZWLp3lK1btJHqpyCa")
      .then(
        (result) => {
          console.log(result.text);
          navigate("/orderSuccessful");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="details">
      <div className="tittle-detail">
        <Link to="/details">
          <Icon
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </Link>
        <h1 className="tittle-orderDetail">Order detail</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="data-shipping">
          <h3 id="text-data-shipping">Address</h3>
          <input type="text" name="address" value={selectedRestaurant.address} required/>
          <input type="text" id="resume" name="restaurant" value={selectedRestaurant.account_name} required/>
          <h3>Deliver</h3>
          <input type="date" name="date" required></input>
          <h3>Any special requirements?</h3>
          <textarea id="w3review" name="message" rows="4" cols="50"></textarea>

        {data.filter((article) => article.amount>0).map((article) =>(
          <>
          <textarea id="resume" name="product" key={article.id} >{" Product: "+ article.name + " - Amount: " + article.amount + " - Volume: " + article.volume + " - Total: " + parseFloat(article.priceWithTax.toFixed(2))}
          </textarea>
       
          <textarea id="resume" name="name" key={article.id} >{ article.name}</textarea>
          <textarea id="resume" name="amount" key={article.id} >{ article.amount}</textarea>
          <textarea id="resume" name="volume" key={article.id} >{ article.volume}</textarea>
          <textarea id="resume" name="total" key={article.id} >{ parseFloat(article.priceWithTax.toFixed(2))}</textarea>

          </>
        ))}</div>

        <input type="submit" value="Continue" className="bttn btn-primary" />

      </form>
    </section>
  );
}
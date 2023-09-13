import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf";
import { Link } from "react-router-dom";

export default function OrderInformation() {
  const form = useRef();
  const navigate = useNavigate();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    setData(storedArticlesToPay);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( "service_zthtpco", "template_iierimt", form.current, "KDimKCkRePZ73euid")
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
      {/*<form ref={form} onSubmit={sendEmail}>
        <div className="data-shipping">
          <h3 id="text-data-shipping">Address</h3>
          <input type="text" name="user_address" value={"50-56 Willesden Ln, London"} required/>
          <h3>Deliver</h3>
          <input type="date" name="user_date" required></input>
          <h3>Any special requirements?</h3>
          <textarea id="w3review" name="message" rows="4" cols="50"></textarea>
        data.filter((article) => article.amount>0).map((article) =>(
          <>
          <textarea id="resume" name="product" key={article.id} >{" Product: "+ article.name + " - Amount: " + article.amount + " - Volume: " + article.volume + " - Total: " + parseFloat(article.priceWithTax.toFixed(2))}
          </textarea>
          </>
        ))</div>
        <input type="submit" value="Send" className="bttn btn-primary" />
      </form>*/}
    
    </section>
  );
}
import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore";
import DocumentPdf from "../../components/DocumentPdf";
export default function OrderInformation() {
  const form = useRef();
  const navigate = useNavigate();
  const { selectedRestaurant } = useOrderStore();
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
      <form ref={form} onSubmit={sendEmail}>
        <div className="data-shipping">
          <h3 id="text-data-shipping">Address</h3>
          <input type="text" name="address" value={selectedRestaurant.address} required/>
          <input type="text" id="resume" name="restaurant" value={selectedRestaurant.account_name} required/>
          <h3>Deliver</h3>
          <input type="date" name="date" required></input>
          <h3>Any special requirements?</h3>
          <textarea id="w3review" name="message" rows="4" cols="50"></textarea>
        </div>
        <input type="submit" value="Send" className="bttn btn-primary" />
      </form>
    </section>
  );
}
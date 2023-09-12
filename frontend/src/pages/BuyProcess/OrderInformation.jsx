
import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function OrderInformation() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zthtpco', 'template_iierimt', form.current, 'KDimKCkRePZ73euid')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
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
        <input type="text" name="user_address" required></input>
        <h3>Deliver</h3>
        <input type="date" name="user_date" required></input>
        <h3>Any special requirements?</h3>
        <textarea id="w3review" name="message" rows="4" cols="50"></textarea>
      </div>
      
      <input type="submit" value="Send" className="bttn btn-primary"/></form>
      <a className="bttn btn-primary" href="/orderSuccessful">
        Continue
      </a>
    </section>
  );
}

import React, {useState}from "react";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf"
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function OrderSuccessful() {

  return (
    <section className="order-succesful" >
        <img src={img_succesful} />
        <h1>Succesful!</h1>
        <p>Your order is successful</p>
        <div className="buttons-succesful">
          <Link className="bttn btn-primary" to="/record">Your orders</Link>
          <PDFDownloadLink  document={<DocumentPdf></DocumentPdf>} fileName="Order">
            <button className="bttn btn-outline" >Download PDF</button>
          </PDFDownloadLink>
        </div>
        <Menu/>
    </section>
  );
}

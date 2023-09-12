import { pdf } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf";
import Menu from "../../components/Menu/Menu";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";

export default function OrderSuccessful() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    setData(storedArticlesToPay);
  }, []);

  const generatePdfDocument = async (fileName) => {
    try {
      const blob = await pdf(<DocumentPdf data={data} />).toBlob();
      FileSaver.saveAs(blob, fileName);
    } catch (error) {
      console.error("Error generating PDF", error);
    }
  };

  return (
    <section className="order-succesful">
      <img src={img_succesful} alt="Succesfull" />
      <h1>Succesful!</h1>
      <p>Your order is successful</p>
      <div className="buttons-succesful">
        <Link className="bttn btn-primary" to="/record">
          Your orders
        </Link>
        <button
          className="bttn btn-outline"
          onClick={() => generatePdfDocument("FacturaGrownet.pdf")}
        >
          Download PDF
        </button>
      </div>

      <Menu />
    </section>
  );
}

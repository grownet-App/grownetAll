import { pdf } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf";
import Menu from "../../components/Menu/Menu";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import useOrderStore from "../../store/useOrderStore";
import useArticlesToPayStore from "../../store/useArticlesToPayStore";

export default function OrderSuccessful() {
  const [articlesData, setArticlesData] = useState([]);
  const { selectedRestaurant, selectedProvider } = useOrderStore();
  const currentDate = new Date();
  const dayName = currentDate.toLocaleString("en-us", { weekday: "short" });
  const dayNumber = currentDate.getDate();
  const monthName = currentDate.toLocaleString("en-us", { month: "long" });
  const yearNumber = currentDate.getFullYear();
  const formattedDate = `${dayName}, ${dayNumber} ${monthName}, ${yearNumber}`;
  //TODO PONER FECHA DE ENTREGA QUE SE SELECCIONÓ EN EL CALENDARIO
  const { articlesToPay, totalNet, totalTaxes, totalToPay } =
    useArticlesToPayStore();

  useEffect(() => {
    setArticlesData(articlesToPay);
  }, []);

  const generatePdfDocument = async (fileName) => {
    try {
      const blob = await pdf(
        <DocumentPdf
          articlesData={articlesData}
          selectedRestaurant={selectedRestaurant}
          selectedProvider={selectedProvider}
          formattedDate={formattedDate}
          articlesToPay={articlesToPay}
          totalNet={totalNet}
          totalTaxes={totalTaxes}
          totalToPay={totalToPay}
        />
      ).toBlob();
      FileSaver.saveAs(blob, fileName);
    } catch (error) {
      console.error("Error generating PDF", error);
    }
  };

  //TODO ELIMINAR ESTE CLG
  console.log("ESTOS SON LOS ARTICULOS A PAGAR:", articlesToPay);

  return (
    <section className="order-succesful">
      {/* TODO ELIMINAR ESTO CUANDO ESTÉ ORGANIZADO EL TOTAL DE PRODUCTS A PAGAR */}
      {/* <div>{formattedDate}</div>
      <div> {selectedRestaurant.account_name} </div>
      {articlesToPay.map((article) => (
        <div> {article.totalItemToPay} </div> 
      ))}
      <div> {totalNet} </div>
      <div> {totalTaxes} </div>
      <div> {totalToPay} </div> */}

      <img src={img_succesful} alt="Succesfull" />
      <h1>Succesful!</h1>
      <p>Your order is successful</p>
      <div className="buttons-succesful">
        <Link className="bttn btn-primary" to="/record">
          Your orders
        </Link>
        <button
          className="bttn btn-outline"
          onClick={() => generatePdfDocument("GrownetInvoice.pdf")}
        >
          Download PDF
        </button>
      </div>

      <Menu />
    </section>
  );
}

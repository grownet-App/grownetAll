import { pdf } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf";
import Menu from "../../components/Menu/Menu";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import useOrderStore from "../../store/useOrderStore";

export default function OrderSuccessful() {
  const [articlesData, setArticlesData] = useState([]);
  const { selectedRestaurant, selectedSupplier } = useOrderStore();
  const currentDate = new Date();
  const dayName = currentDate.toLocaleString("en-us", { weekday: "short" });
  const dayNumber = currentDate.getDate();
  const monthName = currentDate.toLocaleString("en-us", { month: "long" });
  const yearNumber = currentDate.getFullYear();
  const formattedDate = `${dayName}, ${dayNumber} ${monthName}, ${yearNumber}`;
  //TODO PONER FECHA DE ENTREGA QUE SE SELECCIONÓ EN EL CALENDARIO
  const { articlesToPay, totalNet, totalTaxes, totalToPay, specialRequirements, deliveryData } =
    useOrderStore();

  useEffect(() => {
    const filteredArticles = articlesToPay.filter((article)=> article.amount > 0)
    setArticlesData(filteredArticles);
  }, []);

  const generatePdfDocument = async (fileName) => {
    try {
      const blob = await pdf(
        <DocumentPdf
          articlesData={articlesData}
          selectedRestaurant={selectedRestaurant}
          selectedSupplier={selectedSupplier}
          formattedDate={formattedDate}
          deliveryData={deliveryData}
          specialRequirements={specialRequirements}
          //TODO QUITAR ESTE ARTICLES TO PAY PORQUE EN ARTICLES DATA SE LO PASO FILTRADO
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

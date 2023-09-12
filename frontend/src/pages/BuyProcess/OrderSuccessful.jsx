import React, {useState, useEffect}from "react";
import "../../css/orderDetail.css";
import img_succesful from "../../img/img_succesful.png";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";
import * as FileSaver from "file-saver";
import DocumentPdf from "../../components/DocumentPdf"
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function OrderSuccessful() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    setData(storedArticlesToPay);
  }, []);

  const generatePdfDocument = async (fileName) => {
    const blob = await pdf(<DocumentPdf data={data} />).toBlob();
      FileSaver.saveAs(blob, fileName);
      console.log("PDF generated", blob);
      console.log("PDF generated", fileName);
      console.log("PDF generated", data);
      console.log("PDF generated", data[0].name);
      console.log("PDF generated", data[0].amount);
      console.log("PDF generated", data[0].priceWithTax);
  };

  return (
    <section className="order-succesful" >
      <section>
        <DocumentPdf data={data} />
      </section>
        <img src={img_succesful} alt="Succesfull" />
        <h1>Succesful!</h1>
        <p>Your order is successful</p>
        <div className="buttons-succesful">
          <Link className="bttn btn-primary" to="/record">Your orders</Link>
          <button
          className="bttn btn-outline"
          onClick={() => generatePdfDocument("Factura Grownet.pdf")}
        >
          Download PDF
        </button>
        </div>
        
        <Menu/>
    </section>
  );
  
}


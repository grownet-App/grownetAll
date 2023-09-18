import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import { Document, Page, Text, pdf } from "@react-pdf/renderer"; // Importa react-pdf
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/orderDetail.css";
import useOrderStore from "../../store/useOrderStore";
const PdfDocument = ({ selectedRestaurant, data }) => (
  <Document style={{ backgroundColor: "blue" }}>
    <Page>
      <Text>Address: {selectedRestaurant.address}</Text>
      <Text>Restaurant: {selectedRestaurant.account_name}</Text>
      {data
        .filter((article) => article.amount > 0)
        .map((article) => (
          <Text key={article.id}>
            {" Product: " +
              article.name +
              " - Amount: " +
              article.amount +
              " - Volume: " +
              article.volume +
              " - Total: " +
              parseFloat(article.priceWithTax.toFixed(2))}
          </Text>
        ))}
    </Page>
  </Document>
);
export default function OrderInformation() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {
    selectedRestaurant,
    articlesToPay,
    deliveryData,
    setDeliveryData,
    specialRequirements,
    setSpecialRequirements,
  } = useOrderStore();
  console.log(data);
  useEffect(() => {
    setData(articlesToPay);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const pdfBlob = await pdf(
      <PdfDocument selectedRestaurant={selectedRestaurant} data={data} />
    ).toBlob();
    const pdfBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(pdfBlob);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
    const serviceId = "service_2voynei";
    const templateId = "templateorders";
    const userId = "ZWLp3lK1btJHqpyCa";
    const emailParams = {
      to_name: "Grownet",
      restaurant: selectedRestaurant.account_name,
      address: selectedRestaurant.address,
      date: deliveryData,
      message: specialRequirements,
      file: pdfBase64,
    };
    emailjs.send(serviceId, templateId, emailParams, userId).then(
      (result) => {
        navigate("/orderSuccessful");
        console.log(result);
      },
      (error) => {
        console.log("no se envio nada de corre", error);
      }
    );
  };

  console.log("THIS IS THE SPECIAL", specialRequirements, deliveryData);
  return (
    <section className="details">
      <div className="tittle-detail">
        <Link to="/details">
          <Icon src="google.com" icon="ic:round-arrow-back" className="arrow" />
        </Link>
        <h1 className="tittle-orderDetail">Order detail</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="data-shipping">
          <h3 id="text-data-shipping">Address</h3>
          <input
            type="text"
            name="address"
            value={selectedRestaurant.address}
            disabled
          />
          <h3>Deliver</h3>
          <input
            type="date"
            name="date"
            value={deliveryData}
            onChange={(e) => setDeliveryData(e.target.value)}
            required
          ></input>
          <h3>Any special requirements?</h3>
          <textarea
            id="w3review"
            name="message"
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <input type="submit" className="bttn btn-primary" value={"Continue"} />
      </form>
    </section>
  );
}

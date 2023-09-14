import { Icon } from "@iconify/react";
import "../../css/orderDetail.css";
import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import DocumentPdf from "../../components/DocumentPdf";
import { Link } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore";
import PruebaPDF from "../../components/PruebaPDF";

export default function OrderInformation() {

  const navigate = useNavigate();
  const [ data, setData ] = useState([]);
  const { selectedRestaurant } = useOrderStore();

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    setData(storedArticlesToPay);
  }, []);

  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async (e) => {

      const serviceId = "service_2voynei";
      const templateId = "template_1mqbyuu";
      const userId = "ZWLp3lK1btJHqpyCa";

    const emailParams = {
      to_name: "Grownet",
      restaurant: "Restaurant Don Luis",
      file: reader.result
    };

    emailjs.send(serviceId, templateId, emailParams, userId)
        .then((result) => {
            navigate("/orderSuccessful");
            console.log(result);    
        }, (error) => {
            console.log(error)
        })
    }
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
      <form onSubmit={handleSubmit}>
        <div className="data-shipping">
          <h3 id="text-data-shipping">Address</h3>
          <input type="text" name="user_address" value={selectedRestaurant.address} required/>
          <h3>Deliver</h3>
          <input type="date" name="user_date" required></input>
          <h3>Any special requirements?</h3>
          <textarea id="w3review" name="message" rows="4" cols="50"></textarea>
          <label>
            File:
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </label>
          
        {data.filter((article) => article.amount>0).map((article) =>(
          <>
          <textarea id="resume" name="product" key={article.id} >{" Product: "+ article.name + " - Amount: " + article.amount + " - Volume: " + article.volume + " - Total: " + parseFloat(article.priceWithTax.toFixed(2))}
          </textarea>
          </>
        ))}
        </div>
        <button type="submit"className="bttn btn-primary">Continue</button>
  
      </form>
        </section>
  );
}
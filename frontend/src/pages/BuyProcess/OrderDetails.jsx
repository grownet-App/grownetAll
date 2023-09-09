  import React, { useState, useEffect } from "react";
  import { Icon } from "@iconify/react";
  import "../../css/orderDetail.css";
  import ProductDetail from "../../components/ProductDetail/ProductDetail";
  import useArticlesToPayStore from "../../store/useArticlesToPayStore";

  export default function OrderDetails(props) {
    const [totalToPay, setTotalToPay] = useState(0);

    const updateTotalToPay = (newTotal) => {
      setTotalToPay(newTotal);
    };

    return (
      <section className="details">
        <div className="tittle-detail">
          <a href="/products">
            <Icon
              href="https://www.google.com"
              src="google.com"
              icon="ic:round-arrow-back"
              className="arrow"
            />
          </a>
          <h1 className="tittle-orderDetail">Order detail</h1>
        </div>
        <div className="card-invoices">
          <ProductDetail updateTotalToPay={updateTotalToPay}/>
          
          <div>
            <h2 id="tax-font">Payment details</h2>
            <div className="product-detail">
              {/* TODO AGREGAR LOS TAXES */}
              <h3>Tax</h3>
              <h3>£0</h3>
            </div>
          </div>
          <div className="total-detail">
            <h2>Current value</h2>
            <h2>£{totalToPay} </h2>
          </div>
        </div>
        <a className="bttn btn-primary" href="/orderInformation">Continue</a>
      </section>
    );
  }

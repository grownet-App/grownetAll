import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import "../../css/orderDetail.css";
import { Link } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore";

export default function OrderDetails(props) {
  const articlesToPayStore = useOrderStore();
  const totalNet = articlesToPayStore.totalNet;
  const totalTaxes = articlesToPayStore.totalTaxes;
  const totalToPay = articlesToPayStore.totalToPay;

  const updateTotalNet = (newNet) => {
    articlesToPayStore.setTotalNet(newNet);
  };

  const updateTotalTaxes = (newTaxes) => {
    articlesToPayStore.setTotalTaxes(newTaxes);
  };

  const updateTotalToPay = (newTotal) => {
    articlesToPayStore.setTotalToPay(newTotal);
  };

  return (
    <section className="details">
      <div className="tittle-detail">
        <Link to="/products">
          <Icon
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </Link>
        <h1 className="tittle-orderDetail">Order detail</h1>
      </div>
      <div className="card-invoices">
        <ProductDetail
          updateTotalToPay={updateTotalToPay}
          updateTotalTaxes={updateTotalTaxes}
          updateTotalNet={updateTotalNet}
        />
        <div>
          <h2 id="tax-font">Payment details</h2>
          <div className="product-detail">
            <h3>Net</h3>
            <h3>£{totalNet.toFixed(2)}</h3>
          </div>
          <div className="product-detail">
            <h3>Tax</h3>
            <h3>£{totalTaxes.toFixed(2)}</h3>
          </div>
        </div>
        <div className="total-detail">
          <h2>Current value</h2>
          <h2>£{totalToPay.toFixed(2)}</h2>
        </div>
      </div>
      <Link className="bttn btn-primary" to="/orderInformation">
        Continue
      </Link>
    </section>
  );
}

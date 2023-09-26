import React from "react";
import "../../../css/pedingRecord.css";
import MenuPrimary from "../../../components/Menu/MenuPrimary";
import { useTranslation } from "react-i18next";
export default function PastRecord() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pending-record">
        <h1>Order details</h1>
        <div className="card-invoices">
          <h2 id="tax-tittle">{t("pendingRecord.supplierDetail")}</h2>
          <div className="product-detail">
            <h3>Bid Food</h3>
            <h3>#698989</h3>
          </div>
          <p>20/06/2023</p>
          <h2 id="tax-tittle">{t("pendingRecord.detailsItem")}</h2>
          <div>
            <div className="product-detail">
              <h3>Broccoli</h3>
              <h3>£5698</h3>
            </div>
            <p>50 Box/Boxes</p>
          </div>
          <div>
            <div className="product-detail">
              <h3>Broccoli</h3>
              <h3>£5698</h3>
            </div>
            <p>50 Box/Boxes</p>
          </div>
          <div>
            <div className="product-detail">
              <h3>Broccoli</h3>
              <h3>£5698</h3>
            </div>
            <p>50 Box/Boxes</p>
          </div>
          <h2 id="tax-tittle">{t("pendingRecord.paymentDetails")}</h2>
          <div className="product-detail">
            <h3>{t("pendingRecord.tax")}</h3>
            <h3>£44</h3>
          </div>
          <div className="total-detail">
            <h2>{t("pendingRecord.currentValue")}</h2>
            <h2>£569 </h2>
          </div>
        </div>
      </section>
      <MenuPrimary />
    </>
  );
}

import React from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import "../../../css/pedingRecord.css";
import MenuPrimary from "../../../components/Menu/MenuPrimary";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { use } from "i18next";
import axios from "axios";
import { selectedStorageOrder } from "../../../config/urls.config";
import { useEffect, useState } from "react";
import useRecordStore from "../../../store/useRecordStore";
import useTokenStore from "../../../store/useTokenStore";

export default function PendingRecord() {
  const { t } = useTranslation();
  const {token} = useTokenStore();
  const {selectedPendingOrder} = useRecordStore();
  const [detailsToShow, setDetailsToShow] = useState({})

  useEffect(() => {
    axios.get(`${selectedStorageOrder}/${selectedPendingOrder}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log('Esta es la Respuesta',response.data.order);
      setDetailsToShow(response.data.order);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []
  )

  return (
    <>
    {detailsToShow && (
      <section className="pending-record">
        <h1>{t("pendingRecord.title")}</h1>
        <Tabs defaultActiveKey="reception" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title={t("pendingRecord.tabProducts")}>
            <div className="card-invoices">
              <h2 id="tax-tittle">{t("pendingRecord.supplierDetail")}</h2>
              <div className="product-detail">
                <h3>{detailsToShow.nameSuppliers}</h3>
                {console.log('ESTO LLEGA AL DIV',detailsToShow)}
                <h3>#{detailsToShow.reference}</h3>
              </div>
              <p>{detailsToShow.created_date}</p>
              <h2 id="tax-tittle">{t("pendingRecord.detailsItem")}</h2>
              {detailsToShow.products?.map((product) => (
                <div>
                  <div className="product-detail">
                    <h3>{product.name}</h3>
                    <h3>£{product.price}</h3>
                  </div>
                  <p>{product.quantity} {product.uom}</p>
                </div>
              ))}
              <h2 id="tax-tittle">{t("pendingRecord.paymentDetails")}</h2>
              <div className="product-detail">
                <h3>{t("pendingRecord.tax")}</h3>
                <h3>£{detailsToShow.total_tax}</h3>
              </div>
              <div className="total-detail">
                <h2>{t("pendingRecord.currentValue")}</h2>
                <h2>£{detailsToShow.total} </h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="reception" title={t("pendingRecord.tabReception")}>
            <div className="pending-record">
              <form className="card-pending-record">
                <h1>{t("pendingRecord.check")}</h1>
                <div className="product-check">
                  <div className="product-detail" id="check-products">
                    <div>
                      <h3>Broccoli</h3>
                      <p>50 Boxes</p>
                    </div>
                    <div className="calification-reception">
                     <Form.Check id="flexCheck"/> 
                     <Link to="/reception" className="warning-record">{t("pendingRecord.openDispute")}</Link>  
                    </div>
                  </div>   
                </div>
                <button className="bttn btn-primary">{t("pendingRecord.confirmOrder")}</button>
              </form>
            </div>
          </Tab>
        </Tabs>
      </section>
    )}
      <div className="menu-space"></div>
      <MenuPrimary />
    </>
  );
}

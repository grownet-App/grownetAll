import { Icon } from "@iconify/react";
import axios from "axios";
import { format } from "date-fns";
import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../components/ProductSearcher/productSearcher.css";
import { allStorageOrders } from "../../config/urls.config";
import "../../css/record.css";
import useRecordStore from "../../store/useRecordStore";
import useTokenStore from "../../store/useTokenStore";

export default function Record() {
  const { t } = useTranslation();
  const { token } = useTokenStore();
  const { pendingOrders, setPendingOrders, selectedPendingOrder, setSelectedPendingOrder } = useRecordStore();

  useEffect(() => {
    // LLAMAR LAS ORDENES PENDIENTES DE LA BASE DE DATOS
    axios
      .get(allStorageOrders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPendingOrders(
          response.data.orders.map((order) => ({
            ...order,
            created_date: format(new Date(order.created_date), "dd/MM/yyyy"),
          }))
        );
        console.log("Ordenes pendientes:", pendingOrders);
      })
      .catch((error) => {
        console.log("Error al llamar las ordenes", error);
      });
  }, []);

  const handlePendingOrderSelect = (orderReference) => {
    setSelectedPendingOrder(orderReference);
  };

  return (
    <>
      <section className="record">
        <h1>{t("record.title")}</h1>
        <div className="flex-container">
          <form className="search-form">
            <input
              type="date"
              placeholder={t("record.searchPlaceholder")}
              className="search-input"
            />
            <button className="search-button">
              <Icon icon="ic:round-search" />
            </button>
          </form>
        </div>
        <Tabs
          defaultActiveKey="pending"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title={t("record.pastOrders")}>
            <div className="card-record">
              <div className="information-past">
                <div className="">
                  <h4>{t("record.orderNumber")}</h4>
                  <p>57896547</p>
                </div>
                <div>
                  <h4>{t("record.date")}</h4>
                  <p>29/07/2023</p>
                </div>
              </div>
              <div className="information-past o2" id="o2">
                <div>
                  <h4>{t("record.amount")}</h4>
                  <p>£200</p>
                </div>
                <Link to={"pastRecord"} className="bttn btn-primary">
                  {t("record.viewDetails")}
                </Link>
              </div>
            </div>
          </Tab>
          <Tab eventKey="pending" title={t("record.currentOrders")}>
            {pendingOrders.map((order) => (
              <div className="card-record" key={order.reference}>
                <div className="information-past">
                  <div className="">
                    <h4>{t("record.orderNumber")}</h4>
                    <p>{order.reference}</p>
                  </div>
                  <div>
                    <h4>{t("record.date")}</h4>
                    <p>{order.created_date}</p>
                  </div>
                </div>
                <div className="information-past o2" id="o2">
                  <div>
                    <h4>{t("record.amount")}</h4>
                    <p>£{order.total}</p>
                  </div>
                  <Link className="bttn btn-primary" onClick={()=> handlePendingOrderSelect(order.reference)} to={'pendingRecord'}>
                    {t("record.viewDetails")}
                  </Link>
                </div>
              </div>
            ))}
          </Tab>
        </Tabs>
        <div className="space-menu"></div>
      </section>
      <MenuPrimary />
    </>
  );
}

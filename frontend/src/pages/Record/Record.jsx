import { Icon } from "@iconify/react";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../components/ProductSearcher/productSearcher.css";
import "../../css/record.css";

export default function Record() {
  const { t } = useTranslation();

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
                <Link to={"/pastRecord"} className="bttn btn-primary">
                  {t("record.viewDetails")}
                </Link>
              </div>
            </div>
          </Tab>
          <Tab eventKey="pending" title={t("record.currentOrders")}>
            <section className="">
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
                  <Link className="bttn btn-primary" to={"/pendingRecord"}>{t("record.viewDetails")}</Link>
                </div>
              </div>
            </section>
          </Tab>
        </Tabs>

        <div className="space-menu"></div>
      </section>
      <MenuPrimary />
    </>
  );
}

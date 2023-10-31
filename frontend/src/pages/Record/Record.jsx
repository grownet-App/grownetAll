import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../components/ProductSearcher/productSearcher.css";
import { allStorageOrders } from "../../config/urls.config";
import "../../css/record.css";
import img_succesful from "../../img/img_succesful.png";
import useOrderStore from "../../store/useOrderStore";
import useRecordStore from "../../store/useRecordStore";
import useTokenStore from "../../store/useTokenStore";

export default function Record() {
  const { t } = useTranslation();
  const { token } = useTokenStore();
  const {
    pendingOrders,
    closedOrders,
    setPendingOrders,
    setClosedOrders,
    setSelectedPendingOrder,
    setSelectedClosedOrder,
  } = useRecordStore();
  const { selectedRestaurant } = useOrderStore();
  const apiOrders = allStorageOrders + selectedRestaurant.accountNumber;

  useEffect(() => {
    // LLAMAR LAS ORDENES PENDIENTES DE LA BASE DE DATOS
    axios
      .get(apiOrders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const closedOrders = response.data.orders.filter(
          (order) => order.id_stateOrders === 5
        );
        const pendingOrders = response.data.orders.filter(
          (order) => order.id_stateOrders !== 5
        );
        setClosedOrders(closedOrders);
        setPendingOrders(pendingOrders);
        console.log("Ordenes cerradas:", closedOrders);
        console.log("Ordenes pendientes:", pendingOrders);
      })
      .catch((error) => {
        console.log("Error al llamar las ordenes", error);
      });
  }, []);

  // Filtro buscador
  const [selectedDate, setSelectedDate] = useState("");
  const handlePendingOrderSelect = (orderReference) => {
    if (!selectedDate) {
      setSelectedPendingOrder(orderReference);
    } else {
      const filteredOrders = pendingOrders.filter(
        (order) => order.date_delivery === selectedDate
      );
      if (filteredOrders.length > 0) {
        setSelectedPendingOrder(orderReference);
      }
    }
  };
  console.log(pendingOrders);
  console.log(closedOrders);
  return (
    <>
      <section className="record">
        <h1>{t("record.title")}</h1>
        {pendingOrders.length === 0 && closedOrders.length === 0 ? (
          <div className="record-zero">
            <img src={img_succesful} alt="person-with-a-phone" />
            <h1>{t("record.noOrders")} </h1>
            <Link to="/suppliers" className="bttn btn-primary">
              {t("record.bttnNoOrders")}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-container">
              <form className="search-form">
                <input
                  type="date"
                  placeholder={t("record.searchPlaceholder")}
                  className="search-input"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
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
              {/* CLOSED ORDERS */}
              <Tab eventKey="home" title={t("record.pastOrders")}>
                {closedOrders.map((order) => {
                  if (!selectedDate || order.date_delivery === selectedDate) {
                    return (
                      <div className="card-record" key={order.reference}>
                        <div className="information-past">
                          <div className="">
                            <h4>{t("record.orderNumber")}</h4>
                            <p>{order.reference}</p>
                          </div>
                          <div className="open-dispute">
                            <h4>{t("record.date")}</h4>
                            <p>{order.date_delivery}</p>
                          </div>
                        </div>
                        <div className="information-past o2" id="o2">
                          <div>
                            <h4>{t("record.amount")}</h4>
                            <p>£{order.total}</p>
                          </div>
                          <Link
                            className="bttn btn-primary"
                            onClick={() =>
                              handlePendingOrderSelect(order.reference)
                            }
                            to={"pastRecord"}
                          >
                            {t("record.viewDetails")}
                          </Link>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <h4>No tienes ordenes en esta fecha</h4>
                        {console.log(
                          "no coincide la fecha seleccionada: " +
                            selectedDate +
                            " y  la de la api: " +
                            order.date_delivery
                        )}
                      </div>
                    );
                  }
                })}

                {/* CURRENT ORDERS */}
              </Tab>
              <Tab eventKey="pending" title={t("record.currentOrders")}>
                {pendingOrders.map((order) => {
                  if (!selectedDate || order.date_delivery === selectedDate) {
                    return (
                      <div className="card-record" key={order.reference}>
                        <div className="information-past">
                          <div className="">
                            <h4>{t("record.orderNumber")}</h4>
                            <p>{order.reference}</p>
                          </div>
                          {order.id_stateOrders === 6 && (
                            <div className="alert-icon">
                              <Icon id="dispute-icon" icon="pajamas:warning" />
                              <p id="dispute-text">Open dispute</p>
                            </div>
                          )}
                          <div className="open-dispute">
                            <h4>{t("record.date")}</h4>
                            <p>{order.date_delivery}</p>
                          </div>
                        </div>
                        <div className="information-past o2" id="o2">
                          <div>
                            <h4>{t("record.amount")}</h4>
                            <p>£{order.total}</p>
                          </div>
                          <Link
                            className="bttn btn-primary"
                            onClick={() =>
                              handlePendingOrderSelect(order.reference)
                            }
                            to={"pendingRecord"}
                          >
                            {t("record.viewDetails")}
                          </Link>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <h4>No tienes ordenes en esta fecha</h4>
                        {console.log(
                          "no coincide la fecha seleccionada: " +
                            selectedDate +
                            " y  la de la api: " +
                            order.date_delivery
                        )}
                      </div>
                    );
                  }
                })}
              </Tab>
            </Tabs>
          </>
        )}
        <div className="space-menu"></div>
      </section>
      <MenuPrimary />
    </>
  );
}

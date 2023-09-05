import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../../../css/pastRecord.css";
import Menu from "../../../components/Menu/Menu.jsx";
import Reception from "./Reception";

export default function PastRecord() {
  return (
    <>
      <section className="past-record">
        <h1>Order details</h1>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3">
          <Tab eventKey="home" title="Products">
            <div className="card-invoices">
            <h2 id="tax-tittle">Supplier details</h2>
            <div className="product-detail">
              <h3>Bid Food</h3>
              <h3>#698989</h3>
            </div>
            <p>20/06/2023</p>
            <h2 id="tax-tittle">Details items</h2>
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
              <h2 id="tax-tittle">Payment details</h2>
              <div className="product-detail">
                <h3>Tax</h3>
                <h3>£44</h3>
              </div>
              <div className="total-detail">
                <h2>Current value</h2>
                <h2>£569 </h2>
              </div>
            </div>
          </Tab>
          <Tab eventKey="reception" title="Reception">
            <Reception/>
          </Tab>
        </Tabs>
      </section>
      <Menu />
    </>
  );
}

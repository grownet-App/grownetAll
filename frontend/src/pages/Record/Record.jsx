import React from "react";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../css/record.css";
import { Icon } from "@iconify/react";
import "../../components/ProductSearcher/productSearcher.css";
import { Tabs, Tab } from "react-bootstrap";
import UpcomingRecord from "./UpcomingRecord/UpcomingRecord";
import { Link } from "react-router-dom";
export default function Record() {
  return (
    <>
      <section className="record">
        <h1>Your orders</h1>
        <div className="flex-container">
          <form className="search-form">
            <input
              type="date"
              placeholder="Search your orders"
              className="search-input"
            />
            <button className="search-button">
              <Icon icon="ic:round-search" />
            </button>
          </form>
        </div>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Past orders">
            <div className="card-record">
              <div className="information-past">
                <div className="">
                  <h4>#Order:</h4>
                  <p>57896547</p>
                </div>
                <div>
                  <h4>Date</h4>
                  <p>29/07/2023</p>
                </div>
              </div>
              <div className="information-past o2" id="o2">
                <div>
                  <h4>Amount</h4>
                  <p>£200</p>
                </div>
                <Link to={"/pastRecord"} className="bttn btn-primary">View details</Link>
              </div>
            </div>
          </Tab>
          <Tab eventKey="upcoming" title="Current orders">
            <UpcomingRecord />
          </Tab>
        </Tabs>

        <div className="space-menu"></div>
      </section>
      <MenuPrimary />
    </>
  );
}

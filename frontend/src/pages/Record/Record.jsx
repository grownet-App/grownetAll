import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import "../../css/record.css";
import { Icon } from "@iconify/react";
import "../../components/ProductSearcher/productSearcher.css";

export default function Record() {
  return (
    <>
      <section className="record">
        <h1>Your orders</h1>
        <div className="flex-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search your orders"
              className="search-input"
            />
            <button className="search-button">
              <Icon icon="ic:round-search" />
            </button>
          </form>
        </div>
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
            <button className="bttn btn-primary">View details</button>
          </div>
        </div>
        <div className="card-record">
          <div className="information-past">
            <div className="">
              <h4>#Order:</h4>
              <p>57896987</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>01/08/2023</p>
            </div>
          </div>
          <div className="information-past o2" id="o2">
            <div>
              <h4>Amount</h4>
              <p>£500</p>
            </div>
            <button className="bttn btn-primary">View details</button>
          </div>
        </div>
        <div className="card-record">
          <div className="information-past">
            <div className="">
              <h4>#Order:</h4>
              <p>57896787</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>02/08/2023</p>
            </div>
          </div>
          <div className="information-past o2" id="o2">
            <div>
              <h4>Amount</h4>
              <p>£800</p>
            </div>
            <button className="bttn btn-primary">View details</button>
          </div>
        </div>
        <div className="card-record">
          <div className="information-past">
            <div className="">
              <h4>#Order:</h4>
              <p>57896597</p>
            </div>
            <div>
              <h4>Date</h4>
              <p>05/08/2023</p>
            </div>
          </div>
          <div className="information-past o2" id="o2">
            <div>
              <h4>Amount</h4>
              <p>£300</p>
            </div>
            <button className="bttn btn-primary">View details</button>
          </div>
        </div>
        <div className="espacio"></div>
      </section>
      <Menu />
    </>
  );
}

import React from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import "../../../css/pedingRecord.css";
import MenuPrimary from "../../../components/Menu/MenuPrimary";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';  

export default function PendingRecord() {
  return (
    <>
      <section className="pending-record">
        <h1>Order details</h1>
        <Tabs defaultActiveKey="reception" id="uncontrolled-tab-example" className="mb-3">
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
            <div className="pending-record">
              <form className="card-pending-record">
                <h1>Check your products</h1>
                <div className="product-check">
                  <div className="product-detail" id="check-products">
                    <div>
                      <h3>Broccoli</h3>
                      <p>50 Boxes</p>
                    </div>
                    <div className="calification-reception">
                     <Form.Check id="flexCheck"/> 
                     <Link to="/reception" className="warning-record">Open dispute</Link>  
                    </div>
                  </div>   
                </div>
                <div className="product-check">
                  <div className="product-detail" id="check-products">
                    <div>
                      <h3>Broccoli</h3>
                      <p>50 Boxes</p>
                    </div>
                    <div className="calification-reception">
                     <Form.Check id="flexCheck"/> 
                     <Link to="/reception" className="warning-record">Open dispute</Link>  
                    </div>
                  </div>   
                </div>
                <div className="product-check">
                  <div className="product-detail" id="check-products">
                    <div>
                      <h3>Broccoli</h3>
                      <p>50 Boxes</p>
                    </div>
                    <div className="calification-reception">
                     <Form.Check id="flexCheck"/> 
                     <Link to="/reception" className="warning-record">Open dispute</Link>  
                    </div>
                  </div>   
                </div>
                <div className="product-check">
                  <div className="product-detail" id="check-products">
                    <div>
                      <h3>Broccoli</h3>
                      <p>50 Boxes</p>
                    </div>
                    <div className="calification-reception">
                     <Form.Check id="flexCheck"/> 
                     <Link to="/reception" className="warning-record">Open dispute</Link>  
                    </div>
                  </div>   
                </div>
                <button className="bttn btn-primary">Confirm order</button>
              </form>
            </div>
          </Tab>
        </Tabs>
        
      </section>
      <div className="menu-space"></div>
      <MenuPrimary />
    </>
  );
}

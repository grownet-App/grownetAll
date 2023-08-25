import React from "react";
import css from "../../css/settings.css";
import { Icon } from "@iconify/react";
import Accordion from "react-bootstrap/Accordion";

export default function Settings() {
  return (
    <section className="settings">
      <h1>Settings</h1>
      <div className="saludo">
        <h4>
          Hi <Icon icon="noto:waving-hand" />
        </h4>
      </div>
      <p>How can we help you?</p>
      <div>
        <a className="bttn btn-primary" id="settings-button" href="/settingsRestaurants">
          <div className="text-button">
            <h2>Restaurants</h2>
            <p>Edit your restaurants</p>
          </div>
          <Icon icon="simple-line-icons:plus" className="plus" />
        </a>
        <a className="bttn btn-secundary" id="settings-button" href="/settingsSuppliers">
          <div className="text-button">
            <h2>Suppliers</h2>
            <p>Edit your suppliers</p>
          </div>
          <Icon icon="simple-line-icons:plus" className="plus" />
        </a>
      </div>
      <Accordion id="idiomas">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Languages</Accordion.Header>
          <Accordion.Body>
            <div id="banderas">
              <Icon icon="circle-flags:uk" />
              <a href="">English</a>
            </div>
            <div id="banderas">
              <Icon icon="emojione:flag-for-spain" />
              <a href="">Spanish</a>
            </div>
            <div id="banderas">
              <Icon icon="emojione:flag-for-portugal" />
              <a href="">Portuguese</a>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="settings-options">
        <a className="bttn" id="setting-button">
          <h2>FAQ</h2>
          <Icon className="icon-arrow" icon="ep:arrow-right-bold" />
        </a>
        <a className="bttn" id="setting-button" href="/tAndC">
          <h2>Terms & conditions</h2>
          <Icon className="icon-arrow" icon="ep:arrow-right-bold" />
        </a>
      </div>
      <button id="log-out">
        <Icon icon="solar:logout-linear" className="icon-logout" /> Log out
      </button>
    </section>
  );
}

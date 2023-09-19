import React from "react";
import css from "../../css/settings.css";
import { Icon } from "@iconify/react";
import Accordion from "react-bootstrap/Accordion";
import Menu from "../../components/Menu/Menu";
import { Link } from "react-router-dom";

export default function Settings() {
  return (
  <>
    <section className="settings">
      <h1>Settings</h1>
      <div className="saludo">
        <h4>
          Hi <Icon icon="noto:waving-hand" />
        </h4>
      </div>
      <p>How can we help you?</p>
      <div>
        <Link className="bttn btn-primary settings-button" id="my-intercom">
          <div className="text-button">
            <h2>Restaurants</h2>
            <p>Edit your restaurants</p>
          </div>
          <Icon icon="simple-line-icons:plus" className="plus" />
        </Link>
        <Link className="bttn btn-secundary settings-button" id="my-intercom">
          <div className="text-button">
            <h2>Suppliers</h2>
            <p>Edit your suppliers</p>
          </div>
          <Icon icon="simple-line-icons:plus" className="plus" />
        </Link>
      </div>
      <Accordion id="idiomas">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Languages</Accordion.Header>
          <Accordion.Body>
            <div id="banderas">
              <Icon icon="circle-flags:uk" />
              <Link to="">English</Link>
            </div>
            <div id="banderas">
              <Icon icon="emojione:flag-for-spain" />
              <Link to="">Spanish</Link>
            </div>
            <div id="banderas">
              <Icon icon="emojione:flag-for-portugal" />
              <Link to="">Portuguese</Link>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="settings-options">
        <Link className="bttn" id="setting-button" to="/FAQ">
          <h2>FAQ</h2>
          <Icon className="icon-arrow" icon="ep:arrow-right-bold" />
        </Link>
        <Link className="bttn" id="setting-button" to="/tAndC">
          <h2>Terms & conditions</h2>
          <Icon className="icon-arrow" icon="ep:arrow-right-bold" />
        </Link>
      </div>
      <button id="log-out">
        <Icon icon="solar:logout-linear" className="icon-logout" /> Log out
      </button>
    </section>
    <Menu/>
  </>
  );
}

import { Icon } from "@iconify/react";
import React from "react";
import CardProviders from "../../components/CardProviders.jsx";
import Menu from "../../components/Menu/Menu.jsx";
import "../../css/providers.css";
import { Link } from "react-router-dom";
export default function Providers() {
  return (
    <section className="providers">
      <div className="tittle-providers">
        <Link to="/restaurants">
          <Icon
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </Link>
        <h1 className="tittle-restaurants">Providers</h1>
      </div>
      <CardProviders></CardProviders>
      <Link
        className="bttn btn-primary"
        to="settingsProviders"
        id="bttn-restaurant"
      >
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add providers
      </Link>
      <Menu />
    </section>
  );
}

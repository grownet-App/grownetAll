import { Icon } from "@iconify/react";
import React from "react";
import CardProviders from "../../components/CardProviders.jsx";
import Menu from "../../components/Menu/Menu.jsx";
import "../../css/providers.css";

export default function Providers() {
  return (
    <section className="providers">
      <div className="tittle-providers">
        <a href="restaurants">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-restaurants">Providers</h1>
      </div>
      <CardProviders></CardProviders>
      <a
        className="bttn btn-primary"
        href="settingsProviders"
        id="bttn-restaurant"
      >
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add providers
      </a>
      <Menu />
    </section>
  );
}

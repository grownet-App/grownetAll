import { Icon } from "@iconify/react";
import React from "react";
import CardSuppliers from "../../components/CardSuppliers.jsx";
import Menu from "../../components/Menu/Menu.jsx";
import "../../css/suppliers.css";
import { Link } from "react-router-dom";
export default function Suppliers() {
  return (
    <section className="suppliers">
      <div className="tittle-suppliers">
        <Link to="/restaurants">
          <Icon
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </Link>
        <h1 className="tittle-restaurants">Suppliers</h1>
      </div>
      <CardSuppliers></CardSuppliers>
      <Link
        className="bttn btn-primary"
        to="settingsSuppliers"
        id="bttn-restaurant"
      >
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add suppliers
      </Link>
      <Menu />
    </section>
  );
}

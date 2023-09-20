import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import CardSuppliers from "../../components/CardSuppliers.jsx";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../css/suppliers.css";

export default function Suppliers() {
  return (
    <section className="suppliers">
      <div className="tittle-suppliers">
        <Link to="/restaurants">
          <Icon src="google.com" icon="ic:round-arrow-back" className="arrow" />
        </Link>
        <h1 className="tittle-restaurants">Suppliers</h1>
      </div>
      <CardSuppliers></CardSuppliers>

      <Link className="bttn btn-primary" id="my-intercom">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Contact us to add suppliers!
      </Link>
      <div className="space-menu"></div>
      <MenuPrimary />
    </section>
  );
}

import { Icon } from "@iconify/react";
import React from "react";
import CardSuppliers from "../../components/CardSuppliers.jsx";
import Menu from "../../components/Menu/menu.jsx";
import css from "../../css/suppliers.css"

export default function Suppliers(props) {
  return (
    <section className="suppliers">
      <div className="tittle-suppliers">
        <a href="restaurants">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-restaurants">Suppliers</h1>
      </div>
      <CardSuppliers prove={1}></CardSuppliers>
      <CardSuppliers prove={2}></CardSuppliers>
      <CardSuppliers prove={3}></CardSuppliers>
      <CardSuppliers prove={4}></CardSuppliers>
      <Menu />
    </section>
  );
}

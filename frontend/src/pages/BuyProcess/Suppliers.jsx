import { Icon } from "@iconify/react";
import React from "react";
import CardSuppliers from "../../components/CardSuppliers.jsx";
import Menu from "../../components/Menu/Menu.jsx";
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
      <button className="bttn btn-primary"><Icon icon="simple-line-icons:plus" className="icon-plus" />Add suppliers</button>
      <Menu />
    </section>
  );
}

import { Icon } from "@iconify/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CardSuppliers from "../../components/CardSuppliers.jsx";
import MenuPrimary from "../../components/Menu/MenuPrimary";
import "../../css/suppliers.css";

export default function Suppliers() {
  const { t } = useTranslation();

  return (
    <section className="suppliers">
      <div className="tittle-suppliers">
        <Link to="/restaurants">
          <Icon src="google.com" icon="ic:round-arrow-back" className="arrow" />
        </Link>
        <h1 className="tittle-restaurants"> {t("suppliers.title")} </h1>
      </div>
      <CardSuppliers></CardSuppliers>

      <Link className="bttn btn-primary" id="my-intercom">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        {t("suppliers.addSuppliers")}
      </Link>
      <div className="space-menu"></div>
      <MenuPrimary />
    </section>
  );
}

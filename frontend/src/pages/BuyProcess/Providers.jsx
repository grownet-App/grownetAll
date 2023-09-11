import { Icon } from "@iconify/react";
import React, {useEffect, useState} from "react";
import CardProviders from "../../components/CardProviders.jsx";
import Menu from "../../components/Menu/Menu.jsx";
import "../../css/providers.css"
import axios from "axios";
import { availableProviders } from "../../config/urls.config";

export default function Providers() {
  const urlImg = "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
  const [providers, setProviders] = useState([]);

useEffect (() => {
  axios.get(availableProviders).then((response) => {
    setProviders(response.data.customersChef);
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error al obtener los proveedores:', error);
  });
}, []);

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
      <CardProviders prove={1}></CardProviders>
      <CardProviders prove={2}></CardProviders>
      <CardProviders prove={3}></CardProviders>
      <CardProviders prove={4}></CardProviders>
      <a className="bttn btn-primary" href="settingsProviders"id="bttn-restaurant">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add providers
      </a>
      <Menu />
    </section>
  );
}

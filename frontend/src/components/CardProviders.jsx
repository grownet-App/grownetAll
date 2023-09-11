import React from "react";
import { useState, useEffect } from "react";
import img_providers from "../img/img_providers.png";
import axios from "axios";
import { availableProviders } from "../config/urls.config";

export default function Providers() {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    axios
      .get(availableProviders)
      .then((response) => {
        setProviders(response.data.providers);
        console.log(response.data);
        console.log("THIS IS THE PROVIDER", providers);
      })
      .catch((error) => {
        console.error("Error al obtener los proveedores:", error);
      });
  }, []);

  return (
    <section className="providers">
      {providers.map((provider) => (
        <a className="bttn-categ" id="providers-categ" href="/products">
          <h2 className="text-supplier">{provider.name}</h2>
          <img
            src={img_providers}
            alt="logo-restaurant"
            className="img-providers"
          ></img>
        </a>
      ))}
    </section>
  );
}

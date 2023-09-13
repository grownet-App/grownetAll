import React from "react";
import { useState, useEffect } from "react";
import img_providers from "../img/img_providers.png";
import axios from "axios";
import { availableProviders } from "../config/urls.config";
import { Link } from "react-router-dom";

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
        <Link className="bttn-categ" id="providers-categ" to="/products">
          <h2 className="text-supplier">{provider.name}</h2>
          <img
            src={img_providers}
            alt="logo-restaurant"
            className="img-providers"
          ></img>
        </Link>
      ))}
    </section>
  );
}

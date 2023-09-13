import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { availableProviders } from "../config/urls.config";
import img_providers from "../img/img_providers.png";
import useOrderStore from "../store/useOrderStore";

export default function Providers() {
  const { providers, setProviders, setSelectedProvider } = useOrderStore();

  useEffect(() => {
    //TODO QUITAR ESTE AXIOS CUANDO RESTAURANTS TRAIGA LOS PROVIDERS
    axios
      .get(availableProviders)
      .then((response) => {
        setSelectedProvider(null);
        setProviders(response.data.providers);
        console.log(response.data);
        console.log("THIS IS THE PROVIDER", response.data.providers);
      })
      .catch((error) => {
        console.error("Error al obtener los proveedores:", error);
      });
  }, [setProviders, setSelectedProvider]);

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
  };

  console.log("THERE ARE THE PROVIDERS", providers);

  return (
    <section className="providers">
      {providers.map((provider) => (
        <Link
          className="bttn-categ"
          onClick={() => handleProviderSelect(provider)}
          key={provider.idproveedor}
          id="providers-categ"
          to="/products"
        >
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

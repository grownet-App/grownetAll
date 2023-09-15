import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { availableProviders } from "../config/urls.config";
import img_providers from "../img/img_providers.png";
import useOrderStore from "../store/useOrderStore";

export default function Providers() {
  const { providers, setProviders, setSelectedProvider } = useOrderStore();
const urlImg =
    "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
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
      {providers.filter((provider) => provider.name === "eurofrutta" || provider.name === "HG WALTER" || provider.name === "County Suppplies" || provider.name === "The Menu Partners" || provider.name === "IMS" || provider.name === "Smithfield Butchers" || provider.name === "Direct Meats"|| provider.name === "Big K" ).map((provider) => (
        <>
        <Link onClick={() => handleProviderSelect(provider)}
          key={provider.idproveedor}
          id="providers-categ"
          to="/products">
        <img src={urlImg + provider.image} alt={provider.name} id="img-suppliers"/>
        </Link>
        </>
      ))}
      {providers.map((provider) => (
        <>
        
        {/*<Link
          className="bttn-categ"
          onClick={() => handleProviderSelect(provider)}
          key={provider.idproveedor}
          id="providers-categ"
          to="/products"
        >
         <img src={urlImg + provider.image} alt={provider.name} id="logo-providers"/>
          <img
            src={img_providers}
            alt="logo-restaurant"
            className="img-providers"
          ></img>
      </Link>*/}</>
      ))}
    </section>
  );
}

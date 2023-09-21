import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { availableSuppliers, selectedCategory } from "../config/urls.config";
import useOrderStore from "../store/useOrderStore";
import useTokenStore from "../store/useTokenStore";

export default function Suppliers() {
  const { suppliers, setSuppliers, setSelectedSupplier } = useOrderStore();
  const { token } = useTokenStore();
  const urlImg =
    "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
  useEffect(() => {
    axios
      .get(availableSuppliers, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSelectedSupplier(null);
        setSuppliers(response.data.suppliers);
      })
      .catch((error) => {
        console.error("Error al obtener los proveedores:", error);
      });
  }, []);

  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier);
  };

  console.log("suppliers:", suppliers)

  return (
    <section className="suppliers">
      {suppliers
        .filter(
          (supplier) =>
            supplier.name === "eurofrutta" ||
            supplier.name === "HG WALTER" ||
            supplier.name === "County Suppplies" ||
            supplier.name === "The Menu Partners" ||
            supplier.name === "IMS" ||
            supplier.name === "Smithfield Butchers" ||
            supplier.name === "Direct Meats" ||
            supplier.name === "Big K"
        )
        .map((supplier) => (
          <>
            <Link
              onClick={() => handleSupplierSelect(supplier)}
              key={supplier.idproveedor}
              id="suppliers-categ"
              to="/products"
            >
              <img
                src={urlImg + supplier.image}
                alt={supplier.name}
                id="img-suppliers"
              />
            </Link>
          </>
        ))}
      {suppliers.map((supplier) => (
        <>
          {/*<Link
          className="bttn-categ"
          onClick={() => handleSupplierSelect(supplier)}
          key={supplier.idproveedor}
          id="suppliers-categ"
          to="/products"
        >
         <img src={urlImg + supplier.image} alt={supplier.name} id="logo-suppliers"/>
          <img
            src={img_suppliers}
            alt="logo-restaurant"
            className="img-suppliers"
          ></img>
      </Link>*/}
        </>
      ))}
    </section>
  );
}

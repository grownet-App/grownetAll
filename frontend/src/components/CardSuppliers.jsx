import React from "react";
import { Link } from "react-router-dom";
import useOrderStore from "../store/useOrderStore";

export default function Suppliers() {
  const {
    suppliers,
    setSelectedSupplier,
    selectedSupplier: currentSelectedSupplier,
    setArticlesToPay,
  } = useOrderStore();
  const urlImg =
    "https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/";

  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier);
    if (currentSelectedSupplier?.id !== supplier.id) {
      setArticlesToPay([]);
    }
  };

  return (
    <section className="suppliers">
      {suppliers
        .filter(
          (supplier) =>
            supplier.name === "FoodPoint" ||
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
              key={supplier.id}
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
    </section>
  );
}

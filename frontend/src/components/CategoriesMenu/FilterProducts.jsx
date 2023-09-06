import { default as React, default as React } from "react";
import "../../css/products.css";
import useProductStore from "../../store/useProductStore";

export default function FilterProducts({products}) {
    const filteredProducts = useProductStore((state) => state.filteredProducts);
  return (
    <section className="products">
      
    </section>
  );
}

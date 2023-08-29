import { Icon } from "@iconify/react";
import React, { useState } from "react";
import css from "../../css/products.css";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import Favorites from "../../components/Favorites";
import ProductCard from "../../components/ProductCard";

export default function Products() {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <section className="products">
      <div className="tittle-products">
        <a href="/suppliers">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-products">Make your order</h1>
      </div>

      {showFavorites ? (
        <Favorites />
      ) : (
        <>
          <ProductCard id={10} />
          <ProductCard id={11} />
          <ProductCard id={12} />
          <ProductCard id={13} />
          <ProductCard id={14} />
          <ProductCard id={15} />
          <ProductCard id={16} />
        </>
      )}
      <CategoriesMenu
        showFavorites={showFavorites}
        toggleShowFavorites={toggleShowFavorites}
      />
    </section>
  );
}

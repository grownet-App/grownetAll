import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../../css/products.css";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import Favorites from "../../components/Favorites";
import ProductCard from "../../components/ProductCard";
import ProductSearcher from "../../components/ProductSearcher/ProductSearcher";
import ProductsFind from "../../components/ProductSearcher/ProductsFind";

export default function Products() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  //TODO Reemplazar estos products por los que vienen de la API
  const products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
    { id: 5, name: "product 5" },
    { id: 6, name: "product 6" },
    { id: 7, name: "product 7" },
    { id: 8, name: "product 8" },
    { id: 9, name: "product 9" },
    { id: 10, name: "product 10" },
  ];

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

      <ProductSearcher
        products={products}
        setShowSearchResults={setShowSearchResults}
        showSearchResults={showSearchResults}
      />
      {showSearchResults ? (
        <ProductsFind />
      ) : (
        <>
          {showFavorites ? (
            <Favorites />
          ) : (
            <>
              {products.map((product) => (
                <ProductCard key={product.id} id={product.id} />
              ))}
            </>
          )}
        </>
      )}

      <CategoriesMenu
        showFavorites={showFavorites}
        toggleShowFavorites={toggleShowFavorites}
      />
    </section>
  );
}

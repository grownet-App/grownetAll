import React from "react";
import { useFavoritesStore } from "../store/useFavoritesStore";
import ProductCard from "./ProductDetail/ProductCard";

export default function Favorites({ productsData }) {
  const { favorites } = useFavoritesStore();

  const favoriteProducts = productsData.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="products">
      <p>You have {favorites.length} favorite products: </p>
      <div className="favorite-items">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} productData={product}  />
        ))}
      </div>
    </div>
  );
}
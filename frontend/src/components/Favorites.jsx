import React from "react";
import { useFavoritesStore } from "../store/favoritesStore";
import ProductCard from "./ProductCard";

export default function Favorites() {
  const { favorites } = useFavoritesStore();

  return (
    <div className="products">
      <p>You have {favorites.length} favorite products: </p>
      <div className="favorite-items">
        {favorites.map((id) => (
          <ProductCard id={id} />
        ))}
      </div>
    </div>
  );
}

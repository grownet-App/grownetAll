import React from "react";
import { useTranslation } from "react-i18next";
import { useFavoritesStore } from "../store/useFavoritesStore";
import useOrderStore from "../store/useOrderStore";
import ProductCard from "./ProductDetail/ProductCard";

export default function Favorites({
  onAmountChange,
  onUomChange,
}) {
  const { t } = useTranslation();
  const { favorites } = useFavoritesStore();
  const { articlesToPay } = useOrderStore();


  const favoriteProducts = articlesToPay.filter((product) =>
    favorites.includes(product.id) 
  );

  return (
    <div className="products">
      <p>
        {t("favorites.findFirstPart")} {favorites.length}{" "}
        {t("favorites.findSecondPart")}{" "}
      </p>
      <div className="favorite-items">
        {favoriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            onAmountChange={onAmountChange}
            onUomChange={onUomChange}
          />
        ))}
      </div>
    </div>
  );
}

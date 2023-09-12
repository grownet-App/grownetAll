import React from "react";
import useProductStore from "../../store/useProductStore";
import ProductCard from "../ProductDetail/ProductCard";

function ProductsFind({ onAmountChange, onVolumeChange }) {
  const filteredProducts = useProductStore((state) => state.filteredProducts);

  return (
    <div className="products">
      <p>You have {filteredProducts.length} found products:</p>
      <div className="favorite-items">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} productData={product} onAmountChange={onAmountChange}
          onVolumeChange={onVolumeChange}> </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default ProductsFind;

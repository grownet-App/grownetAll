import { Icon } from "@iconify/react";
import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/products.css";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import Stepper from "../Stepper/Stepper";

export default function ProductCard({ productData, onAmountChange }) {
  const { id, name, image, price_unit } = productData;
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id, name, image);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      console.log("remove the ", id);
      removeFavorite(id);
    } else {
      console.log("add the ", id);
      addFavorite(id);
    }
  };

  return (
    <section className="products">
      <div className="elements">
        <img src={image} alt={"image " + name} />
        <div>
          <div className="titlle-products">
            <h1>{name}</h1>
            <div className="pr">
              <Icon
                className="icono"
                icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
                onClick={handleToggleFavorite}
                color="#62C471"
                size={35}
                underlaycolor="transparent"
              ></Icon>
            </div>
          </div>
          <p>GBP £{price_unit}</p>
          <div className="product-amount">
            <Stepper
              productData={productData}
              onAmountChange={onAmountChange}
            />
            <Form.Select
              aria-label="Default select example"
              placeholder="Choose the quantity"
            >
              <option value="1">Each</option>
              <option value="2">Box</option>
              <option value="3">Kg</option>
            </Form.Select>
          </div>
        </div>
      </div>
      <div className="promo">
        <h4>Promo price</h4>
        <h5>£20.9 Bag</h5>
        <Form.Check aria-label="option 1" />
      </div>
    </section>
  );
}

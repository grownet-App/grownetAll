import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import css from "../css/products.css";
import { Icon } from "@iconify/react";
import Stepper from "../components/Stepper/Stepper";
import { useFavoritesStore } from "../store/favoritesStore";

export default function ProductCard({ id }) {
  const [counter, setCounter] = useState(0);
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id);

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
        <img src="https://images.heb.com/is/image/HEBGrocery/002599549-1" />
        <div>
          <div className="titlle-products">
            <h1>Avocado</h1>
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
          <p>GBP $12</p>
          <div className="product-amount">
            <Stepper counter={counter} setCounter={setCounter} />
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
        <h5>$20.9 Bag</h5>
        <Form.Check aria-label="option 1" />
      </div>
    </section>
  );
}

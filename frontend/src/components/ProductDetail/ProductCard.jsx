import { Icon } from "@iconify/react";
import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/products.css";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import Stepper from "../Stepper/Stepper";

export default function ProductCard({
  productData,
  onAmountChange,
  onVolumeChange,
}) {
  const { id, name, image, priceWithTax, volume } = productData;
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

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    onVolumeChange(id, newVolume);
    console.log(`Selected volume for ${name}: ${newVolume}`);
    console.log(`Selected price for ${name}: ${priceWithTax}`);
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
          <p>GBP £{priceWithTax.toFixed(2)}</p>
          <div className="product-amount">
            <Stepper
              productData={productData}
              onAmountChange={onAmountChange}
            />
            <Form.Select
              aria-label="Select Volume"
              value={volume}
              onChange={handleVolumeChange}
            >
              <option value="Unit">Unit</option>
              <option value="Box">Box</option>
              <option value="Kg">Kg</option>
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

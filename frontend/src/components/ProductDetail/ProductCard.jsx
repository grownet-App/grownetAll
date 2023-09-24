import { Icon } from "@iconify/react";
import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/products.css";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import Stepper from "../Stepper/Stepper";

export default function ProductCard({
  productData,
  onAmountChange,
  onUomChange,
}) {
  const { id, name, image, prices, priceWithTax, uomToPay } = productData;
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id, name, image);
  const urlImg =
  "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
const selectedUom = prices.find((price) => price.nameUoms === uomToPay);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      console.log("remove the ", id);
      removeFavorite(id);
    } else {
      console.log("add the ", id);
      addFavorite(id);
    }
  };

  const handleUomToPayChange = (event) => {
    const newUomToPay = event.target.value;
    onUomChange(id, newUomToPay);
    console.log(`Selected uomtopay for ${name}: ${newUomToPay}`);
    console.log(`Selected price for ${name}: ${priceWithTax}`);
  };

  return (
    <section className="products">
      <div className="elements">
        <img src={ urlImg + image} alt={"image " + name} />
        <div>
          <div className="titlle-products">
            <h1>{name} - {selectedUom ? selectedUom.name : prices[0].name} </h1>
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
          <p>GBP £{priceWithTax ? priceWithTax : prices[0].priceWithTax }</p>
          <div className="product-amount">
            <Stepper
              productData={productData}
              onAmountChange={onAmountChange}
            />
            <Form.Select
              aria-label="Select UomToPay"
              value={uomToPay}
              onChange={handleUomToPayChange}
            >
              {prices.map((price) => (
                <option key={price.nameUoms} value={price.nameUoms}>
                  {price.nameUoms}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>
      </div>
      {/* TODO INTEGRAR LUEGO LAS PROMO, POR AHORA NO SE USA */}
      {/* <div className="promo">
        <h4>Promo price</h4>
        <h5>£20.9 Bag</h5>
        <Form.Check aria-label="option 1" />
      </div> */}
    </section>
  );
}

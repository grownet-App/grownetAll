import { Icon } from "@iconify/react";
import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/products.css";
import Stepper from "../Stepper/Stepper";
import useOrderStore from "../../store/useOrderStore";
import useTokenStore from "../../store/useTokenStore";
import axios from "axios";
import { useState } from "react";
import { addFavorite } from "../../config/urls.config";
import { useEffect } from "react";

export default function ProductCard({
  productData,
  onAmountChange,
  onUomChange,
  fetchFavorites,
}) {
  const counter = 0;
  const {
    id,
    name,
    image,
    prices,
    priceWithTax,
    uomToPay,
    idUomToPay,
    active,
  } = productData;
  const { selectedSupplier, selectedRestaurant } = useOrderStore();

  const [isFavorite, setIsFavorite] = useState(active === 1);
  const [isFavoritePending, setIsFavoritePending] = useState(false);

  const { token } = useTokenStore();
  const urlImg =
    "https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/";
  const selectedUom = prices.find((price) => price.nameUoms === uomToPay);

  const handleToggleFavorite = async () => {
    if (isFavoritePending) return;

    try {
      setIsFavoritePending(true);
      const newFavoriteState = !isFavorite;

      setIsFavorite(newFavoriteState);

      const requestData = {
        customer_id: selectedRestaurant.accountNumber,
        product_id: productData.id,
        supplier_id: selectedSupplier.id,
        active: newFavoriteState ? 1 : 0,
      };

      const response = await axios.post(addFavorite, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsFavoritePending(false);
      console.log("Toggle favorite response:", response.data);
      await fetchFavorites();
    } catch (error) {
      setIsFavorite(!isFavorite);
      setIsFavoritePending(false);
      console.error("Error al gestionar el favorito:", error);
    }
  };

  const handleUomToPayChange = (event) => {
    const newUomToPay = event.target.value;
    onUomChange(id, newUomToPay);
  };

  return (
    <section className="products">
      <div className="elements">
        <img src={urlImg + image} alt={"image " + name} />
        <div>
          <div className="titlle-products">
            <div>
              <h1>{name}</h1>
              <p className="product-selectUom">{selectedUom.name} </p>
            </div>

            <div className="pr">
              <Icon
                className="fav-icon"
                icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
                onClick={handleToggleFavorite}
                color="#62C471"
                size={35}
                underlaycolor="transparent"
              ></Icon>
            </div>
          </div>
          <p>£{selectedUom.priceWithTax}</p>
          <div className="product-amount">
            <Stepper
              productData={productData}
              onAmountChange={onAmountChange}
              counter={counter}
            />
            <Form.Select
              aria-label="Select UomToPay"
              value={uomToPay}
              onChange={handleUomToPayChange}
            >
              {prices.map((price) => (
                <option key={price.id} value={price.nameUoms}>
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

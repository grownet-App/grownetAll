import { Icon } from "@iconify/react";
import React from "react";
import Form from "react-bootstrap/Form";
import "../../css/products.css";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import Stepper from "../Stepper/Stepper";
import axios from "axios";
import { addRemoveFavorite } from "../../config/urls.config";
import useOrderStore from "../../store/useOrderStore";
import useTokenStore from "../../store/useTokenStore";

export default function ProductCard({
  productData,
  onAmountChange,
  onUomChange,
}) {
  const counter = 0;
  const { id, name, image, prices, priceWithTax, uomToPay, idUomToPay } = productData;
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const { token } = useTokenStore();
  const { selectedRestaurant, selectedSupplier } = useOrderStore();
  const isFavorite = favorites.includes(id, name, image);
  const urlImg =
    "https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/";
  const selectedUom = prices.find((price) => price.nameUoms === uomToPay);

  /* const toggleFavorite = async (product_id) => {
    try {
      const favoritesData = {
        customer_id: selectedRestaurant.accountNumber,
        product_id: product_id,
        supplier_id: selectedSupplier.id,
        active: 0,
      };
      const response = await axios.post( addRemoveFavorite, favoritesData);
      console.log("Éxito", response.data);
      } catch (error) {
      console.log("Error al modificar el favorito", error);
    }
  }; */

  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
      console.log("remove the ", id);
      removeFavorite(id);
      const removeData = {
          customer_id: selectedRestaurant.accountNumber,
          product_id: id,
          supplier_id: selectedSupplier.id,
          active: 0,
        };
        const response = await axios.post( addRemoveFavorite, removeData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log("Se eliminó el favorito de la BD", response.data);
      } else {
      console.log("add the ", id);
      addFavorite(id);

        const addData = {
          customer_id: selectedRestaurant.accountNumber,
          product_id: id,
          supplier_id: selectedSupplier.id,
          active: 1,
        };
        const response = await axios.post( addRemoveFavorite, addData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Éxito al agregar favorito", response.data);
        } 
      } catch (error) {
        console.log("Error al agregar el favorito", error);
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

import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Favorites(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    console.log("Agrego a favoritos" + id);
    setIsFavorite(true);
  };
  const removeFavorite = () => {
    console.log("Removio de favoritos" + id);
    setIsFavorite(false);
  };
  return (
    <div id={products.id} className="products">
      <div className="pr">
        {console.log("este es el id" + id)}
        <img src="http://placekitten.com/g/140/140" className="img-product" />
        <Icon
          className="icono"
          icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
          onClick={isFavorite ? removeFavorite : addFavorite}
          color="#62C471"
          size={35}
          underlayColor="transparent"
        ></Icon>
      </div>
      <div className="text-product">
        <h1>Avocado</h1>
        <p>GBP $12</p>
        <div className="product-amount">
          <input
            min="1"
            max="100"
            type="number"
            id="typeNumber"
            class="form-control"
            placeholder="Unit"
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
  );
}

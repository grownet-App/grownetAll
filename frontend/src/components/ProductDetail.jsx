import React from "react";
import { Icon } from "@iconify/react";
import Form from "react-bootstrap/Form";
import Stepper from "./Stepper/Stepper";

export default function ProductDetail(props) {
  return (
    <div>
      <div className="product-detail">
        <h3>{props.nameProduct}</h3>
        <div className="product-detail">
          <h3>€{props.totalItemToPay}</h3>
          <Icon id="trash" icon="ph:trash" />
        </div>
      </div>
      <div className="product-detail">
        <Stepper counter={props.counter} setCounter={props.setCounter} />
        <Form.Select
          aria-label="Default select example"
          placeholder="Choose the quantity"
        >
          <option value="1">Each</option>
          <option value="2">Box</option>
          <option value="3">Kg</option>
        </Form.Select>
      </div>
      <p>{props.counter} Box/Boxes</p>
    </div>
  );
}

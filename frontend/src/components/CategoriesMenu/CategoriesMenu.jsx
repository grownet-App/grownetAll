import { Icon } from "@iconify/react";
import React from "react";
import broccoli_img from "../../img/broccoli_img.png";
import css from "./categoriesMenu.css";

export default function CategoriesMenu({ showFavorites, toggleShowFavorites }) {
  return (
    <section className="menu-categories me-auto">
      <div className="contenido">
        <div className="carousel-categ">
          {showFavorites ? (
            <button className="card-products" onClick={toggleShowFavorites}>
              <img src={broccoli_img} />
              <h6>All Products</h6>
            </button>
          ) : (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="solar:heart-bold" className="fav" />
              <h6>Favorites</h6>
            </button>
          )}
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Vegetables</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Fruit</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Bread</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Meat</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Fruit</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Fruit</h6>
          </button>
          <button className="card-products">
            <img src={broccoli_img} />
            <h6>Fruit</h6>
          </button>
        </div>
      </div>
      <a className="bttn btn-primary" href="/details">
        Continue
      </a>
    </section>
  );
}

import { Icon } from "@iconify/react";
import React from "react";
import broccoli_img from "../../img/broccoli_img.png";
import bread_img from "../../img/bread_img.png";
import frozen_img from "../../img/frozen_img.png";
import meat_img from "../../img/meat_img.png";
import prepared_img from "../../img/prepared_img.png";
import mushrooms_img from "../../img/mushrooms_img.png";
import banana_img from "../../img/banana_img.png";
import "./categoriesMenu.css";

export default function CategoriesMenu({
  showFavorites,
  toggleShowFavorites,
  categories,
  filterCategory
}) {
  const categoriesImg = [
    { name: "Vegetables", image: { broccoli_img } },
    { name: "Fruit", image: { banana_img } },
    { name: "Bread", image: { bread_img } },
    { name: "Frozen", image: { frozen_img } },
    { name: "Meat", image: { meat_img } },
    { name: "Prepared", image: { prepared_img } },
    { name: "Mushrooms", image: { mushrooms_img } },
  ];
  return (
    <section className="menu-categories me-auto">
      <div className="contenido">
        <div className="carousel-categ">
          {showFavorites ? (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="fluent-emoji:basket" className="fav" />
              <h6>All</h6>
            </button>
          ) : (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="solar:heart-bold" className="fav" />
              <h6>Favorites</h6>
            </button>
          )}
          {categories.map(category => (
            <button
            type="button"
              className="card-products"
              onClick={() => filterCategory(category)}
              key={category}
            >
              <img src={broccoli_img} alt="image categoria" />
              <h6>{category}</h6>
            </button>
          ))}

          {/*<button className="card-products">
            <img src={banana_img} />
            <h6>Fruit</h6>
          </button>
          <button className="card-products">
            <img src={bread_img} />
            <h6>Bread</h6>
          </button>
          <button className="card-products">
            <img src={frozen_img} />
            <h6>Frozen</h6>
          </button>
          <button className="card-products">
            <img src={meat_img} />
            <h6>Meat</h6>
          </button>
          <button className="card-products">
            <img src={prepared_img} />
            <h6>Prepared</h6>
          </button>
          <button className="card-products">
            <img src={mushrooms_img} />
            <h6>Mushrooms</h6>
          </button>*/}
        </div>
      </div>
      <a className="bttn btn-primary" href="/details">
        Continue
      </a>
    </section>
  );
}

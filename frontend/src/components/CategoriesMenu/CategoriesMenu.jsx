import { Icon } from "@iconify/react";
import React, { useState } from "react";
import broccoli_img from "../../img/broccoli_img.png";
import bread_img from "../../img/bread_img.png";
import frozen_img from "../../img/frozen_img.png";
import meat_img from "../../img/meat_img.png";
import prepared_img from "../../img/prepared_img.png";
import mushrooms_img from "../../img/mushrooms_img.png";
import banana_img from "../../img/banana_img.png";
import "./categoriesMenu.css";

export default function CategoriesMenu({showFavorites, toggleShowFavorites, categories, filterCategory}) {
  
  const categoriesImg = [
    {id: 1, name: "Vegetable", image: broccoli_img},
    {id: 2, name: "Fruit", image: banana_img},
    { id: 3, name: "Bread", image: bread_img },
    { id: 4, name: "Frozen", image: frozen_img },
    { id: 5, name: "Meat", image: meat_img},
    { id: 5, name: "Prepared", image: prepared_img },
    { id: 6, name: "Mushrooms", image: mushrooms_img },
  ];

  const [allCategories, setAllCategories] = useState(categoriesImg);

  return (
    <section className="menu-categories me-auto">
      <div className="contenido">
        <div className="carousel-categ">
          {showFavorites ? (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="icon-park-solid:back" className="fav" />
              <h6>Go back</h6>
            </button>
          ) : (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="solar:heart-bold" className="fav" />
              <h6>Favorites</h6>
            </button>
          )}
          {categories.map((category) => (
            <button
              type="button"
              className="card-products"
              onClick={() => filterCategory(category)}
              key={category}
            >
              {category==="All" &&(
                <Icon icon="fluent-emoji:basket" className="fav" />
              )}
              {allCategories.map((arrayCateg) => (
                <>
                  {category === arrayCateg.name && (
                    <>
                      <img src={arrayCateg.image} alt={arrayCateg.name}/>
                    </>
                  )}
                </>
              ))}

              <h6>{category}</h6>
            </button>
          ))}

          {/*<button classNaxme="card-products">
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

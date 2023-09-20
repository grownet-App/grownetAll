import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import banana_img from "../../img/banana_img.png";
import bread_img from "../../img/bread_img.png";
import broccoli_img from "../../img/broccoli_img.png";
import frozen_img from "../../img/frozen_img.png";
import meat_img from "../../img/meat_img.png";
import mushrooms_img from "../../img/mushrooms_img.png";
import prepared_img from "../../img/prepared_img.png";
import "./categoriesMenu.css";

export default function CategoriesMenu({
  showFavorites,
  toggleShowFavorites,
  categories,
  filterCategory,
}) {
  const { t } = useTranslation();
  const categoriesImg = [
    { id: 1, name: "Vegetable", image: broccoli_img },
    { id: 2, name: "Fruit", image: banana_img },
    { id: 3, name: "Bread", image: bread_img },
    { id: 4, name: "Frozen", image: frozen_img },
    { id: 5, name: "Meat", image: meat_img },
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
              <h6>{t("categoriesMenu.goBack")}</h6>
            </button>
          ) : (
            <button className="card-products" onClick={toggleShowFavorites}>
              <Icon icon="solar:heart-bold" className="fav" />
              <h6>{t("categoriesMenu.favorites")}</h6>
            </button>
          )}
          {categories.map((category) => (
            <button
              type="button"
              className="card-products"
              onClick={() => filterCategory(category)}
              key={category}
            >
              {category === "All" && (
                <Icon icon="fluent-emoji:basket" className="fav" />
              )}
              {allCategories.map((arrayCateg) => (
                <>
                  {category === arrayCateg.name && (
                    <>
                      <img src={arrayCateg.image} alt={arrayCateg.name} />
                    </>
                  )}
                </>
              ))}

              <h6>{category}</h6>
            </button>
          ))}
        </div>
      </div>
      <Link className="bttn btn-primary" to="/details">
        {t("categoriesMenu.continue")}
      </Link>
    </section>
  );
}

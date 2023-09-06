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

export default function CategoriesMenu({
  showFavorites,
  toggleShowFavorites,
  categories,
  filterCategory,
}) {
  const categoriesImg = [
    { id:"1",name: "Vegetables", image: "http://placekitten.com/g/200/300" },
    { id:"2",name: "Fruit", image: "https://img.freepik.com/free-photo/many-different-berries-form-frame-white-background_485709-54.jpg?w=360" },
    { id:"3",name: "Bread", image:{bread_img} },
    { id:"4",name: "Frozen", image: { frozen_img } },
    { id:"5",name: "Meat", image: { meat_img } },
    { id:"6",name: "Prepared", image: { prepared_img } },
    { id:"7",name: "Mushrooms", image: { mushrooms_img } },
  ];
  const [categoriesArray, setCategoriesArray] = useState(categoriesImg);
  const[showImage, setShowImage]=useState(true);
  console.log(categories);
  
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
          {categories.map((category) => (
            <button
              type="button"
              className="card-products"
              onClick={() => filterCategory(category)}
              key={category}
            >

          {categoriesArray.map((article) => (
                <>
                {
                  category === article.name && <img src={article.image} alt={article.name}/>
                }
                  {showImage ? ( <img src={article.image} alt={article.name}/>) : (<></>)}
                             
             </> ))}
            
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

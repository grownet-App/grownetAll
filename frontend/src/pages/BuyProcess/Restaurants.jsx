import React, { useEffect, useState } from "react";
import "../../css/restaurants.css";
import axios from "axios";
import { Icon } from "@iconify/react";
import { availableRestaurants } from "../../config/urls.config";
import useTokenStore from "../../store/useTokenStore";

export default function Restaurants() {
  //TODO QUITAR ESTA URL CUANDO EL BACKEND HAYA CARGADO EL LINK DE LA IMG
    const urlImg = "http://5.161.211.8:88/"
    const [restaurants, setRestaurants] = useState([]);
    const { token } = useTokenStore();
  
    useEffect(() => {  
      axios.get(availableRestaurants, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setRestaurants(response.data['customersChef ']);
          //TODO ELIMINAR ESTE CONSOLE LOG DE DATOS DEL RESTAURANTE
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener los restaurantes:', error);
        });
    }, [token]);
  
    return (
      <section className="restaurants">
      <h1 className="tittle-restaurants">Choose your restaurant</h1>
      {restaurants.map((restaurant) => (
        <a className="bttn-categ" href="/suppliers" key={restaurant.account_number}>
          <div className="text-categ" key={restaurant.account_number}>
            <h2>
              {restaurant.account_name}
            </h2>
            <p>{restaurant.address}</p>
          </div>
          {/* TODO ELIMINAR ESTE P, ES SOLO PARA VER EL LINK DE LA IMAGE */}
          {/* <p> {urlImg + restaurant.image} </p> */}
          <img src={urlImg + restaurant.image} />

        </a>
      ))}
      <a className="bttn btn-primary" href="addRestaurants"id="bttn-restaurant">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add restaurant
      </a>
    </section>
    );
  };

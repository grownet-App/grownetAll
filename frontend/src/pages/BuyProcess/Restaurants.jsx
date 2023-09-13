import React, { useEffect, useState } from "react";
import "../../css/restaurants.css";
import axios from "axios";
import { Icon } from "@iconify/react";
import { availableRestaurants } from "../../config/urls.config";
import useTokenStore from "../../store/useTokenStore";
import { Link } from "react-router-dom";

export default function Restaurants() {
  //TODO QUITAR ESTA URL CUANDO EL BACKEND HAYA CARGADO EL LINK DE LA IMG
    const urlImg = "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
    const [restaurants, setRestaurants] = useState([]);
    const { token } = useTokenStore(); 
  
    useEffect(() => {  
      axios.get(availableRestaurants, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setRestaurants(response.data.customersChef);
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
        <Link className="bttn-categ" to="/providers" key={restaurant.account_number}>
          <div className="text-categ" key={restaurant.account_number}>
            <h2>
              {restaurant.account_name}
            </h2>
            <p>{restaurant.address}</p>
          </div>
          <img src={urlImg + restaurant.image} alt={restaurant.account_name} />
        </Link>
      ))}
      <Link className="bttn btn-primary" to="addRestaurants"id="bttn-restaurant">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        Add restaurant
      </Link>
    </section>
    );
  };

import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { availableRestaurants } from "../../config/urls.config";
import "../../css/restaurants.css";
import backgroundRestaurants from "../../img/backgroundRestaurants.png";
import useOrderStore from "../../store/useOrderStore";
import useTokenStore from "../../store/useTokenStore";

export default function Restaurants() {
  const { t } = useTranslation();
  const urlImg =
    "https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/";
  const { token } = useTokenStore();
  const { restaurants, setRestaurants, setSelectedRestaurant } =
    useOrderStore();

  useEffect(() => {
    axios
      .get(availableRestaurants, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSelectedRestaurant(null);
        setRestaurants(response.data.customersChef);
      })
      .catch((error) => {
        console.error("Error al obtener los restaurantes:", error);
      });
  }, [setRestaurants, setSelectedRestaurant]);

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <section className="restaurants">
      <h1 className="tittle-restaurants">
        {" "}
        {t("restaurants.chooseRestaurant")}{" "}
      </h1>
      {restaurants.map((restaurant) => (
        <Link
          id="background-boton"
          className="bttn-categ"
          style={{ backgroundImage: `url(${backgroundRestaurants})` }}
          onClick={() => handleRestaurantSelect(restaurant)}
          to={"/suppliers"}
          key={restaurant.accountNumber}
        >
          <img src={urlImg + restaurant.image} alt={restaurant.accountName} />
          <div className="text-categ">
            <p>{restaurant.address}</p>
          </div>
        </Link>
      ))}
      <Link className="bttn btn-primary" id="my-intercom">
        <Icon className="icon-plus" icon="simple-line-icons:plus" />
        {t("restaurants.addRestaurant")}
      </Link>
      <div className="space-menu"></div>
    </section>
  );
}

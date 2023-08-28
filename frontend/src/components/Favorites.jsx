import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Favorites(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    console.log("Agrego a favoritos");
    setIsFavorite(true);
  };
  const removeFavorite = () => {
    console.log("Removio de favoritos");
    setIsFavorite(false);
  };
  return (
    <Icon
      className="heart-icon"
      icon={isFavorite ? "ph:heart-fill" : "ph:heart"}
      onClick={isFavorite ? removeFavorite : addFavorite}
      color="#62C471"
      size={35}
      underlayColor="transparent"
    ></Icon>
  );
}

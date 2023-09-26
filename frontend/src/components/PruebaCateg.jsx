import React, { useState, useEffect } from "react";
import { allCategories } from "../config/urls.config";
import axios from "axios";
import useTokenStore from "../store/useTokenStore";
export default function PruebaCateg() {
  const { token } = useTokenStore();
  useEffect(() => {
    axios
      .get(allCategories, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCategoriesApi(response.data.categories);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, [token]);
  const [categoriesApi, setCategoriesApi] = useState();

  return (
    <section className="menu-categories me-auto">
      {categoriesApi.map((categ) => (
        <p>{categ.name}</p>
      ))}
    </section>
  );
}

import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import Favorites from "../../components/Favorites";
import ProductCard from "../../components/ProductDetail/ProductCard";
import ProductSearcher from "../../components/ProductSearcher/ProductSearcher";
import ProductsFind from "../../components/ProductSearcher/ProductsFind";
import { supplierProducts } from "../../config/urls.config";
import "../../css/products.css";
import data from "../../data";
import useOrderStore from "../../store/useOrderStore";
import useTokenStore from "../../store/useTokenStore";

// TODO LLAMADO A TODAS LAS CATEGORIAS PARA EL FILTER
/* useEffect(() => {
  axios
    .get(allCategories, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos de la API:", error);
    });
}, [token]); */

//TODO MODIFICARLO PARA LLAMAR SOLO LA CATEGORIA SELECCIONADA
/* 
  useEffect(() => {
    axios
      .get(selectedCategory, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, [token]); */
export default function Products(props) {
  const { t } = useTranslation();
  const { token, countryCode } = useTokenStore();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState([]);
  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(products);
  const { articlesToPay, selectedSupplier, selectedRestaurant } = useOrderStore();
  useEffect(() => {
    if (articlesToPay.length > 0) {
      setArticles(articlesToPay);
      setProducts(articlesToPay);
      console.log("TRAJO ALGO DEL STORAGE", articlesToPay);
    } else {
      const requestBody = {
        id : selectedSupplier.id,
        country: countryCode,
        accountNumber: selectedRestaurant.accountNumber,
      }
      axios
        .post(`${supplierProducts}`, requestBody, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Este es account number" , selectedSupplier.id)
          // Muestra los productos en la consola
          console.log("Productos del proveedor:", response.data);
          console.log("NEW SELECTED SUPPLIER ID", selectedSupplier.id);
          const defaultProducts = response.data.products;
          const productsWithTax = defaultProducts
          .filter((product) => product.prices.some((price) => price.nameUoms))
          .map((product) => ({
            ...product,
            amount: 0,
            uomToPay: product.prices[0].nameUoms,
            prices: product.prices.map((price) => ({
              ...price,
              priceWithTax: price.price + price.price * product.tax,
            })),
          }));
          useOrderStore.setState({ articlesToPay: productsWithTax });
          setArticles(productsWithTax);
          setProducts(productsWithTax);
          console.log("NO TRAJO NADA DEL STORAGE");
          console.log("PRODUCTOS CON TAX", productsWithTax);
        })
        .catch((error) => {
          console.error("Error al obtener los productos del proveedor:", error);
        });
    }
  }, [selectedSupplier]);
  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  const filterCategory = (category) => {
    if (category === "All") {
      setArticles(products);
      setShowFavorites(false);
      return;
    }
    const filteredData = products.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
    console.log(filteredData);
  };
  // CAMBIO DE CANTIDAD DE ARTICULOS
  const handleAmountChange = (productId, newAmount) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId ? { ...article, amount: newAmount } : article
      )
    );
    const updatedArticlesToPay = articles.map((article) =>
      article.id === productId ? { ...article, amount: newAmount } : article
    );
    useOrderStore.setState({ articlesToPay: updatedArticlesToPay });
  };

  // CAMBIO DE UOMN DE ARTICULOS (UNIT, BOX, KG)
  const handleUomChange = (productId, newUomToPay) => {
    const updatedArticlesToPay = articles.map((article) => {
      if (article.id === productId) {
        const selectedPrice = article.prices.find(
          (price) => price.nameUoms === newUomToPay
        );
        return {
          ...article,
          uomToPay: newUomToPay,
          priceWithTax: selectedPrice.priceWithTax,
        };
      }
      return article;
    });
    setArticles(updatedArticlesToPay);
    useOrderStore.setState({ articlesToPay: updatedArticlesToPay });
  };

  console.log("THIS IS THE SELECTEDSUPPLIER", selectedSupplier);

  return (
    <section className="products">
      <div className="tittle-products">
        <Link to="/suppliers">
          <Icon src="google.com" icon="ic:round-arrow-back" className="arrow" />
        </Link>
        <h1 className="tittle-products">{t("products.title")}</h1>
      </div>
      <ProductSearcher
        products={products}
        setShowSearchResults={setShowSearchResults}
        showSearchResults={showSearchResults}
      />
      {showSearchResults ? (
        <ProductsFind
          productsData={products}
          onAmountChange={handleAmountChange}
          onUomChange={handleUomChange}
        />
      ) : (
        <>
          {showFavorites ? (
            <Favorites
              productsData={products}
              onAmountChange={handleAmountChange}
              onUomChange={handleUomChange}
            />
          ) : (
            <>
              {articles.map((article) => (
                <>
                  <ProductCard
                    key={article.id}
                    productData={article}
                    onAmountChange={handleAmountChange}
                    onUomChange={handleUomChange}
                  ></ProductCard>
                </>
              ))}
            </>
          )}
        </>
      )}
      <div className="space-CatgMenu"></div>
      <CategoriesMenu
        showFavorites={showFavorites}
        toggleShowFavorites={toggleShowFavorites}
        categories={categories}
        filterCategory={filterCategory}
      />
    </section>
  );
}
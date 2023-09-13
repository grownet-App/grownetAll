import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import Favorites from "../../components/Favorites";
import ProductCard from "../../components/ProductDetail/ProductCard";
import ProductSearcher from "../../components/ProductSearcher/ProductSearcher";
import ProductsFind from "../../components/ProductSearcher/ProductsFind";
import "../../css/products.css";
import data from "../../data"
import { Link } from "react-router-dom";

export default function Products(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState([]);
  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(products);

  useEffect(() => {
    const storedArticlesToPay = JSON.parse(
      localStorage.getItem("articlesToPay")
    );
    console.log("ESTO TRAE EL LOCAL STORAGE:", storedArticlesToPay);
    if (storedArticlesToPay) {
      setArticles(storedArticlesToPay);
      setProducts(storedArticlesToPay);
      console.log("TRAJO ALGO DEL STORAGE");
    } else {
      //TODO Reemplazar estos products por los que vienen de la API
      const defaultProducts = [
        {
          id: 1,
          name: "Red pepper",
          image:
            "https://cultivovital.com/wp-content/uploads/2020/11/pimiento-rojo-png-2.png",
          price_unit: 1.8,
          price_box: 180,
          price_kg: 18,
          amount: 0,
          category: "Vegetable",
          tax: 0.13,
          volume: "Unit",
        },
        {
          id: 2,
          name: "Bananas",
          image:
            "https://purepng.com/public/uploads/large/purepng.com-bananafruitsyellowfruit-981524754330lspp8.png",
          price_unit: 1.2,
          price_box: 120,
          price_kg: 12,
          amount: 0,
          category: "Fruit",
          tax: 0.21,
          volume: "Unit",
        },
        {
          id: 3,
          name: "Broccoli",
          image: "https://pngimg.com/uploads/broccoli/broccoli_PNG72970.png",
          price_unit: 1.6,
          price_box: 160,
          price_kg: 16,
          amount: 0,
          category: "Vegetable",
          tax: 0.05,
          volume: "Unit",
        },
        {
          id: 4,
          name: "Strawberry",
          image:
            "https://www.pngall.com/wp-content/uploads/2016/05/Strawberry-Download-PNG.png",
          price_unit: 1.7,
          price_box: 170,
          price_kg: 17,
          amount: 0,
          category: "Fruit",
          tax: 0.1,
          volume: "Unit",
        },
        {
          id: 5,
          name: "Spinach",
          image: "https://pngimg.com/uploads/spinach/spinach_PNG19.png",
          price_unit: 1.9,
          price_box: 190,
          price_kg: 19,
          amount: 0,
          category: "Frozen",
          tax: 0.04,
          volume: "Unit",
        },
        {
          id: 6,
          name: "Carrot",
          image:
            "https://www.pngkit.com/png/full/344-3446979_zanahorias-png-imagenes-de-zanahoria-png.png",
          price_unit: 1.2,
          price_box: 120,
          price_kg: 12,
          amount: 0,
          category: "Bread",
          tax: 0.23,
          volume: "Unit",
        },
        {
          id: 7,
          name: "Avocado",
          image: "https://images.heb.com/is/image/HEBGrocery/002599549-1",
          price_unit: 1.1,
          price_box: 110,
          price_kg: 11,
          amount: 0,
          category: "Vegetable",
          tax: 0.2,
          volume: "Unit",
        },
        {
          id: 8,
          name: "Peas",
          image:
            "https://domiplaza.com/wp-content/uploads/2019/03/arveja_desgranada_.png",
          price_unit: 2.0,
          price_box: 200,
          price_kg: 20,
          amount: 0,
          category: "Vegetable",
          tax: 0.06,
          volume: "Unit",
        },
        {
          id: 9,
          name: "Pineapple",
          image:
            "https://freepngimg.com/download/pineapple/2-2-pineapple-picture.png",
          price_unit: 1.0,
          price_box: 100,
          price_kg: 10,
          amount: 0,
          category: "Fruit",
          tax: 0.2,
          volume: "Unit",
        },
        {
          id: 10,
          name: "Apple",
          image:
            "https://static.vecteezy.com/system/resources/previews/019/818/535/original/group-of-red-apple-fruits-png.png",
          price_unit: 1.8,
          price_box: 180,
          price_kg: 18,
          amount: 0,
          category: "Fruit",
          tax: 0.23,
          volume: "Unit",
        },
      ];
      const productsWithTax = defaultProducts.map((article) => ({
        ...article,
        priceWithTax: article.price_unit + article.price_unit * article.tax,
      }));
      setArticles(productsWithTax);
      setProducts(productsWithTax);
      console.log("NO TRAJO NADA DEL STORAGE");
    }
  }, []);

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
    localStorage.setItem("articlesToPay", JSON.stringify(updatedArticlesToPay));
    updatedArticlesToPay.forEach((article) =>
      console.log(
        `ID: ${article.id} - Amount: ${article.amount} - Name: ${article.name} - Volume: ${article.volume}`
      )
    );
  };

  // CAMBIO DE VOLUMEN DE ARTICULOS (UNIT, BOX, KG)
  const handleVolumeChange = (productId, newVolume) => {
    const updatedArticlesToPay = articles.map((article) => {
      if (article.id === productId) {
        let updatedPrice = article.price_unit; // Default to price_unit
        if (newVolume === "Box") {
          updatedPrice = article.price_box;
        } else if (newVolume === "Kg") {
          updatedPrice = article.price_kg;
        }
        return {
          ...article,
          volume: newVolume,
          priceWithTax: updatedPrice + updatedPrice * article.tax,
        };
      }
      return article;
    });

    setArticles(updatedArticlesToPay);
    localStorage.setItem("articlesToPay", JSON.stringify(updatedArticlesToPay));
    updatedArticlesToPay.forEach((article) =>
      console.log(
        `ID: ${article.id} - Amount: ${article.amount} - Name: ${article.name} - Volume: ${article.volume}`
      )
    );
  };

  return (
    <section className="products">
      <div className="tittle-products">
        <Link to="/providers">
          <Icon
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </Link>
        <h1 className="tittle-products">Make your order</h1>
      </div>
      <ProductSearcher
        products={products}
        setShowSearchResults={setShowSearchResults}
        showSearchResults={showSearchResults}
      />
      {showSearchResults ? (
        <ProductsFind productsData={products} onAmountChange={handleAmountChange}
        onVolumeChange={handleVolumeChange} />
      ) : (
        <>
          {showFavorites ? (
            <Favorites productsData={products} onAmountChange={handleAmountChange}
            onVolumeChange={handleVolumeChange} />
          ) : (
            <>
              {articles.map((article) => (
                <>
                  <ProductCard
                    key={article.id}
                    productData={article}
                    onAmountChange={handleAmountChange}
                    onVolumeChange={handleVolumeChange}
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

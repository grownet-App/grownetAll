import { Icon } from "@iconify/react";
import React, { useState } from "react";
import "../../css/products.css";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import Favorites from "../../components/Favorites";
import ProductCard from "../../components/ProductCard";
import ProductSearcher from "../../components/ProductSearcher/ProductSearcher";
import ProductsFind from "../../components/ProductSearcher/ProductsFind";

export default function Products(props) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false); 

  const toggleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  //TODO Reemplazar estos products por los que vienen de la API
  const products = [
    { id: 1, name: "Avocado",image:"https://images.heb.com/is/image/HEBGrocery/002599549-1", category:"Vegetable" },
    { id: 2, name: "Broccoli",image:"https://pngimg.com/uploads/broccoli/broccoli_PNG72970.png", category:"Vegetable" },
    { id: 3, name: "Bananas",image:"https://purepng.com/public/uploads/large/purepng.com-bananafruitsyellowfruit-981524754330lspp8.png", category:"Fruit" },
    { id: 4, name: "Strawberry",image:"https://www.pngall.com/wp-content/uploads/2016/05/Strawberry-Download-PNG.png", category:"Fruit" },
    { id: 5, name: "Spinach",image:"https://pngimg.com/uploads/spinach/spinach_PNG19.png", category:"Vegetable" },
    { id: 6, name: "Carrot",image:"https://www.pngkit.com/png/full/344-3446979_zanahorias-png-imagenes-de-zanahoria-png.png", category:"Vegetable" },
    { id: 7, name: "Red pepper",image:"https://cultivovital.com/wp-content/uploads/2020/11/pimiento-rojo-png-2.png", category:"Vegetable" },
    { id: 8, name: "Peas",image:"https://domiplaza.com/wp-content/uploads/2019/03/arveja_desgranada_.png", category:"Vegetable" },
    { id: 9, name: "Pineapple",image:"https://freepngimg.com/download/pineapple/2-2-pineapple-picture.png", category:"Fruit" },
    { id: 10, name: "Apple",image:"https://static.vecteezy.com/system/resources/previews/019/818/535/original/group-of-red-apple-fruits-png.png", category:"Fruit"},
  ];
  const allCategories = ['All', ...new Set(products.map(article => article.category)) ];
  const [categories, setCategories] =useState(allCategories);
  const [articles, setArticles] = useState(products);
  const filterCategory = (category) =>{
    if (category==='All') {
      setArticles(products);
      return;
    }
    const filteredData = products.filter(article => article.category === category);
    setArticles(filteredData);
    console.log(filteredData)
  }

  return (
    <section className="products">
      <div className="tittle-products">
        <a href="/suppliers">
          <Icon
            href="https://www.google.com"
            src="google.com"
            icon="ic:round-arrow-back"
            className="arrow"
          />
        </a>
        <h1 className="tittle-products">Make your order</h1>
      </div>

      <ProductSearcher
        products={products}
        setShowSearchResults={setShowSearchResults}
        showSearchResults={showSearchResults}
      />
      {showSearchResults ? (
        <ProductsFind productsData={products}/>
      ) : (
        <>
          {showFavorites ? (
            <Favorites productsData={products}/> 
          ) : (
            <>
              {articles.map((article) => (
                <>
                <ProductCard key={article.id} productData={article} > </ProductCard>
             </> ))}
            </>
          )}
        </>
      )}
      <div className="space-CatgMenu"></div>
      <CategoriesMenu
        showFavorites={showFavorites}
        toggleShowFavorites={toggleShowFavorites} 
       categories={categories} filterCategory={filterCategory} 
      />
    </section>
  );
}

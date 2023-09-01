import closeCircleOutline from "@iconify/icons-eva/close-circle-outline";
import searchIcon from "@iconify/icons-heroicons-outline/search";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
//TODO ORGANIZAR LOS ICONS PARA EL SEARCHER
import useProductStore from "../../store/useProductStore";
import "./productSearcher.css";

function ProductSearcher({
  products,
  setShowSearchResults,
  showSearchResults,
}) {
  const [input, setInput] = useState("");
  const setSearchResults = useProductStore((state) => state.setSearchResults);
  const [searchButtonIcon, setSearchButtonIcon] = useState(searchIcon);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showSearchResults) {
      handleReset();
    } else {
      filterProducts(input);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      filterProducts(input);
    }
  };

  const handleReset = () => {
    setShowSearchResults(false);
    setInput("");
    setSearchResults([]);
    setSearchButtonIcon(searchIcon);
  };

  const filterProducts = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Haz filtrado", filtered);
    setShowSearchResults(true);
    setSearchResults(filtered);
    setSearchButtonIcon(closeCircleOutline);
  };

  return (
    <div className="flex-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search your products"
          className="search-input"
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="search-button">
          <Icon icon={searchButtonIcon} />
        </button>
      </form>
    </div>
  );
}

export default ProductSearcher;

import closeCircleOutline from "@iconify/icons-eva/close-circle-outline";
import searchIcon from "@iconify/icons-heroicons-outline/search";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
//TODO ORGANIZAR LOS ICONS PARA EL SEARCHER
import { useTranslation } from "react-i18next";
import useProductStore from "../../store/useProductStore";
import "./productSearcher.css";

function ProductSearcher({ products, setShowSearchResults, resetInput }) {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const setSearchResults = useProductStore((state) => state.setSearchResults);
  const [searchButtonIcon, setSearchButtonIcon] = useState(searchIcon);

  useEffect(() => {
    handleReset();
  }, [resetInput]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInput(query);

    if (query === "") {
      setShowSearchResults(false);
      setSearchResults([]);
      setSearchButtonIcon(searchIcon);
    } else {
      filterProducts(query);
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
      <form className="search-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={t("productSearcher.placeholder")}
          className="search-input"
        />
        <button type="button" onClick={handleReset} className="search-button">
          <Icon icon={searchButtonIcon} />
        </button>
      </form>
    </div>
  );
}

export default ProductSearcher;

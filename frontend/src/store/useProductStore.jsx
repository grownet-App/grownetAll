import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  filteredProducts: [],
  selectedCategory: "All",
  setSearchResults: (results) => set({ filteredProducts: results }),
  setSelectedCategory: (categorie) => set({ selectedCategorie: categorie }),
}));

export default useProductStore;
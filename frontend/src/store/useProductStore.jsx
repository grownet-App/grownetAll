import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  filteredProducts: [],
  setSearchResults: (results) => set({ filteredProducts: results }),
}));

export default useProductStore;
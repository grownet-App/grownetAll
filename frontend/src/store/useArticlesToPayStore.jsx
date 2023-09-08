import { create } from "zustand";

const useArticlesToPayStore = create((set) => ({
  articlesToPay: [],
  setArticlesToPay: (articles) => set({ articlesToPay: articles }),
}));

export default useArticlesToPayStore;
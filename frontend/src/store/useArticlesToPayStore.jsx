import { create } from "zustand";

const useArticlesToPayStore = create((set) => ({
  articlesToPay: [],
  totalNet: 0,
  totalTaxes: 0,
  totalToPay: 0,
  setArticlesToPay: (articles) => set({ articlesToPay: articles }),
  setTotalNet: (newNet) => set({ totalNet: newNet }),
  setTotalTaxes: (newTaxes) => set({ totalTaxes: newTaxes }),
  setTotalToPay: (newTotal) => set({ totalToPay: newTotal }),
}));

export default useArticlesToPayStore;
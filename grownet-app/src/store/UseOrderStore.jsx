import { create } from 'zustand'

const useOrderStore = create((set) => ({
  restaurants: [],
  selectedRestaurant: null,
  suppliers: [],
  selectedSuppliers: null,
  articlesToPay: [],
  totalNet: 0,
  totalTaxes: 0,
  totalToPay: 0,
  setRestaurants: (restaurants) => set({ restaurants: restaurants }),
  setSelectedRestaurant: (restaurant) =>
    set({ selectedRestaurant: restaurant }),
  setSuppliers: (supplier) => set({ suppliers: supplier }),
  setSelectedSupplier: (supplier) => set({ selectedSuppliers: supplier }),
  setArticlesToPay: (articles) => set({ articlesToPay: articles }),
  setTotalNet: (newNet) => set({ totalNet: newNet }),
  setTotalTaxes: (newTaxes) => set({ totalTaxes: newTaxes }),
  setTotalToPay: (newTotal) => set({ totalToPay: newTotal }),
}))

export default useOrderStore

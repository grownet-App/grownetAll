import { create } from "zustand";

const useOrderStore = create((set) => ({
  restaurants: [],
  selectedRestaurant: null,
  //TODO AGREGAR PROVIDERS DE LA BD CUANDO SE INTEGRE A RESTAURANTS
  providers: [],
  selectedProvider: null,
  articlesToPay: [],
  totalNet: 0,
  totalTaxes: 0,
  totalToPay: 0,
  deliveryData: null,
  specialRequirements: null,
  setRestaurants: (restaurants) => set({ restaurants: restaurants }),
  setSelectedRestaurant: (restaurant) =>
    set({ selectedRestaurant: restaurant }),
  setProviders: (providers) => set({ providers: providers }),
  setSelectedProvider: (provider) => set({ selectedProvider: provider }),
  setArticlesToPay: (articles) => set({ articlesToPay: articles }),
  setTotalNet: (newNet) => set({ totalNet: newNet }),
  setTotalTaxes: (newTaxes) => set({ totalTaxes: newTaxes }),
  setTotalToPay: (newTotal) => set({ totalToPay: newTotal }),
  setDeliveryData: (deliveryData) => set({ deliveryData: deliveryData }),
  setSpecialRequirements: (specialRequirements) => set ({specialRequirements: specialRequirements})
}));

export default useOrderStore;

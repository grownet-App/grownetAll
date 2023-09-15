    import { create } from 'zustand';

    const useOrderStore = create((set) => ({
    restaurants: [],
    selectedRestaurant: null,
    //TODO AGREGAR PROVIDERS DE LA BD CUANDO SE INTEGRE A RESTAURANTS
    providers: [],
    selectedProvider: null,
    
    selectedProducts: [],
    setRestaurants: (restaurants) => set({ restaurants: restaurants }),
    setSelectedRestaurant: (restaurant) => set({ selectedRestaurant: restaurant }),
    setProviders: (providers) => set({ providers: providers }),
    setSelectedProvider: (provider) => set({ selectedProvider: provider }),
   
    
    articlesToPay: [],
    totalNet: 0,
    totalTaxes: 0,
    totalToPay: 0,
    setArticlesToPay: (articles) => set({ articlesToPay: articles }),
    setTotalNet: (newNet) => set({ totalNet: newNet }),
    setTotalTaxes: (newTaxes) => set({ totalTaxes: newTaxes }),
    setTotalToPay: (newTotal) => set({ totalToPay: newTotal }),
    }));

    export default useOrderStore;

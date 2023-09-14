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
    addProductToOrder: (articles) => set((state) => 
    ({ selectedProducts: [...state.selectedProducts, articles] })),
    
    products: [],
    clearOrder: () => set({ selectedRestaurant: null, selectedProvider: null, selectedProducts: [] }),
    }));

    export default useOrderStore;

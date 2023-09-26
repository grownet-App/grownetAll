import { create } from "zustand";

const useTokenStore = create((set) => ({
  countryCode: null,
  token: localStorage.getItem("token") || null,
  setToken: (newToken) => {
    set({ token: newToken });
    localStorage.setItem("token", newToken);
  },
  setCountryCode: (newCountryCode) => set({ countryCode: newCountryCode }),
}));

export default useTokenStore;

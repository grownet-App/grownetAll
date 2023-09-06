import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  setToken: (newToken) => {
    set({ token: newToken });
    localStorage.setItem("token", newToken);
  },
}));

export default useTokenStore;

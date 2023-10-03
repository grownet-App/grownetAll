import { create } from "zustand";

const useRecordStore = create((set) => ({
  pendingOrders: [],
  setPendingOrders: (pendingOrders) => set({ pendingOrders: pendingOrders }),
  }));

export default useRecordStore;
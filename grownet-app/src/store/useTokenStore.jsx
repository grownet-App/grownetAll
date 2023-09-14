import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const useTokenStore = create(
  persist(
    (set) => ({
      token: null,

      setToken: (newToken) => set({ token: newToken }),

      initializeToken: async () => {
        const storedToken = await AsyncStorage.getItem('token')

        if (storedToken !== null) {
          set({ token: storedToken })
        }
      },
    }),

    {
      name: 'token-storage',
    },
  ),
)

export default useTokenStore

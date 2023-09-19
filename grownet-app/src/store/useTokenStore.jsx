import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist } from 'zustand/middleware'
import { create } from 'zustand'

const useTokenStore = create(
  persist(
    (set) => ({
      token: null,

      setToken: (newToken) => set({ token: newToken }),

      initializeToken: async () => {
        try {
          const storedToken = await AsyncStorage.getItem('token')

          if (storedToken !== null) {
            set({ token: storedToken })
          }
        } catch (error) {
          console.error('Error al obtener el token de AsyncStorage:', error)
        }
      },
    }),

    {
      name: 'token-storage',
    },
  ),
)

export default useTokenStore

import React, { useState, useEffect } from 'react'
import { navigate } from './rootNavigation'
import useTokenStore from '../store/useTokenStore'
import Home from '../screens/home'
import Login from '../screens/Login/loginPage'
import OTP from '../screens/Login/otpPage'
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './tabNavigator'

const Stack = createStackNavigator()

function AuthNavigator() {
  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
  })

  const { token } = useTokenStore()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (token) {
      setIsLoading(false)
    } else {
      console.log('No se encontró un token. Redirigiendo a login.')
      navigate('home')
      setIsLoading(false)
    }
  }, [token])

  if (!fontsLoaded || isLoading) {
    return null
  }

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="otp"
            component={OTP}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AuthNavigator

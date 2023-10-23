/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import { navigate } from './RootNavigation'
import useTokenStore from '../store/useTokenStore'
import Home from '../screens/Home'
import Login from '../screens/Login/LoginPage'
import OTP from '../screens/Login/OtpPage'
import Restauranst from '../screens/buyingProcess/Restaurants'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_300Light_Italic,
} from '@expo-google-fonts/poppins'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import { useTranslation } from 'react-i18next'

const Stack = createStackNavigator()

function AuthNavigator() {
  const { t } = useTranslation()
  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    PoppinsSemi: Poppins_600SemiBold,
    PoppinsItalic: Poppins_300Light_Italic,
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
            name="restaurants"
            component={Restauranst}
            options={{
              headerShown: true,

              title: t('stackNavigator.chooseYourRestaurant'),
              headerStyle: {
                backgroundColor: '#f2f2f2',
                height: StatusBar.currentHeight + 60,
              },
              headerTintColor: '#04444F',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'PoppinsSemi',
                fontSize: 22,
              },
            }}
          />
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          {/* //TODO, quitar, solo para pruebas de maquetacion */}
          {/* //----------------------------// */}
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

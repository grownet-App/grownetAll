import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigate } from './rootNavigation'
import AuthNavigator from '../navigation/authNavigator'
import { StyleSheet } from 'react-native'
export default function Navigation() {
  return (
    <NavigationContainer ref={navigate} style={styles.container}>
      <AuthNavigator />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue', // Cambia el color de fondo aquí
  },
})

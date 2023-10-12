import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigate } from './RootNavigation'
import AuthNavigator from './AuthNavigator'
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

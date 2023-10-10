import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigate } from './rootNavigation'
import AuthNavigator from '../navigation/authNavigator'

export default function Navigation() {
  return (
    <NavigationContainer ref={navigate}>
      <AuthNavigator />
    </NavigationContainer>
  )
}

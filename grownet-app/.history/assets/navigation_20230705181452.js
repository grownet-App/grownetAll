import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import orders from '../screens/orders'
import loginPage from '../screens/loginPage'
import providers from '../screens/providers'
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='login'
        >
            <Tab.Screen name="login" component={loginPage}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="providers"
                component={providers}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="orders"
                component={orders}
                options={{
                    headerShown: false
                }}
            />

        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )

}
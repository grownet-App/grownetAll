import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import orders from '../screens/orders'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="orders" component={orders} />
        </Tab.Navigator>
    )
}

export default function Navigation(params) {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )

}
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import orders from '../screens/orders'
import loginPage from '../screens/loginPage'
import providers from '../screens/providers'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="providersStack" 
            component={providers}
            options={{
                headerBackTitleVisible: false,
            }}
            />
            <Stack.Screen name="ordersStack" component={orders} />
        </Stack.Navigator>
    )
}

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
                component={MyStack}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="orders"
                component={MyStack}
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
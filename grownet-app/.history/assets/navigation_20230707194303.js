import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import orders from '../screens/orders'
import loginPage from '../screens/loginPage'
import providers from '../screens/providers'
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
function MyStack1() {
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#026CD2' },
            }}
        >
            <Stack.Screen name="providersStack"
                component={providers}
                options={{
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
function MyStack2() {
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#026CD2' },
            }}
        >
            <Stack.Screen name="orderStacks"
                component={orders}
                options={{
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="<"
                            color="#fff"
                        />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }}
            />
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
                component={MyStack1}
                options={{
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="orders"
                component={MyStack2}
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
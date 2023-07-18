import { Text, View, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import suppliers from '../screens/orders'
import loginPage from '../screens/loginPage'
import records from '../screens/records'
import settings from '../screens/settings'
import chat from '../screens/chat'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#026CD2' },
            }}
        >
            <Stack.Screen name="settings"
                component={settings}
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
                            onPress={() => navigation.navigate('loginPage', { screen: 'loginPage' })}
                            title="Info"
                            color="#fff"
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}
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
            <Stack.Screen name="recordsStack"
                component={records}
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
function orderStack() {
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#026CD2',
                headerStyle: { backgroundColor: 'white' },
            }}
        >
            <Stack.Screen name="suppliers"
                component={suppliers}
                options={{
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="<"
                            color="#026CD2"
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
function MyStack3() {
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#026CD2' },
            }}
        >
            <Stack.Screen name="chat"
                component={chat}
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
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='login'
            screenOptions={{
                tabBarActiveTintColor: "green",
            }}
        >
            <Tab.Screen name="settings" component={settings}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="cogs" size={size} color={color} />
                    },
                    headerShown: true
                }}
            />
            <Tab.Screen
                name="orders"
                component={orderStack}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="shopping-basket" size={size} color={color} />
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="records"
                component={MyStack1}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="receipt" size={size} color={color} />
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="chat"
                component={MyStack3}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name="comments" size={size} color={color} />
                    },
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
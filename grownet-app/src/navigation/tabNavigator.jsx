import React from 'react'
import Providers from '../screens/providers'
import Settings from '../screens/settings'
import Records from '../screens/records'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from '../screens/chat'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import Orders from '../screens/orders'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

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
      <Stack.Screen
        name="orders"
        component={Orders}
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
      <Stack.Screen
        name="recordsStack"
        component={Records}
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
      <Stack.Screen name="orders" component={Orders} />
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
      <Stack.Screen
        name="chat"
        component={Chat}
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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="providers"
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="cogs" size={size} color={color} />
          },
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="orders"
        component={orderStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5 name="shopping-basket" size={size} color={color} />
            )
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="records"
        component={MyStack1}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="receipt" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="chat"
        component={MyStack3}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="comments" size={size} color={color} />
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator

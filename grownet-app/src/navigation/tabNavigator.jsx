import React from 'react'
import Suppliers from '../screens/buyingProcess/suppliers'
import Settings from '../screens/settings'
import Records from '../screens/records'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from '../screens/chat'
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import Orders from '../screens/buyingProcess/orders'
import { TouchableOpacity, StatusBar } from 'react-native'
import useTokenStore from '../store/useTokenStore'
import Restauranst from '../screens/buyingProcess/restaurants'
import { goBack } from './rootNavigation'
import Products from '../screens/buyingProcess/products'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function OrderStack() {
  const { setToken } = useTokenStore()
  const handleLogout = async () => {
    try {
      setToken(null)
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }
  return (
    //TODO. PONER RUTA DE RESTAURANTES
    <Stack.Navigator
      initialRouteName="products"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#026CD2',
        headerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="products"
        component={Products}
        options={{
          headerShown: true,

          title: 'Make your order',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsBold',
            fontSize: 24,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 28 }}
              onPress={() => goBack()}
            >
              <FontAwesome
                name="arrow-left"
                size={24}
                color="#04444F"
                style={{ position: 'relative' }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="restaurants"
        component={Restauranst}
        options={{
          headerShown: true,

          title: 'Choose your restaurant',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsBold',
            fontSize: 28,
          },
        }}
      />
      <Stack.Screen
        name="suppliers"
        component={Suppliers}
        options={{
          headerShown: true,

          title: 'Suppliers',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsBold',
            fontSize: 28,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 28 }}
              onPress={() => goBack()}
            >
              <FontAwesome
                name="arrow-left"
                size={24}
                color="#04444F"
                style={{ position: 'relative' }}
              />
            </TouchableOpacity>
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
      initialRouteName="orders"
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
          title: 'Settings',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTitleStyle: {
            fontFamily: 'PoppinsBold',
            fontSize: 28,
            fontWeight: 'bold',
            color: '#026CD2',
          },
        }}
      />
      <Tab.Screen
        name="orders"
        component={OrderStack}
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

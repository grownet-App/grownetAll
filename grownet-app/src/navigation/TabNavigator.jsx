/* eslint-disable no-unused-vars */
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import Chat from '../screens/Chat'
import PastRecord from '../screens/Record/PastRecord'
import PedingRecord from '../screens/Record/PedingRecord'
import Records from '../screens/Record/Records'
import Settings from '../screens/Settings'
import OrderDetail from '../screens/buyingProcess/OrderDetail'
import OrderInformation from '../screens/buyingProcess/OrderInformation'
import OrderSuccessful from '../screens/buyingProcess/OrderSuccessful'
import Products from '../screens/buyingProcess/Products'
import Restauranst from '../screens/buyingProcess/Restaurants'
import Suppliers from '../screens/buyingProcess/Suppliers'
import useTokenStore from '../store/useTokenStore'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HeaderLeft = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={{ marginHorizontal: 28 }} onPress={goBack}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={24}
        color="#04444F"
        style={{ position: 'relative' }}
      />
    </TouchableOpacity>
  )
}

const headerRight = () => (
  <Button
    /* eslint-disable no-alert */
    onPress={() => alert('This is a button!')}
    title="Info"
    color="#fff"
  />
)

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
    // TODO. PONER RUTA DE RESTAURANTES
    <Stack.Navigator
      initialRouteName="restaurants"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#026CD2',
        headerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
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
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
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
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
          },
          headerLeft: () => HeaderLeft(),
        }}
      />
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
            fontFamily: 'PoppinsSemi',
            fontSize: 24,
          },
          headerLeft: () => HeaderLeft(),
        }}
      />
      <Stack.Screen
        name="ordersDetail"
        component={OrderDetail}
        options={{
          headerShown: true,

          title: 'Order detail',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 24,
          },
          headerLeft: () => HeaderLeft(),
        }}
      />
      <Stack.Screen
        name="orderInformation"
        component={OrderInformation}
        options={{
          headerShown: true,

          title: 'Order detail',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 24,
          },
          headerLeft: () => HeaderLeft(),
        }}
      />
      <Stack.Screen
        name="orderSuccessful"
        component={OrderSuccessful}
        options={{
          headerShown: false,
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
          title: 'Your orders',
          headerStyle: {
            backgroundColor: 'white',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="pastRecord"
        component={PastRecord}
        options={{
          title: 'Order details',
          headerStyle: {
            backgroundColor: 'white',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen
        name="pedingRecord"
        component={PedingRecord}
        options={{
          title: 'Order details',
          headerStyle: {
            backgroundColor: 'white',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
          },
        }}
      />
      <Stack.Screen name="ordersDetail" component={OrderDetail} />
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
          headerLeft: () => HeaderLeft(),
          headerRight: () => headerRight(),
        }}
      />
    </Stack.Navigator>
  )
}

const tabBarIconProps =
  (name) =>
  ({ color, size }) => {
    name === 'Settings'
      ? (name = 'md-settings-outline') //ajustes
      : name === 'orders'
      ? (name = 'cart-outline') //orders
      : name === 'records'
      ? (name = 'receipt-outline') //historial
      : name === 'chat'
      ? (name = 'ios-chatbubble-ellipses-outline')
      : ''

    return <Ionicons name={name} size={size} color={color} />
  }
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="orders"
      screenOptions={{
        tabBarActiveTintColor: '#04444F',
      }}
    >
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: tabBarIconProps('Settings'),
          headerShown: true,
          title: 'Settings',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f2f2f2',
            height: StatusBar.currentHeight + 60,
          },
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
            color: '#026CD2',
          },
        }}
      />
      <Tab.Screen
        name="orders"
        component={OrderStack}
        options={{
          tabBarIcon: tabBarIconProps('orders'),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="records"
        component={MyStack1}
        options={{
          tabBarIcon: tabBarIconProps('records'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="chat"
        component={MyStack3}
        options={{
          tabBarIcon: tabBarIconProps('chat'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator

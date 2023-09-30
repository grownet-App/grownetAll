/* eslint-disable no-unused-vars */
import React from 'react'
import Suppliers from '../screens/buyingProcess/suppliers'
import Settings from '../screens/settings'
import Records from '../screens/records'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Chat from '../screens/chat'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import { TouchableOpacity, StatusBar } from 'react-native'
import useTokenStore from '../store/useTokenStore'
import Restauranst from '../screens/buyingProcess/restaurants'
import { goBack } from './rootNavigation'
import Products from '../screens/buyingProcess/products'
import OrderDetail from '../screens/buyingProcess/orderDetail'
import OrderSuccessful from '../screens/buyingProcess/orderSuccessful'
import OrderInformation from '../screens/buyingProcess/orderInformation'
import { useNavigation } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const headerLeft = () => {
  const navigation = useNavigation()

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity style={{ marginHorizontal: 28 }} onPress={goBack}>
      <FontAwesome
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
    //TODO. PONER RUTA DE RESTAURANTES
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
          headerLeft: () => headerLeft(),
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
            fontFamily: 'PoppinsBold',
            fontSize: 24,
          },
          headerLeft: () => headerLeft(),
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
            fontFamily: 'PoppinsBold',
            fontSize: 24,
          },
          headerLeft: () => headerLeft(),
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
            fontFamily: 'PoppinsBold',
            fontSize: 24,
          },
          headerLeft: () => headerLeft(),
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
          headerBackTitleVisible: false,
          headerLeft: () => headerLeft(),
          headerRight: () => headerRight(),
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
          headerLeft: () => headerLeft(),
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
      ? (name = 'cogs')
      : name === 'orders'
      ? (name = 'shopping-basket')
      : name === 'records'
      ? (name = 'receipt')
      : name === 'chat'
      ? (name = 'comments')
      : ''

    return <FontAwesome5 name={name} size={size} color={color} />
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
          tabBarIcon: tabBarIconProps('Settings'),
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
          tabBarIcon: tabBarIconProps('comments'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator

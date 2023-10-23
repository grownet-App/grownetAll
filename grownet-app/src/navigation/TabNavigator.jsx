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
import PendingRecord from '../screens/Record/PendingRecord'
import Records from '../screens/Record/Records'
import Settings from '../screens/settings/Settings'
import OrderDetail from '../screens/buyingProcess/OrderDetail'
import OrderInformation from '../screens/buyingProcess/OrderInformation'
import OrderSuccessful from '../screens/buyingProcess/OrderSuccessful'
import Products from '../screens/buyingProcess/Products'
import Restauranst from '../screens/buyingProcess/Restaurants'
import Suppliers from '../screens/buyingProcess/Suppliers'
import DisputeRecord from '../screens/Record/DisputeRecord'
import TermsAndConditions from '../screens/TermsAndConditions'
import { useTranslation } from 'react-i18next'
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

function SettingsStack() {
  const { t } = useTranslation()
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#026CD2' },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerBackTitleVisible: false,

          title: t('menuPrimary.titleSettings'),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'white',
            height: StatusBar.currentHeight + 60,
          },
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
            color: '#026CD2',
          },
        }}
      />
      <Stack.Screen
        name="Terms&Conditions"
        component={TermsAndConditions}
        options={{
          headerShown: true,
          title: 'Terms & Conditions',
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
    </Stack.Navigator>
  )
}
function OrderStack() {
  const { t } = useTranslation()
  return (
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

          title: t('stackNavigator.chooseYourRestaurant'),
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

          title: t('stackNavigator.suppliers'),
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

          title: t('stackNavigator.makeYourOrder'),
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

          title: t('stackNavigator.orderDetail'),
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

          title: t('stackNavigator.orderDetail'),
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
function RecordsStack() {
  const { t } = useTranslation()
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
          title: t('stackRecord.yourOrders'),
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
          title: t('stackRecord.orderDetails'),
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
        name="pendingRecord"
        component={PendingRecord}
        options={{
          title: t('stackRecord.orderDetails'),
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
        name="disputeRecord"
        component={DisputeRecord}
        options={{
          title: t('stackRecord.whatWentWrong'),
          headerStyle: {
            backgroundColor: 'white',
            height: StatusBar.currentHeight + 60,
          },
          headerTintColor: '#04444F',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'PoppinsSemi',
            fontSize: 22,
            color: '#026cd2',
          },
        }}
      />
      <Stack.Screen name="ordersDetail" component={OrderDetail} />
    </Stack.Navigator>
  )
}
function ChatStack() {
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
        }}
      />
    </Stack.Navigator>
  )
}

const tabBarIconProps =
  (name) =>
  ({ color, size }) => {
    name === 'Settings'
      ? (name = 'md-settings-outline') // ajustes
      : name === 'orders'
      ? (name = 'cart-outline') // orders
      : name === 'records'
      ? (name = 'receipt-outline') // historial
      : name === 'chat'
      ? (name = 'ios-chatbubble-ellipses-outline')
      : ''

    return <Ionicons name={name} size={size} color={color} />
  }
const TabNavigator = () => {
  const { t } = useTranslation()
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      screenOptions={{
        tabBarActiveTintColor: '#04444F',
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: t('menuPrimary.Settings'),
          tabBarIcon: tabBarIconProps('Settings'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStack}
        options={{
          title: t('menuPrimary.orders'),
          tabBarIcon: tabBarIconProps('orders'),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Records"
        component={RecordsStack}
        options={{
          title: t('menuPrimary.records'),
          tabBarIcon: tabBarIconProps('records'),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          title: t('menuPrimary.chat'),
          tabBarIcon: tabBarIconProps('chat'),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
export default TabNavigator

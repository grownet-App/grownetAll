import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { orders } from "../screens/orders";
import loginPage from "../screens/loginPage";
import records from "../screens/records";
import settings from "../screens/settings";
import chat from "../screens/chat";
import home from "../screens/home";
import suppliers from "../screens/suppliers";
import otpPage from "../screens/otpPage";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="login"
        component={loginPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="otp"
        component={otpPage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="suppliers"
        component={suppliers}
        options={{
          headerShown: true,
          title: "Suppliers",
          headerStyle: {
            backgroundColor: "#f2f2f2",
          },
          headerTintColor: "#04444F",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "PoppinsBold",
            fontSize: 28,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginHorizontal: 28 }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontAwesome
                name="arrow-left"
                size={24}
                color="#04444F"
                style={{ position: "relative" }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MyStack1() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#026CD2" },
      }}
    >
      <Stack.Screen
        name="recordsStack"
        component={records}
        options={{
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name="orders" component={orders} />
    </Stack.Navigator>
  );
}
function orderStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "#026CD2",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="suppliers"
        component={suppliers}
        options={{
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="<"
              color="#026CD2"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MyStack3() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#026CD2" },
      }}
    >
      <Stack.Screen
        name="chat"
        component={chat}
        options={{
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      component={home}
      screenOptions={{
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="settings"
        component={settings}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="cogs" size={size} color={color} />;
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
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="records"
        component={MyStack1}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="receipt" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="chat"
        component={MyStack3}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="comments" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

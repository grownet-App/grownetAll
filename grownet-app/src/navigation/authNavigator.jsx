import React, { useState, useEffect } from "react";
import { TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useTokenStore from "../store/useTokenStore";
import Home from "../screens/home";
import Login from "../screens/loginPage";
import OTP from "../screens/otpPage";
import providers from "../screens/providers";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function AuthNavigator() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    PoppinsBold: Poppins_700Bold,
  });

  const { token } = useTokenStore();

  const [isLoading, setIsLoading] = useState(true);
  const { setToken } = useTokenStore();

  const handleLogout = async () => {
    try {
      setToken(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    if (token) {
      setIsLoading(false);
    } else {
      console.log("No se encontró un token. Redirigiendo a login.");
      navigation.navigate("home");
      setIsLoading(false);
    }
  }, [token, navigation]);

  if (!fontsLoaded || isLoading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {token ? (
        <>
          <Stack.Screen
            name="providers"
            component={providers}
            options={({ navigation }) => ({
              headerShown: true,

              title: "Providers",
              headerStyle: {
                backgroundColor: "#f2f2f2",
                height: StatusBar.currentHeight + 60,
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
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={handleLogout}
                >
                  <FontAwesome name="sign-out" size={24} color="#04444F" />
                </TouchableOpacity>
              ),
            })}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="otp"
            component={OTP}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default AuthNavigator;

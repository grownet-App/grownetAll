import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import menuDown from "../assets/navigation";
import { ApiProviders } from "../config/urls.config";
import { GlobalStyles } from "./styles";
import axios from "axios";

const providers = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    axios
      .get(ApiProviders)
      .then(function (response) {
        console.log("response", response);
        setProviders(response.data.providers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={GlobalStyles.providers}>
        {providers.map((supplier, index) => (
          <View key={index}>
            <View style={GlobalStyles.providersCateg}>
              <Text style={GlobalStyles.textSupplier}>{supplier.name}</Text>

              <Image
                source={require("../assets/img/img_providers.png")}
                style={GlobalStyles.imgproviders}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default providers;

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
import { ApiSuppliers } from "../config/urls.config";
import { GlobalStyles } from "./styles";
import axios from "axios";

const suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get(ApiSuppliers)
      .then(function (response) {
        console.log("response", response);
        setSuppliers(response.data.providers);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={GlobalStyles.suppliers}>
        {suppliers.map((supplier, index) => (
          <View key={index}>
            <View style={GlobalStyles.suppliersCateg}>
              <Text style={GlobalStyles.textSupplier}>{supplier.name}</Text>

              <Image
                source={require("../assets/img/img_suppliers.png")}
                style={GlobalStyles.imgsuppliers}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default suppliers;

import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import menuDown from '../assets/navigation';
import { ApiSuppliers } from "../config/urls.config"
import { GlobalStyles } from './styles';
import axios from 'axios';
const suppliers = () => {

  const [suppliers, setSuppliers] = useState([]);

  axios.get(ApiSuppliers)
    .then(function (response) {
      // handle success
      setSuppliers(response.data.providers);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          style={GlobalStyles.cardSuppliers}
          data={suppliers}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  )

}

export default suppliers;
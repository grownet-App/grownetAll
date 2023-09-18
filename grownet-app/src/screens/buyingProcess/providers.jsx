import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiSuppliers } from '../../config/urls.config'
import { GlobalStyles } from '../../styles/styles'
import axios from 'axios'

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    axios
      .get(ApiSuppliers)
      .then(function (response) {
        console.log('response', response)
        setSuppliers(response.data.suppliers)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={GlobalStyles.suppliers}>
        {suppliers.map((supplier, index) => (
          <View key={index}>
            <View style={GlobalStyles.suppliersCateg}>
              <Text style={GlobalStyles.textSupplier}>{supplier.name}</Text>

              <Image
                source={require('../../../assets/img/img_suppliers.png')}
                style={GlobalStyles.imgsuppliers}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Suppliers

/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useOrderStore from '../../store/UseOrderStore'
import { OrdersDetailStyles } from '../../styles/styles'

export default function OrderDetails() {
  const navigation = useNavigation()
  const articlesToPayStore = useOrderStore()
  const totalNet = articlesToPayStore.totalNet
  const totalTaxes = articlesToPayStore.totalTaxes
  const totalToPay = articlesToPayStore.totalToPay

  const updateTotalNet = (newNet) => {
    articlesToPayStore.setTotalNet(newNet)
  }

  const updateTotalTaxes = (newTaxes) => {
    articlesToPayStore.setTotalTaxes(newTaxes)
  }

  const updateTotalToPay = (newTotal) => {
    articlesToPayStore.setTotalToPay(newTotal)
  }

  return (
    <View style={OrdersDetailStyles.containerDetails}>
      <View style={OrdersDetailStyles.cardInvoices}>
        {/* <ProductDetail
          updateTotalToPay={updateTotalToPay}
          updateTotalTaxes={updateTotalTaxes}
          updateTotalNet={updateTotalNet}
        /> */}
        <View>
          <Text style={OrdersDetailStyles.taxFont}>Payment details</Text>
          <View style={OrdersDetailStyles.productDetail}>
            <Text>Net</Text>
            <Text>£{totalNet.toFixed(2)}</Text>
          </View>
          <View style={OrdersDetailStyles.productDetail}>
            <Text>Tax</Text>
            <Text>£{totalTaxes.toFixed(2)}</Text>
          </View>
        </View>
        <View style={OrdersDetailStyles.totalDetail}>
          <Text>Current value</Text>
          <Text>£{totalToPay.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={OrdersDetailStyles.btnPrimary}
        onPress={() => navigation.navigate('')}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

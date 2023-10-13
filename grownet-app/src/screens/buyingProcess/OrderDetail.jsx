/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useOrderStore from '../../store/useOrderStore'
import { OrdersDetailStyles } from '../../styles/Styles'
import ProductDetail from '../../components/buyingProcess/ProductDetail'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'

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
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <View style={OrdersDetailStyles.containerDetails}>
            <ProductDetail
              updateTotalToPay={updateTotalToPay}
              updateTotalTaxes={updateTotalTaxes}
              updateTotalNet={updateTotalNet}
            />
            <View>
              <Text style={OrdersDetailStyles.taxFont}>Payment details</Text>
              <View style={OrdersDetailStyles.productDetail}>
                <Text style={OrdersDetailStyles.Paymenttext}>Net</Text>
                <Text style={OrdersDetailStyles.Paymenttext}>
                  £{totalNet.toFixed(2)}
                </Text>
              </View>
              <View style={OrdersDetailStyles.productDetail}>
                <Text style={OrdersDetailStyles.Paymenttext}>Tax</Text>
                <Text style={OrdersDetailStyles.Paymenttext}>
                  £{totalTaxes.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={OrdersDetailStyles.totalDetail}>
              <Text style={OrdersDetailStyles.CurrentValuetext}>
                Current value
              </Text>
              <Text style={OrdersDetailStyles.CurrentValuetext}>
                £{totalToPay.toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={OrdersDetailStyles.btnPrimary}
            onPress={() => navigation.navigate('orderInformation')}
          >
            <Text style={OrdersDetailStyles.ContinueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

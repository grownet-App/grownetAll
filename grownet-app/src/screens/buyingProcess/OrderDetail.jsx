/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useOrderStore from '../../store/useOrderStore'
import { GlobalStyles, OrdersDetailStyles } from '../../styles/Styles'
import ProductDetail from '../../components/buyingProcess/ProductDetail'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native'
import { OrderDetailStyle } from '../../styles/OrderDetailStyle'
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
          <View style={OrderDetailStyle.containerDetails}>
            <ProductDetail
              updateTotalToPay={updateTotalToPay}
              updateTotalTaxes={updateTotalTaxes}
              updateTotalNet={updateTotalNet}
            />
            <View>
              <Text style={OrderDetailStyle.tittle}>Payment details</Text>
              <View style={OrdersDetailStyles.productDetail}>
                <Text style={OrderDetailStyle.text}>Net</Text>
                <Text style={OrderDetailStyle.text}>
                  £{totalNet.toFixed(2)}
                </Text>
              </View>
              <View style={OrdersDetailStyles.productDetail}>
                <Text style={OrderDetailStyle.text}>Tax</Text>
                <Text style={OrderDetailStyle.text}>
                  £{totalTaxes.toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={OrdersDetailStyles.totalDetail}>
              <Text style={OrderDetailStyle.currentText}>Current value</Text>
              <Text style={OrderDetailStyle.currentText}>
                £{totalToPay.toFixed(2)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[GlobalStyles.btnPrimary, OrderDetailStyle.spaceButton]}
            onPress={() => navigation.navigate('orderInformation')}
          >
            <Text style={GlobalStyles.textBtnSecundary}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

import React from 'react'
import { Text, View } from 'react-native'
import { PastStyle } from '../../styles/PastRecordStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../../styles/Styles'
import axios from 'axios'
import useTokenStore from '../../store/useTokenStore'
import useRecordStore from '../../store/useRecordStore'
import { useEffect, useState } from 'react'
import { selectedStorageOrder } from '../../config/urls.config'
import { ScrollView } from 'react-native-gesture-handler'

function PastRecord() {
  const { token } = useTokenStore()
  const { selectedPendingOrder } = useRecordStore()
  const [detailsToShow, setDetailsToShow] = useState({})

  useEffect(() => {
    axios
      .get(`${selectedStorageOrder}/${selectedPendingOrder}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDetailsToShow(response.data.order)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView style={PastStyle.past}>
      <ScrollView>
      {detailsToShow && (
        <View style={GlobalStyles.cardInvoces}>
          <Text style={PastStyle.tittle}>Supplier details</Text>
          <View style={PastStyle.products}>
            <Text style={PastStyle.subtittle}>
              {detailsToShow.nameSuppliers}
            </Text>
            <Text style={PastStyle.subtittle}>#{detailsToShow.reference}</Text>
          </View>
          <Text style={PastStyle.p}>{detailsToShow.created_date}</Text>
          <Text style={PastStyle.tittle}>Product details</Text>
          {detailsToShow.products?.map((product) => (
            <View>
              <View style={PastStyle.products}>
                <Text style={PastStyle.subtittle}>{product.name}</Text>
                <Text style={PastStyle.subtittle}>£{product.price}</Text>
              </View>
              <Text style={PastStyle.p}>
                {product.quantity} {product.uom}
              </Text>
            </View>
          ))}
          <Text style={PastStyle.tittle}>Payment details</Text>
          <View style={PastStyle.products}>
            <Text style={PastStyle.subtittle}>Tax</Text>
            <Text style={PastStyle.subtittle}>£{detailsToShow.total_tax}</Text>
          </View>
          <View style={PastStyle.total}>
            <View style={PastStyle.products}>
              <Text style={PastStyle.textTotal}>Current value</Text>
              <Text style={PastStyle.textTotal}>£{detailsToShow.total}</Text>
            </View>
          </View>
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default PastRecord

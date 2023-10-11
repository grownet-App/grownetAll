import React from 'react'
import { Text, View } from 'react-native'
import { PastStyle } from '../../styles/PastRecordStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GlobalStyles } from '../../styles/Styles'
function PastRecord() {
  return (
    <SafeAreaView style={PastStyle.past}>
      <View style={GlobalStyles.cardInvoces}>
        <Text style={PastStyle.tittle}>Supplier details</Text>
        <View style={PastStyle.products}>
          <Text style={PastStyle.subtittle}>Bid Food</Text>
          <Text style={PastStyle.subtittle}>#5697</Text>
        </View>
        <Text style={PastStyle.p}>20/06/2023</Text>
        <Text style={PastStyle.tittle}>Details details</Text>
        <View style={PastStyle.products}>
          <Text style={PastStyle.subtittle}>Broccoli</Text>
          <Text style={PastStyle.subtittle}>£5698</Text>
        </View>
        <Text style={PastStyle.p}>50 Box/Boxes</Text>
        <Text style={PastStyle.tittle}>Payment details</Text>
        <View style={PastStyle.products}>
          <Text style={PastStyle.subtittle}>Tax</Text>
          <Text style={PastStyle.subtittle}>£5</Text>
        </View>
        <View style={PastStyle.total}>
          <View style={PastStyle.products}>
            <Text style={PastStyle.textTotal}>Current value</Text>
            <Text style={PastStyle.textTotal}>£9498</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PastRecord

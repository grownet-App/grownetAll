import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RecordStyle } from '../styles/RecordStyle'
import { GlobalStyles } from '../styles/styles'

const Records = () => {
  return (
    <SafeAreaView style={RecordStyle.record}>
      <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>#Order</Text>
          <Text style={RecordStyle.text}>6599</Text>
          <Text style={RecordStyle.tittle}>Amount</Text>
          <Text style={RecordStyle.text}>£548</Text>
        </View>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>Date</Text>
          <Text style={RecordStyle.text}>04/10/2023</Text>
          <Button title="View details" style={RecordStyle.btnPrimary}>
            <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
          </Button>
        </View>
      </View>
      <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>#Order</Text>
          <Text style={RecordStyle.text}>6599</Text>
          <Text style={RecordStyle.tittle}>Amount</Text>
          <Text style={RecordStyle.text}>£548</Text>
        </View>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>Date</Text>
          <Text style={RecordStyle.text}>04/10/2023</Text>
          <Button title="View details" style={RecordStyle.btnPrimary}>
            <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
          </Button>
        </View>
      </View>
      <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>#Order</Text>
          <Text style={RecordStyle.text}>6599</Text>
          <Text style={RecordStyle.tittle}>Amount</Text>
          <Text style={RecordStyle.text}>£548</Text>
        </View>
        <View style={RecordStyle.textCard}>
          <Text style={RecordStyle.tittle}>Date</Text>
          <Text style={RecordStyle.text}>04/10/2023</Text>
          <Button title="View details" style={RecordStyle.btnPrimary}>
            <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Records

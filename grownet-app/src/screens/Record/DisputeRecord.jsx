import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { DisputeStyle } from '../../styles/PendingRecordStyle'
import { GlobalStyles } from '../../styles/Styles'

function DisputeRecord() {
  return (
    <SafeAreaView style={DisputeStyle.dispute}>
      <View style={DisputeStyle.cardTittle}>
        <MaterialIcons name="error-outline" size={60} color="#62c471" />
        <View style={{ marginLeft: 15 }}>
          <Text style={DisputeStyle.title}>Broccoli</Text>
          <Text style={DisputeStyle.quantity}>1 Box</Text>
        </View>
      </View>
      <View style={[GlobalStyles.boxShadow, DisputeStyle.cardTabs]}>
        <Text>hola</Text>
      </View>
    </SafeAreaView>
  )
}

export default DisputeRecord

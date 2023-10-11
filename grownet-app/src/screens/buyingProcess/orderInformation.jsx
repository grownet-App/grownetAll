import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { OrderInformationStyles } from '../../styles/Styles'

const OrderInformation = () => {
  const [inputAddress, setInputAddress] = useState('')
  const [requirements, setInputRequirements] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false) // Nuevo estado para mostrar/ocultar el DatePicker
  const [selectedDate, setSelectedDate] = useState(new Date())

  const onChangeDate = () => {
    if (selectedDate !== undefined) {
      setSelectedDate(selectedDate)
      setShowDatePicker(false)
    }
  }

  return (
    <View>
      <Text style={OrderInformationStyles.PrimaryTex}>Address</Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          style={OrderInformationStyles.input}
          value={inputAddress}
          onChangeText={(text) => setInputAddress(text)}
          placeholder="To be confirmed on the day"
          placeholderTextColor="#a9a9a9"
        />
      </View>
      <Text style={OrderInformationStyles.PrimaryTex}>Deliver</Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          value={selectedDate.toDateString()}
          onFocus={() => setShowDatePicker(true)}
          style={OrderInformationStyles.input}
        />
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode={'date'}
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <Text style={OrderInformationStyles.PrimaryTex}>
        Any special requirements?
      </Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          value={requirements}
          onChangeText={(text) => setInputRequirements(text)}
          style={OrderInformationStyles.inputRequirements}
          multiline={true}
          numberOfLines={8}
          textAlignVertical="top"
        />
      </View>
      <View style={OrderInformationStyles.containerButton}>
        <TouchableOpacity style={OrderInformationStyles.btnPrimary}>
          <Text style={OrderInformationStyles.ContinueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderInformation

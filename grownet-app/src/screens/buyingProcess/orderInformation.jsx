import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import DatePickerAndroid from '@react-native-community/datetimepicker'
import { OrderInformationStyles } from '../../styles/styles'
import axios from '../../../axiosConfig.'
import useOrderStore from '../../store/useOrderStore'
import { useNavigation } from '@react-navigation/native'

const OrderInformation = () => {
  const {
    selectedRestaurant,
    articlesToPay,
    deliveryData,
    setDeliveryData,
    specialRequirements,
    selectedSupplier,
    setSpecialRequirements,
    totalNet,
    totalTaxes,
    totalToPay,
    orderNumber,
    setOrderNumber,
  } = useOrderStore()
  const [data, setData] = useState([])
  const [showDatePicker, setShowDatePicker] = useState(false)
  const navigation = useNavigation()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  useEffect(() => {
    setData(articlesToPay)
    setDeliveryData(tomorrow)
  }, [])

  const handleChangeDate = async (event, newDate) => {
    if (event.type === 'set') {
      setDeliveryData(newDate)
    }
    setShowDatePicker(false)
  }
  console.log('ESTA ES LA NUEVA FECHA', deliveryData.toLocaleDateString())

  return (
    <View>
      <Text style={OrderInformationStyles.PrimaryTex}>Address</Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          style={OrderInformationStyles.input}
          value={selectedRestaurant.address}
          editable={false}
        />
      </View>
      <Text style={OrderInformationStyles.PrimaryTex}>Deliver</Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          value={deliveryData.toLocaleDateString()}
          onFocus={() => {
            Keyboard.dismiss()
            setShowDatePicker(true)
          }}
          style={OrderInformationStyles.input}
        />
        {showDatePicker && (
          <DatePickerAndroid
            value={deliveryData}
            mode={'date'}
            display="default"
            onChange={handleChangeDate}
            minimumDate={tomorrow}
          />
        )}
      </View>
      <Text style={OrderInformationStyles.PrimaryTex}>
        Any special requirements?
      </Text>
      <View style={OrderInformationStyles.containerInputs}>
        <TextInput
          value={specialRequirements}
          onChangeText={(text) => setSpecialRequirements(text)}
          style={OrderInformationStyles.inputRequirements}
          multiline={true}
          numberOfLines={8}
          textAlignVertical="top"
        />
      </View>
      <View style={OrderInformationStyles.containerButton}>
        <TouchableOpacity 
        onPress={()=> {
          navigation.navigate('orderSuccessful')
        }}
        style={OrderInformationStyles.btnPrimary}>
          <Text style={OrderInformationStyles.ContinueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderInformation

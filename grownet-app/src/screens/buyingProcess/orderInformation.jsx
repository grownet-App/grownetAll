import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import DatePickerAndroid from '@react-native-community/datetimepicker'
import { OrderInformationStyles } from '../../styles/styles'
import axios from '../../../axiosConfig.'
import useOrderStore from '../../store/useOrderStore'

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
  } = useOrderStore();

  const [data, setData] = useState([]);
  const [dateToPicker, setDateToPicker] = useState(new Date())

  //TODO MOSTRAR OCULTAR CALENDARIO
  const [showDatePicker, setShowDatePicker] = useState(false)

  // TODO DIRECCIÓN
  const [inputAddress, setInputAddress] = useState('')
  // TODO REQUERIMIENTOS
  const [requirements, setInputRequirements] = useState('')

  // TODO FECHA SIGUIENTE
  const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    setData(articlesToPay);
    setDeliveryData(tomorrow); 
  }, []);

  const handleChangeDate = async (event, newDate) => {
    if (event.type === 'set') {
      setDeliveryData(newDate);
    }
    setShowDatePicker(false);
    
    /* try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: dateToPicker,
        minDate: new Date(), // Configura la fecha mínima según tus necesidades
      });

      if (action === DatePickerAndroid.dateSetAction) {
        const formattedDate = `${day}/${month + 1}/${year}`;
        setDateToPicker(new Date(year, month, day));
        setDeliveryData(formattedDate);
        console.log("SE FORMATEÓ LA FECHA",formattedDate);
      }
    } catch ({ code, message }) {
      console.warn('Error al seleccionar la fecha', message);
    } */
  };
  console.log("ESTA ES LA NUEVA FECHA", deliveryData.toLocaleDateString());

 /*  const onChangeDate = () => {
    if (dateToPicker !== undefined) {
      setDateToPicker(dateToPicker)
      setShowDatePicker(false)
    }
  } */

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
          value={deliveryData.toLocaleDateString()}
          onFocus={() => {
            Keyboard.dismiss();
            setShowDatePicker(true);
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
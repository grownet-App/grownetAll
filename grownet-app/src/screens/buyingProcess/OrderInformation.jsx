import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import DatePickerAndroid from '@react-native-community/datetimepicker'
import { OrderInformationStyles } from '../../styles/Styles'
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

// OBTENER NUMERO DE ORDEN
const getOrderNumber = async () => {
  const filteredJsonProducts = articlesToPay.filter(
    (article) => article.amount > 0
  );
  const jsonProducts = filteredJsonProducts.map((article) => ({
    quantity: article.amount,
    id_presentations: article.idUomToPay,
    price: article.totalItemToPay,
  }));
  const jsonOrderData = {
    id_suppliers: selectedSupplier.id,
    date_delivery: deliveryData.toLocaleDateString(),
    address_delivery: selectedRestaurant.address,
    accountNumber_customers: selectedRestaurant.accountNumber,
    observation: specialRequirements,
    total: totalToPay,
    net: totalNet,
    total_tax: totalTaxes,
    products: jsonProducts,
  };

  console.log("ESTE ES EL JSON:", jsonOrderData);
  try {
    const response = await axios.post(createStorageOrder, jsonOrderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newOrderNumber = response.data.reference;
    setOrderNumber(newOrderNumber);
    console.log(
      "Respuesta exitosa al crear la orden",
      response.data.reference
    );
    return newOrderNumber;
  } catch (error) {
    console.log("Error al crear la orden", error);
  }
};

// ENVIAR FORMULARIO
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const newOrderNumber = await getOrderNumber();
    if (newOrderNumber) {
      navigation.navigate('orderSuccessful')
      console.log(newOrderNumber);
    } else {
      console.log("No se obtuvo numero de orden");
    }
  } catch (error) {
    console.log("Error enviando el correo", error);
  }
};

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
          onPress={handleSubmit}
          style={OrderInformationStyles.btnPrimary}
        >
          <Text style={OrderInformationStyles.ContinueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderInformation

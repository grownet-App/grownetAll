import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { OrderSuccessfulStyles } from '../../styles/styles'
import { useNavigation } from '@react-navigation/native'

const OrderInformation = () => {
  const navigation = useNavigation()
  return (
    <View style={OrderSuccessfulStyles.container}>
      <View style={OrderSuccessfulStyles.containerImage}>
        <Image
          source={require('../../../assets/img/img-succesful.png')}
          resizeMode="cover"
          style={OrderSuccessfulStyles.image}
        />
        <Text style={OrderSuccessfulStyles.textSuccessful}>Successful!</Text>
        <Text>Congratulation your order is successful</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary}
          onPress={() => navigation.navigate('')}
        >
          <Text style={OrderSuccessfulStyles.ContinueText}>
            Ver tus pedidos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary2}
          onPress={() => navigation.navigate('')}
        >
          <Text style={OrderSuccessfulStyles.ContinueText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderInformation

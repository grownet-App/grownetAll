import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { OrderSuccessfulStyles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'

const OrderSuccessful = () => {
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
        <Text style={{ color: '#04444f', fontSize: 20 }}>
          Your order is successful
        </Text>
      </View>
      <View style={OrderSuccessfulStyles.containerButtons}>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary}
          onPress={() => navigation.navigate('recordsStack')}
        >
          <Text style={OrderSuccessfulStyles.ContinueText}>Your orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary2}
          onPress={() => navigation.navigate('')}
        >
          <Text style={OrderSuccessfulStyles.ContinueText2}>Download PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderSuccessful

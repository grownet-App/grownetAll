import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { GlobalStyles } from '../../styles/Styles'
import { OtpStyle } from '../../styles/LoginStyle'
import { useRoute } from '@react-navigation/native'
import { otpApiUrl } from '../../config/urls.config'
import axios from '../../../axiosConfig.'
import useTokenStore from '../../store/useTokenStore'

const Otp = () => {
  const pin1Ref = useRef()
  const pin2Ref = useRef()
  const pin3Ref = useRef()
  const pin4Ref = useRef()

  const [pin1, setPin1] = useState('')
  const [pin2, setPin2] = useState('')
  const [pin3, setPin3] = useState('')
  const [pin4, setPin4] = useState('')

  const route = useRoute()
  const { setToken } = useTokenStore()

  const enviarOTP = async () => {
    let otp = pin1 + pin2 + pin3 + pin4

    const formData = route.params

    try {
      const response = await axios.post(
        `${otpApiUrl}?country=${formData.country}&telephone=${formData.telephone}&code=${otp}`,
      )
      console.log('Respuesta de la API:', response.data)
      const token = response.data.token
      setToken(token)
      console.log('token:', token)
    } catch (error) {
      console.error('Error al enviar OTP:', error)
    }
  }

  return (
    <SafeAreaView style={OtpStyle.containerOtpPage}>
      <Image
        style={OtpStyle.tinyLogoOtp}
        source={require('../../../assets/logo.png')}
      />

      <Text style={OtpStyle.textTittle}>Enter your verification code</Text>
      <Text style={OtpStyle.textP}>
        An 4 digit code has been sent to your phone
      </Text>
      <View style={OtpStyle.containerOTP}>
        <View style={OtpStyle.textInputView}>
          <TextInput
            ref={pin1Ref}
            style={OtpStyle.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin1(text)
              text ? pin2Ref.current.focus() : pin1Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyle.textInputView}>
          <TextInput
            ref={pin2Ref}
            style={OtpStyle.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin2(text)
              text ? pin3Ref.current.focus() : pin1Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyle.textInputView}>
          <TextInput
            ref={pin3Ref}
            style={OtpStyle.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin3(text)
              text ? pin4Ref.current.focus() : pin2Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyle.textInputView}>
          <TextInput
            ref={pin4Ref}
            style={OtpStyle.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin4(text)
              !text && pin3Ref.current.focus()
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={enviarOTP} style={GlobalStyles.btnSecundary}>
        <Text style={GlobalStyles.textBtnSecundary}>Verify & Proceed</Text>
      </TouchableOpacity>
      <View style={OtpStyle.ContainerdidntCode}>
        <Text style={OtpStyle.textP}>Didn't you receive the code?</Text>
        <TouchableOpacity>
          <Text style={OtpStyle.sendCode}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Otp

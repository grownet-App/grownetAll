import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native'
import React, { useRef, useState } from 'react'
import { OtpStyles } from '../../styles/styles'
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
    console.log('formOTP:', formData)
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
    <SafeAreaView style={OtpStyles.containerOtpPage}>
      <Image
        style={OtpStyles.tinyLogoOtp}
        source={require('../../../assets/logo.png')}
      />

      <Text style={OtpStyles.textOtp1}>Enter your verification code</Text>
      <Text style={OtpStyles.textOtp2}>
        An 4 digit code has been sent to your phone
      </Text>
      <View style={OtpStyles.containerOTP}>
        <View style={OtpStyles.textInputView}>
          <TextInput
            ref={pin1Ref}
            style={OtpStyles.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin1(text)
              text ? pin2Ref.current.focus() : pin1Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyles.textInputView}>
          <TextInput
            ref={pin2Ref}
            style={OtpStyles.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin2(text)
              text ? pin3Ref.current.focus() : pin1Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyles.textInputView}>
          <TextInput
            ref={pin3Ref}
            style={OtpStyles.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin3(text)
              text ? pin4Ref.current.focus() : pin2Ref.current.focus()
            }}
          />
        </View>
        <View style={OtpStyles.textInputView}>
          <TextInput
            ref={pin4Ref}
            style={OtpStyles.textInput}
            keyboardType={'number-pad'}
            maxLength={1}
            onChangeText={(text) => {
              setPin4(text)
              !text && pin3Ref.current.focus()
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={enviarOTP}
        style={OtpStyles.ContainerTextVerify}
      >
        <Text style={OtpStyles.TextVerify}>Verify & Proceed</Text>
      </TouchableOpacity>
      <View style={OtpStyles.ContainerdidntCode}>
        <Text style={OtpStyles.didntCode}>Didn't you receive the code?</Text>
        <TouchableOpacity>
          <Text style={OtpStyles.sendCode}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Otp

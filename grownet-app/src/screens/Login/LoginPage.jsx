import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PhoneInput from 'react-native-phone-number-input'
import axios from '../../../axiosConfig.'
import { LoginStyle } from '../../styles/LoginStyle'
import { GlobalStyles } from '../../styles/Styles'
import { validationApiUrl, onlyCountries } from '../../config/urls.config'
import useTokenStore from '../../store/useTokenStore'
import { useTranslation } from 'react-i18next'

const LoginPage = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneDos, setPhoneDos] = useState('')
  const [countries, setCountries] = useState([])
  const { setCountryCode } = useTokenStore()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(onlyCountries)

        const countriesData = response.data.countries
        const countryNames = countriesData.map((country) =>
          country.short_name.toUpperCase(),
        )

        setCountries(countryNames)
      } catch (error) {
        console.error('Error obteniendo los paises disponibles:', error)
      }
    }

    fetchData()
  }, [])

  const handleChange = async () => {
    const countrySplit = phoneDos.split(phoneNumber)
    const countryCod = countrySplit[0]
    const countryP = countryCod.split('+')[1]
    setCountryCode(countryP)

    const state = {
      form: {
        country: parseInt(countryP, 10),
        telephone: parseInt(phoneNumber, 10),
      },
      error: false,
      errorMsg: '',
    }

    try {
      const response = await axios.post(validationApiUrl, state.form)
      console.log('====================================')
      console.log('respuesta axios:', response)
      console.log('====================================')
      if (response.data.flag === 1) {
        navigation.navigate('otp', state.form)
        // TODO QUITAR ESTE CONSOLE LOG CUANDO YA LLEGUEN LOS MENSAJES POR TWILIO
        console.log('Respuesta con CODIGO TWILIO:', response.data)
      } else {
        console.log('====================================')
        console.log('puusss')
        console.log('====================================')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={LoginStyle.container}>
      <Image
        style={LoginStyle.tinyLogo2}
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />

      <Text style={GlobalStyles.p}>{t('login.enterMobileNumber')}</Text>
      <View style={LoginStyle.inputCountry}>
        {countries.length > 0 ? (
          <PhoneInput
            countryPickerProps={{
              countryCodes: countries,
            }}
            defaultCode={'GB'}
            placeholder={t('login.phoneNumber')}
            defaultValue={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text)
            }}
            countryCode={(info) => {
              setPhoneDos(info)
            }}
            onChangeFormattedText={(text) => {
              setPhoneDos(text)
            }}
          />
        ) : null}
      </View>
      <TouchableOpacity
        style={GlobalStyles.btnSecundary}
        onPress={handleChange}
      >
        <Text style={GlobalStyles.textBtnSecundary}>
          {t('login.letsBegin')}
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

export default LoginPage

import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PhoneInput from 'react-native-phone-number-input'
import axios from '../../../axiosConfig.'
import { LoginStyle, ModalStyle } from '../../styles/LoginStyle'
import { GlobalStyles } from '../../styles/Styles'
import { validationApiUrl, onlyCountries } from '../../config/urls.config'
import useTokenStore from '../../store/useTokenStore'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

const LoginPage = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneDos, setPhoneDos] = useState('')
  const [countries, setCountries] = useState([])
  const { setCountryCode, countryCode } = useTokenStore()
  const [showModal, setShowModal] = useState(false)
  const [showEmptyInputModal, setShowEmptyInputModal] = useState(false)

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
    if (phoneNumber === '') {
      setShowEmptyInputModal(true)
      return
    }

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
        setShowModal(true)
        console.log('====================================')
        console.log('puusss')
        console.log('====================================')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const closeModal = () => {
    setShowModal(false)
    setShowEmptyInputModal(false)
  }
  const handleOutsidePress = () => {
    closeModal()
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
      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={ModalStyle.modalContainer}>
            <View style={ModalStyle.centeredView}>
              <View style={ModalStyle.modalView}>
                <MaterialIcons name="error-outline" size={45} color="#ee6055" />
                <Text style={ModalStyle.modalTextTitle}>We apologize</Text>
                <Text style={ModalStyle.modalText}>
                  We didn't find the mobile number registered
                </Text>
                <Text style={ModalStyle.modalText2}>
                  {`+${countryCode} ${phoneNumber}`}
                </Text>

                <TouchableOpacity onPress={closeModal}>
                  <Text style={ModalStyle.TextChange} onPress={closeModal}>
                    Change mobile number
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={showEmptyInputModal}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={LoginStyle.modalContainer}>
          <View style={LoginStyle.modalContent}>
            <MaterialIcons name="error-outline" size={45} color="#ee6055" />
            <Text style={LoginStyle.modalText}></Text>
            <Text style={LoginStyle.modalText}>por favor ingresa un valor</Text>
            <Text style={LoginStyle.modalText}>
              {`+${countryCode} ${phoneNumber}`}
            </Text>

            <Text style={LoginStyle.modalText}>Change mobile number</Text>

            <TouchableOpacity
              style={GlobalStyles.btnPrimary}
              onPress={closeModal}
            >
              <Text style={GlobalStyles.textBtnPrimary}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default LoginPage

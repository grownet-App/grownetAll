/* eslint-disable no-unused-vars */
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useRef } from 'react'
import { SafeAreaView, TouchableOpacity, View, Animated } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import useTokenStore from '../../store/useTokenStore'
import { SettingsStyle } from '../../styles/SettingsStyle'
import AccordionListItem from './AccordionListItem'
import { Iconify } from 'react-native-iconify'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const { setToken } = useTokenStore()

  const [isListOpen, setListOpen] = useState(false)
  const logoutButtonPosition = useRef(new Animated.Value(0)).current

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const handleListToggle = () => {
    setListOpen(!isListOpen)
    Animated.timing(logoutButtonPosition, {
      toValue: isListOpen ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }

  const handleLogout = async () => {
    try {
      setToken(null)
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }
  return (
    <SafeAreaView style={SettingsStyle.settings}>
      <Text style={SettingsStyle.tittle}>{t('settings.hi')} 👋</Text>
      <Text style={SettingsStyle.subtittle}>{t('settings.helpText')}</Text>
      <Card style={SettingsStyle.card}>
        <Card.Content style={SettingsStyle.card1}>
          <View>
            <Text variant="titleLarge" style={SettingsStyle.txtCard}>
              {t('settings.restaurants')}
            </Text>
            <Text variant="bodyMedium" style={SettingsStyle.txtCard2}>
              {t('settings.editRestaurants')}
            </Text>
          </View>
          <Ionicons name="add-circle-outline" size={45} color="#ffff" />
        </Card.Content>
      </Card>
      <Card style={SettingsStyle.card}>
        <Card.Content style={SettingsStyle.card1}>
          <View>
            <Text variant="titleLarge" style={SettingsStyle.txtCard}>
              {t('settings.suppliers')}
            </Text>
            <Text variant="bodyMedium" style={SettingsStyle.txtCard2}>
              {t('settings.editSuppliers')}
            </Text>
          </View>
          <Ionicons name="add-circle-outline" size={45} color="#ffff" />
        </Card.Content>
      </Card>

      <View style={SettingsStyle.settingButton}>
        <AccordionListItem
          title={t('settings.languages')}
          onListToggle={handleListToggle}
        >
          <View style={SettingsStyle.itemsAccordion}>
            <Iconify icon="circle-flags:uk" size={20} />
            <Text
              style={SettingsStyle.Languages}
              onPress={() => changeLanguage('en')}
            >
              {t('settings.english')}
            </Text>
          </View>
          <View style={SettingsStyle.itemsAccordion}>
            <Iconify icon="circle-flags:es" size={20} />
            <Text
              style={SettingsStyle.Languages}
              onPress={() => changeLanguage('es')}
            >
              {t('settings.spanish')}
            </Text>
          </View>
          <View style={SettingsStyle.itemsAccordion}>
            <Iconify icon="circle-flags:pt" size={20} />
            <Text
              style={SettingsStyle.Languages}
              onPress={() => changeLanguage('pt')}
            >
              {t('settings.portuguese')}
            </Text>
          </View>
        </AccordionListItem>
      </View>

      {/* <Button style={SettingsStyle.settingButton}>
        <Text>FAQ</Text>
        <Ionicons name="chevron-forward" size={24} color="#04444F" />
      </Button> */}
      <Animated.View
        style={[SettingsStyle.btnlogOut, { marginTop: logoutButtonPosition }]}
      >
        <TouchableOpacity
          style={SettingsStyle.btnlogOut}
          onPress={handleLogout}
        >
          <AntDesign name="logout" size={22} color="#026cd2" />
          <Text style={SettingsStyle.textLogout}>
            {''}
            {t('settings.logOut')}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}

export default Settings

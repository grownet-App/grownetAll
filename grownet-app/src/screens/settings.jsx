/* eslint-disable no-unused-vars */
import React from 'react'
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, Text } from 'react-native-paper'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import useTokenStore from '../store/useTokenStore'
import { SettingsStyle } from '../styles/SettingsStyle'

const Settings = () => {
  const navigation = useNavigation()
  const { setToken } = useTokenStore()
  const handleLogout = async () => {
    try {
      setToken(null)
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }
  return (
    <SafeAreaView style={SettingsStyle.settings}>
      <Text style={SettingsStyle.tittle}>Hi 👋</Text>
      <Text style={SettingsStyle.subtittle}>How can we help you?</Text>
      <Card style={SettingsStyle.card}>
        <Card.Content style={SettingsStyle.card1}>
          <View>
            <Text variant="titleLarge" style={SettingsStyle.txtCard}>
              Restaurants
            </Text>
            <Text variant="bodyMedium" style={SettingsStyle.txtCard2}>
              Edit your restaurants
            </Text>
          </View>
          <Ionicons name="add-circle-outline" size={45} color="#ffff" />
        </Card.Content>
      </Card>
      <Card style={SettingsStyle.card}>
        <Card.Content style={SettingsStyle.card1}>
          <View>
            <Text variant="titleLarge" style={SettingsStyle.txtCard}>
              Suppliers
            </Text>
            <Text variant="bodyMedium" style={SettingsStyle.txtCard2}>
              Edit your suppliers
            </Text>
          </View>
          <Ionicons name="add-circle-outline" size={45} color="#ffff" />
        </Card.Content>
      </Card>
      <Button style={SettingsStyle.settingButton}>
        <Text>FAQ</Text>
        <Ionicons name="chevron-forward" size={24} color="#04444F" />
      </Button>
      <TouchableOpacity style={SettingsStyle.btnlogOut} onPress={handleLogout}>
        <AntDesign name="logout" size={22} color="#026cd2" />
        <Text style={SettingsStyle.textLogout}>
          {''}
          Log out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default Settings

/* eslint-disable no-unused-vars */
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
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
const styles = StyleSheet.create({
  btnPrimary: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    width: '80%',
    marginBottom: 20,

    alignItems: 'center',
  },
  textLogout: {
    color: '#026cd2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#04444F',
    width: 300,
    padding: 16,
    marginVertical: 6,
  },
  card1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coverCard: {
    width: 300,
    height: 120,
    marginTop: 6,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  containerCard: {
    position: 'relative',
    top: -30,
  },
  TextHi: {
    fontSize: 25,
    fontWeight: 900,
    color: '#04444F',
  },
  TextHelp: {
    position: 'relative',
    color: '#04444F',
    fontSize: 20,
    top: -20,
  },

  welcome: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  p: {
    color: 'white',
    fontSize: 24,
    marginBottom: 36,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  txtCard: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtCard2: {
    color: 'white',
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    padding: 16,
    marginBottom: 24,
    borderRadius: 30,
    color: 'white',
  },
})
export default Settings

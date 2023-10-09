/* eslint-disable no-unused-vars */
import React from 'react'
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, Text } from 'react-native-paper'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import useTokenStore from '../store/useTokenStore'

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
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.TextHi}>Hi 👋</Text>
        <Text style={styles.TextHelp}>¿How can we help you?</Text>
        <View style={styles.containerCard}>
          <Card style={styles.card}>
            <Card.Content style={styles.card1}>
              <View>
                <Text variant="titleLarge" style={styles.txtCard}>
                  Restaurants
                </Text>
                <Text variant="bodyMedium" style={styles.txtCard2}>
                  Edit your restaurants
                </Text>
              </View>
              <Ionicons
                name="add-circle-outline"
                size={40}
                color="#ffff"
                style={{ padding: 10 }}
              />
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Content style={styles.card1}>
              <View>
                <Text variant="titleLarge" style={styles.txtCard}>
                  Suppliers
                </Text>
                <Text variant="bodyMedium" style={styles.txtCard2}>
                  Edit your suppliers
                </Text>
              </View>
              <Ionicons
                name="add-circle-outline"
                size={40}
                color="#ffff"
                style={{ padding: 10 }}
              />
            </Card.Content>
          </Card>
          <Card style={styles}>
            <Card.Cover
              style={styles.coverCard}
              source={{ uri: 'https://picsum.photos/700' }}
            />
          </Card>
        </View>
        <TouchableOpacity style={styles.btnPrimary} onPress={handleLogout}>
          <Text style={styles.textLogout}>
            <AntDesign
              name="logout"
              size={24}
              color="#026cd2"
              style={{ marginHorizontal: 10, fontWeight: 'bold' }}
            />
            {''}
            Log out
          </Text>
        </TouchableOpacity>
      </View>
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

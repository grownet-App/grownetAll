import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';

import { Avatar, Button, Card, Text } from 'react-native-paper';

const settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hola ✋</Text>
        <Text>¿Cómo podemos ayudarte?</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.txtCard}>Restaurants</Text>
            <Text variant="bodyMedium" style={styles.txtCard}>Edit your restaurants</Text>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.txtCard}>Providers</Text>
            <Text variant="bodyMedium" style={styles.txtCard}>Edit your providers</Text>
          </Card.Content>
        </Card>
        <Card style={styles}>
          <Card.Cover style={styles.coverCard} source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate("orders")}><Text>Login</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  btnPrimary: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    width: "80%",

    alignItems: 'center',
  },
  card: {
    backgroundColor: "#04444F",
    width: "100%",
    padding: 16,
    margin: 16,
    width:300

  },
  coverCard: {
    width: 300,
    height: 120
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    justifyContent: 'space-between'
  },
  welcome: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12
  },
  p: {
    color: 'white',
    fontSize: 24,
    marginBottom: 36
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
    marginBottom: 30
  },
  txtCard: {
    color: "white"
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    padding: 16,
    marginBottom: 24,
    borderRadius: 30,
    color: 'white'
  }
});
export default settings;
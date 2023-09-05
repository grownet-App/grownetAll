import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from "react-native-phone-number-input";
import { useState } from 'react';

import { onlyCountries, validationApiUrl } from "../config/urls.config"
const loginPage = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = () => {
    console.log(phoneNumber);
    /*setPhoneNumber(value);
     setCountry(selectedCountry.dialCode);
    setValid(validatePhoneNumber(value)); */
  };
  console.log(handleChange);
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.p}>Enter your mobile number:</Text>
      <PhoneInput
        countryPickerProps={{
          countryCodes: ['CO', 'ES', 'PT', 'GB'],
        }}
        defaultCode='CO'
        defaultValue={phoneNumber}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text)
        }}
      />

      <TouchableOpacity style={styles.btnPrimary} onPress={handleChange}><Text>Ver numero</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
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
  container: {
    flex: 1,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    paddingTop: 100
  },
  welcome: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12
  },
  p: {
    color: 'white',
    fontSize: 16,
    marginBottom: 36
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30
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

export default loginPage;
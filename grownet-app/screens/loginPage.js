import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { useState } from "react";
import axios from "axios";
import { GlobalStyles } from "./styles";
import { onlyCountries, validationApiUrl } from "../config/urls.config";
const loginPage = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneDos, setPhoneDos] = useState("");
  let country;
  const handleChange = async () => {
    let countrySplit = phoneDos.split(phoneNumber);
    let countryCod = countrySplit[0];
    country = countryCod.split("+")[1];

    const state = {
      form: {
        countrie: parseInt(country),
        telephone: parseInt(phoneNumber),
      },
      error: false,
      errorMsg: "",
    };

    try {
      const response = await axios.post(validationApiUrl, state.form);
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      if (response.data.flag === 1) {
        navigation.navigate("otp", state.form);
        //TODO QUITAR ESTE CONSOLE LOG CUANDO YA LLEGUEN LOS MENSAJES POR TWILIO
        console.log("Respuesta con CODIGO TWILIO:", response.data);
      } else {
        console.log("====================================");
        console.log("puusss");
        console.log("====================================");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/logo.png")} />
      <Text style={styles.p}>Enter your mobile number:</Text>
      <PhoneInput
        countryPickerProps={{
          countryCodes: ["CO", "ES", "PT", "GB"],
        }}
        defaultCode="CO"
        defaultValue={phoneNumber}
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        countryCode={(info) => {
          setPhoneDos(info);
        }}
        onChangeFormattedText={(text) => {
          setPhoneDos(text);
        }}
      />

      <TouchableOpacity style={GlobalStyles.btnWhite} onPress={handleChange}>
        <Text>Let’s Begin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GlobalStyles.btnSecundary}
        onPress={() => navigation.navigate("suppliers")}
      >
        <Text style={GlobalStyles.textInput}>Iniciar sesion</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 16,
    width: "80%",

    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#026CD2",
    alignItems: "center",
    paddingTop: 100,
  },
  welcome: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 12,
  },
  p: {
    color: "white",
    fontSize: 16,
    marginBottom: 36,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    padding: 16,
    marginBottom: 24,
    borderRadius: 30,
    color: "white",
  },
});

export default loginPage;

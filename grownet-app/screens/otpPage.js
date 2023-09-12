import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
} from "react-native";
import React, { Component, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { otpApiUrl } from "../config/urls.config";
import axios from "axios";

const Otp = () => {
  const navigation = useNavigation();
  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const route = useRoute();

  const enviarOTP = async () => {
    let otp = pin1 + pin2 + pin3 + pin4;

    const formData = route.params;

    const apiUrl = `${otpApiUrl}?countrie=${formData.countrie}&telephone=${formData.telephone}&code=${otp}`;

    try {
      const response = await axios.post(apiUrl);
      console.log("Respuesta de la API:", response.data);
      const token = response.data.token;
      console.log("token:", token);
    } catch (error) {
      console.error("Error al enviar OTP:", error);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.containerOtpPage}>
      <Image
        style={GlobalStyles.tinyLogoOtp}
        source={require("../assets/logo.png")}
      />
      <Text style={GlobalStyles.textOtp1}>Enter your verification code</Text>
      <Text style={GlobalStyles.textOtp2}>
        An 4 digit code has been sent to your phone
      </Text>
      <View style={GlobalStyles.containerOTP}>
        <View style={GlobalStyles.textInputView}>
          <TextInput
            ref={pin1Ref}
            style={GlobalStyles.textInput}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(text) => {
              setPin1(text);
              text ? pin2Ref.current.focus() : pin1Ref.current.focus();
            }}
          />
        </View>
        <View style={GlobalStyles.textInputView}>
          <TextInput
            ref={pin2Ref}
            style={GlobalStyles.textInput}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(text) => {
              setPin2(text);
              text ? pin3Ref.current.focus() : pin1Ref.current.focus();
            }}
          />
        </View>
        <View style={GlobalStyles.textInputView}>
          <TextInput
            ref={pin3Ref}
            style={GlobalStyles.textInput}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(text) => {
              setPin3(text);
              text ? pin4Ref.current.focus() : pin2Ref.current.focus();
            }}
          />
        </View>
        <View style={GlobalStyles.textInputView}>
          <TextInput
            ref={pin4Ref}
            style={GlobalStyles.textInput}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(text) => {
              setPin4(text);
              !text && pin3Ref.current.focus();
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={enviarOTP}
        style={GlobalStyles.ContainerTextVerify}
      >
        <Text style={GlobalStyles.TextVerify}>Verify & Proceed</Text>
      </TouchableOpacity>
      <View style={GlobalStyles.ContainerdidntCode}>
        <Text style={GlobalStyles.didntCode}>Didn't you receive the code?</Text>
        <TouchableOpacity>
          <Text style={GlobalStyles.sendCode}>Send again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

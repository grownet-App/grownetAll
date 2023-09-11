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
    const refBtn = useRef()
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
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.containerOTP}>
                <View style={GlobalStyles.textInputView}>
                    <TextInput
                        ref={pin1Ref}
                        style={GlobalStyles.textBtnW}
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
                        style={GlobalStyles.textBtnW}
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
                        style={GlobalStyles.textBtnW}
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
                        style={GlobalStyles.textBtnW}
                        keyboardType={"number-pad"}
                        maxLength={1}
                        onChangeText={(text) => {
                            setPin4(text);
                            !text && pin3Ref.current.focus();
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity ref={refBtn} style={GlobalStyles.btnSecundary} onPress={enviarOTP}>
                <Text style={GlobalStyles.textInput}>Verify & Proceed</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Otp;

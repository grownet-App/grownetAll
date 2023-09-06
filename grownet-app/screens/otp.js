import { StyleSheet, Text, TextInput, Image, TouchableOpacity, Alert, View, SafeAreaView } from 'react-native';
import React, { Component, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GlobalStyles } from './styles'

export default function Otp(props) {
    const navigation = useNavigation();
    const pin1Ref = useRef()
    const pin2Ref = useRef()
    const pin3Ref = useRef()
    const pin4Ref = useRef()
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");

/*     console.log(props.countryOTP);
    console.log(props.idPhone); */
    const enviarOTP = () => {
        let otp = pin1 + pin2 + pin3 + pin4;
    }

    return (
        <SafeAreaView style={GlobalStyles.container}>
            <View style={GlobalStyles.containerOTP}>
                <View style={GlobalStyles.textInputView}>
                    <TextInput
                        ref={pin1Ref}
                        style={GlobalStyles.textInput}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={text => {
                            setPin1(text)
                            text ? pin2Ref.current.focus() : pin1Ref.current.focus();
                        }}
                    />
                </View>
                <View style={GlobalStyles.textInputView}>
                    <TextInput
                        ref={pin2Ref}
                        style={GlobalStyles.textInput}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={text => {
                            setPin2(text)
                            text ? pin3Ref.current.focus() : pin1Ref.current.focus();
                        }}
                    />
                </View>
                <View style={GlobalStyles.textInputView}>
                    <TextInput
                        ref={pin3Ref}
                        style={GlobalStyles.textInput}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={text => {
                            setPin3(text)
                            text ? pin4Ref.current.focus() : pin2Ref.current.focus();
                        }}
                    />
                </View>
                <View style={GlobalStyles.textInputView}>
                    <TextInput
                        ref={pin4Ref}
                        style={GlobalStyles.textInput}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={text => {
                            setPin4(text)
                            !text && pin3Ref.current.focus();
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={enviarOTP} style={GlobalStyles.btnSecundary}><Text style={GlobalStyles.textInput}>Verify & Proceed</Text></TouchableOpacity>
        </SafeAreaView>

    )

}

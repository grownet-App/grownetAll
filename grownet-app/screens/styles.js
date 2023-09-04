import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    btnPrimary: {
        padding: 35,
        backgroundColor: '#026CD2',
        borderRadius: 16,
        width: "100%",
        fontWeight: 500,
        alignItems: 'center',
        color: "white"
    },
    btnSecundary: {
        backgroundColor: "#04444F",
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 30,
        margin: .5,
        fontWeight: 500,
        alignItems: 'center',

    },
    btnWhite: {
        backgroundColor: "white",
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 30,
        marginVertical: 16,
        fontWeight: 500,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#026CD2',
        alignItems: 'center',
        justifyContent: "center",

    },
    linkWhite: {
        color: "white",
        fontWeight: 400,
        fontSize: 18,
        paddingVertical: 50
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
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    textInput: {
        color: 'white',
        fontWeight: 500,
        fontSize: 18
    },
    textBtnW: {
        color: "#04444F",
        fontWeight: 500,
        fontSize: 18
    }
}); 
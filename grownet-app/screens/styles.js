import React from "react";
import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  btnPrimary: {
    padding: 35,
    backgroundColor: "#026CD2",
    borderRadius: 16,
    width: "100%",
    fontWeight: 500,
    alignItems: "center",
    color: "white",
  },
  btnSecundary: {
    backgroundColor: "#04444F",
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    margin: 0.5,
    fontWeight: 500,
    alignItems: "center",
  },
  btnWhite: {
    backgroundColor: "white",
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 16,
    fontWeight: 500,
    alignItems: "center",
  },
  cardSuppliers: {
    backgroundColor: "#1D446A",
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: "#026CD2",
    alignItems: "center",
    justifyContent: "center",
  },

  containerOTP: {
    backgroundColor: "#026CD2",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 500,
  },
  linkWhite: {
    color: "white",
    fontWeight: 400,
    fontSize: 18,
    paddingVertical: 50,
  },
  welcome: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 12,
  },
  p: {
    color: "white",
    fontSize: 24,
    marginBottom: 36,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  textInput: {
    color: "white",
    fontWeight: 500,
    fontSize: 18,
    textAlign: "center",
  },
  textInputView: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    textAlign: "center",
    justifyContent: "center",
    width: 50,
    marginHorizontal: 12,
  },
  textBtnW: {
    color: "#04444F",
    fontWeight: 500,
    fontSize: 18,
  },
  //styles suppliers
  suppliers: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  titleSuppliers: {
    display: "flex",
    alignItems: "center",
  },

  textSupplier: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 25,
    color: "#FFFFFF",
  },
  suppliersCateg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 350,
    backgroundColor: "#164e84",
    marginVertical: 10,
    borderRadius: 21,
    overflow: "hidden",
  },
  imgsuppliers: {
    position: "relative",
    marginRight: 20,
    width: 100,
    height: 125,
    top: 30,
  },
});

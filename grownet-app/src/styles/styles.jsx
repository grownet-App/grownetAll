import { StyleSheet, Platform } from 'react-native'

export const GlobalStyles = StyleSheet.create({
  btnPrimary: {
    padding: 35,
    backgroundColor: '#026CD2',
    borderRadius: 16,
    width: '100%',
    fontWeight: 500,
    alignItems: 'center',
    color: 'white',
  },
  btnSecundary: {
    backgroundColor: '#04444F',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    margin: 0.5,
    fontWeight: 500,
    alignItems: 'center',
  },
  btnWhite: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 16,
    fontWeight: 500,
    alignItems: 'center',
  },
  cardSuppliers: {
    backgroundColor: '#1D446A',
    fontWeight: 500,
  },
  container: {
    flex: 2,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  linkWhite: {
    color: 'white',
    fontWeight: 400,
    fontSize: 18,
    paddingVertical: 50,
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
  tinyLogo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  textBtnW: {
    color: '#04444F',
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
  },
  containerButtonLets: {
    backgroundColor: '#04444F',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 28,
    fontWeight: 500,
    alignItems: 'center',
  },
  buttonLets: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  //styles suppliers
  suppliers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  titleSuppliers: {
    display: 'flex',
    alignItems: 'center',
  },

  textSupplier: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 25,
    color: '#FFFFFF',
  },
  suppliersCateg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#164e84',
    marginVertical: 10,
    borderRadius: 21,
    overflow: 'hidden',
  },
  imgsuppliers: {
    position: 'relative',
    marginRight: 20,
    width: 100,
    height: 125,
    top: 30,
  },
  //carousel styles
  slide: {
    marginTop: '30%',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  containerButtton: {
    marginBottom:
      Platform.OS === 'android' || Platform.OS === 'ios' ? '20%' : '40%',
  },
  paginatioCarousel: {
    marginBottom: 33,
  },

  //OTP styles
  tinyLogoOtp: {
    width: 250,
    height: 254,
  },
  textOtp1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  },
  textOtp2: {
    color: '#FFFFFF',
    marginTop: 20,
  },
  containerOtpPage: {
    flex: 1,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerOTP: {
    backgroundColor: '#026CD2',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    marginBottom: 50,
  },
  textInputView: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    textAlign: 'center',
    justifyContent: 'center',
    width: 55,
    height: 60,
    marginHorizontal: 12,
  },
  textInput: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  textRegister: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  ContainerTextVerify: {
    backgroundColor: '#04444F',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 80,
  },
  TextVerify: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  ContainerdidntCode: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  didntCode: {
    color: '#FFFFFF',
  },
  sendCode: {
    color: '#85FE9D',
    fontWeight: 'bold',

    marginLeft: 5,
  },
})

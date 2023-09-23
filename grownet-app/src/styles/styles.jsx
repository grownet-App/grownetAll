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
})
export const CarouselStyles = StyleSheet.create({
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
})

export const OtpStyles = StyleSheet.create({
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

export const SuppliersStyles = StyleSheet.create({
  // suppliers styles
  suppliers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  suppliersBg: {
    width: 322,
    height: 125,
    marginVertical: 10,
    borderRadius: 21,
    marginBottom: 10,
  },
})

export const RestaurantStyles = StyleSheet.create({
  // restaurants  styles

  restaurants: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  TextDirectionRestaurant: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  RestaurantBg: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 322,
    height: 150,
    backgroundColor: '#04444f',
    marginVertical: 10,
    borderRadius: 21,
    overflow: 'hidden',
    padding: 10,
  },
  buttonAddCont: {
    marginTop: 10,
    backgroundColor: '#026cd2',
    paddingHorizontal: 10,
    borderRadius: 50,
    width: 222,
  },
  containButtonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textAddRestaurant: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ffff',
    paddingRight: 10,
  },
})

export const ProductsStyles = StyleSheet.create({
  //MAKE YOUR ORDER

  //SEARCH BAR
  containerSearch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    height: 50,
  },

  BgInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 51,
    paddingLeft: 20,

    fontSize: 20,
  },
  iconSearch: {
    position: 'absolute',
    right: 30,
    top: 15,
  },
  //PRODUCT CARD
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 20,
    height: 140,
    width: '85%',
  },
  containerImage: {
    width: 150,
    height: 100,
  },
  ImageCardProduct: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  containName: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  count: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 5,
    width: 80,
    height: 45,
    borderRadius: 51,
  },
  button: {
    backgroundColor: 'transparent',
    width: 20,
    fontSize: 25,
    color: '#62c471',
    fontWeight: 'bold',
  },
  button_: {
    backgroundColor: 'transparent',
    width: 20,
    fontSize: 25,
    color: '#62c471',
    fontWeight: 'bold',

    textAlign: 'center',
  },
  containerSelect: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10,
  },
  containerDrop: {
    width: 80,
  },
  textName: {
    color: '#04444f',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textPrice: {
    color: '#0d6efd',
    fontWeight: 'bold',
  },
})

export const OrdersDetailStyles = StyleSheet.create({
  containerDetails: {
    width: '85%',
    backgroundColor: '#e9f4ff',
    padding: 24,
    borderRadius: 20,
  },

  taxFont: {
    fontSize: 20,
    color: '#04444f',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: '#04444f',
    paddingBottom: 5,
  },
  productDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  totalDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#bbfacf',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
  btnPrimary: {
    alignItems: 'center',
    backgroundColor: '#026cd2',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 32,
  },
  Paymenttext: {
    color: '#04444f',
  },
  CurrentValuetext: {
    color: '#04444f',
    fontWeight: 'bold',
  },
  ContinueText: { color: '#ffff', fontWeight: 'bold' },
})

export const OrderSuccessfulStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 307,
    height: 359,
  },
  containerImage: {
    alignItems: 'center',
  },
  textSuccessful: {
    color: '#026cd2',
    fontWeight: 900,
    fontSize: 30,
  },
  btnPrimary: {
    backgroundColor: '#026cd2',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 32,
    width: 145,
    height: 42,
  },
  btnPrimary2: {
    backgroundColor: '#ffff',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 32,
    borderColor: '#0d6efd',
    borderWidth: 1,
    width: 145,
    height: 42,
  },
})

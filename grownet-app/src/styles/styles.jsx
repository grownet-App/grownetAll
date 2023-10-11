import { StyleSheet } from 'react-native'

export const GlobalStyles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#3B3B3B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 3,
  },
  btnPrimary: {
    backgroundColor: '#026cd2',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    margin: 0.5,
    alignItems: 'center',
  },
  btnSecundary: {
    backgroundColor: '#04444F',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 30,
    margin: 0.5,
    alignItems: 'center',
  },
  textBtnSecundary: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PoppinsSemi',
  },
  btnWhite: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 16,
    alignItems: 'center',
  },
  textBtnW: {
    color: '#04444F',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PoppinsSemi',
  },
  cardSuppliers: {
    backgroundColor: '#1D446A',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkWhite: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    paddingVertical: 50,
    fontFamily: 'PoppinsRegular',
  },
  p: {
    color: 'white',
    fontSize: 16,
    marginBottom: 25,
    fontFamily: 'PoppinsRegular',
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
    height: 175,
    width: '85%',
  },
  containerImage: {
    width: '40%',
    height: '100%',
  },
  ImageCardProduct: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    justifyContent: 'space-around',
    marginRight: 5,
    width: 80,
    height: 45,
    borderRadius: 51,
  },
  countOrderD: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 5,
    width: 100,
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
  countSelect: {
    fontSize: 20,
    color: '#04444f',
    marginRight: 5,
  },
  button2: {
    backgroundColor: 'transparent',
    width: 20,
    fontSize: 25,
    color: '#62c471',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
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
    fontSize: 15,
    width: 120,
  },
  textName1: {
    color: '#868686',
    fontSize: 12,
  },
  textPrice: {
    color: '#0d6efd',
    fontWeight: 'bold',
  },

  containerCards: { flex: 1, marginTop: 10 },
  //PRODUCT CATEGORIES
  fixedContainer: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  contenImage: {
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 25,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#144D56',
    elevation: 4,
  },
  text: { color: '#04444f', textAlign: 'center', fontWeight: 'bold' },
  bgContinue: {
    alignItems: 'center',
    backgroundColor: '#026cd2',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
    width: '50%',
  },
  ContinueText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  //PRODUCT DETAIL

  containerDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containSelect: {
    backgroundColor: 'white',
    borderRadius: 51,
    marginRight: 5,
    width: 100,
    height: 45,
  },

  textOrder: {
    color: '#04444f',
    fontSize: 20,
    marginBottom: 5,
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 90,
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

export const OrderInformationStyles = StyleSheet.create({
  PrimaryTex: {
    color: '#04444f',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  containerInputs: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    width: '90%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 15,
    color: '#a9a9a9',
  },
  inputRequirements: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    fontSize: 15,
    padding: 10,
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
  },
  btnPrimary: {
    alignItems: 'center',
    backgroundColor: '#026cd2',
    paddingHorizontal: 35,
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 20,
    width: '80%',
  },
  ContinueText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
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
    fontWeight: '900',
    fontSize: 30,
  },
  btnPrimary: {
    backgroundColor: '#026cd2',

    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 32,
    width: 160,
    height: 42,
  },
  btnPrimary2: {
    backgroundColor: '#ffff',
    paddingVertical: 12,
    borderRadius: 30,
    marginTop: 32,
    borderColor: '#0d6efd',
    borderWidth: 1,
    width: 160,
  },
  ContinueText: {
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ContinueText2: {
    color: '#0d6efd',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
})

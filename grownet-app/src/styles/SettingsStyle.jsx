import { StyleSheet } from 'react-native'

export const SettingsStyle = StyleSheet.create({
  settings: {
    alignItems: 'center',
  },
  tittle: {
    fontSize: 22,
    color: '#04444F',
    fontFamily: 'PoppinsSemi',
  },
  subtittle: {
    color: '#04444F',
    fontSize: 17,
    fontFamily: 'PoppinsRegular',
  },
  btnlogOut: {
    padding: 16,
    width: '80%',
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textLogout: {
    color: '#026cd2',
    fontSize: 18,
    fontFamily: 'PoppinsSemi',
    marginLeft: 12,
  },
  cardButton: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#04444F',
    width: 300,
    height: 120,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  card1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerCard: {
    width: 330,
    height: 150,
  },
  txtCard: {
    color: 'white',
    fontFamily: 'PoppinsSemi',
  },
  txtCard2: {
    color: 'white',
    marginVertical: 10,
    fontFamily: 'PoppinsRegular',
  },
  settingButton: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 10,
    justifyContent: 'space-between',
  },
})

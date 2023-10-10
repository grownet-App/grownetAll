import { StyleSheet } from 'react-native'

export const RecordStyle = StyleSheet.create({
  record: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardRecord: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 350,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  tittle: {
    fontSize: 18,
    color: '#04444F',
    fontFamily: 'PoppinsSemi',
  },
  text: {
    fontSize: 15,
    color: '#04444F',
    fontFamily: 'PoppinsRegular',
    marginBottom: 8,
  },
  btnPrimary: {
    backgroundColor: '#026cd2',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 30,
    margin: 0.5,
    alignItems: 'center',
  },
  textCard: {
    alignItems: 'center',
  },
})

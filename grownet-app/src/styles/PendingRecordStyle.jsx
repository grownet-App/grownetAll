import { StyleSheet } from 'react-native'

export const PendingStyle = StyleSheet.create({
  receptionCard: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 350,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'PoppinsSemi',
    fontSize: 20,
    color: '#04444f',
    marginVertical: 15,
  },
  cardProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: '#04444f',
  },
  p: {
    fontFamily: 'PoppinsRegular',
    fontSize: 17,
    color: '#868686',
  },
  dispute: {
    paddingLeft: 30,
    justifyContent: 'space-between',
    width: '50%',
  },
  disputeRight: {
    width: '50%',
    paddingRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
})
export const DisputeStyle = StyleSheet.create({
  dispute: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardTittle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 25,
    color: '#04444f',
  },
  quantity: {
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: '#04444f',
  },
  cardTabs: {
    width: 350,
    backgroundColor: 'pink',
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: '#04444f',
  },
  p: {
    fontFamily: 'PoppinsRegular',
    fontSize: 17,
    color: '#868686',
  },
})

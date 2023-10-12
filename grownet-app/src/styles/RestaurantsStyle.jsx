import { StyleSheet } from 'react-native'
export const RestaurantStyle = StyleSheet.create({
  restaurants: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  TextDirectionRestaurant: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    fontFamily: 'PoppinsRegular',
  },
  RestaurantBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 150,
    backgroundColor: '#04444f',
    marginVertical: 10,
    marginHorizontal: 5,
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
    marginBottom: 25,
  },
  containButtonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textAddRestaurant: {
    fontSize: 15,
    color: '#ffff',
    fontFamily: 'PoppinsSemi',
    paddingRight: 10,
  },
})

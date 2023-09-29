import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect } from 'react'
import { availableRestaurants } from '../../config/urls.config'
import { RestaurantStyles } from '../../styles/styles'
import axios from '../../../axiosConfig.'
import useTokenStore from '../../store/useTokenStore'
import useOrderStore from '../../store/UseOrderStore'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Restaurants = () => {
  const navigation = useNavigation()
  const { token } = useTokenStore()
  const { restaurants, setRestaurants, setSelectedRestaurant } = useOrderStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(availableRestaurants, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setSelectedRestaurant(null)
        setRestaurants(response.data.customersChef)
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error)
      }
    }

    fetchData()
  }, [token, setRestaurants, setSelectedRestaurant])

  console.log('RESTAURANTES:', restaurants)
  const urlImg =
    'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/'

  const onPressAdd = () => {
    //TODO,agregar restaurante
  }
  const onPressSuppliers = () => {
    navigation.navigate('suppliers')
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={RestaurantStyles.restaurants}>
        {restaurants.map((restaurant) => {
          const imageUrl = `${urlImg}${restaurant.image}`
          console.log('iamgen:', imageUrl)

          return (
            <TouchableOpacity
              onPress={() => onPressSuppliers()}
              key={restaurant.accountNumber}
            >
              <ImageBackground
                style={RestaurantStyles.RestaurantBg}
                source={require('../../../assets/img/backgroundRestaurants.png')}
              >
                <Image
                  source={{ uri: imageUrl }}
                  style={{ width: 160, height: 160 }}
                />
                <Text style={RestaurantStyles.TextDirectionRestaurant}>
                  {restaurant.address}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )
        })}
        <TouchableOpacity
          onPress={onPressAdd}
          style={RestaurantStyles.buttonAddCont}
        >
          <View style={RestaurantStyles.containButtonAdd}>
            <Ionicons
              name="add-circle-outline"
              size={34}
              color="#ffff"
              style={{ padding: 10 }}
            />
            <Text style={RestaurantStyles.textAddRestaurant}>
              Add restaurant
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Restaurants

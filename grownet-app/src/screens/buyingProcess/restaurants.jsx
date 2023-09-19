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
import { GlobalStyles } from '../../styles/styles'
import axios from 'axios'
import useTokenStore from '../../store/useTokenStore'
import useOrderStore from '../../store/UseOrderStore'
import BgRestaurant from '../../../assets/img/backgroundRestaurants.png'
import { navigate } from '../../navigation/rootNavigation'
import { FontAwesome } from '@expo/vector-icons'

const Restaurants = () => {
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
    'https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/'

  const onPressAdd = () => {
    //TODO,agregar restaurante
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={GlobalStyles.suppliers}>
        {restaurants.map((restaurant) => (
          <ImageBackground
            style={GlobalStyles.RestaurantBg}
            key={restaurant.account_number}
            source={{ uri: BgRestaurant }}
          >
            <Image
              source={{ uri: urlImg + restaurant.image }}
              alt={restaurant.account_name}
              style={{ width: 160, height: 160 }}
            />
            <Text style={GlobalStyles.TextDirectionRestaurant}>
              {restaurant.address}
            </Text>
          </ImageBackground>
        ))}
        <TouchableOpacity
          onPress={onPressAdd}
          style={GlobalStyles.buttonAddCont}
        >
          <View style={GlobalStyles.containButtonAdd}>
            <FontAwesome
              name="plus-circle"
              size={30}
              color="#ffff"
              regular
              style={{ padding: 10 }}
            />
            <Text style={GlobalStyles.textAddRestaurant}>Add restaurant</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Restaurants

import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { availableRestaurants } from '../../config/urls.config'
import { RestaurantStyles } from '../../styles/styles'
import axios from '../../../axiosConfig.'
import useTokenStore from '../../store/useTokenStore'
import useOrderStore from '../../store/useOrderStore'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Restaurants = () => {
  const navigation = useNavigation()
  const { token } = useTokenStore()
  const { restaurants, setRestaurants, setSelectedRestaurant } = useOrderStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(availableRestaurants, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setSelectedRestaurant(null)
        setRestaurants(response.data.customersChef)

        if (response.data.customersChef.length === 1) {
          setSelectedRestaurant(response.data.customersChef[0])
          navigation.navigate('suppliers')
        }
      } catch (error) {
        console.error('Error al obtener los restaurantes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [setRestaurants, setSelectedRestaurant, token, navigation])

  const urlImg = process.env.EXPO_PUBLIC_BASE_IMG

  const onPressAdd = () => {
    // TODO,agregar restaurante
  }
  const onPressSuppliers = (restaurant) => {
    setSelectedRestaurant(restaurant)
    navigation.navigate('suppliers')
  }

  return (
    <SafeAreaView>
      {!isLoading && (
        <ScrollView contentContainerStyle={RestaurantStyles.restaurants}>
          {restaurants.map((restaurant) => {
            const imageUrl = `${urlImg}${restaurant.image}`

            return (
              <TouchableOpacity
                onPress={() => onPressSuppliers(restaurant)}
                key={restaurant.accountNumber}
              >
                <ImageBackground
                  style={RestaurantStyles.RestaurantBg}
                  source={require('../../../assets/img/backgroundRestaurants.png')}
                >
                  <Image
                    source={{
                      uri: imageUrl,
                    }}
                    style={{ width: 160, height: 160 }}
                    onError={(error) => {
                      console.log('Error cargando la imagen', error)
                    }}
                    onLoad={() => {
                      console.log('Imagen cargada correctamente!')
                    }}
                  />
                  <Text
                    style={RestaurantStyles.TextDirectionRestaurant}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
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
      )}
    </SafeAreaView>
  )
}

export default Restaurants

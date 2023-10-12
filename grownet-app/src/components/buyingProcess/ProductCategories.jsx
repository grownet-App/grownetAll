import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { ProductsStyles } from '../../styles/Styles'
import { MaterialIcons } from '@expo/vector-icons'
import { Iconify } from 'react-native-iconify'
import { BlurView } from 'expo-blur'
import useTokenStore from '../../store/useTokenStore'
import { allCategories } from '../../config/urls.config'
import axios from '../../../axiosConfig.'
import { useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('window')
function ProductsCategories({
  blurIntensity,
  showFavorites,
  toggleShowFavorites,
  categoriesProduct,
  filterCategory,
}) {
  const navigation = useNavigation()
  const isCarousel = useRef(null)
  const [categories, setCategories] = useState()
  const { token } = useTokenStore()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(allCategories, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setCategories(response.data.categories)
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const urlImg = process.env.EXPO_PUBLIC_BASE_IMG
  const updatedCategories = [...categoriesProduct, 'Favorites']
  const renderItem = ({ item }) => {
    return (
      <View style={ProductsStyles.contenImage}>
        {item === 'Favorites' && showFavorites ? (
          <TouchableOpacity onPress={toggleShowFavorites}>
            <Iconify icon="icon-park-solid:back" size={70} color="#62C471" />
          </TouchableOpacity>
        ) : item === 'Favorites' ? (
          <TouchableOpacity onPress={toggleShowFavorites}>
            <MaterialIcons name="favorite" size={70} color="#62C471" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity key={item} onPress={() => filterCategory(item)}>
          {item === 'All' && (
            <Iconify icon="fluent-emoji:basket" size={70} color="#62C471" />
          )}
          {categories?.map((categoryApi) => (
            <View key={categoryApi.id}>
              {item === categoryApi.name && (
                <>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: urlImg + categoryApi.image }}
                  />
                </>
              )}
            </View>
          ))}
          <Text style={ProductsStyles.text}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const handlePress = () => {
    navigation.navigate('ordersDetail')
  }
  return (
    <SafeAreaView style={ProductsStyles.fixedContainer}>
      <BlurView intensity={blurIntensity}>
        <Carousel
          data={updatedCategories}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width / 3}
          autoplay={true}
          loop={true}
          layout="default"
          useScrollView={true}
          ref={isCarousel}
          scrollEnabled={true}
          enableSnap={true}
          inactiveSlideOpacity={1}
        />
        <View style={ProductsStyles.containerButton}>
          <TouchableOpacity
            style={ProductsStyles.bgContinue}
            onPress={handlePress}
          >
            <Text style={ProductsStyles.ContinueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </SafeAreaView>
  )
}
export default ProductsCategories
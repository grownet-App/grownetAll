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
import { ProductsStyles } from '../../styles/styles'
import { MaterialIcons } from '@expo/vector-icons'
import { Iconify } from 'react-native-iconify'
import { BlurView } from 'expo-blur'
import useTokenStore from '../../store/useTokenStore'
import { allCategories } from '../../config/urls.config'
import axios from '../../../axiosConfig.'
import Constants from 'expo-constants'

const { width } = Dimensions.get('window')

function ProductsCategories({
  blurIntensity,
  showFavorites,
  toggleShowFavorites,
  categoriesProduct,
  filterCategory,
}) {
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
  }, [])

  const urlImg = Constants.expoConfig.extra.urlImage

  const renderItem = ({ item }) => {
    return (
      <View style={ProductsStyles.contenImage}>
        <Iconify icon="fluent-emoji:basket" size={70} color="#62c471" />
        {showFavorites ? (
          <TouchableOpacity onPress={toggleShowFavorites}>
            <MaterialIcons name="favorite" size={70} color="#62c471" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleShowFavorites}>
            <Text>aqui Imagen</Text>
          </TouchableOpacity>
        )}

        {categoriesProduct.map((category) => (
          <TouchableOpacity
            style={''}
            key={category}
            onPress={() => filterCategory(category)}
          >
            {category === 'All' && (
              <Iconify icon="fluent-emoji:basket" size={70} color="#62c471" />
            )}
            {categories?.map((categoryApi) => (
              <View key={categoryApi.id}>
                {category === categoryApi.name && (
                  <>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={{ uri: urlImg + categoryApi.image }}
                    />
                  </>
                )}
              </View>
            ))}
            <Text style={{ color: 'blue' }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaView style={ProductsStyles.fixedContainer}>
      <BlurView intensity={blurIntensity}>
        <Carousel
          data={categories}
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
          <TouchableOpacity style={ProductsStyles.bgContinue}>
            <Text style={ProductsStyles.ContinueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </BlurView>
    </SafeAreaView>
  )
}
export default ProductsCategories

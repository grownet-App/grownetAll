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
import { GlobalStyles, ProductsStyles } from '../../styles/Styles'
import { MaterialIcons } from '@expo/vector-icons'
import { Iconify } from 'react-native-iconify'
import useTokenStore from '../../store/useTokenStore'
import { allCategories } from '../../config/urls.config'
import axios from '../../../axiosConfig'
import { ProductsStyle } from '../../styles/ProductsStyle'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

function ProductsCategories({
  showFavorites,
  toggleShowFavorites,
  categoriesProduct,
  filterCategory,
}) {
  const { t } = useTranslation()
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
            <Iconify icon="icon-park-solid:back" size={65} color="#62C471" />
          </TouchableOpacity>
        ) : item === 'Favorites' ? (
          <TouchableOpacity onPress={toggleShowFavorites}>
            <MaterialIcons name="favorite" size={65} color="#62C471" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity key={item} onPress={() => filterCategory(item)}>
          {item === 'All' && (
            <Iconify icon="fluent-emoji:basket" size={65} color="#62C471" />
          )}
          {categories?.map((categoryApi) => (
            <View key={categoryApi.id}>
              {item === categoryApi.name && (
                <>
                  <Image
                    style={{ width: 65, height: 65 }}
                    source={{ uri: urlImg + categoryApi.image }}
                  />
                </>
              )}
            </View>
          ))}
          <Text style={ProductsStyle.text}>{item}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const handlePress = () => {
    navigation.navigate('ordersDetail')
  }
  return (
    <SafeAreaView style={ProductsStyle.fixedContainer}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'white']}
        start={[0.5, 0.2]}
        end={[0.5, 0.4]}
      >
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
        <View style={ProductsStyle.containerButton}>
          <TouchableOpacity
            style={GlobalStyles.btnPrimary}
            onPress={handlePress}
          >
            <Text style={ProductsStyle.textButton}>
              {t('categoriesMenu.continue')}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
export default ProductsCategories

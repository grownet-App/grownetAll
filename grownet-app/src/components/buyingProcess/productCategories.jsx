import React, { useRef } from 'react'
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

const { width } = Dimensions.get('window')

function ProductsCategories({ blurIntensity }) {
  const isCarousel = useRef(null)

  const images = [
    {
      Iconify: <Iconify icon="fluent-emoji:basket" size={70} color="#62c471" />,
      name: 'All',
    },
    { source: require('../../../assets/img/banana_img.png'), name: 'Fruit' },
    { source: require('../../../assets/img/bread_img.png'), name: 'Bread' },
    {
      source: require('../../../assets/img/broccoli_img.png'),
      name: 'Vegetables',
    },
    { source: require('../../../assets/img/frozen_img.png'), name: 'Frozen' },
    { icon: 'favorite', name: 'Favorites' },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={ProductsStyles.contenImage}>
        {item.source ? (
          <Image source={item.source} style={{ width: 70, height: 70 }} />
        ) : item.icon ? (
          <MaterialIcons name={item.icon} size={70} color="#62c471" />
        ) : (
          <View>{item.Iconify}</View>
        )}
        <Text style={{ color: '#144D56' }}>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={ProductsStyles.fixedContainer}>
      <BlurView intensity={blurIntensity}>
        <Carousel
          data={images}
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

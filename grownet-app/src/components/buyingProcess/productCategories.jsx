import React, { useRef, useState } from 'react'
import {
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { ProductsStyles } from '../../styles/styles'
import { BlurView } from 'expo-blur'

const { width } = Dimensions.get('window')

function ProductsCategories() {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

  const images = [
    { source: require('../../../assets/img/banana_img.png'), name: 'Fruit' },
    { source: require('../../../assets/img/bread_img.png'), name: 'Bread' },
    {
      source: require('../../../assets/img/broccoli_img.png'),
      name: 'Vegetables',
    },
    { source: require('../../../assets/img/frozen_img.png'), name: 'Frozen' },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={ProductsStyles.contenImage}>
        <Image source={item.source} style={{ width: 70, height: 70 }} />
        <Text style={{ color: '#144D56' }}>{item.name}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BlurView
        style={ProductsStyles.fixedContainer}
        intensity={100}
        tint="light"
      >
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width / 3}
          autoplay={true}
          loop={true}
          layout="default"
          onSnapToItem={(currentIndex) => setIndex(currentIndex)}
          useScrollView={true}
          ref={isCarousel}
        />
        <View style={{ alignItems: 'center' }}>
          <Pagination
            dotsLength={images.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: '#026cd2',
            }}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.8}
            tappableDots={true}
          />
        </View>
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

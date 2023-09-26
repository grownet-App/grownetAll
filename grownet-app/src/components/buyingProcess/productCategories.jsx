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

const { width } = Dimensions.get('window')

function ProductsCategories() {
  const [index, setIndex] = useState(0)
  const isCarousel = useRef(null)

  const images = [
    { source: require('../../../assets/img/banana_img.png') },
    { source: require('../../../assets/img/bread_img.png') },
    { source: require('../../../assets/img/broccoli_img.png') },
    { source: require('../../../assets/img/frozen_img.png') },
  ]

  const renderItem = ({ item }) => {
    return (
      <View style={ProductsStyles.contenImage}>
        <Image source={item.source} style={{ width: 70, height: 70 }} />
      </View>
    )
  }

  return (
    <SafeAreaView>
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
            backgroundColor: '#FFFFFF',
          }}
          inactiveDotOpacity={0.8}
          inactiveDotScale={0.8}
          tappableDots={true}
        />
      </View>
      <TouchableOpacity style={{}}>
        <Text style={{ fontSize: 40 }}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
export default ProductsCategories

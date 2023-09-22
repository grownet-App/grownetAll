import { Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ProductSearcher from '../../components/buyingProcess/productSearch'

const Products = () => {
  return (
    <View>
      <ProductSearcher />
    </View>
  )
}

export default Products

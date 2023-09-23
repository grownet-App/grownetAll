import { View } from 'react-native'
import React from 'react'
import ProductCards from '../../components/buyingProcess/productCards'
import ProductSearcher from '../../components/buyingProcess/productSearch'

const Products = () => {
  return (
    <View>
      <ProductSearcher />
      <ProductCards />
    </View>
  )
}

export default Products

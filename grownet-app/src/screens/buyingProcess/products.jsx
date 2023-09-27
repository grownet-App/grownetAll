import { View } from 'react-native'
import React from 'react'
import ProductCards from '../../components/buyingProcess/productCards'
import ProductSearcher from '../../components/buyingProcess/productSearch'
import ProductsCategories from '../../components/buyingProcess/productCategories'

const Products = () => {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ProductSearcher />
      <ProductCards />
      <ProductsCategories />
    </View>
  )
}

export default Products

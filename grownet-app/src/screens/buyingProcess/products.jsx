import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ProductCards from '../../components/buyingProcess/productCards'
import ProductSearcher from '../../components/buyingProcess/productSearch'
import ProductsCategories from '../../components/buyingProcess/productCategories'

const Products = () => {
  const [blurIntensity, setBlurIntensity] = useState(100)

  return (
    <View style={styles.container}>
      <ProductSearcher />
      <ProductCards setBlurIntensity={setBlurIntensity} />
      <View style={styles.viewCategories}>
        <ProductsCategories blurIntensity={blurIntensity} />
      </View>
    </View>
  )
}

export default Products
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  viewCategories: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
})

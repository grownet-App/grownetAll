import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useProductStore from '../../store/useProductStore'
import ProductCard from './ProductCards'

function ProductsFind({ onAmountChange, onUomChange }) {
  const filteredProducts = useProductStore((state) => state.filteredProducts)

  return (
    <View>
      <Text style={styles.StyleText}>
        You have {filteredProducts.length} fount products:
      </Text>
      <View>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            productData={product}
            onAmountChange={onAmountChange}
            onUomChange={onUomChange}
          />
        ))}
      </View>
    </View>
  )
}

export default ProductsFind

const styles = StyleSheet.create({
  StyleText: {
    textAlign: 'center',
    color: '#04444f',
    fontSize: 15,
  },
})

import React from 'react'
import { Text, View } from 'react-native'
import useProductStore from '../../store/useProductStore'
import ProductCard from '../../components/buyingProcess/productCards'

function ProductsFind({ onAmountChange, onUomChange }) {
  const filteredProducts = useProductStore((state) => state.filteredProducts)

  return (
    <View style={styles.container}>
      <Text>{filteredProducts.length}</Text>
      <View style={styles.favoriteItems}>
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

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  favoriteItems: {
    // Estilos para el contenedor de productos
  },
}

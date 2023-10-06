import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFavoritesStore } from '../../store/useFavoriteStore'
import useOrderStore from '../../store/UseOrderStore'
import ProductCard from '../../components/buyingProcess/productCards'

export default function Favorites({ onAmountChange, onUomChange }) {
  const { favorites } = useFavoritesStore()
  const { articlesToPay } = useOrderStore()

  const favoriteProducts = articlesToPay.filter((product) =>
    favorites.includes(product.id),
  )
  console.log('favorites:', favoriteProducts)
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.StyleText}>
        You have {favorites.length} favorites products:
      </Text>
      <View style={{ flex: 1 }}>
        {favoriteProducts.map((product) => (
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

const styles = StyleSheet.create({
  StyleText: {
    textAlign: 'center',
    color: '#04444f',
    fontSize: 15,
  },
})

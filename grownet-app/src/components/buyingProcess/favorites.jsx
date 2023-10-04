import React from 'react'
import { Text, View } from 'react-native'
import { useFavoriteStore } from '../../store/useFavoriteStore'
import useOrderStore from '../../store/UseOrderStore'
import ProductCard from '../../components/buyingProcess/productCards'

export default function Favorites({ onAmountChange, onUomChange }) {
  const { favorites } = useFavoriteStore()
  const { articlesToPay } = useOrderStore()

  const favoriteProducts = articlesToPay.filter((product) =>
    favorites.includes(product.id),
  )

  return (
    <View style={{ flex: 1 }}>
      <Text>{favorites.length}</Text>
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

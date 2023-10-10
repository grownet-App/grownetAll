/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ProductsStyles } from '../../styles/styles'
import { Dropdown } from 'react-native-element-dropdown'
import SelectQuantity from './SelectQuantity'
import { useFavoritesStore } from '../../store/useFavoriteStore'

const ProductCards = ({ productData, onAmountChange, onUomChange }) => {
  const { id, name, image, prices, uomToPay } = productData

  const [isFocus, setIsFocus] = useState(false)
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore()
  const isFavorite = favorites.includes(id, name, image)
  const counter = 0

  const urlImg = process.env.EXPO_PUBLIC_BASE_IMG
  const selectedUom = prices.find((price) => price.nameUoms === uomToPay)

  const handleToggleFavorite = () => {
    if (isFavorite) {
      console.log('remove', id)
      removeFavorite(id)
    } else {
      console.log('add  ', id)
      addFavorite(id)
    }
  }

  function handleUomToPayChange(event) {
    try {
      const newUomToPay = event
      onUomChange(id, newUomToPay)
    } catch (error) {
      console.error('Error al procesar la promesa:', error)
    }
  }

  const array = prices.map((e) => e.nameUoms)
  const array1 = prices.map((e) => e.id)

  console.log('prices:', prices)
  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View style={ProductsStyles.container}>
        <View style={ProductsStyles.containerImage}>
          <Image
            source={{ uri: urlImg + image }}
            style={ProductsStyles.ImageCardProduct}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={ProductsStyles.containName}>
            <View>
              <Text style={ProductsStyles.textName}>{name}</Text>
              <Text style={ProductsStyles.textName1}>{selectedUom.name}</Text>
              <Text style={ProductsStyles.textPrice}>
                GBP £{selectedUom.priceWithTax}
              </Text>
            </View>

            <TouchableOpacity onPress={handleToggleFavorite}>
              <Icon
                name={isFavorite ? 'heart' : 'heart-o'}
                size={24}
                color="#62C471"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          </View>
          <View style={ProductsStyles.containerSelect}>
            <SelectQuantity
              productData={productData}
              onAmountChange={onAmountChange}
              counter={counter}
            />
            <View style={ProductsStyles.containerDrop}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: '#04444f' }]}
                containerStyle={{ borderRadius: 20 }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={array}
                maxHeight={200}
                labelField={array}
                valueField={array1}
                placeholder={!isFocus ? uomToPay : '...'}
                value={uomToPay}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={handleUomToPayChange}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductCards
const styles = StyleSheet.create({
  dropdown: {
    height: 45,
    borderColor: '#f2f2f2',
    borderWidth: 1.5,
    borderRadius: 51,
    paddingHorizontal: 8,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#04444f',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#04444f',
  },
})

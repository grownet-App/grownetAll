/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from './data.json'
import { ProductsStyles } from '../../styles/styles'
import { Dropdown } from 'react-native-element-dropdown'
import SelectQuantity from './selectQuantity'

//dropdown
const dataDropdown = [
  { label: 'Unit', value: '1' },
  { label: 'Box', value: '2' },
  { label: 'Kg', value: '3' },
]

const ProductCards = ({ setBlurIntensity }) => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const handleToggleFavorite = () => {
    // Lógica para cambiar el estado de favorito del producto con ID 'productId'
  }

  const onAmountChange = () => {
    // Lógica para cambiar la cantidad del producto con ID 'productId'
  }

  const handleUomChange = () => {
    // Lógica para cambiar el uomn del producto con ID 'productId'
  }

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent

    const offsetY = contentOffset.y
    const contentHeight = contentSize.height
    const screenHeight = layoutMeasurement.height

    const maxScroll = contentHeight - screenHeight

    if (offsetY >= maxScroll - 5) {
      setBlurIntensity(0)
    } else {
      setBlurIntensity(100)
    }
  }

  return (
    <SafeAreaView style={ProductsStyles.containerCards}>
      <ScrollView onScroll={handleScroll}>
        {data.products.map((product) => (
          <View
            key={product.id}
            style={{ alignItems: 'center', width: '100%' }}
          >
            <View style={ProductsStyles.container}>
              <View style={ProductsStyles.containerImage}>
                <Image
                  source={{ uri: product.image }}
                  alt={'image ' + product.name}
                  style={ProductsStyles.ImageCardProduct}
                  resizeMode="contain"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={ProductsStyles.containName}>
                  <View>
                    <Text style={ProductsStyles.textName}>{product.name}</Text>
                    <Text style={ProductsStyles.textPrice}>
                      GBP £{product.price_unit.toFixed(2)}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => handleToggleFavorite(product.id)}
                  >
                    <Icon
                      name="heart-o"
                      size={24}
                      color="#62C471"
                      style={{ marginTop: 5 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={ProductsStyles.containerSelect}>
                  <SelectQuantity />
                  <View style={ProductsStyles.containerDrop}>
                    <Dropdown
                      style={[
                        styles.dropdown,
                        isFocus && { borderColor: '#04444f' },
                      ]}
                      containerStyle={{ borderRadius: 20, color: '#04444f' }}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      data={dataDropdown}
                      maxHeight={200}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? 'Unit' : '...'}
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={(item) => {
                        setValue(item.value)
                        setIsFocus(false)
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.extraSpace} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductCards
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#f2f2f2',
    borderWidth: 1.5,
    borderRadius: 51,
    paddingHorizontal: 8,
  },
  extraSpace: {
    height: 225,
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

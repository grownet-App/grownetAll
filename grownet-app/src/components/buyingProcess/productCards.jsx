/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from './data.json'
import { ProductsStyles } from '../../styles/styles'
import { Dropdown } from 'react-native-element-dropdown'
import SelectQuantity from './selectQuantity'

const ProductCards = ({ productData, onAmountChange, onUomChange }) => {
  const counter = 0
  const { id, name, image, prices, tax, uomToPay } = productData
  const urlImg =
    'http://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/'
  const selectedUom = prices.find((price) => price.nameUoms === uomToPay)

  const [isFocus, setIsFocus] = useState(false)

  const handleToggleFavorite = () => {
    // Lógica para cambiar el estado de favorito del producto con ID 'productId'
  }

  const dataPriceDropdown = prices.map((price) => price)
  const handleUomToPayChange = (event) => {
    const newUomToPay = event.target.value
    onUomChange(id, newUomToPay)
    console.log(`Selected uomtopay for ${name}: ${newUomToPay}`)
    console.log(`Selected price for ${name}: ${tax}`)
  }

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
              <Text style={ProductsStyles.textName}>{selectedUom.name}</Text>
              <Text style={ProductsStyles.textPrice}>
                GBP £{selectedUom.tax}
              </Text>
            </View>

            <TouchableOpacity onPress={handleToggleFavorite}>
              <Icon
                name="heart-o"
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
                containerStyle={{ borderRadius: 20, color: '#04444f' }}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={dataPriceDropdown}
                maxHeight={200}
                labelField="nameUoms"
                valueField="amount"
                placeholder={!isFocus ? 'Unit' : '...'}
                value={uomToPay}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(newValue) => {
                  handleUomToPayChange(newValue)
                  setIsFocus(false)
                }}
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
    height: 50,
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

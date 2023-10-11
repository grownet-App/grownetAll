/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SelectQuantity from './SelectQuantity'
import { Dropdown } from 'react-native-element-dropdown'
import { ProductsStyles } from '../../styles/styles'
import { AntDesign } from '@expo/vector-icons'

// dropdown
const dataDropdown = [
  { label: 'Unit', value: '1' },
  { label: 'Box', value: '2' },
  { label: 'Kg', value: '3' },
]

export default function ProductDetail() {
  const [isFocus, setIsFocus] = useState(false)
  const [value, setValue] = useState(null)
  const [articles, setArticles] = useState([
    { name: 'repapper', price: 20, id: 1 },
    { name: 'papper', price: 40, id: 2 },
  ])

  return (
    <View>
      {articles
        // .filter((article) => article.amount > 0)
        .map((article) => (
          <View key={article.id}>
            <View>
              <View style={ProductsStyles.containerDetail}>
                <View>
                  <Text style={ProductsStyles.textOrder}>{article.name}</Text>
                  <View style={ProductsStyles.containSelect}>
                    <SelectQuantity widthOrder />
                  </View>
                </View>

                <View style={ProductsStyles.containerDrop}>
                  <View style={ProductsStyles.rowPrice}>
                    <Text style={ProductsStyles.textOrder}>£ {20}</Text>
                    <TouchableOpacity>
                      <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                  </View>

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
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#f2f2f2',
    borderWidth: 1.5,
    backgroundColor: 'white',
    borderRadius: 51,
    paddingHorizontal: 8,
    width: 100,
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

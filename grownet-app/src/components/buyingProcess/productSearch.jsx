import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ProductsStyles } from '../../styles/styles'

function ProductSearcher() {
  const [input, setInput] = useState('')

  return (
    <View style={ProductsStyles.containerSearch}>
      <TextInput
        style={ProductsStyles.BgInput}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Search for products"
        placeholderTextColor="#969696"
      />
      <TouchableOpacity style={ProductsStyles.iconSearch}>
        <Feather name="search" size={24} color="#969696" />
      </TouchableOpacity>
    </View>
  )
}

export default ProductSearcher

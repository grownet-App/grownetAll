import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { GlobalStyles } from '../../styles/styles'

function ProductSearcher() {
  const [input, setInput] = useState('')

  return (
    <View style={GlobalStyles.containerSeachr}>
      <TextInput
        style={GlobalStyles.BgInput}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="Search for products"
      />
      <TouchableOpacity style={GlobalStyles.iconSearch}>
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default ProductSearcher

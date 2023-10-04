import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ProductsStyles } from '../../styles/styles'
import useProductStore from '../../store/useProductStore'

function ProductSearcher({ products, setShowSearchResults, resetInput }) {
  const [input, setInput] = useState('')
  const setFilteredProducts = useProductStore(
    (state) => state.setFilteredProducts,
  )

  useEffect(() => {
    handleReset()
  }, [resetInput])

  useEffect(() => {
    if (input !== '') {
      filterProducts(input)
    }
  }, [products])

  const handleInputChange = (e) => {
    const query = e.target.value
    setInput(query)

    if (query === '') {
      setShowSearchResults(false)
      setFilteredProducts([])
    } else {
      filterProducts(query)
    }
  }

  const handleReset = () => {
    setShowSearchResults(false)
    setInput('')
    setFilteredProducts([])
  }

  const filterProducts = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    )
    setShowSearchResults(true)
    setFilteredProducts(filtered)
  }

  return (
    <View style={ProductsStyles.containerSearch}>
      <TextInput
        style={ProductsStyles.BgInput}
        value={input}
        onChangeText={handleInputChange}
        placeholder="Search for products"
        placeholderTextColor="#969696"
      />
      <TouchableOpacity style={ProductsStyles.iconSearch} onPress={handleReset}>
        <Feather name="search" size={24} color="#969696" />
      </TouchableOpacity>
    </View>
  )
}

export default ProductSearcher

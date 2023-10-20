import React, { useEffect, useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { ProductsStyles } from '../../styles/Styles'
import useProductStore from '../../store/useProductStore'
import { useTranslation } from 'react-i18next'

function ProductSearcher({ products, setShowSearchResults, resetInput }) {
  const { t } = useTranslation()
  const [input, setInput] = useState('')
  const setFilteredProducts = useProductStore(
    (state) => state.setFilteredProducts,
  )

  useEffect(() => {
    handleReset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetInput])

  useEffect(() => {
    if (input !== '') {
      filterProducts(input)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  const handleInputChange = (query) => {
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
        placeholder={t('productSearcher.placeholder')}
        placeholderTextColor="#969696"
      />
      <TouchableOpacity style={ProductsStyles.iconSearch} onPress={handleReset}>
        <Feather name="search" size={24} color="#969696" />
      </TouchableOpacity>
    </View>
  )
}

export default ProductSearcher

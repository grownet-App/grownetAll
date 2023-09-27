import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ProductsStyles } from '../../styles/styles'

const SelectQuantity = ({ widthOrder }) => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const onAmountChange = () => {
    // Lógica para cambiar la cantidad del producto con ID 'productId'
  }

  return (
    <View
      style={widthOrder ? ProductsStyles.countOrderD : ProductsStyles.count}
    >
      <TouchableOpacity onPress={() => onAmountChange('')}>
        <Text onPress={decrementCount} style={ProductsStyles.button2}>
          -
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 20,
          color: '#04444f',
        }}
      >
        {count}
      </Text>

      <TouchableOpacity onPress={() => onAmountChange('')}>
        <Text onPress={incrementCount} style={ProductsStyles.button}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectQuantity

import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ProductsStyles } from '../../styles/styles'

const SelectQuantity = ({
  widthOrder,
  productData,
  onAmountChange,
  counter,
}) => {
  const [amount, setAmount] = useState(productData.amount)
  const { id } = productData

  const decrementAmount = () => {
    if (amount > counter) {
      setAmount(amount - 1)
      onAmountChange(id, amount - 1)
      console.log('aca esta')
    }
  }

  const incrementAmount = () => {
    setAmount(amount + 1)
    onAmountChange(id, amount + 1)
  }

  useEffect(() => {
    onAmountChange(id, amount)
  }, [amount, id, onAmountChange])

  return (
    <View
      style={widthOrder ? ProductsStyles.countOrderD : ProductsStyles.count}
    >
      <TouchableOpacity onPress={decrementAmount}>
        <Text style={ProductsStyles.button2}>-</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 20, color: '#04444f' }}>{amount}</Text>

      <TouchableOpacity onPress={incrementAmount}>
        <Text style={ProductsStyles.button}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectQuantity

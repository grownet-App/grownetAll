import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ProductsStyles } from '../../styles/Styles'

const SelectQuantity = ({
  widthOrder,
  productData,
  onAmountChange,
  counter,
}) => {
  const [amount, setAmount] = useState(productData.amount)

  const { id } = productData

  useEffect(() => {
    onAmountChange(id, amount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount])

  const decrementAmount = () => {
    if (amount > counter) {
      setAmount(amount - 1)
    }
  }

  const incrementAmount = () => {
    setAmount(amount + 1)
  }
  console.log('dataquantiti:', amount)
  return (
    <View
      style={widthOrder ? ProductsStyles.countOrderD : ProductsStyles.count}
    >
      <TouchableOpacity onPress={decrementAmount}>
        <Text style={ProductsStyles.button2}>-</Text>
      </TouchableOpacity>

      <TextInput
        keyboardType="numeric"
        value={amount.toString()}
        onChangeText={(value) => {
          let num = parseInt(value)
          num = isNaN(num) ? 0 : num
          num = Math.max(0, num)
          num = Math.min(100, num)
          setAmount(num)
        }}
      />

      <TouchableOpacity onPress={incrementAmount}>
        <Text style={ProductsStyles.button}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectQuantity

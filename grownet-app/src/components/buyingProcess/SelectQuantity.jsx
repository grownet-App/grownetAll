import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ProductsStyles } from '../../styles/Styles'

const SelectQuantity = ({
  widthOrder,
  productData,
  onAmountChange,
  counter,
}) => {
  const { id } = productData

  const handleTextInputChange = (value) => {
    if (!isNaN(value)) {
      onAmountChange(id, parseInt(value, 10)) // Llamar a onAmountChange con el nuevo valor
    }
  }

  const decrementAmount = () => {
    if (productData.amount > counter) {
      onAmountChange(id, productData.amount - 1) // Llamar a onAmountChange con el nuevo valor
    }
  }

  const incrementAmount = () => {
    onAmountChange(id, productData.amount + 1) // Llamar a onAmountChange con el nuevo valor
  }

  return (
    <View
      style={widthOrder ? ProductsStyles.countOrderD : ProductsStyles.count}
    >
      <TouchableOpacity onPress={decrementAmount}>
        <Text style={ProductsStyles.button2}>-</Text>
      </TouchableOpacity>

      <TextInput
        style={ProductsStyles.countSelect}
        keyboardType="numeric"
        value={productData.amount.toString()}
        onChangeText={handleTextInputChange} // Agregar el evento onChangeText
      />

      <TouchableOpacity onPress={incrementAmount}>
        <Text style={ProductsStyles.button}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectQuantity

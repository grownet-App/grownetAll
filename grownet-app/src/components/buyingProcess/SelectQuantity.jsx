import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ProductsStyle } from '../../styles/ProductsStyle'

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
    <View style={widthOrder ? ProductsStyle.countOrderD : ProductsStyle.count}>
      <TouchableOpacity onPress={decrementAmount}>
        <Text style={ProductsStyle.button}>-</Text>
      </TouchableOpacity>

      <TextInput
        style={ProductsStyle.countSelect}
        keyboardType="numeric"
        value={productData.amount.toString()}
        onChangeText={handleTextInputChange} // Agregar el evento onChangeText
      />

      <TouchableOpacity onPress={incrementAmount}>
        <Text style={ProductsStyle.button2}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectQuantity

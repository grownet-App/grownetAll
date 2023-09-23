/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import data from './data.json'
import { ProductsStyles } from '../../styles/styles'
import { Dropdown } from 'react-native-element-dropdown'

//dropdown
const dataDropdown = [
  { label: 'Unit', value: '1' },
  { label: 'Box', value: '2' },
  { label: 'Kg', value: '3' },
]

const ProductCards = () => {
  const [value, setValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const handleToggleFavorite = () => {
    // Lógica para cambiar el estado de favorito del producto con ID 'productId'
  }

  const onAmountChange = () => {
    // Lógica para cambiar la cantidad del producto con ID 'productId'
  }

  const handleVolumeChange = () => {
    // Lógica para cambiar el volumen del producto con ID 'productId'
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ marginBottom: 110, marginTop: 10 }}>
        {data.products.map((product) => (
          <View key={product.id} style={ProductsStyles.container}>
            <View style={ProductsStyles.containerImage}>
              <Image
                source={{ uri: product.image }}
                alt={'image ' + product.name}
                style={ProductsStyles.ImageCardProduct}
                resizeMode="contain"
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={ProductsStyles.containName}>
                <View>
                  <Text style={ProductsStyles.textName}>{product.name}</Text>
                  <Text style={ProductsStyles.textPrice}>
                    GBP £{product.price_unit.toFixed(2)}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleToggleFavorite(product.id)}
                >
                  <Icon
                    name="heart-o"
                    size={24}
                    color="#62C471"
                    style={{ marginTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={ProductsStyles.containerSelect}>
                <View style={ProductsStyles.count}>
                  <TouchableOpacity
                    onPress={() =>
                      onAmountChange(product.id, product.amount + 1)
                    }
                  >
                    <Text
                      onPress={decrementCount}
                      style={ProductsStyles.button_}
                    >
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

                  <TouchableOpacity
                    onPress={() =>
                      onAmountChange(product.id, product.amount - 1)
                    }
                  >
                    <Text
                      onPress={incrementCount}
                      style={ProductsStyles.button}
                    >
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={ProductsStyles.containerDrop}>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductCards
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#f2f2f2',
    borderWidth: 1.5,
    borderRadius: 51,
    paddingHorizontal: 8,
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

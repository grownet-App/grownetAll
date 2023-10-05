import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect } from 'react'
import { ApiSuppliers } from '../../config/urls.config'
import { SuppliersStyles } from '../../styles/styles'
import axios from '../../../axiosConfig.'
import useOrderStore from '../../store/UseOrderStore'
import useTokenStore from '../../store/useTokenStore'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constants from 'expo-constants'

const Suppliers = () => {
  const navigation = useNavigation()
  const { token } = useTokenStore()
  const {
    suppliers,
    setSuppliers,
    setSelectedSupplier,
    selectedSupplier: currentSelectedSupplier,
    setArticlesToPay,
    selectedRestaurant,
  } = useOrderStore()

  const urlImg = Constants.expoConfig.extra.urlImage

  useEffect(() => {
    async function fetchData() {
      const requestBody = {
        accountNumber: selectedRestaurant.accountNumber,
      }

      try {
        const response = await axios.post(`${ApiSuppliers}`, requestBody, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setSuppliers(response.data.supplier)
      } catch (error) {
        console.error('Error al obtener los proveedores:', error)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier)
    if (currentSelectedSupplier?.id !== supplier.id) {
      setArticlesToPay([])
    }
  }

  const onPressAdd = () => {
    //TODO,add suppliers
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={SuppliersStyles.suppliers}>
          {suppliers.map((supplier) => {
            const imageUrl = `${urlImg}${supplier.image}`

            return (
              <TouchableOpacity
                key={supplier.id}
                onPress={() => {
                  handleSupplierSelect(supplier)
                  navigation.navigate('products')
                }}
              >
                <ImageBackground
                  resizeMode="cover"
                  style={SuppliersStyles.suppliersBg}
                  key={supplier.id}
                  source={{
                    uri: imageUrl,
                    cache: 'reload',
                  }}
                />
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity
            onPress={onPressAdd}
            style={SuppliersStyles.buttonAddCont}
          >
            <View style={SuppliersStyles.containButtonAdd}>
              <Ionicons
                name="add-circle-outline"
                size={34}
                color="#ffff"
                style={{ padding: 10 }}
              />
              <Text style={SuppliersStyles.textAddRestaurant}>
                Contact us to add suppliers!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Suppliers

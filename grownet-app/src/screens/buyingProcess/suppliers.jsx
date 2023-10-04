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
  } = useOrderStore()

  const handleSupplierSelect = (supplier) => {
    setSelectedSupplier(supplier)
    if (currentSelectedSupplier?.id !== supplier.id) {
      setArticlesToPay([])
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiSuppliers, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setSelectedSupplier(null)
        setSuppliers(response.data.suppliers)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [token, setSuppliers, setSelectedSupplier])

  const urlImg = Constants.expoConfig.extra.urlImage

  const specialSuppliers = [
    'FoodPoint',
    'eurofrutta',
    'HG WALTER',
    'County Suppplies',
    'The Menu Partners',
    'IMS',
    'Smithfield Butchers',
    'Direct Meats',
    'Big K',
  ]
  const filteredSuppliers = suppliers.filter((supplier) =>
    specialSuppliers.includes(supplier.name),
  )

  const onPressAdd = () => {
    //TODO,add suppliers
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={SuppliersStyles.suppliers}>
          {filteredSuppliers.map((supplier) => {
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

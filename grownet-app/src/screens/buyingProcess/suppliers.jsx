import { SafeAreaView, ScrollView, ImageBackground, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ApiSuppliers } from '../../config/urls.config'
import { SuppliersStyles } from '../../styles/styles'
import axios from 'axios'
import useOrderStore from '../../store/UseOrderStore'
import useTokenStore from '../../store/useTokenStore'

const Suppliers = () => {
  const { suppliers, setSuppliers, setSelectedSupplier } = useOrderStore()
  const { token } = useTokenStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiSuppliers, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('response', response.data.suppliers)
        setSelectedSupplier(null)
        setSuppliers(response.data.suppliers)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [token, setSuppliers, setSelectedSupplier])

  const urlImg =
    'https://ec2-13-58-203-20.us-east-2.compute.amazonaws.com/grownet/'

  const specialSuppliers = [
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
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={SuppliersStyles.suppliers}>
        {filteredSuppliers.map((supplier) => {
          const imageUrl = `${urlImg}${supplier.image}?random=${Math.random()}`
          console.log('url de la imagen:', imageUrl)

          return (
            <ImageBackground
              resizeMode="cover"
              style={SuppliersStyles.suppliersBg}
              key={supplier.id}
              source={{
                uri: imageUrl,
                cache: 'reload',
              }}
            >
              <Text style={{ color: 'black' }}> {supplier.name}</Text>
            </ImageBackground>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Suppliers

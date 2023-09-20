import { SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ApiSuppliers } from '../../config/urls.config'
import { GlobalStyles } from '../../styles/styles'
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
  }, [setSuppliers, setSelectedSupplier])

  const urlImg =
    'https://ec2-18-191-177-149.us-east-2.compute.amazonaws.com/grownet/'

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
      <ScrollView contentContainerStyle={GlobalStyles.suppliers}>
        {filteredSuppliers.map((supplier) => {
          const imageUrl = `${urlImg}${supplier.image}?random=${Math.random()}`
          console.log('url de la imagen:', imageUrl)

          return (
            <ImageBackground
              resizeMode="cover"
              style={GlobalStyles.suppliersBg}
              key={supplier.id}
              source={{
                uri: imageUrl,
                cache: 'reload',
              }}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Suppliers

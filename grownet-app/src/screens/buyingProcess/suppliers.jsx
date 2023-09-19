import { SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { ApiSuppliers } from '../../config/urls.config'
import { GlobalStyles } from '../../styles/styles'
import axios from 'axios'
import useOrderStore from '../../store/UseOrderStore'

const Suppliers = () => {
  const { suppliers, setSuppliers, setSelectedSupplier } = useOrderStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ApiSuppliers)
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
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={GlobalStyles.suppliers}>
        {suppliers.map((supplier) => (
          <ImageBackground
            style={GlobalStyles.suppliersBg}
            key={supplier.idproveedor}
            source={{ uri: urlImg + supplier.image }}
            alt={supplier.name}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Suppliers

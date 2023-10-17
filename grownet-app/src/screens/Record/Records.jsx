import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import { format, set } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { allStorageOrders } from '../../config/urls.config'
import useRecordStore from '../../store/useRecordStore'
import useTokenStore from '../../store/useTokenStore'
import { RecordStyle } from '../../styles/RecordStyle'
import { SearchStyle } from '../../styles/SearchStyle'
import { GlobalStyles } from '../../styles/Styles'
import { ScrollView } from 'react-native-gesture-handler'
import { DisputeStyle } from '../../styles/PendingRecordStyle'

const Records = ({ navigation }) => {
  const { token } = useTokenStore()
  const { pendingOrders, setPendingOrders, setSelectedPendingOrder } =
    useRecordStore()
  const [input, setInput] = useState('')
  const handleInputChange = (query) => {
    setInput(query)
  }
  const [activeTab, setActiveTab] = useState('pendingRecord')

  const switchTab = () => {
    setActiveTab((prevTab) =>
      prevTab === 'pastRecord' ? 'pendingRecord' : 'pastRecord',
    )
  }

  useEffect(() => {
    // LLAMAR LAS ORDENES PENDIENTES DE LA BASE DE DATOS
    axios
      .get(allStorageOrders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPendingOrders(
          response.data.orders.map((order) => ({
            ...order,
            created_date: format(new Date(order.created_date), 'dd/MM/yyyy'),
          })),
        )
      })
      .catch((error) => {
        console.log('Error al llamar las ordenes', error)
      })
  }, [])

  const handlePendingOrderSelect = (orderReference) => {
    setSelectedPendingOrder(orderReference)
    navigation.navigate('pastRecord')
  }

  return (
    <SafeAreaView style={RecordStyle.record}>
      <ScrollView>
        <View style={RecordStyle.input}>
          <TextInput
            style={RecordStyle.BgInput}
            value={input}
            onChangeText={handleInputChange}
            placeholder="Search for products"
            placeholderStyle={SearchStyle.placeholderText}
          />
          <TouchableOpacity>
            <Feather name="search" size={24} color="#969696" />
          </TouchableOpacity>
        </View>
        <View style={[RecordStyle.tabContainer, GlobalStyles.boxShadow]}>
          <TouchableOpacity
            style={[
              {
                flex: 1,
                backgroundColor:
                  activeTab === 'pastRecord' ? '#62c471' : 'white',
                padding: 10,
                alignItems: 'center',
              },
              RecordStyle.btnTab,
            ]}
            onPress={switchTab}
          >
            <Text
              style={{
                fontFamily: 'PoppinsRegular',
                color: activeTab === 'pastRecord' ? 'white' : '#04444f',
              }}
            >
              Past orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              {
                flex: 1,
                backgroundColor:
                  activeTab === 'pendingRecord' ? '#62c471' : 'white',
              },
              RecordStyle.btnTab,
            ]}
            onPress={switchTab}
          >
            <Text
              style={{
                fontFamily: 'PoppinsRegular',
                color: activeTab === 'pendingRecord' ? 'white' : '#04444f',
              }}
            >
              Pending orders
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          {/* Contenido de la pestaña activa */}
          {activeTab === 'pastRecord' ? (
            <View>
              {pendingOrders.map((order) => (
                <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
                  <View style={RecordStyle.textCard}>
                    <Text style={RecordStyle.tittle}>#Order</Text>
                    <Text style={RecordStyle.text}>11154</Text>
                    <Text style={RecordStyle.tittle}>Amount</Text>
                    <Text style={RecordStyle.text}>£856</Text>
                  </View>
                  <View style={RecordStyle.textCard}>
                    <Text style={RecordStyle.tittle}>Date</Text>
                    <Text style={RecordStyle.text}>01/10/2023</Text>

                    <Button
                      title="View details"
                      style={RecordStyle.btnPrimary}
                      onPress={() => handlePendingOrderSelect(order.reference)}
                    >
                      <Text style={GlobalStyles.textBtnSecundary}>
                        View details
                      </Text>
                    </Button>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View>
              {pendingOrders.map((order) => (
                <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
                  <View style={RecordStyle.textCard} key={order.reference}>
                    <Text style={RecordStyle.tittle}>#Order</Text>
                    <Text style={RecordStyle.text}>{order.reference}</Text>
                    <Text style={RecordStyle.tittle}>Amount</Text>
                    <Text style={RecordStyle.text}>£{order.total}</Text>
                  </View>
                  <View style={RecordStyle.textCard}>
                    <Text style={RecordStyle.tittle}>Date</Text>
                    <Text style={RecordStyle.text}>{order.created_date}</Text>
                    <Button
                      title="View details"
                      style={RecordStyle.btnPrimary}
                      onPress={() => navigation.navigate('pendingRecord')}
                    >
                      <Text style={GlobalStyles.textBtnSecundary}>
                        View details
                      </Text>
                    </Button>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Records

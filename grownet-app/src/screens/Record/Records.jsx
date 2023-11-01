import { Feather, MaterialIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import axios from 'axios'
import { isSameDay, parseISO } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { allStorageOrders } from '../../config/urls.config'
import useOrderStore from '../../store/useOrderStore'
import useRecordStore from '../../store/useRecordStore'
import useTokenStore from '../../store/useTokenStore'
import { RecordStyle } from '../../styles/RecordStyle'
import { GlobalStyles } from '../../styles/Styles'
import { FontAwesome } from '@expo/vector-icons'
const Records = ({ navigation }) => {
  const { t } = useTranslation()
  const { token } = useTokenStore()
  const { selectedRestaurant } = useOrderStore()
  const { pendingOrders, setPendingOrders, setSelectedPendingOrder } =
    useRecordStore()
  const apiOrders = allStorageOrders + selectedRestaurant.accountNumber
  const [activeTab, setActiveTab] = useState('pendingRecord')
  console.log(apiOrders)
  const switchTab = () => {
    setActiveTab((prevTab) =>
      prevTab === 'pastRecord' ? 'pendingRecord' : 'pastRecord',
    )
  }
  useEffect(() => {
    // LLAMAR LAS ORDENES PENDIENTES DE LA BASE DE DATOS
    if (selectedRestaurant === null) {
      navigation.navigate('restaurants')
      return
    }
    axios
      .get(apiOrders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPendingOrders(
          response.data.orders.map((order) => ({
            ...order,
          })),
        )
      })
      .catch((error) => {
        console.log('Error al llamar las ordenes', error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePendingOrderSelect = (orderReference) => {
    setSelectedPendingOrder(orderReference)
    navigation.navigate('pastRecord')
  }

  // Filtro
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [formattedDate, setFormattedDate] = useState('All orders')
  const showDatepicker = () => {
    setShowDatePicker(true)
  }
  const closeDatepicker = () => {
    setFormattedDate('All orders')
  }
  const handleDateChange = (event, selected) => {
    if (event.type === 'set') {
      setShowDatePicker(false)
      if (selected) {
        setSelectedDate(selected)
        const formatted = selected.toDateString()
        setFormattedDate(formatted)
        console.log('Fecha seleccionada:', selected)
      } else {
        // Si no hay fecha seleccionada, muestra "All Orders"
        setFormattedDate('All Orders')
      }
    } else if (event.type === 'dismiss') {
      setShowDatePicker(false)
    }
  }

  return (
    <SafeAreaView style={RecordStyle.record}>
      <ScrollView>
        {pendingOrders.length === 0 ? (
          <View style={RecordStyle.recordZero}>
            <Image source={require('../../../assets/img/img-succesful.png')} />
            <Text style={RecordStyle.textZero}>{t('record.noOrders')}</Text>
            <TouchableOpacity
              style={GlobalStyles.btnPrimary}
              onPress={() => navigation.navigate('suppliers')}
            >
              <Text style={GlobalStyles.textBtnSecundary}>
                {t('record.bttnNoOrders')}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={RecordStyle.filter}>
              <Button onPress={showDatepicker}>
                <Text style={RecordStyle.textFilter}>{formattedDate}</Text>
              </Button>
              <View style={RecordStyle.btnCloseFilter}>
                <TouchableOpacity onPress={showDatepicker}>
                  <Feather name="search" size={24} color="#969696" />
                </TouchableOpacity>
                <TouchableOpacity onPress={closeDatepicker}>
                  <FontAwesome
                    style={{ marginLeft: 15 }}
                    name="trash-o"
                    size={24}
                    color="#ee6055"
                  />
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={selectedDate}
                  mode="date"
                  display="calendar"
                  onChange={handleDateChange}
                />
              )}
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
                  {t('record.pastOrders')}
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
                  {t('record.pendingOrders')}
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              {activeTab === 'pastRecord' ? (
                <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
                  <View style={RecordStyle.textCard}>
                    <Text style={RecordStyle.tittle}> {t('record.order')}</Text>
                    <Text style={RecordStyle.text}>11154</Text>
                    <Text style={RecordStyle.tittle}>
                      {' '}
                      {t('record.amount')}
                    </Text>
                    <Text style={RecordStyle.text}>£856</Text>
                  </View>
                  <View style={RecordStyle.textCard}>
                    <Text style={RecordStyle.tittle}>{t('record.date')}</Text>
                    <Text style={RecordStyle.text}>01/10/2023</Text>

                    <Button
                      title="View details"
                      style={RecordStyle.btnPrimary}
                      onPress={() => handlePendingOrderSelect(order.reference)}
                    >
                      <Text style={GlobalStyles.textBtnSecundary}>
                        {t('record.viewDetails')}
                      </Text>
                    </Button>
                  </View>
                </View>
              ) : (
                <View>
                  {formattedDate === 'All orders' ? (
                    <View>
                      {pendingOrders.map((order) => (
                        <View
                          style={[
                            RecordStyle.cardRecord,
                            GlobalStyles.boxShadow,
                          ]}
                        >
                          <View
                            style={RecordStyle.textCard}
                            key={order.reference}
                          >
                            <Text style={RecordStyle.tittle}>
                              {' '}
                              {t('record.order')}
                            </Text>
                            <Text style={RecordStyle.text}>
                              {order.reference}
                            </Text>
                            <Text style={RecordStyle.tittle}>
                              {t('record.amount')}
                            </Text>
                            <Text style={RecordStyle.text}>£{order.total}</Text>
                          </View>
                          <View style={RecordStyle.textCard}>
                            <Text style={RecordStyle.tittle}>
                              {t('record.date')}
                            </Text>
                            <Text style={RecordStyle.text}>
                              {order.date_delivery}
                            </Text>
                            <Button
                              title="View details"
                              style={RecordStyle.btnPrimary}
                              onPress={() =>
                                navigation.navigate('pendingRecord')
                              }
                            >
                              <Text style={GlobalStyles.textBtnSecundary}>
                                {t('record.viewDetails')}
                              </Text>
                            </Button>
                          </View>
                        </View>
                      ))}
                    </View>
                  ) : (
                    <View>
                      {pendingOrders
                        .filter((order) => {
                          const orderDate = new Date(order.date_delivery)
                          const selectedDateUTC = new Date(
                            selectedDate.toUTCString(),
                          )

                          return (
                            orderDate.getUTCDate() ===
                              selectedDateUTC.getUTCDate() &&
                            orderDate.getUTCMonth() ===
                              selectedDateUTC.getUTCMonth() &&
                            orderDate.getUTCFullYear() ===
                              selectedDateUTC.getUTCFullYear()
                          )
                        })
                        .map((order) => (
                          <View
                            style={[
                              RecordStyle.cardRecord,
                              GlobalStyles.boxShadow,
                            ]}
                          >
                            <View
                              style={RecordStyle.textCard}
                              key={order.reference}
                            >
                              <Text style={RecordStyle.tittle}>
                                {' '}
                                {t('record.order')}
                              </Text>
                              <Text style={RecordStyle.text}>
                                {order.reference}
                              </Text>
                              <Text style={RecordStyle.tittle}>
                                {t('record.amount')}
                              </Text>
                              <Text style={RecordStyle.text}>
                                £{order.total}
                              </Text>
                            </View>
                            <View style={RecordStyle.textCard}>
                              <Text style={RecordStyle.tittle}>
                                {t('record.date')}
                              </Text>
                              <Text style={RecordStyle.text}>
                                {order.date_delivery}
                              </Text>
                              <Button
                                title="View details"
                                style={RecordStyle.btnPrimary}
                                onPress={() =>
                                  navigation.navigate('pendingRecord')
                                }
                              >
                                <Text style={GlobalStyles.textBtnSecundary}>
                                  {t('record.viewDetails')}
                                </Text>
                              </Button>
                            </View>
                          </View>
                        ))}
                    </View>
                  )}
                  {selectedDate &&
                    formattedDate !== 'All orders' &&
                    !pendingOrders.some((order) => {
                      const orderDate = parseISO(order.date_delivery)
                      return isSameDay(orderDate, selectedDate)
                    }) && (
                      <View style={RecordStyle.dateZero}>
                        <MaterialIcons
                          name="error-outline"
                          size={100}
                          color="#026CD2"
                        />
                        <Text style={RecordStyle.textDateZero}>
                          {t('record.noOrdersDate')}
                        </Text>
                        <Text style={RecordStyle.textDateFilter}>
                          {formattedDate}
                        </Text>
                      </View>
                    )}
                </View>
              )}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Records

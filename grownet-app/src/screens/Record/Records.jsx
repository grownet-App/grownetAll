import axios from 'axios'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import FilterDate from '../../components/FilterDate'
import { allStorageOrders } from '../../config/urls.config'
import useRecordStore from '../../store/useRecordStore'
import useTokenStore from '../../store/useTokenStore'
import { RecordStyle } from '../../styles/RecordStyle'
import { GlobalStyles } from '../../styles/Styles'
import useOrderStore from '../../store/useOrderStore'

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
            date_delivery: format(new Date(order.date_delivery), 'dd/MM/yyyy'),
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
        {pendingOrders.length === 0 ? (
          <View style={RecordStyle.recordZero}>
            <Image
              source={require('../../../assets/img/img-succesful.png')}
            ></Image>
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
            <FilterDate />
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
              {/* Contenido de la pestaña activa */}
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
                  {pendingOrders.map((order) => (
                    <View
                      style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}
                    >
                      <View style={RecordStyle.textCard} key={order.reference}>
                        <Text style={RecordStyle.tittle}>
                          {' '}
                          {t('record.order')}
                        </Text>
                        <Text style={RecordStyle.text}>{order.reference}</Text>
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
                          onPress={() => navigation.navigate('pendingRecord')}
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
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Records

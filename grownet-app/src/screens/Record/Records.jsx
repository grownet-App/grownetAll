import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RecordStyle } from '../../styles/RecordStyle'
import { GlobalStyles } from '../../styles/Styles'
import { SearchStyle } from '../../styles/SearchStyle'

const Records = ({ navigation }) => {
  const [input, setInput] = useState('')
  const handleInputChange = (query) => {
    setInput(query)
  }
  const [activeTab, setActiveTab] = useState('pedingRecord')

  const switchTab = () => {
    setActiveTab((prevTab) =>
      prevTab === 'pastRecord' ? 'pedingRecord' : 'pastRecord',
    )
  }

  return (
    <SafeAreaView style={RecordStyle.record}>
      <View style={SearchStyle.containerSearch}>
        <TextInput
          style={SearchStyle.BgInput}
          value={input}
          onChangeText={handleInputChange}
          placeholder="Search for products"
          placeholderStyle={SearchStyle.placeholderText}
        ></TextInput>
        <TouchableOpacity style={SearchStyle.iconSearch}>
          <Feather name="search" size={24} color="#969696" />
        </TouchableOpacity>
      </View>
      <View style={[RecordStyle.tabContainer, GlobalStyles.boxShadow]}>
        <TouchableOpacity
          style={[
            {
              flex: 1,
              backgroundColor: activeTab === 'pastRecord' ? '#62c471' : 'white',
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
                activeTab === 'pedingRecord' ? '#62c471' : 'white',
            },
            RecordStyle.btnTab,
          ]}
          onPress={switchTab}
        >
          <Text
            style={{
              fontFamily: 'PoppinsRegular',
              color: activeTab === 'pedingRecord' ? 'white' : '#04444f',
            }}
          >
            Peding orders
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {/* Contenido de la pestaña activa */}
        {activeTab === 'pastRecord' ? (
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
                onPress={() => navigation.navigate('pastRecord')}
              >
                <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
              </Button>
            </View>
          </View>
        ) : (
          <View style={[RecordStyle.cardRecord, GlobalStyles.boxShadow]}>
            <View style={RecordStyle.textCard}>
              <Text style={RecordStyle.tittle}>#Order</Text>
              <Text style={RecordStyle.text}>6599</Text>
              <Text style={RecordStyle.tittle}>Amount</Text>
              <Text style={RecordStyle.text}>£548</Text>
            </View>
            <View style={RecordStyle.textCard}>
              <Text style={RecordStyle.tittle}>Date</Text>
              <Text style={RecordStyle.text}>04/10/2023</Text>
              <Button
                title="View details"
                style={RecordStyle.btnPrimary}
                onPress={() => navigation.navigate('pedingRecord')}
              >
                <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
              </Button>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Records

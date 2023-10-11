import React, { useState } from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RecordStyle } from '../styles/RecordStyle'
import { GlobalStyles } from '../styles/Styles'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => <Text>hola</Text>

const SecondRoute = () => (
  <SafeAreaView style={RecordStyle.record}>
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
        <Button title="View details" style={RecordStyle.btnPrimary}>
          <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
        </Button>
      </View>
    </View>
  </SafeAreaView>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
})

const Records = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Past orders' },
    { key: 'second', title: 'Peding orders' },
  ])
  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{ backgroundColor: 'white' }}
      />
      {/*<SafeAreaView style={RecordStyle.record}>
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
          <Button title="View details" style={RecordStyle.btnPrimary}>
            <Text style={GlobalStyles.textBtnSecundary}>View details</Text>
          </Button>
        </View>
      </View>
  </SafeAreaView>*/}
    </>
  )
}

export default Records

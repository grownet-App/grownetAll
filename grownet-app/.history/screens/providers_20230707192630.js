import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'


export class providers extends Component {
const navigation = useNavigation();
  render() {
    return (
      <View>
        <Text>providers</Text>
      </View>
    )
  }
}

export default providers
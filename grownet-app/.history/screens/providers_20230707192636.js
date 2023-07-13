import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation();
export class providers extends Component {

  render() {
    return (
      <View>
        <Text>providers</Text>
      </View>
    )
  }
}

export default providers
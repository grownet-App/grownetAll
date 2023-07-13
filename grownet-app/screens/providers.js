import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'


const providers = () => {
  const navigation = useNavigation();
    return (
      <View>
        <Text>providers</Text>
      </View>
    )
  
}

export default providers;
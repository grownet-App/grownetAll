import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'


const chat = () => {
  const navigation = useNavigation();
    return (
      <View>
        <Text>chat</Text>
      </View>
    )
  
}

export default chat;
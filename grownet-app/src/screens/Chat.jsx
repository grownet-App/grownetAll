import { Text, View, Image } from 'react-native'
import React from 'react'
import { ChatStyle } from '../styles/ChatStyle'
import { useTranslation } from 'react-i18next'

const Chat = () => {
  const { t } = useTranslation()
  return (
    <View style={ChatStyle.chat}>
      <Image
        source={require('../../assets/img/img-succesful.png')}
        resizeMode="cover"
        style={ChatStyle.image}
      />
      <Text style={ChatStyle.tittle}>We are working on it</Text>
      <Text style={ChatStyle.text}>
        Soon we will have the chat service up and running again.
      </Text>
    </View>
  )
}

export default Chat

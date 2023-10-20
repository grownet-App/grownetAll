import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import { ModalStyle } from '../styles/LoginStyle'
import { MaterialIcons } from '@expo/vector-icons'

const ModalAlert = ({
  message = '',
  message2 = '',
  closeModal = () => {},
  Title = '',
  countryCode = '',
  phoneNumber = '',
  handleOutsidePress = () => {},
  showModal,
  Top,
}) => {
  return (
    <Modal
      visible={showModal}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={ModalStyle.modalContainer}>
          <View style={ModalStyle.centeredView}>
            <View style={ModalStyle.modalView}>
              <MaterialIcons name="error-outline" size={45} color="#ee6055" />
              <Text
                style={[ModalStyle.modalTextTitle, { marginTop: Top ? 20 : 0 }]}
              >
                {Title}
              </Text>
              <Text style={ModalStyle.modalText}>{message}</Text>
              <Text style={ModalStyle.modalText2}>
                {`${countryCode} ${phoneNumber}`}
              </Text>

              <TouchableOpacity onPress={closeModal}>
                <Text style={ModalStyle.TextChange} onPress={closeModal}>
                  {message2}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default ModalAlert

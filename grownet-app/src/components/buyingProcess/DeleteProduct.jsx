import React, { useState } from 'react'
import { Modal, Text, View, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { DeleteModalStyle } from '../../styles/DeleteModalStyle'
import { GlobalStyles } from '../../styles/Styles'
export default function DeleteProduct({
  article,
  setArticles,
  articlesToPay,
  setArticlesToPay,
  calculateTotalToPay,
  updateTotalToPay,
}) {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)

  const handleClose = () => setShow(false)

  const deleteFunction = (productId) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === productId
          ? { ...article, amount: 0, totalItemToPay: 0 }
          : article,
      ),
    )

    const updatedArticlesToPay = articlesToPay.map((article) =>
      article.id === productId
        ? { ...article, amount: 0, totalItemToPay: 0 }
        : article,
    )

    setArticlesToPay(updatedArticlesToPay)

    const newTotalToPay = calculateTotalToPay(updatedArticlesToPay)

    updateTotalToPay(newTotalToPay)
  }

  return (
    <>
      <TouchableOpacity>
        <AntDesign
          name="delete"
          size={18}
          color="#ee6055"
          onPress={handleShow}
        />
      </TouchableOpacity>
      <Modal visible={show} animationType="fade" transparent={true}>
        <View style={DeleteModalStyle.modalBackground}>
          <View style={DeleteModalStyle.centeredView}>
            <View style={DeleteModalStyle.modalView}>
              <MaterialIcons name="error-outline" size={45} color="#ee6055" />
              <Text style={DeleteModalStyle.modalTittle}>Delete product</Text>
              <Text style={DeleteModalStyle.modalText}>
                Are you sure to delete{' '}
                <Text style={DeleteModalStyle.textProduct}>
                  {article.name}?
                </Text>
              </Text>
              <View style={DeleteModalStyle.viewButtons}>
                <TouchableOpacity
                  style={[
                    GlobalStyles.btnPrimary,
                    DeleteModalStyle.spaceButton,
                  ]}
                  onPress={() => deleteFunction(article.id)}
                >
                  <Text style={GlobalStyles.textBtnSecundary}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleClose}
                  style={GlobalStyles.btnOutline}
                >
                  <Text style={GlobalStyles.textBtnOutline}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

import React, { useState } from 'react'
import { Modal, Text, View, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons'

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
        <AntDesign name="delete" size={24} color="red" onPress={handleShow} />
      </TouchableOpacity>

      <Modal visible={show} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon name="alert" size={30} color="#900" />

            <Text style={styles.modalText}>Delete product</Text>

            <Text>Are you sure to delete {article.name}?</Text>

            <TouchableOpacity onPress={() => deleteFunction(article.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
}

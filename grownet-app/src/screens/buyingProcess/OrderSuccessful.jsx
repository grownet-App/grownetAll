import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { OrderSuccessfulStyles } from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native'
import useOrderStore from '../../store/useOrderStore'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import * as FileSystem from 'expo-file-system'
import { useTranslation } from 'react-i18next'

const OrderSuccessful = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  const [articlesData, setArticlesData] = useState([])
  const {
    selectedRestaurant,
    selectedSupplier,
    articlesToPay,
    orderNumber,
    totalNet,
    totalTaxes,
    totalToPay,
    specialRequirements,
    deliveryData,
  } = useOrderStore()

  useEffect(() => {
    const filteredArticles = articlesToPay.filter(
      (article) => article.amount > 0,
    )
    setArticlesData(filteredArticles)
  }, [articlesToPay])

  const generatePdfDocument = async () => {
    try {
      const articlesHtml = articlesData
        .filter((article) => article.amount > 0)
        .map(
          (article) => `
        <tr class="tableRow" key="${article.id}">
          <td class="tableCol">${article.id}</td>
          <td class="tableCol">${article.name}</td>
          <td class="tableCol">${article.amount}</td>
          <td class="tableCol">${article.uomToPay}</td>
          <td class="tableCol">£${article.totalItemToPay / article.amount}</td>
          <td class="tableCol">£${article.totalItemToPay}</td>
        </tr>
      `,
        )
        .join('')

      const { uri } = await printToFileAsync({
        html: `
        <html>
        <head>
        <style>
          body {
            background-color: #E9F4FF;
            color: #04444F;
            font-family: "Poppins";
          }
    
          .information {
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            background-color: white;
            margin-bottom: 20px;
          }
    
          .image {
            width: 55%;
            margin-top: -5px;
          }
    
          .sectionTop {
            margin: 30px;
            padding: 10px;
            width: 70%;
            margin-bottom: 0;
            padding-bottom: 0;
          }
    
          .sectionTop1 {
            margin: 30px;
            padding: 10px;
            width: 30%;
            margin-bottom: 0;
            padding-bottom: 0;
          }
    
          .fontSpan {
            color: #026CD2;
            font-weight: 600;
          }
    
          .top {
            display: flex;
            flex-direction: row;
          }
    
          .section {
            margin: 30px;
            margin-top: 0;
            margin-bottom: 0;
            padding: 10px;
            width: 50%;
            padding-bottom: 5px;
          }
    
          .message {
            margin: 40px;
            margin-top: 0;
            margin-bottom: 20px;
          }
    
          .tittleRestaurant {
            margin-top: 50px;
            margin-left: 40px;
          }
    
          .restaurantText {
            font-size: 35px;
            font-weight: 700;
          }
    
          .text {
            font-size: 12px;
            padding-top: 6px;
          }
    
          .tittle {
            font-size: 13px;
            font-weight: 600;
          }
    
          .table {
            display: table;
            width: auto;
            border-style: solid;
            border-width: 1px;
            border-radius: 14px;
            border-color: #026CD2;
            margin: 20px;
            margin-top: 0;
            background-color: white;
          }
    
          .tableRow {
            display: table-row;
          }
    
          .tableRowTittle {
            display: table-row;
            background-color: #026CD2;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            color: white;
          }
    
          .tableCol {
            display: table-cell;
            width: 16.7%;
          }
    
          .tableCell {
            margin: auto;
            margin-top: 5px;
            font-size: 13px;
            padding-top: 7px;
            padding-bottom: 7px;
          }
    
          .table2 {
            display: table;
            width: auto;
            border-style: solid;
            border-width: 1px;
            border-radius: 14px;
            border-color: #026CD2;
            margin: 20px;
            margin-top: 10px;
            margin-left: 40%;
            background-color: white;
          }
    
          .tableColTotal {
            display: table-cell;
            width: 50%;
            color: white;
          }
    
          .tableColTotal2 {
            display: table-cell;
            width: 50%;
          }
    
          .radiusTotalNet {
            background-color: #026CD2;
            border-top-left-radius: 12px;
            border-bottom-left-radius: 0;
          }
    
          .radiusTotalTax {
            background-color: #026CD2;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
    
          .radiusTotal {
            background-color: #026CD2;
            border-top-left-radius: 0;
            border-bottom-left-radius: 12px;
          }
    
          .footer {
            background-color: #026CD2;
            padding: 15px;
            text-align: center;
            color: white;
            font-size: 15px;
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;
            left: 0;
            bottom: 0;
          }
        </style>
      </head>
      <body>
      <h1 class="tittleRestaurant">Purchase Order</h1>
      <p class="text">for <span class="fontSpan">${selectedSupplier.name} produce</span></p>
      <p class="text">Requested delivery date</p>
      <p class="tittle">${deliveryData}</p>
      <p class="text">Ordered by</p>
      <p class="tittle">${selectedRestaurant.accountName}</p>
      <p class="text">Order number</p>
      <p class="tittle">${orderNumber}</p>
      <p class="text">Delivery address</p>
      <p class="tittle">${selectedRestaurant.address}</p>
      <p class="text">Special requirements</p>
      <p class="tittle">${specialRequirements}</p>
      
      <table class="table">
        <thead class="tableRowTittle">
          <tr>
            <th class="tableCol">ID</th>
            <th class="tableCol">Product name</th>
            <th class="tableCol">Quantity</th>
            <th class="tableCol">UOM</th>
            <th class="tableCol">Item price</th>
            <th class="tableCol">Total items price</th>
          </tr>
        </thead>
        <tbody>
        ${articlesHtml}
        </tbody>
      </table>
      
      <p>Total Net: <span class="tableColTotal radiusTotalNet">£${totalNet}</span></p>
      <p>Total Tax: <span class="tableColTotal radiusTotalTax">£${totalTaxes}</span></p>
      <p>Total: <span class="tableColTotal radiusTotal">£${totalToPay}</span></p>
      
      <div class="footer">Your Footer Content</div>
    </body>
        </html>
      `,
        base64: false,
      })
      const fileName = `GrownetInvoice_order_${orderNumber}.pdf`
      const documentsDirectory =
        FileSystem.documentDirectory || `${FileSystem.cacheDirectory}Documents/`
      const newUri = `${documentsDirectory}${fileName}`
      await FileSystem.moveAsync({ from: uri, to: newUri })

      await shareAsync(newUri)
    } catch (error) {
      console.error('Error generating PDF', error)
    }
  }

  return (
    <View style={OrderSuccessfulStyles.container}>
      <View style={OrderSuccessfulStyles.containerImage}>
        <Image
          source={require('../../../assets/img/img-succesful.png')}
          resizeMode="cover"
          style={OrderSuccessfulStyles.image}
        />
        <Text style={OrderSuccessfulStyles.textSuccessful}>
          {t('orderSuccessful.successful')}
        </Text>
        <Text style={{ color: '#04444f', fontSize: 20 }}>
          {t('orderSuccessful.yourOrderSuccessful')}
        </Text>
      </View>
      <View style={OrderSuccessfulStyles.containerButtons}>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary}
          onPress={() => navigation.navigate('recordsStack')}
        >
          <Text style={OrderSuccessfulStyles.ContinueText}>
            {' '}
            {t('orderSuccessful.yourOrders')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={OrderSuccessfulStyles.btnPrimary2}
          onPress={generatePdfDocument}
        >
          <Text style={OrderSuccessfulStyles.ContinueText2}>
            {t('orderSuccessful.downloadPDF')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderSuccessful

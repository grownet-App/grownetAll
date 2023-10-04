import React, { useRef, useState, useEffect } from "react";
import { Document, Page, Text, pdf, StyleSheet, View, Font, Image } from "@react-pdf/renderer"; 
import fav_icon from "../img/fav_icon.png";

export default function DocumentPdf({
  data, 
  selectedRestaurant,
  selectedSupplier,
  deliveryData,
  orderNumber,
  specialRequirements,
  totalNet,
  totalTaxes,
  totalToPay, 
}) {

  Font.register({
    family: 'Poppins',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJDUc1NECPY.ttf',
      },
      {
        src: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1tvFP-KUEg.ttf',
        fontWeight: '700',
      },
      {
        src: 'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf',
        fontWeight: '600',
      },
    ],
  });
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E9F4FF",
      color: "#04444F",
      fontFamily: "Poppins"
    },
    information: {
      borderBottomLeftRadius: "30",
      borderBottomRightRadius: "30",
      backgroundColor: "white",
      marginBottom: 20,
    },
    image: {
      width: "55%",
      marginTop: -5,
    },
    sectionTop: {
      margin: 30,
      padding: 10,
      width: "70%",
      marginBottom: 0,
      paddingBottom: 0,
    },
    sectionTop1: {
      margin: 30,
      padding: 10,
      width: "30%",
      marginBottom: 0,
      paddingBottom: 0,
    },
    fontSpan: {
      color: "#026CD2",
      fontWeight: "600",
    },
    top: {
      flexDirection: "row",
    },
    section: {
      margin: 30,
      marginTop: 0,
      marginBottom: 0,
      padding: 10,
      width: "50%",
      paddingBottom: 5
    },
    message:{
      margin: 40,
      marginTop: 0,
      marginBottom: 20
    },
    tittleRestaurant: {
      marginTop: 50,
      marginLeft: 40,
    },
    restaurantText: {
      fontSize: 35,
      fontWeight: '700',
    },
    text: {
      fontSize: 15,
      paddingTop: 6,
    },
    tittle: {
      fontSize: 16,
      fontWeight: "600",
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: "14",
      borderColor: "#026CD2",
      margin: 20,
      marginTop: 0,
      backgroundColor: "white",
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableRowTittle: {
      margin: "auto",
      flexDirection: "row",
     backgroundColor: "#026CD2",
      borderTopLeftRadius: "12",
      borderTopRightRadius: "12",
      color: "white",
    },
    tableCol: {
      width: "20%",
    },
    tableCell: {
      margin: "auto",
      marginTop: 5,
      fontSize: 15,
      paddingTop: 8,
      paddingBottom: 8,
    },
    table2: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: "14",
      borderColor: "#026CD2",
      margin: 20,
      marginTop: 10,
      marginLeft: "40%",
      backgroundColor: "white"
    },
    tableColTotal: {
      width: "50%",
      color: "white",
    },
    tableColTotal2: {
      width: "50%",
    },
    radiusTotalNet: {
      backgroundColor: "#026CD2",
      borderTopLeftRadius: "12",
      borderBottomLeftRadius: "0"
    },
    radiusTotalTax: {
      backgroundColor: "#026CD2",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0"
    },
    radiusTotal: {
      backgroundColor: "#026CD2",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "12"
    },
    footer: {
      backgroundColor: "#026CD2",
      padding: 15,
      textAlign: "center",
      color: "white",
      fontSize: 15,
      borderTopLeftRadius: "30",
      borderTopRightRadius: "30",
      left: 0,
      bottom: 0,
    }
    
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.information}>
        <View style={styles.top}>
          <View style={styles.sectionTop}>
          <Text style={styles.restaurantText}>Purchase Order </Text>
            <Text style={styles.text}>for <Text style={styles.fontSpan}>{selectedSupplier.name} produce</Text></Text>
          </View>
          <View style={styles.sectionTop1}>
          <Image style={styles.image} src={fav_icon} cache={false} />
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.section}>
            <Text style={styles.text}>Requested delivery date</Text>
            <Text style={styles.tittle}>{deliveryData}</Text>
            <Text style={styles.text}>Ordered by</Text>
            <Text style={styles.tittle}>{selectedRestaurant.accountName}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Order number</Text>
            <Text style={styles.tittle}>#{orderNumber}</Text>
            <Text style={styles.text}>Delivery address</Text>
            <Text style={styles.tittle}>{selectedRestaurant.address} </Text>
          </View>
        </View>
        <View style={styles.message}>
        	<Text style={styles.text}>Special requirements</Text>
        	<Text style={styles.tittle}>{specialRequirements}</Text>
        </View>
        </View>
        
        <View style={styles.table}>
          <View style={styles.tableRowTittle}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>ID</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product name</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Quantity</Text>
            </View>  
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>UOM</Text>
            </View>                      
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Items price</Text>
            </View>
          </View>
          {data.filter((article) => article.amount > 0).map((article) => (
          <View key={article.id} style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{article.id}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{article.name}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{article.amount}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>{article.uomToPay}</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>£{article.totalItemToPay}</Text>
          </View>
        </View>
        ))}
        </View>
        <View>
        <View style={styles.table2} break>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
            <View style={styles.radiusTotalNet}>
              <Text style={styles.tableCell}>Total Net</Text>
              </View>
            </View>
            <View style={styles.tableColTotal2}>
              <Text style={styles.tableCell}>£{totalNet}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
              <View style={styles.radiusTotalTax}>
              <Text style={styles.tableCell}>Total Tax</Text>
              </View>
            </View>
            <View style={styles.tableColTotal2}>
              <Text style={styles.tableCell}>£{totalTaxes}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
            <View style={styles.radiusTotal}>
              <Text style={styles.tableCell}>Total</Text>
            </View>
            </View>
            <View style={styles.tableColTotal2}>
              <Text style={styles.tableCell}>£{totalToPay}</Text>
            </View>
          </View>
        </View>
       </View>
      </Page>
    </Document>
  );
}

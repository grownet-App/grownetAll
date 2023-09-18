import { Document, Font, Page, StyleSheet, Text, View,} from "@react-pdf/renderer";
import React from "react";
import "../css/orderDetail.css";

export default function DocumentPdf({
  articlesData,
  selectedRestaurant,
  selectedSupplier,
  formattedDate,
  deliveryData,
  specialRequirements,
  totalNet,
  totalTaxes,
  totalToPay
}) {

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E9F4FF",
    },
    top: {
      flexDirection: "row",
    },
    section: {
      margin: 30,
      padding: 10,
    },
    tittleRestaurant: {
      marginTop: 50,
      marginLeft: 40,
    },
    restaurantText: {
      fontSize: 35,
    },
    text: {
      fontSize: 15,
      paddingTop: 10,
    },
    tittle: {
      fontSize: 17,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      margin: 20,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCol: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      margin: "auto",
      marginTop: 5,
      fontSize: 15,
    },
    tableColTotal: {
      width: "50%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.tittleRestaurant}>
          <Text style={styles.restaurantText}>Purchase Order</Text>
          <Text style={styles.text}>for {selectedSupplier.name} produce</Text>
        </View>
        <View style={styles.top}>
          <View style={styles.section}>
            <Text style={styles.text}>Ordered</Text>
            <Text style={styles.tittle}>{formattedDate}</Text>
            <Text style={styles.text}>Order number</Text>
            <Text style={styles.tittle}>0234684GF</Text>
            <Text style={styles.text}>Ordered by</Text>
            <Text style={styles.tittle}>{selectedRestaurant.account_name}</Text>
            <Text style={styles.text}>Special requirements</Text>
            <Text style={styles.tittle}>{specialRequirements}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>Requested delivery date</Text>
            <Text>{deliveryData}</Text>
            <Text style={styles.text}>Customer number</Text>
            <Text>Not provided</Text>
            <Text style={styles.text}>Delivery address</Text>
            <Text>{selectedRestaurant.address}</Text>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
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
          {articlesData.map((article) => (
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
                <Text style={styles.tableCell}>{article.volume}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>£{article.totalItemToPay}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>Total Net</Text>
            </View>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>£{totalNet}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>Total Tax</Text>
            </View>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>£{totalTaxes} </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>Total</Text>
            </View>
            <View style={styles.tableColTotal}>
              <Text style={styles.tableCell}>£{totalToPay}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

import React from "react";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";
import "../css/orderDetail.css";

export default function DocumentPdf() {
  return (
    <Document>
      <Page size="A4" style={{display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#E9F4FF"}} >
        <View style={{ padding:"5px", width:"85%"}}>
          <View>
            <View>
            <View>
              <Text>Broccoli £5458</Text>
            </View>
            <View>
            <Text>15 Box/Boxes</Text></View>
            </View>
            <View>
              <Text id="tax-font" className="payment-pdf">Payment details</Text>
              <View className="product-detail" id="tax-pdf">
                <Text id="h3">Tax £58</Text>
              </View>
            </View>
            <View style={{backgroundColor:"#BBFACF", display:"flex", justifyContent:"space-between", padding:"15px", borderRadius:"10px", marginTop:"10px"}}>
              <Text style={{fontSize:"18px", fontWeight:"700"}}>Current value £9458</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

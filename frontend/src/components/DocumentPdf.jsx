import React from "react";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";


export default function DocumentPdf() {
  return (
   
      <Document>
        <Page size="A4">
          <View>
          <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
          </View>
        </Page>
      </Document>
   
  );
}

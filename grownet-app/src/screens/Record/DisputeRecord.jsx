import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'
import { Button, Checkbox } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { DisputeStyle } from '../../styles/PendingRecordStyle'
import { GlobalStyles } from '../../styles/Styles'
import UploadFile from '../../components/UploadFile'
function DisputeRecord() {
  const [activeTab, setActiveTab] = useState('first')

  const renderContent = () => {
    if (activeTab === 'first') {
      return (
        <View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <Text style={DisputeStyle.text}>Enter quantity delivered:</Text>
            <TextInput
              style={DisputeStyle.input}
              placeholder="11 total received"
              required
            />
            <Text style={DisputeStyle.text}>Add a comment:</Text>
            <TextInput style={DisputeStyle.input} multiline />
          </View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <View style={DisputeStyle.optionForm}>
              <Text style={DisputeStyle.text}>Send Next Order</Text>
              <Checkbox.Item
                label=""
                status={
                  selectedOption === 'sendNextOrder' ? 'checked' : 'unchecked'
                }
                onPress={() => onToggleCheckbox('sendNextOrder')}
              />
            </View>
            <View style={DisputeStyle.optionForm}>
              <Text style={DisputeStyle.text}>Credit note</Text>
              <Checkbox.Item
                label=""
                status={
                  selectedOption === 'creditNote' ? 'checked' : 'unchecked'
                }
                onPress={() => onToggleCheckbox('creditNote')}
              />
            </View>
          </View>
        </View>
      )
    } else if (activeTab === 'second') {
      return (
        <View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <Text style={DisputeStyle.text}>Enter quantity delivered:</Text>
            <TextInput
              style={DisputeStyle.input}
              placeholder="11 total received"
              required
            />
            <Text style={DisputeStyle.text}>Add a comment:</Text>
            <TextInput
              style={DisputeStyle.input}
              editable
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <UploadFile />
          </View>
        </View>
      )
    } else if (activeTab === 'third') {
      return (
        <View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <Text style={DisputeStyle.text}>Add a comment:</Text>
            <TextInput
              style={DisputeStyle.input}
              editable
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardForm]}>
            <UploadFile />
          </View>
        </View>
      )
    }
  }
  const activeButtonColor = {
    backgroundColor: '#04444f',
    color: 'white',
    borderRadius: 10,
    margin: 8,
  }
  const [selectedOption, setSelectedOption] = useState('sendNextOrder')

  const onToggleCheckbox = (value) => {
    setSelectedOption(value)
  }
  return (
    <SafeAreaView style={DisputeStyle.dispute}>
      <ScrollView>
        <View style={DisputeStyle.cardTittle}>
          <MaterialIcons name="error-outline" size={60} color="#62c471" />
          <View style={{ marginLeft: 15 }}>
            <Text style={DisputeStyle.title}>Broccoli</Text>
            <Text style={DisputeStyle.quantity}>1 Box</Text>
          </View>
        </View>
        <View style={DisputeStyle.dispute}>
          <View style={[GlobalStyles.boxShadow, DisputeStyle.cardTabs]}>
            <Button
              mode={activeTab === 'first' ? 'contained' : 'text'}
              onPress={() => setActiveTab('first')}
              style={activeTab === 'first' ? activeButtonColor : null}
            >
              <Text style={DisputeStyle.text}>Wrong quantity</Text>
            </Button>
            <Button
              mode={activeTab === 'second' ? 'contained' : 'text'}
              onPress={() => setActiveTab('second')}
              style={activeTab === 'second' ? activeButtonColor : null}
            >
              <Text style={DisputeStyle.text}>Defective</Text>
            </Button>
            <Button
              mode={activeTab === 'third' ? 'contained' : 'text'}
              onPress={() => setActiveTab('third')}
              style={activeTab === 'third' ? activeButtonColor : null}
            >
              <Text style={DisputeStyle.text}>Other</Text>
            </Button>
          </View>
          <Text style={DisputeStyle.text}>Leave your comments here:</Text>
          {renderContent()}
          <Button style={[GlobalStyles.btnPrimary, DisputeStyle.space]}>
            <Text style={GlobalStyles.textBtnSecundary}>Send</Text>
          </Button>
          <View style={DisputeStyle.space}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DisputeRecord

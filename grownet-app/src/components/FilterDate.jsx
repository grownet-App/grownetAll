import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RecordStyle } from '../styles/RecordStyle'
import { Button } from 'react-native-paper'
const FilterDate = () => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const showDatepicker = () => {
    setShowDatePicker(true)
  }

  const handleDateChange = (event, selected) => {
    if (event.type === 'set') {
      setShowDatePicker(false)
      if (selected) {
        setSelectedDate(selected)
        // Realiza la lógica de filtrado con la fecha seleccionada
        console.log('Fecha seleccionada:', selected)
      }
    } else if (event.type === 'dismiss') {
      setShowDatePicker(false)
    }
  }

  return (
    <View style={RecordStyle.filter}>
      <Button onPress={showDatepicker}>
        <Text style={RecordStyle.textFilter}>
          {selectedDate.toDateString()}
        </Text>
      </Button>
      <TouchableOpacity onPress={showDatepicker}>
        <Feather name="search" size={24} color="#969696" />
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
      )}
    </View>
  )
}

export default FilterDate

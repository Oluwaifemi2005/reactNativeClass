import { View, Text } from 'react-native'
import React from 'react'

const Employee = ({name, dept, age}) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Dept:{dept}</Text>
      <Text>Age: {age}</Text>
    </View>
  )
}

export default Employee
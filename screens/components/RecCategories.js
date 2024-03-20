import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RecCard from './RecCard'

const RecCategories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:5,
    }}
    >
        <RecCard title="Recording 1" time="22:12"/>
        <RecCard title="Recording 2" time="18:03"/>
        <RecCard title="Recording 3" time="13:08"/>
        <RecCard title="Recording 4" time="22:12"/>
    </ScrollView>
  )
}

export default RecCategories
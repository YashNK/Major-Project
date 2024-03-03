import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RecCard = ({title, time}) => {

  const navigation = useNavigation();

  return (

      <View className=" bg-gray-600 mb-3 p-8 rounded-3xl flex-row items-center">

        <Image source={require('../../assets/MicLogo.png')} className="w-6 h-6"/>

        <View className="flex-col flex-1">

            <Text className="text-white">{title}</Text>
            <Text className="text-white">{time}</Text>
        
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>

            <View className="bg-white p-1 px-4 rounded-3xl">

                <Text className="text-black text-[10px] font-extrabold underline">VIEW RECORDING</Text>

            </View>

        </TouchableOpacity>
        
      </View>
  )
}

export default RecCard
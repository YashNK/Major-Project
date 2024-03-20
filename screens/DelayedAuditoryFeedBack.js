import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native' 
import Slider from '@react-native-community/slider'
import Navbar from './components/Navbar'
import themeContext from './components/ThemeContext'

const DelayedAuditoryFeedBack = () => {

  const theme = useContext(themeContext)

  const [volume,setVolume] = useState('50%');
  const [delay,setDelay] = useState('50%');

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="flex-1 pt-1 px-2 relative">

      <Navbar/>

      <View className="mx-10 flex-2 mb-12">

        <View className="flex-row justify-between">

        <Text style={[{color:theme.textColor}]} className="font-bold">
          Volume:
        </Text>

        <Text className="font-bold">
          {volume}
        </Text>

      </View>

      <View className="items-center mb-9">
        <Slider
          style={{width: 345, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.textColor}
          maximumTrackTintColor='gray'
          thumbTintColor={theme.textColor}
          value={0.5}
          onValueChange={value => setVolume(parseInt(value * 100) + "%")}
        />
      </View>

      <View className="flex-row justify-between">
      
      <Text style={[{color:theme.textColor}]} className="font-bold">
          Delay:
      </Text>

      <Text className="font-bold">
          {delay}
      </Text>

      </View>

      <View className="items-center">
        <Slider
          style={{width: 345, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.textColor}
          maximumTrackTintColor='gray'
          thumbTintColor={theme.textColor}
          value={0.5}
          onValueChange={value => setDelay(parseInt(value * 100) + "%")}
        />
      </View>

      </View>

      <View style={[{backgroundColor:theme.secondaryColor}]} className="h-[200px]">
        <TextInput placeholder='Type Your Speech Here' className="text-center px-7 mb-20 rounded-xl w-full h-full" multiline></TextInput>
      </View>
    </SafeAreaView>
  )
}

export default DelayedAuditoryFeedBack
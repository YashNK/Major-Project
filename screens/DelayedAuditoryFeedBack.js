import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native' 
import Slider from '@react-native-community/slider'

const DelayedAuditoryFeedBack = () => {

  const [volume,setVolume] = useState('50%');
  const [delay,setDelay] = useState('50%');

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView className="bg-[#0a081c] flex-1 pt-1 px-2 relative">

      <View className="flex-row items-center justify-between pb-11">

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Bars3CenterLeftIcon color="white" size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={require('../assets/AppLogo.png')} className="w-[60px] h-[60px]"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <UserIcon color="white" size={30}/>
        </TouchableOpacity>
      
      </View>

      <View className="mx-10 flex-2 mb-12">

        <View className="flex-row justify-between">

        <Text className="text-white font-bold">
          Volume:
        </Text>

        <Text className="text-white font-bold">
          {volume}
        </Text>

      </View>

      <View className="items-center mb-9">
        <Slider
          style={{width: 345, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='white'
          maximumTrackTintColor='gray'
          thumbTintColor='white'
          value={0.5}
          onValueChange={value => setVolume(parseInt(value * 100) + "%")}
        />
      </View>

      <View className="flex-row justify-between">
      
      <Text className="text-white font-bold">
          Delay:
      </Text>

      <Text className="text-white font-bold">
          {delay}
      </Text>

      </View>

      <View className="items-center">
        <Slider
          style={{width: 345, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='white'
          maximumTrackTintColor='gray'
          thumbTintColor='white'
          value={0.5}
          onValueChange={value => setDelay(parseInt(value * 100) + "%")}
        />
      </View>

      </View>

      <View className="h-[200px]">
        <TextInput placeholder='Type Your Speech Here' className="text-center px-7 mb-20 rounded-xl w-full bg-indigo-300 h-full" multiline></TextInput>
        <Image className="w-[400] h-[150]" tintColor="white" source={require('../assets/SoundWave.png')}></Image>
      </View>
    </SafeAreaView>
  )
}

export default DelayedAuditoryFeedBack
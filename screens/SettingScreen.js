import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const SettingScreen = () => {

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

      <View>
        <Text className="text-white text-center">Settings</Text>
      </View>

      </SafeAreaView>
  )
}

export default SettingScreen
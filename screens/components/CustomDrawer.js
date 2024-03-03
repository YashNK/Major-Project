import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Cog6ToothIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {

    const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#0A081C]">
    <DrawerContentScrollView {...props} >
        <View className="flex-1 ">
            <ImageBackground source={require('../../assets/DrawerBackground.jpg')} className="w-full h-[200]">
                <View className="h-full w-full justify-end">
                    <UserCircleIcon size={100} color='white'/>
                    <View className="px-5 pb-2 space-y-[-7]">
                        <Text className="text-white font-bold text-2xl">NAME</Text>
                        <Text className="text-gray-300">Username</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
        <View className="mt-6">
            <DrawerItemList {...props} contentContainerStyle={{}} />
        </View>
    </DrawerContentScrollView>

    {/* <TouchableOpacity onPress={() => navigation.navigate('Settings')} className=" p-6 flex-row items-center h-20">
        <Cog6ToothIcon size={20} color="white"/>
        <Text className="text-white ml-3">Settings</Text>
    </TouchableOpacity> */}

    </View>
  )
}

export default CustomDrawer
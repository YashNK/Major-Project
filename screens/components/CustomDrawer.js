import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Cog6ToothIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import themeContext from './ThemeContext'

const CustomDrawer = (props) => {
    const theme = useContext(themeContext);

    const navigation = useNavigation();

  return (
    <View style={[{backgroundColor:theme.backgroundColor}]} className="flex-1">
    <DrawerContentScrollView {...props} >
        <View className="flex-1 ">
            <View className="w-full h-[160]">
                <View className="h-full w-full ml-2 justify-end">
                    <Image style={[{backgroundColor: theme.logoColor}]} source={require('../../assets/AppLogo.png')} className="w-[80px] h-[80px] ml-1 rounded-full"/>
                    <View className="px-5 pb-2 space-y-[-7]">
                        <Text style={{color:theme.textColor}} className="text-white font-bold text-2xl">BetterSpeak</Text>
                        <Text style={{color:theme.textColor}} className="text-gray-300 pt-1">Contact us:</Text>
                        <Text style={{color:theme.textColor}} className="text-gray-300 pt-1">Betterspeak@gmail.com</Text>
                    </View>
                </View>
            </View>
        </View>
        <View className="mt-6">
            <DrawerItemList {...props}  contentContainerStyle={{}} />
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
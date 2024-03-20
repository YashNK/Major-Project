import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native' 
import RecCategories from './components/RecCategories'
import Navbar from './components/Navbar'
import themeContext from './components/ThemeContext'


const SavedRecodings = () => {

  const theme=useContext(themeContext)

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={[{backgroundColor:theme.backgroundColor}]} className="flex-1 pt-1 px-2 relative">

      <Navbar/>

      <View className=" justify-center flex-row pb-2 mt-[-10]">
        <Text style={[{color:theme.textColor}]} className="text-white underline text-xl">YOUR RECORDINGS</Text>
      </View>

      <ScrollView>
        <View className="mb-5 rounded-3xl">
          <View className="mt-3 rounded-3xl">
          <RecCategories/>
          </View>
        </View>
      </ScrollView>

      </SafeAreaView>
  )
}

export default SavedRecodings
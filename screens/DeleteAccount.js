import { View, Text, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themeContext from './components/ThemeContext';
import NavbarBack from './components/NavbarBack';
import { useTranslation } from 'react-i18next';


const DeleteAccount = () => {

    const theme = useContext(themeContext);

    const {t} = useTranslation();

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="flex-1 mt-[-5%] px-3">

        <NavbarBack/>

      <View className="mx-3 p-3 rounded-lg">
        
        <Text style={{color:theme.textColor}} className=" mx-1 text-center">Are you sure you wanna delete account?</Text>

      </View>   

        <View className=" items-center mt-4 mb-5">

        <Text className="bg-red-600 text-white rounded-lg p-3 px-8 font-extrabold">Delete Account</Text>

        </View> 

    </SafeAreaView>
  )
}

export default DeleteAccount
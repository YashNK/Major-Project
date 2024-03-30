import { View, Text, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themeContext from './components/ThemeContext';
import NavbarBack from './components/NavbarBack';
import { useTranslation } from 'react-i18next';
import { BookmarkIcon } from 'react-native-heroicons/solid';


const EditProfile = () => {

    const theme = useContext(themeContext);

    const {t} = useTranslation();

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="flex-1 mt-[-5%] px-3">

        <NavbarBack/>

      <View className="mx-3">
        
        <Text className="text-gray-400 mx-1 pb-2">First Name:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}} placeholder='First Name' className="mb-4 rounded-xl p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">Last Name:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}} placeholder='Last Name' className="rounded-xl mb-4 p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">User Name:</Text> 
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}}  placeholder='Username' className=" mb-4 rounded-xl p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">Email ID:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}}  placeholder='Email' className="rounded-xl mb-4 p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">Phone Number:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}}  placeholder='Phone Number' keyboardType='numeric' className="mb-4 rounded-xl p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">Password:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}}  placeholder='Password' secureTextEntry className=" mb-4 rounded-xl p-2" ></TextInput>

        <Text className="text-gray-400 mx-1 pb-2">Confirm Password:</Text>
        <TextInput style={{color:theme.textColor, backgroundColor:theme.cardColor}}  placeholder='Confirm Password' secureTextEntry className=" rounded-xl mb-4 p-2" ></TextInput>

      </View>   

        <View  className=" items-center mt-4 mb-5">
          <View style={{backgroundColor:theme.cardColor}} className="flex-row p-3 rounded-md items-center">
          <BookmarkIcon style={{color:theme.textColor}} size={20}/>
          <Text style={{color:theme.textColor}}  className="font-extrabold pl-2">Save Changes</Text>
          </View>
        </View> 

    </SafeAreaView>
  )
}

export default EditProfile
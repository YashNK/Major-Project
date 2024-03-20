import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, EnvelopeIcon, PhoneIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import RecCategories from './components/RecCategories'
import { DrawerActions } from '@react-navigation/native' 
import Navbar from './components/Navbar'
import themeContext from './components/ThemeContext'
import { useTranslation } from 'react-i18next'

const ProfilePage = () => {

  const {t} = useTranslation();

  const theme = useContext(themeContext);

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={[{backgroundColor: theme.backgroundColor}]} className="bg-[#0a081c] flex-1 pt-1 px-2 relative">

    <Navbar/>

    <View className="flex-2 pb-7 items-center">
        <Text style={[{color:theme.textColor}]} className="text-white font-black text-center tracking-widest">{t("profile")}</Text>
        <UserCircleIcon size={155} style={[{color:theme.cardColor}]}/>
        <Text style={[{color:theme.textColor}]} className="text-white text-lg pb-4 font-black text-center tracking-widest">Name</Text>
        <Text style={[{backgroundColor:theme.cardColor, color:theme.textColor}]} className="text-white p-1 px-24 rounded-3xl font-black text-center tracking-widest">User Name</Text>
    </View>

    <View className="mx-4">

        <Text style={[{color:theme.textColor}]} className="text-white pb-3 font-black tracking-widest">{t("personal-info")}</Text>

    </View>

    <View style={[{backgroundColor:theme.cardColor}]} className="mb-3 mx-3 rounded-xl justify-between p-8 h-32">

        <View className="flex-row items-center pb-8">

            <PhoneIcon size={12} style={[{color:theme.textColor}]}/>
            <Text style={[{color:theme.textColor}]} className="pl-3 flex-1">
                {t("phone")}
            </Text>
            <Text style={[{color:theme.textColor}]} className="right-2">
                9034****01
            </Text>
            
        </View>

        <View className="flex-row items-center pb-8">
            
            <EnvelopeIcon size={12} style={[{color:theme.textColor}]}/>
            <Text style={[{color:theme.textColor}]} className="pl-3 flex-1">
                {t("email")}
            </Text>
            <Text style={[{color:theme.textColor}]} className="right-2">
                marian@gmail.com
            </Text>
            
        </View>

    </View>

    <Text style={[{color:theme.textColor}]} className="text-white pb-3 font-black tracking-widest mx-4">
        {t("your-recordings")}
    </Text>

    <ScrollView>
      <View className="mb-2">
        <RecCategories/>
      </View>
    </ScrollView>

    <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>
        <View className="p-4 mb-3">
          <Text style={[{color:theme.textColor}]} className="text-white text-center underline">
            {t("view-more")}
          </Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  )
}


export default ProfilePage
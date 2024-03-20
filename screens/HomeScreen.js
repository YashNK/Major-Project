import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MicrophoneIcon, UserIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecCategories from './components/RecCategories'
import { DrawerActions } from '@react-navigation/native' 
import themeContext from './components/ThemeContext'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'


const HomeScreen = () => {

  const theme = useContext(themeContext);

  const {t} = useTranslation();

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={[{backgroundColor: theme.backgroundColor}]} className="flex-1 pt-1 px-2 relative">

      <Navbar/>
    
      <TouchableOpacity  onPress={() => navigation.navigate("Delayed Auditory FeedBack System")}>
    
      <View className="mb-11">

        <View style={[{backgroundColor:theme.secondaryColor}]} className="h-[130px] justify-center rounded-xl p-3 relative space-y-[-7px]">

          <Image source={require('../assets/HomeIMG.png')} className="w-[190px] h-[190px] absolute right-1 mb-2"/>
          <Text style={[{color:theme.textColor}]} className="font-extrabold relative italic mr-[150px] text-[15px]">{t('use-our')}</Text>
          <Text style={[{color:theme.textColor}]} className="text-[20px] mr-[90px] font-extrabold track">{t('delayed')}</Text>
          <Text style={[{color:theme.textColor}]} className="text-[17px] font-extrabold">{t('auditory')}</Text>
          <Text style={[{color:theme.textColor}]} className="text-[20px] font-extrabold">{t('system')}</Text>
        
        </View>

        </View>

      </TouchableOpacity>

      <View className=" justify-center flex-row pb-5">
        <Text style={[{color:theme.textColor}]} className="text-white underline text-xl">{t('your-recordings')}</Text>
      </View>

      <ScrollView>
        <View className="mb-[-865]">
        <RecCategories/>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>
        <View className="p-4 pb-2">
          <Text style={[{color:theme.textColor}]} className="text-white text-center underline">
          {t('view-more')}
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity>
      <View style={[{backgroundColor:theme.recCard}]} className="flex-row mt-3 mb-3 justify-center rounded-3xl p-3">
        <MicrophoneIcon style={[{color:theme.iconColor}]} size={30} />
      </View>
      </TouchableOpacity>
    
   </SafeAreaView>
  )
}

export default HomeScreen
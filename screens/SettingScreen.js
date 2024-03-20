import { View, Text, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftStartOnRectangleIcon, Bars3CenterLeftIcon, EnvelopeIcon, ExclamationCircleIcon, LanguageIcon, LightBulbIcon, MicrophoneIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from './components/ThemeContext'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'


const SettingScreen = () => {

  const {t, i18n} = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === 'en'){
      i18n.changeLanguage('mal')
    }else{
      i18n.changeLanguage('en')
    }
  }

  const theme = useContext(themeContext)

  const [darkMode, setDarkMode] = useState(false)

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView className="flex-1 px-2 pt-1 relative" style={[{backgroundColor: theme.backgroundColor}]}>

     <Navbar/>

      <View>
        <Text className="text-center" style={[{color:theme.textColor}]}>{t('settings')}</Text>
      </View>

      <View className="mx-4 mt-3">
      <Text style={{color:theme.textColor}} className=" font-bold pl-1 mt-4">{t('theme')}</Text>
        <View style={{backgroundColor:theme.cardColor}}  className="flex-row items-center p-2 rounded-lg mt-2">
          <LightBulbIcon style={[{color:theme.iconColor, marginRight:10}]} size={20} />
          <Text style={[{color:theme.textColor}]} className="flex-1">{t('light-mode')}</Text>
          <Switch value={darkMode} onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme',value)
            }} />
        </View>

        <Text style={{color:theme.textColor}} className="mt-5 font-bold pl-1">{t('more-info')}</Text>
        <View style={{backgroundColor:theme.cardColor}} className="p-2 rounded-lg mt-2">
          <View className="flex-row mt-2 mb-2">
            <ExclamationCircleIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <Text style={[{color:theme.textColor}]} className="">{t('about-us')}</Text>
          </View>

          <View className="flex-row mt-2 mb-2">
            <EnvelopeIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <Text style={[{color:theme.textColor}]} className="">{t('contact')}</Text>
          </View>

          <View className="flex-row mt-2 mb-2">
            <LanguageIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <TouchableOpacity onPress={changeLanguage}>
              <Text style={{color:theme.textColor}}>{t('translate')} {i18n.language !=='en' ? 'english': 'malayalam'}</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Text style={{color:theme.textColor}} className="mt-5 font-bold pl-1">{t('logout')}:</Text>
        <View style={{backgroundColor:theme.cardColor}} className="flex-row p-2 rounded-lg mt-2 mb-2">
          <ArrowLeftStartOnRectangleIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
          <Text style={[{color:theme.textColor}]} className="">{t('logout')}</Text>
        </View>
        </View>
      </SafeAreaView>
  )
}

export default SettingScreen
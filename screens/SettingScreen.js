import { View, Text, Image, TouchableOpacity, Switch, Modal, FlatList } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftStartOnRectangleIcon, Bars3CenterLeftIcon, EnvelopeIcon, ExclamationCircleIcon, LanguageIcon, LightBulbIcon, MicrophoneIcon, PencilSquareIcon, ShieldExclamationIcon, TrashIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from './components/ThemeContext'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'
import i18next, { languageResources } from './src/i18n/i18n.config'
import languageList from './src/i18n/languageList.json'

const SettingScreen = () => {

  const {t, i18n} = useTranslation();

  const [visible, setVisible] = useState(false)

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

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
        <Text className="text-center font-extrabold" style={[{color:theme.textColor}]}>{t('settings')}</Text>
      </View>

      {/* Theme */}
      <View className="mx-4 mt-3">
      <Text style={{color:theme.textColor}} className=" font-bold pl-1 mt-4">{t('theme')}</Text>
        <View style={{backgroundColor:theme.cardColor}}  className="flex-row items-center p-2 rounded-lg mt-2">
          <LightBulbIcon style={[{color:theme.iconColor, marginRight:10}]} size={20} />
          <Text style={[{color:theme.textColor}]} className="flex-1">{t('dark-mode')}</Text>
          <Switch value={darkMode} onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme',value)
            }} />
        </View>
        
        {/* Profile */}
        <Text style={{color:theme.textColor}} className="mt-5 font-bold pl-1">{t('profile')}:</Text>
        <View style={{backgroundColor:theme.cardColor}} className="p-2 rounded-lg mt-2">
          <View className="flex-row mt-2 mb-2">
            <PencilSquareIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <Text style={[{color:theme.textColor}]} className="">{t('edit-profile')}</Text>
          </View>
 
          <View className="flex-row mt-2 mb-2">
            <ShieldExclamationIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <Text style={[{color:theme.textColor}]} className="">{t('privacy')}</Text>
          </View>

          <View className="flex-row mt-2 mb-2">
            <TrashIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
            <TouchableOpacity>
              <Text style={{color:theme.textColor}}>{t('delete-account')}</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* More Info and Support */}
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
            <TouchableOpacity className="flex-row items-center" onPress={() => setVisible(true)}>
              <LanguageIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
              <Text style={{color:theme.textColor}}>{t('language')}</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Login */}
        <Text style={{color:theme.textColor}} className="mt-5 font-bold pl-1">{t('logout')}:</Text>
        <View style={{backgroundColor:theme.cardColor}} className="flex-row p-2 pb-4 pt-4 rounded-lg mt-2 mb-2">
          <ArrowLeftStartOnRectangleIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
          <Text style={[{color:theme.textColor}]} className="">{t('logout')}</Text>
        </View>

        <Modal
        animationType='fade'
          visible={visible}
          transparent={true}
          onRequestClose={() => setVisible(false)}>

          <View className="w-[100%] bg-black/80 h-screen flex-row items-center justify-center">
            
            <View  style={{backgroundColor:theme.cardColor}} className=" w-[70%] h-[60%] rounded-lg">

              <Text className="text-center font-bold pt-8 pb-5 mx-14" style={{color:theme.textColor}}>{t("select-language")}</Text>

              <View>

                <FlatList className="h-[75%]" data={Object.keys(languageResources)} renderItem={({item}) => { 
                const language = languageList[item];
                if (!language) return null;
                return (
                <TouchableOpacity className="mb-3 mx-4 rounded-lg p-4 border-b-[1px] border-slate-300" onPress={() => changeLng(item)}>
                  <Text className="" style={{color:theme.textColor}}>{language.name}</Text>
                </TouchableOpacity>
                ); }} />

              </View>

            </View>

          </View>

        </Modal>
          
        </View>

      </SafeAreaView>
  )
}

export default SettingScreen
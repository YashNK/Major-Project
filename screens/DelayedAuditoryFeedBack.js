import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'
import { DrawerActions, useNavigation } from '@react-navigation/native' 
import Slider from '@react-native-community/slider'
import Navbar from './components/Navbar'
import themeContext from './components/ThemeContext'
import { useTranslation } from 'react-i18next'
import { WebView } from 'react-native-webview';

const DelayedAuditoryFeedBack = () => {

  const {t} = useTranslation();
  

  const theme = useContext(themeContext)

  const [volume,setVolume] = useState('50%');
  const [delay,setDelay] = useState('50%');

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);
    

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="flex-1 pt-1 px-2 relative">

      <Navbar/>

      <View className="flex-1">

      <Text style={{color:theme.textColor}} className="text-white uppercase mt-2 font-bold text-center mb-5">{t('delay-full')}</Text>

      <View style={{backgroundColor:theme.tertiaryColor}} className="h-[35%] rounded-lg mx-4"> 
      <WebView
      source={{ uri: 'https://delayed-auditory-feedback-3ued.onrender.com/' }}
      style={{ marginTop: 20 }}
      backgroundColor={'transparent'}
      bounces={false}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      />
      

      </View>

      <Text style={{color:theme.textColor}} className="text-center pt-2">{t("wait")}</Text>

      </View>

     
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:50
  },
});

export default DelayedAuditoryFeedBack
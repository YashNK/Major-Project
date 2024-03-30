import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themeContext from './components/ThemeContext';
import NavbarBack from './components/NavbarBack';
import { useTranslation } from 'react-i18next';


const PrivacySettings = () => {

    const theme = useContext(themeContext);

    const {t} = useTranslation();

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="mt-[-5%] flex-1">

        <NavbarBack/>

    <ScrollView>

      <View className="mx-3">

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-4">{t('better')}</Text>
        
        <Text style={{color:theme.textColor}} className="mx-1 pb-4">{t('at')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2">{t('p1')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{'\u2022'} {t('p1-d1')} {"\n"}
        {'\u2022'} {t('p1-d2')} {"\n"}
        {'\u2022'} {t('p1-d3')} {"\n"}
        {'\u2022'} {t('p1-d4')} </Text>


        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3">{t('p2')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{'\u2022'} {t('p2-d1')} {"\n"}
        {'\u2022'} {t('p2-d2')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3"> {t('p3')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{'\u2022'} {t('p3-d1')} {"\n"}
        {'\u2022'} {t('p3-d2')} </Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3">{t('p4')}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{'\u2022'} {t('p4-d1')} </Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-5 pt-3">{t('p-final')}</Text>

        </View> 

        </ScrollView>

    </SafeAreaView>
  )
}

export default PrivacySettings
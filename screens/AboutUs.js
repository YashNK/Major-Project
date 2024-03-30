import { View, Text, TextInput, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themeContext from './components/ThemeContext';
import { useTranslation } from 'react-i18next';
import { BookmarkIcon, EnvelopeIcon, PhoneArrowUpRightIcon } from 'react-native-heroicons/solid';
import NavbarBack from './components/NavbarBack';


const AboutUs = () => {

    const theme = useContext(themeContext);

    const {t} = useTranslation();

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="mt-[-5%] flex-1 px-3">

        <NavbarBack/>

        <ScrollView>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-4">{t("about")}</Text>
        
        <Text style={{color:theme.textColor}} className="mx-1 pb-4">{t("a-welcome")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2">{t("mission")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{t("m-d")}</Text>


        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3">{t("offer")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{'\u2022'} {t("o1")} {"\n"}{"\n"}
        {'\u2022'} {t("o2")} {"\n"}{"\n"}
        {'\u2022'} {t("o3")} </Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3">{t("commitment")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-2">{t("c-d")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 font-bold pb-2 pt-3">{t("touch")}</Text>

        <Text style={{color:theme.textColor}} className="mx-1 pb-5">  {t("t1")} {"\n"}
        {"\n"} {t("t2")} </Text>

        </ScrollView>

    </SafeAreaView>
  )
}

export default AboutUs
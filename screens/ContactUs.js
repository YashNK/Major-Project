import { View, Text, TextInput, Image } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import themeContext from './components/ThemeContext';
import NavbarBack from './components/NavbarBack';
import { useTranslation } from 'react-i18next';
import { BookmarkIcon, EnvelopeIcon, PhoneArrowUpRightIcon } from 'react-native-heroicons/solid';


const ContactUs = () => {

    const theme = useContext(themeContext);

    const {t} = useTranslation();

  return (
    <SafeAreaView style={{backgroundColor:theme.backgroundColor}} className="flex-1 mt-[-5%] px-3">

        <NavbarBack/>

        <View className="flex-row mx-1">
        <View style={{backgroundColor:theme.cardColor}} className="p-4 pt-5 w-full rounded-lg">
        <Text style={{color:theme.textColor}} className="uppercase pb-2 font-extrabold text-[20px] w-[60%]">{t("contact")}</Text>
        <View className="flex-row mt-2 justify-between items-center mb-2">

          <Image className="w-[20px] h-[20px] object-contain" source={{uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"}}/>
          <Text style={{color:theme.textColor}} className="uppercase font-bold ml-2 flex-1">{t("instagram")}</Text>

          <EnvelopeIcon size={20} color={theme.textColor}/>
          <Text style={{color:theme.textColor}} className="uppercase font-bold ml-2 flex-1">{t("email")}</Text>

          <PhoneArrowUpRightIcon size={20} color={theme.textColor}/>
          <Text style={{color:theme.textColor}} className="uppercase font-bold ml-2">{t("phone")}</Text>

        </View>
      </View>
      </View>

    </SafeAreaView>
  )
}

export default ContactUs
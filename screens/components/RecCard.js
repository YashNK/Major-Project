import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import themeContext from './ThemeContext';
import { MicrophoneIcon } from 'react-native-heroicons/solid';
import { useTranslation } from 'react-i18next';

const RecCard = ({title, time}) => {

  const navigation = useNavigation();

  const {t} = useTranslation();

  const theme = useContext(themeContext)

  return (

      <View style={[{backgroundColor:theme.recCard}]} className="mb-3 p-8 rounded-3xl flex-row items-center">

      <MicrophoneIcon style={[{color:theme.iconColor, marginRight:10}]} size={30}/>

        <View className="flex-col flex-1">

            <Text style={[{color:theme.textColor}]} className="">{title}</Text>
            <Text style={[{color:theme.textColor}]} className="">{time}</Text>
        
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>

            <View className="bg-white p-1 px-4 rounded-3xl">

                <Text className="text-black text-[10px] w-24 text-center font-extrabold underline">{t('view-recording')}</Text>

            </View>

        </TouchableOpacity>
        
      </View>
  )
}

export default RecCard
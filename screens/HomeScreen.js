import { View, Text, Image, TouchableOpacity, ScrollView, Button, Modal} from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { ThemeProvider, useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, EnvelopeIcon, LanguageIcon, LightBulbIcon, MicrophoneIcon, MoonIcon, PhoneArrowUpRightIcon, SunIcon, UserIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecCategories from './components/RecCategories'
import { DrawerActions } from '@react-navigation/native' 
import themeContext from './components/ThemeContext'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from './src/i18n/i18n.config';
import languageList from './src/i18n/languageList.json'
import { FlatList } from 'react-native-gesture-handler'


const HomeScreen = () => {

  const theme = useContext(themeContext);

  const {t} = useTranslation();

  const [visible, setVisible] = useState(false)

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  const getThemeIcon = () => {
    if (theme.textColor != "white") {
      return (<>
      <MoonIcon color={theme.textColor} size={90} />
      <Text style={{color:theme.textColor}} className="text-[15px] pt-3 text-justify">{t("dark-mode")}</Text>
      </>)
    } else{
      return(<> 
      <SunIcon color={theme.textColor} size={90} />
      <Text style={{color:theme.textColor}} className="text-[15px] pt-3 text-justify">{t("light-mode")}</Text>
      </>)
    }
  };

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView style={[{backgroundColor: theme.backgroundColor}]} className="flex-1 pt-1 px-2 relative">

      <Navbar/>

      {/* Daf */}    
      <TouchableOpacity  onPress={() => navigation.navigate("Delayed Auditory FeedBack System")}>
    
      <View className="mb-4">

        <View style={[{backgroundColor:theme.secondaryColor}]} className="h-[200px] justify-center rounded-xl p-3 relative space-y-[-7px]">

          <Image source={require('../assets/HomeIMG.png')} className="w-[190px] h-[190px] absolute right-1 mb-2"/>
          <Text style={[{color:theme.textColor}]} className="font-extrabold text-left relative italic mr-[150px] text-[20px]">{t('use-our')}</Text>
          <Text style={[{color:theme.textColor}]} className="text-[35px] w-[50%] text-left font-extrabold track">{t('delayed')}</Text>
          <Text style={[{color:theme.textColor}]} className="text-[20px] w-[50%] font-extrabold text-left">{t('auditory')}</Text>
          <Text style={[{color:theme.textColor}]} className=" text-left text-[25px] font-extrabold">{t('system')}</Text>
        
        </View>

        </View>

      </TouchableOpacity>

      
      <View className="flex-row mb-4">

      {/* welcome & Theme*/}
      <View style={{backgroundColor:theme.cardColor}} className="p-4 pt-5 w-[58%] rounded-lg">
        <Text style={{color:theme.textColor}} className="uppercase pb-2 font-extrabold text-[20px] w-[60%]">{t("welcome-title")} UserName</Text>
        <Text style={{color:theme.textColor}} className="text-[15px] text-justify">{t("welcome")}</Text>
      </View>

      <View style={{backgroundColor:theme.lightCard}} className="mx-1 w-[40%] justify-center items-center rounded-lg">
      {getThemeIcon()}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={{color:theme.link}} className="text-blue-300">{t("click")}</Text>
        </TouchableOpacity>
      </View>
      </View>

      {/* translate */}
      <View className="flex-row mx-1 mb-4">
      <View style={{backgroundColor:theme.lightCard}} className="p-4 pt-5 w-full rounded-lg">
        <Text style={{color:theme.textColor}} className="uppercase pb-2 font-extrabold text-[20px] w-[60%]">{t("translate")}</Text>
        <View className="flex-row mt-2 mb-2">
            <TouchableOpacity className="flex-row items-center" onPress={() => setVisible(true)}>
              <LanguageIcon style={[{color:theme.iconColor, marginRight:10}]} size={20}/>
              <Text style={{color:theme.textColor}}>{t('language')}</Text>
            </TouchableOpacity>
          </View>
      </View>
      </View>


      {/* About */}
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


      <Modal
        animationType='fade'
          visible={visible}
          transparent={true}
          onRequestClose={() => setVisible(false)}>

          <View className="w-[100%] bg-black/80 h-screen flex-row items-center justify-center">
            
            <View  style={{backgroundColor:theme.cardColor}} className=" w-[80%] h-[60%] rounded-lg">

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

      





      {/* <View className=" justify-center flex-row pb-5">
        <Text style={[{color:theme.textColor}]} className="text-white underline text-xl">{t('your-recordings')}</Text>
      </View>

      <ScrollView>
        <View className="mb-[7]">
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
      </TouchableOpacity> */}
    
   </SafeAreaView>
  )
}

export default HomeScreen
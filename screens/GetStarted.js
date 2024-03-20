import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList, Modal } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightCircleIcon, LanguageIcon } from 'react-native-heroicons/solid'
import { useTranslation } from 'react-i18next';
import i18next, { languageResources } from './src/i18n/i18n.config';
import languageList from './src/i18n/languageList.json'
import themeContext from './components/ThemeContext';

const GetStarted = ({navigation}) => {

  const {t, i18n} = useTranslation();
  const [visible, setVisible] = useState(false)

  const theme = useContext(themeContext)

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "Welcome",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className="pt-2 flex-1 justify-end bg-gray-100 relative">
     
      <View className="bottom-[90px] right-0 left-0 top-0 absolute">
        {/* <Image className="w-[520px] h-[500px]" source={require('../assets/GetStartedPhoneVectorArt.png')}/> */}
        <Image className="w-[420px] h-[655px] object-contain" source={{uri : "https://storage.googleapis.com/pai-images/c3351b7e1c004e1091063dfb67d54dc8.jpeg"}}/>
      </View>

      <Text></Text>

      <View className="justify-center flex-row rounded-full">
        <View className="items-center rounded-full bg-white/90" style={styles.shadow}>
          {/* <Image tintColor='teal' className="w-[180px] h-[180px]  " source={require('../assets/WhiteAppLogo.png')}/> */}
          
        </View>
      </View>

      <View className="flex-row justify-end mb-5 mr-2">
            <TouchableOpacity className="bg-red-400 flex-row p-3 rounded-full" onPress={() => setVisible(true)}>
            <LanguageIcon style={[{color:"white"}]} size={20}/>
            </TouchableOpacity>
          </View>

     
        <View className=" bg-slate-100 p-4 w-full h-[35%] rounded-t-[30px] justify-start">
          
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} className="flex-row bg-red-400 h-[60px] mt-2 justify-center items-center w-full rounded-full">
            <Text className="text-white mr-9 ml-4 w-[200] font-medium text-lg">{t('create')}</Text>
            <ArrowRightCircleIcon color="white" size={30}/>
          </TouchableOpacity>
          
          <TouchableOpacity className=" pt-6 items-center" >
          <Text  onPress={() => navigation.navigate("Login")} className="text-slate-600 font-medium">{t('already')}</Text>
          </TouchableOpacity>
          
          <View className="items-center pt-6 mt-6 border-t-[0.5px] border-black mx-10">
            <Text className="text-slate-600 w-36 text-center font-medium">
              {t('sign-in')}
            </Text>
            
            
            <View className="mt-6 bg-white p-2 rounded-full shadow-md shadow-red-500">
              <Image className="w-[20px] h-[20px]" source={{uri: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"}}/>
            </View>

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


const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 9,
  }
})

export default GetStarted
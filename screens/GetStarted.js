import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightCircleIcon, LanguageIcon } from 'react-native-heroicons/solid'
import { useTranslation } from 'react-i18next';

const GetStarted = ({navigation}) => {

  const {t, i18n} = useTranslation();

  const changeLanguage= () => {
    if (i18n.language === 'en'){
      i18n.changeLanguage('mal')
    }else{
      i18n.changeLanguage('en')
    }
  }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "Welcome",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className="pt-2 flex-1 justify-between bg-gray-100 relative">
     
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

     
        <View className=" bg-slate-100 p-4 w-full h-[300px] rounded-t-[30px] justify-start">
          
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} className="flex-row bg-red-400 h-[50px] mt-2 justify-center items-center w-full rounded-full">
            <Text className="text-white mr-9 ml-4 font-medium text-lg">{t('create')}</Text>
            <ArrowRightCircleIcon color="white" size={30}/>
          </TouchableOpacity>
          
          <TouchableOpacity className=" pt-6 items-center" >
          <Text  onPress={() => navigation.navigate("Login")} className="text-slate-600 font-medium">{t('already')}</Text>
          </TouchableOpacity>
          
          <View className="items-center pt-6 mt-6 border-t-[0.5px] border-black mx-10">
            <Text className="text-slate-600 font-medium">
              {t('sign-in')}
            </Text>
            
            
            <View className="mt-6 bg-white p-2 rounded-full shadow-md shadow-red-500">
              <Image className="w-[20px] h-[20px]" source={{uri: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"}}/>
            </View>

          </View>

          <View className="flex-row justify-center mt-5">
            <LanguageIcon style={[{color:"black", marginRight:10}]} size={20}/>
            <TouchableOpacity onPress={changeLanguage}>
              <Text className="">{t('translate')} {i18n.language !=='en' ? 'english': 'malayalam'}</Text>
            </TouchableOpacity>
          </View>

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
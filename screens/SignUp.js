import { View, Text, Button, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const SignUp = ({navigation}) => {

  const {t} = useTranslation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "SignUp",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className=" bg-white flex-1 relative justify-center">

      <View className="flex-row justify-center items-center absolute">
        <Image className="w-[450px] h-[950px]" source={{uri: "https://img.freepik.com/premium-photo/beautiful-cute-anime-girl-floating-space-listening-music-her-headphones-manga-style-relaxing-generative-ai-lofi-hip-hop-music-study-girl-chilling-generative-ai_117038-5565.jpg"}}/>
        {/* <Image className=" object-contain w-full h-[900px]" source={require('../assets/SignUp2.png')}/> */}
      </View>

      <View className=" bg-black/60 rounded-3xl mx-11 p-5 pb-9">

        <View className=" flex-row justify-center ">
          <Image className="w-[100px] h-[100px]" source={require('../assets/AppLogo.png')}/>
        </View>

        <View className="items-center mb-8">

          <Text className="text-white mx-11 text-center text-extrobold ">
          {t('fluent')}
          </Text>

        </View>

        <View className="mx-3">

          <TextInput placeholder='First Name' className="bg-white/90  mb-4 rounded-3xl p-2" ></TextInput>
          <TextInput placeholder='Last Name' className="bg-white/90 rounded-3xl mb-4 p-2" ></TextInput>
          <TextInput placeholder='Username' className="bg-white/90 mb-4 rounded-3xl p-2" ></TextInput>
          <TextInput placeholder='Email' className="bg-white/90 rounded-3xl mb-4 p-2" ></TextInput>
          <TextInput placeholder='Phone Number' keyboardType='numeric' className="bg-white/90 mb-4 rounded-3xl p-2" ></TextInput>
          <TextInput placeholder='Password' secureTextEntry className="bg-white/90 mb-4 rounded-3xl p-2" ></TextInput>
          <TextInput placeholder='Confirm Password' secureTextEntry className="bg-white/90 rounded-3xl mb-4 p-2" ></TextInput>

        </View>   

        <View className=" items-center mt-4 mb-5">
          
          <Text className="text-black rounded-lg p-3 px-8 bg-white font-extrabold"  onPress={() => navigation.navigate("Login")}>{t("sign-up")}</Text>

        </View>  

      </View>

    </SafeAreaView>
  )
}

export default SignUp
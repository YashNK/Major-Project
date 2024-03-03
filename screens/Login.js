import { View, Text, Button, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';


const Login = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "LogIn",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className=" bg-white flex-1 relative justify-center">

      <View className="bottom-1 right-1 absolute">
        <Image className="w-[550px] h-[550px]" source={require('../assets/LogInVectorArt.jpg')}/>
      </View>

      <View className=" bg-black/30 rounded-3xl mx-11 p-11">

        <View className=" flex-row justify-center ">
          <Image className="w-[180px] h-[180px]" source={require('../assets/AppLogo.png')}/>
        </View>

        <View className="items-center mb-8">

          <Text className="text-white mx-11 text-center text-extrobold ">
          Fluency Made Simple with BetterSpeak!
          </Text>

        </View>

        <View className="mx-3">

          <TextInput placeholder='Email' className="bg-white/90 mb-4 rounded-3xl p-2" ></TextInput>
          <TextInput placeholder='Password' secureTextEntry className="bg-white/90 rounded-3xl mb-4 p-2" ></TextInput>

        </View>   

        <View className="mb-3 items-center">

          <Text className="text-white rounded-lg p-3 mb-5 px-8  font-extrabold" onPress={() => navigation.navigate("Home")}>LOGIN</Text>
          <Text className="text-black rounded-lg p-3 px-8 bg-white font-extrabold"  onPress={() => navigation.navigate("SignUp")}>Sign Up</Text>

        </View>  

      </View>

      

    </SafeAreaView>
  )
}

export default Login
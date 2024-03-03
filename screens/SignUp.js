import { View, Text, Button, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "SignUp",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className=" bg-white flex-1 relative justify-center">

      <View className="bottom-1 right-1 absolute">
        <Image className="w-[450px] h-[550px]" source={require('../assets/SignUpVectorArt.jpg')}/>
      </View>

      <View className=" bg-black/30 rounded-3xl mx-11 p-5 pb-9">

        <View className=" flex-row justify-center ">
          <Image className="w-[100px] h-[100px]" source={require('../assets/AppLogo.png')}/>
        </View>

        <View className="items-center mb-8">

          <Text className="text-white mx-11 text-center text-extrobold ">
          Fluency Made Simple with BetterSpeak!
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

        <View className=" items-center mb-5">
          
          <Text className="text-black rounded-lg p-3 px-8 bg-white font-extrabold"  onPress={() => navigation.navigate("Login")}>Sign Up</Text>

        </View>  

      </View>

    </SafeAreaView>
  )
}

export default SignUp
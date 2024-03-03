import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'

const GetStarted = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
          headerTitle: "Welcome",
          headerTitleAlign: 'center'
        })
      }, []);

  return (
    <SafeAreaView className="pt-2 flex-1 justify-between bg-gray-100 relative">

      <View className="bottom-0 left-9 absolute">
        <Image className="w-[520px] h-[500px]" source={require('../assets/GetStartedPhoneVectorArt.png')}/>
      </View>

      <Text></Text>

      <View className="justify-center flex-row rounded-full">
        <View className="items-center rounded-full bg-white/90" style={styles.shadow}>
          <Image tintColor='teal' className="w-[180px] h-[180px]  " source={require('../assets/WhiteAppLogo.png')}/>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View className="flex-row bg-green-400 mb-10 p-4 mx-7 items-center rounded-lg justify-between">
          <Text className="text-white mx-2 font-extrabold text-lg">GET STARTED!</Text>
          <ArrowRightCircleIcon color="white" size={30}/>
        </View>
      </TouchableOpacity>
        
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
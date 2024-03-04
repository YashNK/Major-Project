import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, UserIcon} from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecCategories from './components/RecCategories'
import { DrawerActions } from '@react-navigation/native' 


const HomeScreen = () => {

  const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView className="bg-[#0a081c] flex-1 pt-1 px-2 relative">

      <View className="flex-row items-center justify-between pb-11">

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Bars3CenterLeftIcon color="white" size={30}/>
        </TouchableOpacity>

        <Image source={require('../assets/AppLogo.png')} className="w-[60px] h-[60px]"/>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <UserIcon color="white" size={30}/>
        </TouchableOpacity>
      
      </View>
    
      <TouchableOpacity  onPress={() => navigation.navigate("Delayed Auditory FeedBack System")}>
    
      <View className="mb-11">

        <View className="h-[130px] justify-center bg-violet-600 rounded-xl p-3 relative space-y-[-7px]">

          <Image source={require('../assets/HomeIMG.png')} className="w-[190px] h-[190px] absolute right-1 mb-2"/>
          <Text className="text-white font-extrabold relative italic text-[15px]">Use Our</Text>
          <Text className="text-white text-[40px] font-extrabold track">DELAYED</Text>
          <Text className="text-white text-[17px] font-extrabold">AUDITORY FEEDBACK</Text>
          <Text className="text-white text-[20px] font-extrabold">SYSTEM</Text>
        
        </View>

        </View>

      </TouchableOpacity>

      <View className=" justify-center flex-row pb-5">
        <Text className="text-white underline text-xl">YOUR RECORDINGS</Text>
      </View>

      <ScrollView>
        <View className="mb-[-865]">
        <RecCategories/>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>
        <View className="p-4 pb-2">
          <Text className="text-white text-center underline">
            View More
          </Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity>
      <View className="flex-row mt-3 mb-3 justify-center bg-violet-600 rounded-3xl p-3">
        <Image source={require('../assets/MicLogo.png')} className="w-[35px] h-[35px]"/>
      </View>
      </TouchableOpacity>
    
   </SafeAreaView>
  )
}

export default HomeScreen
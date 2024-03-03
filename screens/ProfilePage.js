import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, EnvelopeIcon, PhoneIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import RecCategories from './components/RecCategories'
import { DrawerActions } from '@react-navigation/native' 

const ProfilePage = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, []);

  return (
    <SafeAreaView className="bg-[#0a081c] flex-1 pt-1 px-2 relative">

    <View className="flex-row items-center justify-between pb-4">

      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Bars3CenterLeftIcon color="white" size={30}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image source={require('../assets/AppLogo.png')} className="w-[60px] h-[60px]"/>
      </TouchableOpacity>

      <UserIcon color="white" size={30}/>
    
    </View>

    <View className="flex-2 pb-7 items-center">
        <Text className="text-white font-black text-center tracking-widest">POFILE</Text>
        <UserCircleIcon size={155} color='white'/>
        <Text className="text-white text-lg pb-4 font-black text-center tracking-widest">Name</Text>
        <Text className="text-white bg-[#302E30] p-1 px-24 rounded-3xl font-black text-center tracking-widest">User Name</Text>
    </View>

    <View className="mx-4">

        <Text className="text-white pb-3 font-black tracking-widest">PERSONAL INFORMATION</Text>

    </View>

    <View className="bg-[#302E30] mb-3 mx-3 rounded-xl justify-between p-8 h-32">

        <View className="flex-row items-center pb-8">

            <PhoneIcon size={12} color="white"/>
            <Text className="text-white pl-3 flex-1">
                Phone
            </Text>
            <Text className="text-white right-2">
                9034****01
            </Text>
            
        </View>

        <View className="flex-row items-center pb-8">
            
            <EnvelopeIcon size={12} color="white"/>
            <Text className="text-white pl-3 flex-1">
                Email
            </Text>
            <Text className="text-white right-2">
                marian@gmail.com
            </Text>
            
        </View>

    </View>

    <Text className="text-white pb-3 font-black tracking-widest mx-4">
        YOUR RECORDINGS
    </Text>

    <ScrollView>
      <View className="mb-[-865]">
        <RecCategories/>
      </View>
    </ScrollView>

    <TouchableOpacity onPress={() => navigation.navigate("Recordings")}>
        <View className="p-4 mb-3">
          <Text className="text-white text-center underline">
            View More
          </Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  )
}


export default ProfilePage
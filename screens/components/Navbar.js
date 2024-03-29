import { View, Text, Image } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import themeContext from './ThemeContext'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'

const Navbar = () => {
    const theme = useContext(themeContext)

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        })
      }, []);

  return (
    <View style={{borderBottomColor:theme.recCard}} className="flex-row items-center justify-between mb-6 pl-3 pr-3 rounded-2xl border-b-[3px] pb-4">

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Bars3CenterLeftIcon style={[{color:theme.iconColor}]} size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image style={[{backgroundColor: theme.logoColor}]} source={require('../../assets/AppLogo.png')} className="w-[60px] h-[60px] rounded-full"/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <UserIcon style={[{color:theme.iconColor}]} size={30}/>
        </TouchableOpacity>
      
      </View>
  )
}

export default Navbar
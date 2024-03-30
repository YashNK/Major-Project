import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import themeContext from './ThemeContext'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { ArrowLeftCircleIcon, BackwardIcon, Bars3CenterLeftIcon, UserIcon } from 'react-native-heroicons/solid'

const NavbarBack = () => {
    const theme = useContext(themeContext)

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: true,
          headerStyle: { backgroundColor:theme.backgroundColor },
        })
      }, []);
}

export default NavbarBack
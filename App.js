import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GetStarted from './screens/GetStarted';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ProfilePage from './screens/ProfilePage';
import DelayedAuditoryFeedBack from './screens/DelayedAuditoryFeedBack';
import SavedRecodings from './screens/SavedRecodings';
import ViewRecording from './screens/ViewRecording';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './screens/components/CustomDrawer';
import RecCard from './screens/components/RecCard';
import { Cog6ToothIcon, FolderIcon, HomeIcon, MicrophoneIcon, UserCircleIcon, UserIcon } from 'react-native-heroicons/solid';
import SettingScreen from './screens/SettingScreen';
import { EventRegister } from 'react-native-event-listeners'
import { useContext, useEffect, useState } from 'react';
import theme from './screens/components/Theme';
import themeContext from './screens/components/ThemeContext';
import './screens/src/i18n/i18n.config';
import { useTranslation } from 'react-i18next';
import EditProfile from './screens/EditProfile';
import PrivacySettings from './screens/PrivacySettings';
import DeleteAccount from './screens/DeleteAccount';
import ContactUs from './screens/ContactUs';
import AboutUs from './screens/AboutUs';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator()


function Root(){
  const {t} = useTranslation();
  
  return(
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false, drawerActiveBackgroundColor:"transparent", drawerActiveTintColor:"#d97ecf", drawerInactiveTintColor:"#bfbfbf", drawerLabelStyle:{marginLeft:-15, SettingScreen:90}}}>  

        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: ({color}) => (
              <HomeIcon size={20} color={color}/>
          )
        }} />

        {/* <Drawer.Screen name="Profile" component={ProfilePage} options={{
          drawerIcon: ({color}) => (
              <UserIcon size={20} color={color}/>
          )
        }}/> */}

        <Drawer.Screen name="Delayed Auditory FeedBack System" component={DelayedAuditoryFeedBack} options={{
          drawerIcon: ({color}) => (
              <MicrophoneIcon size={20} color={color}/>
          )
        }}/>

        {/* <Drawer.Screen name="Recordings" component={SavedRecodings} options={{
          drawerIcon: ({color}) => (
              <FolderIcon size={20} color={color}/>
          )
        }}/> */}

        <Drawer.Screen name="Settings" component={SettingScreen} options={{
          drawerIcon: ({color}) => (
              <Cog6ToothIcon size={20} color={color}/>
          )
        }}/>

    </Drawer.Navigator>
  );
}

export default function App() {

  const [darkMode,setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)

    })
  })

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
    <NavigationContainer theme={darkMode === false ?  DefaultTheme : DarkTheme}>
      
      <Stack.Navigator  initialRouteName='Home' screenOptions={{headerShown:false}}>

        <Stack.Screen name="GetStarted" component={GetStarted}/>
        
        <Stack.Screen name="Home" component={Root}/>
        
        <Stack.Screen name="Login" component={Login}/>
        
        <Stack.Screen name="SignUp" component={SignUp}/>

        <Stack.Screen name="Profile" component={Root}/>

        <Stack.Screen name="Delayed Auditory FeedBack System" component={Root}/>

        {/* <Stack.Screen name="Recordings" component={Root}/> */}

        <Stack.Screen name="ViewRecordings" component={ViewRecording}/>

        <Stack.Screen name="RecCard" component={RecCard}/>

        <Stack.Screen name="Custom" component={CustomDrawer}/>

        <Stack.Screen name='Settings' component={Root}/>

        <Stack.Screen name="Edit Profile" component={EditProfile}/>

        <Stack.Screen name="Privacy Settings" component={PrivacySettings}/>

        <Stack.Screen name="Delete Account" component={DeleteAccount}/>

        <Stack.Screen name="Contact Us" component={ContactUs}/>

        <Stack.Screen name="About Us" component={AboutUs}/>

      </Stack.Navigator>
    
    </NavigationContainer>
    </themeContext.Provider>
    
  );
}
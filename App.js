import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator()

function Root(){
  return(
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false, drawerActiveBackgroundColor:"transparent", drawerActiveTintColor:"pink", drawerInactiveTintColor:"white", drawerLabelStyle:{marginLeft:-15, SettingScreen:90}}}>  

        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: ({color}) => (
              <HomeIcon size={20} color={color}/>
          )
        }} />

        <Drawer.Screen name="Profile" component={ProfilePage} options={{
          drawerIcon: ({color}) => (
              <UserIcon size={20} color={color}/>
          )
        }}/>

        <Drawer.Screen name="Delayed Auditory FeedBack System" component={DelayedAuditoryFeedBack} options={{
          drawerIcon: ({color}) => (
              <MicrophoneIcon size={20} color={color}/>
          )
        }}/>

        <Drawer.Screen name="Recordings" component={SavedRecodings} options={{
          drawerIcon: ({color}) => (
              <FolderIcon size={20} color={color}/>
          )
        }}/>

        <Drawer.Screen name="Settings" component={SettingScreen} options={{
          drawerIcon: ({color}) => (
              <Cog6ToothIcon size={20} color={color}/>
          )
        }}/>

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='GetStarted' screenOptions={{headerShown:false}}>

        <Stack.Screen name="GetStarted" component={GetStarted}/>
        
        <Stack.Screen name="Home" component={Root}/>
        
        <Stack.Screen name="Login" component={Login}/>
        
        <Stack.Screen name="SignUp" component={SignUp}/>

        <Stack.Screen name="Profile" component={Root}/>

        <Stack.Screen name="Delayed Auditory FeedBack System" component={Root}/>

        <Stack.Screen name="Recordings" component={Root}/>

        <Stack.Screen name="ViewRecordings" component={ViewRecording}/>

        <Stack.Screen name="RecCard" component={RecCard}/>

        <Stack.Screen name="Custom" component={CustomDrawer}/>

        <Stack.Screen name='Settings' component={Root}/>

      </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}
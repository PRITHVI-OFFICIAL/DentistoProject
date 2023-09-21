import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CameraScreen from './screens/CameraScreen';
import Login from './screens/Login';
import StartScreen from './screens/StartScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from './Colors';
import Home from './screens/Home';
import Articles from './screens/Articles';
import BookAppointment from './screens/BookAppointment';
import UserProfile from './screens/UserProfile';
import ScanTeeth from './screens/ScanTeeth';
import CameraPage from './screens/CameraPage';
import CameraDummy from './screens/CameraDummy';
import Results from './screens/Results';





export default function App() {

  const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Tab.Navigator  screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor:Colors.primary,
        tabBarInactiveTintColor:'grey',
        activeTintColor: 'red',
        tabBarActiveBackgroundColor:"#f2f2f2",
        tabBarStyle:  { height: 60},
        tabBarLabelStyle:{paddingBottom:8}
      }
      
    }
    backBehavior={'history'}
    >



      

      <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="md-home-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
      <Tab.Screen name="Articles" component={Articles} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="newspaper-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
        
        <Tab.Screen name="ScanTeeth" component={ScanTeeth} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="scan-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
       
           
      
      <Tab.Screen name="Book Appointment" component={BookAppointment} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="checkbox-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />

     
      
      <Tab.Screen name="Profile" component={UserProfile} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="person-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />

<Tab.Screen name="CameraPage" component={CameraPage} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" ,},screenOptions:{ScreenOrientation: 'landscape'}}} />
<Tab.Screen name="CameraDummy" component={CameraDummy} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" ,},screenOptions:{ScreenOrientation: 'landscape'}}} />
<Tab.Screen name="Results" component={Results} options={{ tabBarVisible: true,tabBarButton: (props) => null}}  />     


       

{/* <Tab.Screen name="BookedTicket" component={BookedTicket} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} />
<Tab.Screen name="BusRoute" component={BusRoute} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} /> */}
    </Tab.Navigator>
  );
}







  return (
    
    <NavigationContainer>
    <HomeStack/>
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

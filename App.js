import { StatusBar } from 'expo-status-bar';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import Login from './screens/Login';
import StartScreen from './screens/StartScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
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
import Signup from './screens/Signup';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


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
        tabBarLabelStyle:{paddingBottom:8},
       // defaultScreenOption:{Login}
      }
      
    }
    backBehavior={'history'}
    >

  

      <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="md-home-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
      <Tab.Screen name="Reports" component={Articles} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="newspaper-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
        
        <Tab.Screen name="ScanTeeth" component={ScanTeeth} options={{ tabBarIcon:({size,color,focused})=>(
            <Ionicons name="scan-outline" size={25} color={focused?Colors.primary:'grey'} />
          ),}} />
       
           
      
      <Tab.Screen name="BookAppointment" component={BookAppointment} options={{ tabBarIcon:({size,color,focused})=>(
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

function AuthStack() {
  return (
    <Tab.Navigator  screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor:'#E96479',
        tabBarInactiveTintColor:'grey',
        tabBarActiveBackgroundColor:"#f2f2f2",
        tabBarStyle:  { height: 60}
      } 
    }>
      <Tab.Screen name="Login" component={Login} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" },}} />
      <Tab.Screen name="Signup" component={Signup} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} />
    </Tab.Navigator>
  );
}




function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
    
  );
}



export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator/>
    </AuthenticatedUserProvider>
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

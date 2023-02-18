import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import NextScreen from '../screens/NextScreen';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
// import BottomTabNavigations from './BottomTabNavigations';
import  OnboardingScreen  from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='OnboardingScreen'>
      {/* <Stack.Screen
        name="BottomTabNavigations"
        component={BottomTabNavigations}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home', headerShown:false}}
      />
      <Stack.Screen
        name="NextScreen"
        component={NextScreen}
        options={{ title: 'My profile',headerShown:false }}
      />


      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: ' Your Profile',headerShown:false }}
      />
       
        {/* <Stack.Screen  
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ title: 'OnboardingScreen',headerShown:false }}
        
        /> */}
       
    </Stack.Navigator>
    


  )
}

export default StackNavigation
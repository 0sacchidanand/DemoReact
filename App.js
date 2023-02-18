import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import StackNavigation from './src/navigations/StackNavigation';


const Root= createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator 
      screenOptions={{
        headerShown:false,
      }}>
        <Root.Screen name='Root'
        options={{ headerShown:false}}
        component={StackNavigation}>

        </Root.Screen>
      </Root.Navigator>
    </NavigationContainer>
    
  )
}

export default App
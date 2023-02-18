import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, Searchbar, TextInput, Button } from 'react-native'

const OnboardingScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1, backgroundColor: '#7364FF', 
         alignItems: 'center'
    }}>
      <View style={{width:'100%' , alignItems:'center',position:'absolute',top:20}}>
      <Image source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png'}} style={{height:20,width:20,position:'absolute',zIndex:10,left:30,top:20}}/>
      <TextInput placeholder='Search' placeholderTextColor={'black'} style={{ padding: 10, margin: 5 , height:50,width:'90%',backgroundColor:'#fff',borderRadius:15, paddingLeft:50}} />
      </View>
      <View style={{ flex:1, width:'100%' , alignItems:'flex-start',justifyContent:'flex-start',position:'relative',top:70,paddingRight:'100%'}}>
      <TextInput  style={{ padding: 70, margin:100, height:50,width:'40%',backgroundColor:'#fff', paddingLeft:100}} />
      </View>


      
      
    </View>

  )
}
export default OnboardingScreen;
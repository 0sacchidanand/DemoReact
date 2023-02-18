import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Image, View, Text, TextInput } from 'react-native'
import Home from './Home';

const NextScreen = () => {
  const navigation = useNavigation();

  return (

    <View style={{ flex: 1, backgroundColor: '#7364FF', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: '100%', alignItems: 'center', position: 'absolute', top: 50 }}>
        {/* <Image source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png'}} style={{height:20,width:20,position:'absolute',zIndex:10,left:30,top:20}}/> */}
        {/* <TextInput placeholder='Search' placeholderTextColor={'black'} style={{ padding: 10, margin: 5 , height:50,width:'90%',backgroundColor:'#fff',borderRadius:15, paddingLeft:50}} /> */}
        <Image source={require('../assets/Download.gif')} style={{ height: 200, width: "70%", alignContent: 'center', top: 50 }} />
      </View>
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontStyle: 'italic', fontSize: 30, alignItems: 'flex-end', color: '#ffffff', top: 100 }}>"All study Material in one place !"</Text>

        <Text style={{ fontWeight: 'bold', fontSize: 60, alignItems: 'center', color: '#000000', top: 100 }}>...</Text>
      </View>
      <View style={{ flexDirection:'row',width:'200%',justifyContent:'space-evenly',marginBottom:'15%',alignSelf:'center',paddingTop:'20%' }}>
        <Button title='Skip' onPress={() => { navigation.navigate("Home") }} style={{ fontWeight: 'bold', color: 'white'}}></Button>

        <Button title='Next' onPress={() => { navigation.navigate("Dashboard") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>
        </View>

    </View>


  )
}

export default NextScreen
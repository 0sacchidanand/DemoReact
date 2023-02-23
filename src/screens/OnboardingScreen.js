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
      <View style={{ width: '100%', alignItems: 'center', marginVertical: 20 }}>
        <Image source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png' }} style={{ height: 20, width: 20, position: 'absolute', zIndex: 10, left: 30, top: 20 }} />
        <TextInput placeholder='Search' placeholderTextColor={'black'} style={{ padding: 10, margin: 5, height: 50, width: '90%', backgroundColor: '#fff', borderRadius: 15, paddingLeft: 50 }} />
      </View>
      <View style={{ position: 'absolute', left: 50, bottom: 50 }}>
        <Button title='Skip' onPress={() => { navigation.navigate("Home") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>
      </View>
      <View style={{ position: 'absolute', right: 50, bottom: 50 }}>
        <Button title='Next' onPress={() => { navigation.navigate("NewScreen") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>
      </View>
      <View style={{marginTop:'35%',}}>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', }}>
        <View style={{ height: 120, width: 120, backgroundColor: '#fff',borderRadius }}>

        </View>
        <View style={{ height: 120, width: 120, backgroundColor: '#fff' }}>

        </View>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' , marginVertical:50 }}>
        <View style={{ height: 120, width: 120, backgroundColor: '#fff' }}>

        </View>
        <View style={{ height: 120, width: 120, backgroundColor: '#fff' }}>

        </View>
      </View>
      </View>
    </View>

  )
}
export default OnboardingScreen;

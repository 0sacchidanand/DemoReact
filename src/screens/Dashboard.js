import React from 'react'
import { Button, Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: '20%' }}>

      <View style={{ width: '100%', alignItems: 'center', position: 'absolute', top: 50 }}>
        <Image source={require('../assets/Cwipedialogo.png')} style={{ height: 200, width: "50%", alignContent: 'center', top: 50 }} />
      </View>
      <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '60%' }}>
        <Text style={{ fontStyle: 'italic', fontSize: 20, alignItems: 'flex-end', color: '#000000', top: 100 }}>"DIPLOMA CONNECT MOBILE APP BY CWIPEDIA"</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 15, alignItems: 'flex-end', color: '#000000', top: 100 }}>We Love to Code</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 10, alignItems: 'flex-end', color: '#000000', top: 100 }}>Cwipedia.com</Text>

        <Text style={{ fontWeight: 'bold', fontSize: 60, alignItems: 'center', color: '#000000', top: 100 }}>...</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '200%', justifyContent: 'space-evenly', marginBottom: 0, alignSelf: 'center', paddingTop: '20%' }}>
        <Button title='Skip' onPress={() => { navigation.navigate("Home") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>

        <Button title='Next' onPress={() => { navigation.navigate("OnboardingScreen") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>
      </View>
    </View>
  )
}

export default Dashboard
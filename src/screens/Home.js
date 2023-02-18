import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, Searchbar, TextInput, Button } from 'react-native'

const Home = () => {

  const navigation = useNavigation();
  return (
    <View style={{
      flex: 1, backgroundColor: '#7364FF', justifyContent:
        'center', alignItems: 'center'
    }}>
      {/* <View style={{width:'100%' , alignItems:'center',position:'absolute',top:20}}> */}
      {/* <Image source={{uri:'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png'}} style={{height:20,width:20,position:'absolute',zIndex:10,left:30,top:20}}/> */}
      {/* <TextInput placeholder='Search' placeholderTextColor={'black'} style={{ padding: 10, margin: 5 , height:50,width:'90%',backgroundColor:'#fff',borderRadius:15, paddingLeft:50}} /> */}
      {/* </View> */}

      {/* <Image source={require('../lotties.png')} /> */}

      <Image source={require('../assets/ggif.gif')} style={{ height: 150, width: "50%", alignContent: 'center' }} />
      <View style={{ marginVertical: 30, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#ffffff', textAlign: 'center' }}>Access study resource right from your hand</Text>

        <View style={{ backgroundColor: '#7364FF', width: '50%', marginVertical: 10, }}>


          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff', textAlign: 'center' }}>Keep all diploma study resource in your pocket</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 70, color: '#000000', textAlign: 'center', paddingTop: '20%', }}>...</Text>
          {/* <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ffffff', textAlign: 'center', paddingTop: '50%' }}>Skip</Text> */}
         
        </View>
        <View style={{ flexDirection:'row',width:'200%',justifyContent:'space-evenly',marginBottom:'15%',alignSelf:'center',paddingTop:'20%' }}>
        <Button title='Skip' onPress={() => { navigation.navigate("NextScreen") }} style={{ fontWeight: 'bold', color: 'white'}}></Button>

        <Button title='Next' onPress={() => { navigation.navigate("NextScreen") }} style={{ fontWeight: 'bold', color: 'white' }}></Button>
        </View>

      </View>
    </View>

  )
}
export default Home
// import { useNavigation } from '@react-navigation/native'
// import React from 'react'
// import { ActivityIndicator, View ,Button, Image, ScrollView } from 'react-native'

// const Home = () => {

//   const navigation = useNavigation();
// const onPressLearnMore = ()=>{
//     navigation.navigate('NextScreen')
// }


//   return (
//     <View style={{flex:1,justifyContent:'center'}}>
      
//         <ScrollView>
        

// <Image source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}}
// style={{height:675,width:'100%',resizeMode:'contain'}}
// />
// <Button
//   onPress={onPressLearnMore}
//   title="click"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
//         </ScrollView>
        
//     </View>
    
//   )
// }

// export default Home
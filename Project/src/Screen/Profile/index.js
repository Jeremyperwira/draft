import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
          
            <View style={{alignItems:"center", marginTop:20}}>
                <Text style={{fontWeight:'bold'}}>Jeremy Perwira</Text>
                <Text>Junior UI/UX Designer</Text>
                <Text style={{color:"#f2c94c", fontStyle:"italic"}}>| HTML | CSS | Javascript | Node.js | Pyhton |</Text>
                <Text style={{color:"#f2c94c", fontStyle:"italic"}}>| React Native | Bootstrap | restAPI | Git</Text>
                <Text style={{fontSize:8, color:"#bdbdbd"}}> Source File : Github/Jeremyperwira/ReactExpo</Text>


            </View>
            
            {/* <View style={{backgroundColor:'white', flex: 1 , justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>Profile</Text>
            </View> */}


            
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})

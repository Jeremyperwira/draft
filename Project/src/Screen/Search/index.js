import React from 'react'
import { StyleSheet, Text, View ,TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
            <View style={{width:360,height:40,backgroundColor:"#f4f4f4",alignSelf:'center',marginVertical:20,borderColor:"#333333", borderWidth:0.2,borderRadius:28}}>
            <TextInput 
                placeholder="Sedang cari apa hari ini?"
                placeholderTextColor="#bdbdbd"
                style={{flexDirection:'column', fontSize:14, marginLeft:15, justifyContent:'center',marginTop:5}}
            />
            </View>
            {/* Main Content */}
            <View style={{backgroundColor:'white', flex: 1 }}> 
                <Text style={{textAlign:'center'}}></Text>
            </View>


            
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})

import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoard = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            <View>
                <TouchableOpacity onPress={()=>navigation.push('AuthIn')}>
                    <Text style={{textAlign:"right" , marginHorizontal:20, marginTop:20 , color:"grey"}}>Lewati</Text>
                </TouchableOpacity>
                <Image style={{marginTop:"30%", width:280 , height:280 , alignSelf:'center' }}source={require('../../Assets/Image/Welcome.png')} />
                <Text style={{marginTop:20 , textAlign:'center' , fontSize:18, color:"#F2C94C" , fontWeight:"bold"}}>  Aplikaski Transport Pertama</Text>
                <Text style={{marginHorizontal:30,textAlign:"center", marginVertical:10, fontSize:14, color:"black" }}>  CargoX merupakan aplikasi pertama sebagai platform transportasi terbaik di Indonesia, dengan layanan terbaik.</Text>

                <View style={{alignSelf:'center' ,flexDirection:'row'}}>
                    
                    <View style={{width:20 ,height:8 , borderRadius:60 , backgroundColor:'#F2C94C', marginRight:4}}/>
                    <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                    <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                    <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                </View>
                

                <TouchableOpacity onPress={()=>navigation.push('AuthIn')}>
                    <View style={{justifyContent:"center" ,marginTop:"20%",height:40, width:"80%", backgroundColor:'#F2C94C', borderRadius:10, alignSelf:'center'}}>
                        <Text style={{textAlign:'center' , fontWeight:"bold",color:'white'}}>Selanjutnya</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default OnBoard

const styles = StyleSheet.create({})

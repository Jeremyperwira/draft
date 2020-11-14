import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home'
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthIn = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"white" , flex:1}}>
            <View>
                <Text style={{marginTop:80, fontSize:18, fontWeight:'bold', marginHorizontal:20,justifyContent:'flex-end', color:'#F2C94C'}}>Selamat Datang</Text>
                <Text style={{fontSize:14, fontWeight:'normal', marginHorizontal:20,justifyContent:'flex-end', color:'#333333'}}>Masukan email anda yang telah terdaftar di CargoX</Text>

                <View style={styles.box}>
                    <Text style={{justifyContent:'flex-start', right:140, marginTop:20, fontWeight:"bold"}}>Email</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Jeremyperwira@protonmail.com"
                            placeholderTextColor="#c1c1c1"
                            style={styles.input}
                        />
                    </View>
                    <Text style={{justifyContent:'flex-start', right:128, marginTop:20, fontWeight:"bold"}}>Password</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Masukan password anda disini"
                            placeholderTextColor="#c1c1c1"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={{marginTop:"60%"}}>

                    <TouchableOpacity title="Login" onPress={()=>navigation.push('MainApp')} color="#F2C94C"  >
                    <View style={{justifyContent:"center" ,marginTop:"20%",height:40, width:"80%", backgroundColor:'#F2C94C', borderRadius:10, alignSelf:'center'}}>
                        <Text style={{textAlign:'center' , fontWeight:"bold",color:'white'}}>Masuk</Text>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity title="Buat Akun" onPress={()=>navigation.push('AuthUp')} color="#333333"  >
                        <View style={{justifyContent:"center",marginTop:10 ,height:40, width:"80%", backgroundColor:'#333333', borderRadius:10, alignSelf:'center'}}>
                        <Text style={{textAlign:'center' , fontWeight:"bold",color:'white'}}>Daftar</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default AuthIn

const styles = StyleSheet.create({
    button:{
        width:320,
        height:200,
        alignSelf: 'center'
    },
    buttonAuth:{
        marginTop: -140,
        width:320,
        alignSelf: 'center'
    },
    box:{
        alignItems:'center'
    },
    boxActive:{
        width:320,
        height:32,
        backgroundColor:"#fafafa",
        borderRadius:6,
        borderWidth:0.5,
        borderColor:"#f2c94c"
    },
    input:{
        color: '#333333',
        marginLeft: 10,
        fontSize: 12,
        alignContent: 'center'
    },
})

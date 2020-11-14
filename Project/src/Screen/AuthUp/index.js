import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home'
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from 'react-native-reanimated';

const AuthUp = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"white" , flex:1}}>
            <View>
                <Text style={{marginTop:20, fontSize:18, fontWeight:'bold', marginHorizontal:35,justifyContent:'flex-end', color:'#333333'}}>Masukan Informasi yang diperlukan</Text>

                <View style={styles.box}>
                    <Text style={{justifyContent:'flex-start', right:140, marginTop:20, fontWeight:"bold",color:"#bdbdbd"}}>Nama</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Masukan nama anda"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                        />
                    </View>

                    <Text style={{justifyContent:'flex-start', right:135, marginTop:10, fontWeight:"bold",color:"#bdbdbd"}}>Alamat</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Jeremyperwira@protonmail.com"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                        />
                    </View>

                    <Text style={{justifyContent:'flex-start', right:140, marginTop:10, fontWeight:"bold",color:"#bdbdbd"}}>Email</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Jeremyperwira@protonmail.com"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                        />
                    </View>

                    <Text style={{justifyContent:'flex-start', right:128, marginTop:10, fontWeight:"bold",color:"#bdbdbd"}}>Pekerjaan</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Pengedar Odading"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                        />
                    </View>

                    <Text style={{justifyContent:'flex-start', right:115, marginTop:10, fontWeight:"bold",color:"#bdbdbd"}}>Bidang Usaha</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Industri Permakanan"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                        />
                    </View>

                    <Text style={{justifyContent:'flex-start', right:128, marginTop:10, fontWeight:"bold" ,color:"#bdbdbd"}}>Password</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Masukan password anda disini"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={{justifyContent:'flex-start', right:90, marginTop:10, fontWeight:"bold" ,color:"#bdbdbd"}}>Konfirmasi Password</Text>
                    <View style={styles.boxActive}>
                        <TextInput 
                            placeholder="Password harus sama"
                            placeholderTextColor="#bdbdbd"
                            style={styles.input}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={{marginTop:120}}>

                    <TouchableOpacity  style={styles.button}  >
                        <Text style={{textAlign:'center', color:"#bdbdbd", marginVertical:10}}>Dengan mendaftar saya menyetujui Kebijikan Privasi dan Ketentuan CargoX</Text>
                        <Button title="Daftar" onPress={()=>navigation.push('MainApp')} color="#F2C94C"></Button>
                    </TouchableOpacity>

                    
                </View>

            </View>
        </SafeAreaView>
    )
}
export default AuthUp

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
        borderColor:"#bdbdbd"
    },
    input:{
        color: '#333333',
        marginLeft: 10,
        fontSize: 12,
        alignContent: 'center'
    },
})


import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View ,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout(()=>{
            navigation.replace('OnBoard')
        }, 4000)
    })

    return (
        <SafeAreaView>


            <Image source={require('../../Assets/Image/DummyLogo.png')} style={styles.splash} />
            
            <Text  style={{textAlign:'center', color:'#333333', fontSize:8, marginTop:250}}> Aplikasi Transportasi Karya Anak Bangsa</Text>
            <Text  style={{textAlign:'center', color:'#333333', fontSize:8}}> PT. Ambil Sertifikat Tbk</Text>
            <Text  style={{textAlign:'center', color:'#333333', fontSize:8}}> Versi 0.0.1 </Text>
            <Text  style={{textAlign:'center', color:'#333333', fontSize:8}}> Github: Jeremyperwira</Text>
        </SafeAreaView>
    )
}


export default Splash

const styles = StyleSheet.create({
    splash:{
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 300,
        alignContent: 'center',
    }
})

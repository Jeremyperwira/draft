import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Axios from 'axios'

const Mail = () => {
    const [ hasError, setErrors] =useState (false) ;
    const [ data, setData] = useState ({}) ;

    async function fetchData(){
        try{
            const res = await Axios.get(
                'https://api.kawalcorona.com/positif'
            );
            setData(res.data);
        
        }catch(error){
            setErrors(error.ressponse.data);
            alert(hasError.toString())
        }
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>

            {/* Main Content */}
            <View style={{backgroundColor:'white',justifyContent:'center'}}> 
                <View style={{width:75,height:10, backgroundColor:'#F2C94C',alignSelf:'center',left:80, top:70}}/>
                <Text style={{ justifyContent:'center', textAlign:'center',color:'#333333', fontSize:22 ,marginTop:40 ,fontWeight:'bold'}}>CargoX Peduli Corona</Text>
                <Text style={{ justifyContent:'center', textAlign:'center',color:'#f2c94c', fontSize:12 ,fontWeight:'normal'}}>Source : Kawalcorona.com</Text>
            </View>

                <Text style={{fontSize:10, textAlign:'center' ,marginTop:20}}> {data.name} (Global)</Text>
                <Text style={{fontSize:16, textAlign:'center' , fontWeight:'bold'}}>{data.value}</Text>
            
        </SafeAreaView>
    )
}

export default Mail
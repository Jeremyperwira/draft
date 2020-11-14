import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Axios from 'axios'

const API = () => {
    const [ hasError, setErrors] =useState (false) ;
    const [ data, setData] = useState ({}) ;

    async function fetchData(){
        try{
            const res = await Axios.get(
                'https://api.kawalcorona.com/positif/'
            );
            setData(res.data);
        
        }catch(error){
            setErrors(error.response.data);
            alert(hasError.toString())
        }
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>

            {/* Main Content */}
            <View style={{backgroundColor:'white', flex: 1 , justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>API DATA HERE</Text>
                <Text> ID : {data.id}</Text>
                <Text> Tittle : {data.title}</Text>

            </View>


            
        </SafeAreaView>
    )
}

export default API
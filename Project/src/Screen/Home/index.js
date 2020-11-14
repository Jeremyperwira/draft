import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const Home = () => {
    return (
        <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{backgroundColor:'#f9f9f9'}}> 
             {/* Main Content */}
                <View> 
                    <ScrollView 
                     
                    style={styles.banner}
                    >
                        <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false} 
                        style={{paddingHorizontal:20, flexDirection:'row'}}>    
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner1.png')} />
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner2.png')} />
                            <Image style={styles.bannerImage}source={require('../../Assets/Image/Banner1.png')} />
                        </ScrollView>

                        <View style={{marginLeft:22 , marginTop:7 , flexDirection:'row'}}>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:20 ,height:8 , borderRadius:60 , backgroundColor:'#F2C94C', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                            <View style={{width:8 ,height:8 , borderRadius:60 , backgroundColor:'#f2f2f2', marginRight:4}}/>
                        </View>
                    </ScrollView>
                </View>  

                    <View style={styles.launcher}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal: 40, alignContent:'center'}}>
                            <Image style={{width:27,height:36}}source={require('../../Assets/Image/ThumbPromo.png')} />
                            <Image style={{width:24,height:36}}source={require('../../Assets/Image/ThumbKurir.png')} />
                            <Image style={{width:24,height:36}}source={require('../../Assets/Image/ThumbKargo.png')} />
                            <Image style={{width:31,height:36}}source={require('../../Assets/Image/ThumbLainnya.png')} />

                        </View>
                    </View>

                <View style={styles.content}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                         marginTop:10,
                         marginLeft:20,
                        //  fontFamily:'Poppins',
                         }}>Hai Jeremy, lagi perlu di daerah mana?</Text>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false} 
                    style={{paddingHorizontal:20,flexDirection:'row'}}>
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Jakarta.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah2.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah3.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah4.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Jakarta.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah2.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah3.png')} />
                        <Image style={styles.contentImage}source={require('../../Assets/Image/Daerah4.png')} />
                    </ScrollView>
                </View>

                <View style={styles.content2}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                         marginTop:10,
                         marginLeft:20,
                        //  fontFamily:'Poppins',
                         }}>Pilih kendaraan sesuai kebutuhan kamu</Text>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false} 
                     style={{paddingHorizontal:20,flexDirection:'row'}}>
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                    </ScrollView>

                </View>

                <View style={styles.content2}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'bold',
                         marginTop:10,
                         marginLeft:20,
                        //  fontFamily:'Poppins',
                         }}>Belanja di CargoX pasti GRATIS Ongkir</Text>
                    <View style={{marginLeft:20,flexDirection:'row'}}>
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                         <View style={styles.contentImage2} />
                    </View>

                </View>


                    
             
             
             
             
             
             
             
             
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    // Grid sebagai Garis Dasar //
    grid:{  
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
    },

    launcher:{
        marginHorizontal:20,
        width:350,
        height:64,
        borderRadius: 6,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
        shadowRadius:10,
        shadowOpacity:0.10,
        shadowColor:'red',
    },
    thumbicon:{
        height:36,
        
    },
    banner:{

        marginBottom: 17,
        height: 125,
        backgroundColor: 'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
        borderTopWidth: 0,

    },
    bannerImage:{
        // marginHorizontal:22, ScrollView
        marginTop:10,
        marginRight:4,
        // backgroundColor:'#F2C94C',
        height: 90,
        width: 210,
        borderRadius:8,
        shadowOpacity:8,
        shadowRadius:20,
        shadowColor:'black',
        borderColor:'#E0E0E0',
        borderWidth: 0.5
    },
    contentImage:{
        marginTop:5,
        marginRight:4,
        height: 104,
        width: 104,
        
    },
    content:{
        marginTop: 17,
        height: 160,
        backgroundColor: 'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,

    },
    content2:{
        marginTop: 17,
        height: 180,
        backgroundColor: 'white',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,

    },
    contentImage2:{
        marginTop:5,
        marginRight:4,
        height: 120,
        width: 160,
        borderRadius: 6,
        backgroundColor: '#f4f4f4',
        borderColor:'#E0E0E0',
        borderWidth: 0.5,
        
    },
    
})




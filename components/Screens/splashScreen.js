import React from 'react'
import { Title } from 'react-native-paper';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native'
import { useLinkProps } from '@react-navigation/native';

function Splash(props){

setTimeout(() => {
    props.navigation.replace("Login")
}, 3000);

    return(
        <View style={styles.container}>
            <Title  style={{fontSize:30, marginTop:30, color:'red', fontWeight:'bold'}}>DONATE BLOOD, SAVE LIVES</Title>
            <Image style={styles.main} source={require("../Images/logo.png")}/>
            <Text style={styles.text}>BLOOD BANK</Text>
        </View>
       
    )
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        width:"70%",
        height: "70%",
        resizeMode:'contain'
        
      
        
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fece2f'
    },
    text:{
        fontSize:40,
        color:'red',
        fontWeight:'bold'
    }
})
export default Splash;
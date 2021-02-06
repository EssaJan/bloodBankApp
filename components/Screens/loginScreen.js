import React, {useState,useEffect} from 'react'
import { TextInput, Button  } from 'react-native-paper';
import {View, Text, StyleSheet, ScrollView,  } from 'react-native'
import { Form,   } from 'native-base';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';




function Login(props){
    
    const [data, setData] = useState({
        validEmail:true,
        validPassword:true,
    })

    const[textemail, setEmail] = useState('')
    const[textPassword, setPassword] = useState('')
    
 
    const handleValidEmail=(val)=>{
        if(val.length <= 0){
            setData({
                ...data,
                validEmail:false
            })
        }else{
            setData({
                ...data,
                validEmail:true
            })
        }
    }   

    const handleValidPaasword=(val)=>{
        if(val.length >= 8){
            setData({
                ...data,
                validPassword:true
            })
        }else{
            setData({
                ...data,
                validPassword:false
            })
        }
    }   

    function signIn(){
        auth().signInWithEmailAndPassword(textemail, textPassword)
        .then((userCredential) => {
            var user = userCredential.user;
            var email = user.email
            database().ref('User').orderByChild('email').equalTo(email).once('value', function(data){
                data.forEach((childSnapshot) => {
                    var childData = childSnapshot.val();
                    var _name = childData.name
                    var phone = childData.phone
                    var address = childData.address
                    var age = childData.age
                    var donner = childData.donner
                    var bloodGroup = childData.bloodGroup
                    props.navigation.navigate("DashBoard",{
                        email: email,
                        _name:_name,
                        phone:phone,
                        address:address,
                        age:age, 
                        donner: donner,
                        bloodGroup:bloodGroup

                      
                })   
                    // ...
                  });
               
       
            
        })
       
    
   
    })
    .catch((error) => {
      alert(error)
    });

        
        setEmail(""),
        setPassword("")
    }

   
    return(
        
        <ScrollView>
        <View style={styles.container}>
     
            <View style={styles.main}></View>
            <View style={styles.main1}>
           
            <Text style={{fontSize:38, color:'#fece2f', fontWeight:'bold' ,  marginLeft:5, marginRight:5}}>SIGN IN TO CONTINUE,</Text>

                <Form style={styles.form}> 
           <TextInput style={styles.input} label = "email" value={textemail} onChangeText={setEmail} outlined keyboardType="email-address" onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}/> 
           {data.validEmail ? null : <Text style={{color:'red'}}>please provide actuall email format</Text>}
           <TextInput style={styles.input} label = "password" value={textPassword} onChangeText={setPassword} outlined keyboardType="default" secureTextEntry={true} onEndEditing={(e)=>handleValidPaasword(e.nativeEvent.text)}/> 
            {data.validPassword ? null : <Text style={{color:'red'}}>password must be 8 character long.</Text>}
           <Button style={{alignItems:'flex-start'}}  mode="text" onPress={() => console.log('forget Button pressed')}>
            Forgot password

        </Button>
           <Button style={{height:'15%',}} mode="contained" onPress={() => signIn()}>
            SignIn
            
        </Button>
        <Button mode="outlined" onPress={() => props.navigation.navigate("SignUp")}>
            New User? Register
            
        </Button>
            </Form>
         
          
           </View>
            <View style={styles.main2}></View>
        </View>
                </ScrollView>
    )
}const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    main:{
        flex:1,
        
    },
    main1:{
        flex:6,
        // backgroundColor:'green'
        marginTop:50
    },
    main2:{
        flex:1,
        // backgroundColor:'orange'
    },
    input:{
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2,
        marginBottom:10,
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15
    },
    form:{
        marginLeft:5,
        marginRight:5
    },
    button:{
        height:'100%'
    }
})
export default Login;
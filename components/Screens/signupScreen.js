import React,{useState} from 'react'
import { TextInput,Button  } from 'react-native-paper';
import {View, Text, StyleSheet, ScrollView , ActivityIndicator, } from 'react-native'
import { Form,Toast    } from 'native-base';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';

// import firebase from '../config/Fbdb'



function SignUp(props){
    const [data, setData] = useState({
        validName:true,
        validPhone:true,
        validBlood: true,
        validAge:true,
        validDonner:true,
        validAddress:true,
        validemail:true,
        validPassword:true,
        check_textInputChange:false,
        isValidEmail:true,
        isValidPassword:true,

    })
    const[textName, setName] = useState('')
    const[textPhone, setPhone] = useState('')
    const[textBlood, setBlood] = useState('')
    const [textAge, setAge ] = useState('')
    const [textDonner, setDonner ] = useState('')
    const[textAddress, setAddress] = useState('')
    const[textemail, setEmail] = useState('')
    const[textPassword, setPassword] = useState('')
    const[isloading, setLoading]= useState(false)



    function registerUser(){
       
        auth().createUserWithEmailAndPassword(textemail, textPassword)
        .then(() => {
            alert("Congrats! now you are registered")
            props.navigation.navigate("Login")
        // console.log('User account created & signed in!');
        })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
    alert(error)
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
    alert(error)
  });
  
            let User={
                name:textName,
                address:textAddress,
                phone:textPhone,
                bloodGroup:textBlood,
                email: textemail,
                age:textAge,
                donner:textDonner
            
               
            }
              var key =  database().ref().child("User").push(User)
        // if(textemail===auth().currentUser.email){
        //     database().ref().child("User").on('child_added', function(data){
        //         console.log(data.val())
        //     })
        // }
        console.log(key)
                setName('')
                setPhone('')
                setAddress('')
                setBlood('')
                setEmail('')
                setPassword('')
                setDonner('')
                setAge('')

        
      
    }
    const handleValidName=(val)=>{
        if(val.trim().length >= 4){
        setData({
            ...data,
            validName:true
        })
        }else{
            setData({
                ...data,
                validName:false
            })
        }
    }
    const handleValidPhone=(val)=>{
        if(val.length >=11){
            setData({
                ...data,
                validPhone:true
            })
        }else{
            setData({
                ...data,
                validPhone:false
            })
        }
    }
const handleValidBlood=(val)=>{
    if(val==="A+" || val==="B+" || val==="AB+" || val==="A-" || val==="B-" || val==="AB-" || val==="O-" || val==="O+"){
        setData({
            ...data,
            validBlood:true
        })
    }else{
        setData({
            ...data,
            validBlood:false
        })
    }
}
const handleValidAge=(val)=>{
    if(val.length <= 0){
        setData({
            ...data,
            validAge:false
        })
    }else{
        setData({
            ...data,
            validAge:true
        })
    }
}
const handleValidDonner=(val)=>{
    if(val==="yes"||val==="no"){
        setData({
            ...data,
            validDonner:true
        })
    }else{
        setData({
            ...data,
            validDonner:false
        })
    }
}

const handleValidAddress=(val)=>{
    if(val.length <= 0){
        setData({
            ...data,
            validAddress:false
        })
    }else{
        setData({
            ...data,
            validAddress:true
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
const handleValidEmail=(val)=>{
    if(val.length <=0){
        setData({
            ...data,
            validemail:false
        })
    }else{
        setData({
            ...data,
            validemail:true
        })
    }
}   
 return(
            <ScrollView>
        <View style={styles.container}>
            <View style={styles.main}></View>
            <View style={styles.main1}>
         
            <ActivityIndicator color="#000" size="large" animating={isloading}/>
                <Form style={styles.form}>
           <TextInput style={styles.input} label = "Name" outlined value={textName} onChangeText={setName} keyboardType="default" onEndEditing={(e)=>handleValidName(e.nativeEvent.text)}/> 
          {data.validName ? null : <Text style={{color:'red'}}>Name must be 4 character long.</Text>}
           <TextInput style={styles.input} label = "Phone Number" outlined value={textPhone} onChangeText={setPhone} keyboardType="number-pad" onEndEditing={(e)=>handleValidPhone(e.nativeEvent.text)} /> 
           {data.validPhone ? null : <Text style={{color:'red'}}>Phone number must be valid</Text>}
           <TextInput style={styles.input} label = "Blood Group" value={textBlood} outlined onChangeText={setBlood} keyboardType="default" onEndEditing={(e)=>handleValidBlood(e.nativeEvent.text)}/> 
           {data.validBlood ? null : <Text style={{color:'red'}}>Blood Group must be "A+", "B+" "AB+" "AB-" "A-" "B-" "AB-" "O+" "O-"</Text>}
           <TextInput style={styles.input} label = "Age" value={textAge} outlined onChangeText={setAge} keyboardType="default" onEndEditing={(e)=>handleValidAge(e.nativeEvent.text)}/> 
           {data.validAge ? null : <Text style={{color:'red'}}>age can't be empty.</Text>}
           <TextInput style={styles.input} label = "Became a Donner" value={textDonner} outlined onChangeText={setDonner} keyboardType="default" onEndEditing={(e)=>handleValidDonner(e.nativeEvent.text)}/> 
           {data.validDonner ? null : <Text style={{color:'red'}}>must be "yes" or "No".</Text>}
           <TextInput style={styles.input} label = "Address" value={textAddress} outlined onChangeText={setAddress} keyboardType="email-address" onEndEditing={(e)=>handleValidAddress(e.nativeEvent.text)}/> 
           {data.validAddress ? null : <Text style={{color:'red'}}>please provied actul address.</Text>}
           <TextInput style={styles.input} label = "email" value={textemail} onChangeText={setEmail}  outlined keyboardType="email-address"  onEndEditing={(e)=>handleValidEmail(e.nativeEvent.text)}/> 
           {data.validemail ? null : <Text style={{color:'red'}}>please provide actuall email format</Text>}
           <TextInput style={styles.input} label = "password" value={textPassword} onChangeText={setPassword} outlined keyboardType="default" secureTextEntry={true} onEndEditing={(e)=>handleValidPaasword(e.nativeEvent.text)}/> 
           {data.validPassword ? null : <Text style={{color:'red'}}>password must be 8 character long.</Text>}
           <Button  mode="contained" onPress={() => registerUser()}>
            SignUp
        </Button>
        <Button  mode="outlined" onPress={() => props.navigation.navigate("Login")}>
            Already Registered? SignIn
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
        // backgroundColor:'blue'
    },
    main1:{
        flex:6,
        // backgroundColor:'green'
        // marginTop:50
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
        marginBottom:5,
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
export default SignUp;
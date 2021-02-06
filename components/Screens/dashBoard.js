import  React from 'react';
import {View, StyleSheet, Alert} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon, Title  } from 'native-base';
import { TextInput,  } from 'react-native-paper';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import Dialog, { DialogContent } from 'react-native-popup-dialog';







function Dashboard({route, navigation}){
  const {email,_name,phone, address, donner, age, bloodGroup} = route.params
  

  function LogOut(){
    auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Sign Out")
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }


  function findDonner(){
    database().ref('User').orderByChild('donner').equalTo("yes").once('value', function(data){
      data.forEach((childSnapshot) => {
          var childData = childSnapshot.val();
        var donnerName = childData.name
        var dPhone = childData.phone 
        var dBlood = childData.bloodGroup
        var dAddress = childData.address
        console.log("Name===>", donnerName)
        navigation.navigate("DonnerScreen",{
          donnerName:donnerName,
          dPhone:dPhone,
          dBlood:dBlood,
          dAddress:dAddress
        })
        });
      })
  }
    return(
        <Container style={{backgroundColor:'white', flex:1}}>
           <Container style={{backgroundColor:'red', flex:1, borderTopRightRadius:80,borderWidth:1,
           borderColor:'brown',alignItems:'center', justifyContent:'center'}}>
               <Text style={styles.textMain}>WELCOME</Text>
               
           </Container>
           <View >
           <Container style={{backgroundColor:'#fff', flex:1}}>
     
             <Text style={styles.text} >Name: {_name}  </Text>
               <Text style={styles.text} >Email: {email}</Text>
               <Text style={styles.text} >Phone :{phone}</Text>
               <Text style={styles.text} >Age :{age}</Text>
               <Text style={styles.text} >Blood Group :{bloodGroup}</Text>
               <Text style={styles.text} >Donner :{donner}</Text>
               <Text style={styles.text} >Address: {address}</Text>
   
     
              
           </Container>
           </View>
         
           
           <Content />
           <Footer>

          <FooterTab>
           
            <Button active onPress={()=>findDonner()}>
              <Text>Find a Donner</Text>
            </Button>
            <Button active onPress={()=>LogOut()}>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
           {/* <Button  mode="outlined" onPress={() => console.log("Hello")}>
            Log Out
        </Button> */}
          
        </Container>
    )
}

const styles = StyleSheet.create({
    textMain:{
        color:'#fece2f',
        fontWeight:'bold'
        ,fontSize:40,
    },
    text:{
        color:'#C44900',
        fontWeight:'bold',
        fontSize:25,
        marginTop:10,
        marginLeft:10,
        justifyContent:'flex-end'

    }
})

export default Dashboard;

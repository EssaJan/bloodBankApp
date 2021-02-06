import React, { useEffect, useState, useRef } from 'react'
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'
import { DataTable } from 'react-native-paper';
import database from '@react-native-firebase/database'
import { Item } from 'native-base';




function FindDonner({route}) {
  
  const {donnerName, dPhone ,dAddress, dBlood} = route.params


  // database().ref('User').orderByChild('donner').equalTo("yes").on('value', function(data){
  //   data.forEach((childSnapshot) => {
  //       var childData = childSnapshot.toJSON();
  //     var donnerName = childData.name
  //     // var dPhone = childData.phone 
  //     // var dBlood = childData.bloodGroup
  //     // var dAddress = childData.address
  //     console.log("Name===>", donnerName)
  //     // navigation.navigate("DonnerScreen",{
  //     //   donnerName:donnerName,
  //     //   dPhone:dPhone,
  //     //   dBlood:dBlood,
  //     //   dAddress:dAddress
  //     // })
  //     });
  //   })

  //  console.log("Donner===>", donnerName)

  const [user, setUser] = useState("")

  // useEffect(()=>{
  //   const useRef = database().ref('/User').orderByChild('donner').equalTo("yes")
  //   const OnLoadingListener = useRef.on('value', function (data){
  //     setUser([])
  //     data.forEach((childSnapshot) => {
  //       var childData = childSnapshot.val();
  //       var name = childData.name
  //     // data.forEach(function (childSnapshot){
  //       // setUser(user=>[...user, childData.val()])
  //       console.log("UserData==>", name)
  //     })
  //   })
  //   return(()=>{
  //     useRef.off('value',OnLoadingListener)
  //   })
  // },[])

  return(
<View style={{flex:1, alignItems:'center', justifyContent:'flex-start'}}>
  <View style={{flex:2,}}>
  <Text style={{fontSize:40, color:'#fece2f', fontWeight:'bold'}}>LIST OF DONNERS</Text>
<Text style={{fontSize:40, color:'red', fontWeight:'bold'}}>Name: {donnerName}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>Number: {dPhone}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>Address: {dAddress}</Text>
<Text style={{fontSize:35, color:'red', fontWeight:'bold'}}>bloodGroup: {dBlood}</Text>
  </View>

</View>

  )
  
}
export default FindDonner;
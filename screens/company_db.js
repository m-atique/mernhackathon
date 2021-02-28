import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,Image,ImageBackground
} from 'react-native';
import styles from '../styles/style'
import {useDispatch,useSelector} from 'react-redux'
import DeviceInfo from 'react-native-device-info';
import {verifyUser,getUsers} from '../store/actions'

let uniqueId = DeviceInfo.getUniqueId();
//------------------------------------------------------ CompanyDB
const CompanyDB=(props)=>{
    const dispatch =useDispatch()
  
    const company=useSelector(state=>state.usersData.users)
   
return(
    <View style={styles.wrapper}>
         <ImageBackground  style ={{width:400,height:180}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFFr4ERIfz4mKyQZHZA9gwnRrz14SXyrIGw&usqp=CAU'}}>
        <View style={styles.hdview}>
        <Text style={styles.hdtxt}>Company Dashboard</Text>
        </View>
          </ImageBackground>
       
        <View style={styles.innerbox}>
          <Text style ={{fontSize:24,paddingTop:10}}>{company.name}</Text>
          <Text>{company.email}</Text>
          <Text>{company.phone}</Text>
        </View>
        <View style={styles.db2nd}>
        <TouchableOpacity onPress={()=>alert('Request sent to admin')} style = {styles.links}><Text style={{textAlign:'center', fontSize:18} }>Change Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('students')} style = {styles.links}><Text style={{textAlign:'center', fontSize:18}}>Students Detail</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.links}><Text style={{textAlign:'center', fontSize:18}}>OfferJobs</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.links}><Text style={{textAlign:'center', fontSize:18}}>Cv's</Text></TouchableOpacity>
        </View>
    </View>
)
}

export default CompanyDB;
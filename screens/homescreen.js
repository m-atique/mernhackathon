import React,{useEffect,useState}from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,ImageBackground
} from 'react-native';
import styles from '../styles/style'

import DeviceInfo from 'react-native-device-info';
import {verifyUser,getUsers} from '../store/actions'
let uniqueId = DeviceInfo.getUniqueId();



//------------------------------------------------------ home screen
const Homescreen=(props)=>{
    const dispatch =useDispatch()
    useEffect(
        ()=>{
                dispatch(getUsers())
        }
    )
    // const users=useSelector(state=>state.usersData.users[uniqueId])
   
 
    return(
        <View>
        <View>
            <ImageBackground  style ={{width:360,height:550}} source={{uri:'https://image.freepik.com/free-vector/career-flat-icon_1284-13768.jpg'}}></ImageBackground>
          
            <View style = {styles.db3rd}>
    
    <TouchableOpacity style = {styles.links2} onPress={()=>props.navigation.navigate('Login')}><Text style={{color:'white',   fontSize:15,textAlign:'center'}} >Login</Text></TouchableOpacity>
    <TouchableOpacity style = {styles.links2} onPress={()=>props.navigation.navigate('adminLogin')}><Text style={{color:'white',   fontSize:15,textAlign:'center'}} >Admin Reg</Text></TouchableOpacity>
    <TouchableOpacity style = {styles.links2} onPress={()=>props.navigation.navigate('studentLogin')}><Text style={{color:'white',   fontSize:15,textAlign:'center'}} >Student Registration</Text></TouchableOpacity>
    <TouchableOpacity style = {styles.links2} onPress={()=>props.navigation.navigate('companyLogin')}><Text style={{color:'white',   fontSize:15,textAlign:'center'}} >Register Company </Text></TouchableOpacity>
     </View>
        </View>
        
       
         

</View>
    )




        

}

export default Homescreen;
import React ,{useEffect,useState}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import styles from '../styles/style'
import DeviceInfo from 'react-native-device-info'
import {useDispatch,useSelector} from 'react-redux'
import {verifyUser,getUsers} from '../store/actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
//------------------------------------------------------ StudentDB

let uniqueId = DeviceInfo.getUniqueId();

const StudentDB=(props)=>{
  const dispatch =useDispatch()
// useEffect(
//   ()=>{
//           dispatch(getUsers())
//   }
// )
  const student=useSelector(state=>state.usersData.users[uniqueId])

return(
    <View style={styles.wrapper}>
         <ImageBackground  style ={{width:400,height:180}} source={{uri:'https://www.99images.com/photos/wallpapers/resolutions/1400x1050%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-buutg.jpg?v=1614362830'}}>
        <View style={styles.hdview}>
        <Text style={styles.hdtxt}>Student Dashboard</Text>
        </View>
          </ImageBackground>

      

        <View style={styles.innerbox}>
          <Text style={{fontSize:25,paddingTop:50}}>{student.name}</Text>
          <Text>{student.edu}</Text>
          </View>
       
         
        
        <View style={styles.db2nd}>
        <TouchableOpacity onPress ={()=>alert('Request recieved')} style = {styles.links}><Text style={{fontSize:17,textAlign:'center'}}>Change Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress ={()=>props.navigation.navigate('companies')} style = {styles.links}><Text style={{fontSize:17,textAlign:'center'}}>Companies Detail</Text></TouchableOpacity>
        <TouchableOpacity style = {styles.links}><Text style={{fontSize:17,textAlign:'center'}}>Jobs</Text></TouchableOpacity>
        <TouchableOpacity onPress ={()=>alert('contact to Admin branch')}style = {styles.links}><Text style={{fontSize:17,textAlign:'center'}}>Leave CP App</Text></TouchableOpacity>
        </View>
       
      
        

        
    </View>
)
}

export default StudentDB;
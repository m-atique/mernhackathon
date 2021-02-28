import React, { useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/style'
import {verifyUser,getUsers} from '../store/actions'

//------------------------------------------------------ Login
const Login=(props)=>{
    const dispatch = useDispatch()
    const [user,setUser] = useState('')
    const [pwd,setPwd] = useState('')



    useEffect(()=>{
        dispatch(getUsers())  
           

    })
     //const users=useSelector(state=>state.usersData.users)

   //  console.log(users[0])
//    if(user[user] != undefined){
//        if (user[user]){
//            console.log('ok')
//        }
//    }
return(
    <View style={styles.wrapper}>
        <View style ={styles.innerbox}>
       <TextInput placeholder='username' value ={user} onChangeText={(txt)=>setUser(txt)}/>
       <TextInput placeholder='Passward' value ={pwd} onChangeText={(txt)=>setPwd(txt)}/>
        </View>
        <View style ={styles.innerbox}>
      <TouchableOpacity onPress= {()=>{ dispatch(verifyUser(user,pwd));props.navigation.navigate('login')}}><Text>Log in</Text></TouchableOpacity>
        </View>
    </View>
    // ()=>{
)
}

export default Login;
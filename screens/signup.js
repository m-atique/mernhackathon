import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/style'
import navigation from '../config/navigation'

//------------------------------------------------------ registration screen
const Signup=(props)=>{
return(
    <View style={styles.wrapper}>
        {/* <View style = {styles.innerbox}>

       <TouchableOpacity style = {styles.links} onPress={()=>props.navigation.navigate('Login')}><Text>Login</Text></TouchableOpacity>
       <TouchableOpacity style = {styles.links} onPress={()=>props.navigation.navigate('adminLogin')}><Text>Admin Reg</Text></TouchableOpacity>
       <TouchableOpacity style = {styles.links} onPress={()=>props.navigation.navigate('studentLogin')}><Text>Student Registration</Text></TouchableOpacity>
       <TouchableOpacity style = {styles.links} onPress={()=>props.navigation.navigate('companyLogin')}><Text>Register Company </Text></TouchableOpacity>
        </View> */}
    
    </View>
)
}

export default Signup;
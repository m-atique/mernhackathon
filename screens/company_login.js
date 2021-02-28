import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/style'
import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';

//------------------------------------------------------ Company Login
const CompanyLogin=()=>{
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('') 
    const [email, setEmail] = useState('')
    const [catg, setCatg] = useState('')
    const [user, setUser] = useState('')
    const [passward, setPassward] = useState('')
  
    let company = {
        'name': name,
        'phone': phone,
        'email':email,
        'city': city,
        'type': catg,
        'user':user,
        'pwd':passward,
        'user_type':'company'
        

    }
    let uniqueId = DeviceInfo.getUniqueId();
    //-------------------------------------------------------saving data 

    const saveData = () => {

       
        console.log(company)
        database().ref('users').child(uniqueId).set(company)
        setName('')
          setEmail('')
          setCity('')
          setPhone('')
          setCatg('')
          setUser('')
          setPassward('')
       
    }

    return (
        <View style={styles.outerdiv}>
            <View style={styles.innerbox}>
                <Text style={{fontSize:26, backgroundColor:'red' ,padding:10,borderRadius:5,margin:5}}>Company  Login</Text>
            </View >
            <View style={styles.innerdive}>
            <ScrollView style={{padding:10}}>
                <TextInput style={styles.userInputs} value={name} onChangeText={(txt) => setName(txt)} placeholder='Name' />
                <TextInput style={styles.userInputs} value={email} onChangeText={(txt) => setEmail(txt)} placeholder='Email' />
                <TextInput style={styles.userInputs} value={user} onChangeText={(txt) => setUser(txt)} placeholder='User Name' />
                <TextInput style={styles.userInputs} value={passward} onChangeText={(txt) => setPassward(txt)} placeholder='Passward' />
                <TextInput style={styles.userInputs} value={phone} onChangeText={(txt) => setPhone(txt)} placeholder='Contact Number' />
                <TextInput style={styles.userInputs} value={city} onChangeText={(txt) => setCity(txt)} placeholder='City' />
                <TextInput style={styles.userInputs} value={catg} onChangeText={(txt) => setCatg(txt)} placeholder='Type of Company' />
               </ScrollView>
            </View>
            <View style={styles.innerbox}>
                <Text>Warning</Text>
                <Text>Please read all information carefully. You can,t change information without adin permission</Text>
                <TouchableOpacity style={{ width: 100, backgroundColor: 'red', borderRadius: 3, padding: 5 }}
                    onPress={() => saveData()}

                >
                    <Text style={{textAlign:'center',fontSize:16}}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CompanyLogin;
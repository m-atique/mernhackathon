import React, { useState, useEffect } from 'react';
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
import { set } from 'react-native-reanimated';
import styles from '../styles/style'
import database from '@react-native-firebase/database';
import DeviceInfo from 'react-native-device-info';

//------------------------------------------------------ Admin login
const AdminLogin = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [Pin, setPin] =useState('')
    const [Dept, setDept] = useState('')
    const [user, setUser] = useState('')
    const [passward, setPassward] = useState('')

    let uniqueId = DeviceInfo.getUniqueId();
    //-------------------------------------------------------saving data 
    let admin = {
        'name': name,
        'city': city,
        'phone': phone,
        'Pin': Pin,
        'Dept': Dept,
        'user':user,
        'passward':passward,
        'user_type':'admin'

    }
    const saveData = () => {
       
      
        database().ref('users').child(uniqueId).set(admin)
        setName('')
          setCity('')
          setPhone('')
          setDept('')
          setPin('')
          setUser('')
          setPassward('')
    }

    return (
        <View style={styles.outerdiv}>
            <View style={styles.innerbox}>
                <Text style={{fontSize:26, backgroundColor:'green',color:'white' ,padding:10,borderRadius:5,margin:5}}>Admon  Login</Text>
            </View >
            <View style={styles.innerdive}>
            <ScrollView style={{padding:10}}>
                <TextInput style={styles.userInputs} value={name} onChangeText={(txt) => setName(txt)} placeholder='Name' />
                <TextInput style={styles.userInputs} value={user} onChangeText={(txt) => setUser(txt)} placeholder='User Name' />
                <TextInput style={styles.userInputs} value={passward} onChangeText={(txt) => setPassward(txt)} placeholder='Passward' />
                <TextInput style={styles.userInputs} value={Pin} onChangeText={(txt) => setPin(txt)} placeholder='Pin(Provided by Director)' />
                <TextInput style={styles.userInputs} value={phone} onChangeText={(txt) => setPhone(txt)} placeholder='Contact Number' />
                <TextInput style={styles.userInputs} value={city} onChangeText={(txt) => setCity(txt)} placeholder='City' />
                <TextInput style={styles.userInputs} value={Dept} onChangeText={(txt) => setDept(txt)} placeholder='Department' />

                </ScrollView>
            </View>
            <View style={styles.innerbox}>
                
                <TouchableOpacity style={{ width: 100, backgroundColor: 'green', borderRadius: 3, padding: 5 }}
                    onPress={() => saveData()}

                >
                    <Text style={{textAlign:'center',fontSize:18}}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AdminLogin;
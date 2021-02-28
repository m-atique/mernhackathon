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

//------------------------------------------------------ StudentLogin
const StudentLogin = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [edu, setEdu] = useState('')
    const [regNo, setRegNo] =useState('')
    const [major, setMajor] = useState('')
    const [user, setUser] = useState('')
    const [passward, setPassward] = useState('')

    let uniqueId = DeviceInfo.getUniqueId();
    //-------------------------------------------------------saving data 
    let student = {
        'name': name,
        'age': age,
        'city': city,
        'phone': phone,
        'edu': edu,
        'regNo': regNo,
        'major': major,
        'user':user,
        'passward':passward,
        'user_type':'student'

    }
    const saveData = () => {
       
     
        database().ref('users').child(uniqueId).set(student)
        setName('')
          setAge('')
          setCity('')
          setPhone('')
          setMajor('')
          setEdu('')
          setRegNo('')
          setUser('')
          setPassward('')
    }

    return (
        <View style={styles.outerdiv}>
            <View style={styles.innerbox}>
                <Text style={{fontSize:26, backgroundColor:'red' ,padding:10,borderRadius:5,margin:5}}>Student  Login</Text>
            </View >
            <View style ={styles.innerdive}>
                <ScrollView style={{padding:10}}>
                <TextInput style={styles.userInputs} value={name} onChangeText={(txt) => setName(txt)} placeholder='Name' />
                <TextInput style={styles.userInputs} value={user} onChangeText={(txt) => setUser(txt)} placeholder='User Name' />
                <TextInput style={styles.userInputs} value={passward} onChangeText={(txt) => setPassward(txt)} placeholder='Passward' />
                <TextInput style={styles.userInputs} value={age} onChangeText={(txt) => setAge(txt)} placeholder ='Age' />
                <TextInput style={styles.userInputs} value={regNo} onChangeText={(txt) => setRegNo(txt)} placeholder='Registration Number' />
                <TextInput style={styles.userInputs} value={phone} onChangeText={(txt) => setPhone(txt)} placeholder='Contact Number' />
                <TextInput style={styles.userInputs} value={city} onChangeText={(txt) => setCity(txt)} placeholder='City' />
                <TextInput style={styles.userInputs} value={major} onChangeText={(txt) => setMajor(txt)} placeholder='Major Subjects' />
                <TextInput style={styles.userInputs} value={edu} onChangeText={(txt) => setEdu(txt)} placeholder='Qualfication' />
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

export default StudentLogin;
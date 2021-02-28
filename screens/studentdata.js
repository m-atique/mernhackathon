import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {

    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    FlatList

} from 'react-native';
import DeviceInfo from 'react-native-device-info'

const Students = () => {
    let uniqueId = DeviceInfo.getUniqueId();
    const users=useSelector(state=>state.usersData.users)
    let students =[]

    for (const [key, value] of Object.entries(users)) {
        if(value.user_type == 'student'){
            students.push(value)
        }
    }
    
    return (
        <View>
           
          
             {students.map((student, index) => {

                return (

                    <View style={styles.innerbox} key={index}>

                        <ScrollView>
                            <View >
                                <View style = {styles.edu}>
                                    <View><Text style={{fontSize:20,color:'white'}}>{student.edu}</Text></View>
                                </View>
                                <View style={{zIndex:0}}>

                                    <View style={styles.stName}>
                                        <Text style={{ fontSize: 20 }}>{student.name}</Text>
                                    </View>
                                    <View style={styles.stDet}>
                                        <Text style={{ fontSize: 16, padding: 4 }}> {student.city}</Text>
                                        <Text style={{ fontSize: 16, padding: 4 }}>Cell#    {student.phone}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                )
            })

            } 
           
        </View>

    )


};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    innerbox: {
       
        margin: 20,
        marginBottom:0,
        
        shadowColor: 'black',
        shadowOffset: {
            width: 5,

        },
        elevation: 12
    },
    edu:{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 50,
        borderWidth:0.8,
        borderColor:'white',
        height:65,
        width:65,
        position:'relative',
        top:86,
        zIndex:1, marginLeft:10
    },
    stName: {
        backgroundColor:  '#e4e5e7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        
    },
    stDet: {
        backgroundColor: '#f0fcf4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,

    }


}
)



export default Students; 
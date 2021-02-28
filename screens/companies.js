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


const Company = () => {
    const users=useSelector(state=>state.usersData.users)
    let company =[]

    for (const [key, value] of Object.entries(users)) {
        if(value.user_type == 'company'){
            company.push(value)
        }
    }
    return (
        <View>
            {company.map((co, index) => {

                return (

                    <View style={styles.innerbox} key={index}>

                        <ScrollView>
                            <View >
                                <View style = {styles.edu}>
                                    <View><Text style={{fontSize:20,color:'white'}}>{co.type}</Text></View>
                                </View>
                                <View style={{zIndex:0}}>

                                    <View style={styles.coName}>
                                        <Text style={{ fontSize: 20 }}>{co.name}</Text>
                                    </View>
                                    <View style={styles.codet}>
                                        <Text style={{ fontSize: 16, padding: 4 }}>Cell#    {co.phone}</Text>
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
    coName: {
        backgroundColor:  '#e4e5e7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        
    },
    codet: {
        backgroundColor: '#f0fcf4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,

    }


}
)



export default Company; 
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    innerbox:{
       flex:2,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:14
       
    },
    userInputs:{
        backgroundColor:'silver',
        width:'85%',
        marginBottom:20,
        borderRadius:5,
        fontSize:16
    },
    db2nd:{
        backgroundColor:'#260134',
        flex:4,
        justifyContent:'space-around',
        alignContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'

    },
    db3rd:{
       
        flex:1,
        justifyContent:'space-around',
        alignContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        position:'relative',
        top:-100

    },
    hdview:{
        padding:5,backgroundColor:'lightgreen',borderTopLeftRadius:15,position:'relative',top:170
    },
    hdtxt:{fontSize:20 ,paddingHorizontal:7}
    ,
    outerdiv:{
        flex:1,justifyContent:'center',paddingHorizontal:10
    },
    innerdive:{
        margin:30 ,paddingHorizontal:0,height:390,marginTop:0
    }
    ,links:{
        justifyContent:'space-around',
        alignContent:'center',
        margin:20,
        width:130,
        height:61,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:5,
        shadowColor:'white',
        shadowOffset:{
            width:20,
            height:15
        },
        elevation:9
        
        

        
    }
    ,links2:{
        justifyContent:'space-around',
        alignContent:'center',
        margin:15,
        width:130,
        height:70,
        backgroundColor:'#424949',
        borderRadius:5,
        shadowColor:'yellow',
        shadowOffset:{
            width:20,
            height:15
        },
        elevation:9
        
        

        
    }

 
});
export default styles;
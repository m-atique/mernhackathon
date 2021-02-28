import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image

} from 'react-native';



const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


//importing screens.....................
import Homescreen from '../screens/homescreen'
import adminDB from '../screens/admin_db'
import studentDB from '../screens/student_db'
import companyDB from '../screens/company_db'
import Login from '../screens/login'
import adminLogin from '../screens/admin_login'
import studentLogin from '../screens/student_login'
import companyLogin from '../screens/company_login'
import signup from '../screens/signup'
import login from '../screens/login'
import studentdata from '../screens/studentdata'
import companydata from '../screens/companies'
import DrawerContent  from './drawercontent'

const TabNavigator =({navigation})=>(
  <Tab.Navigator         tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 15,
      margin: 0,
      padding: 10,
    },
    
  }}>
        <Tab.Screen name="Home" component={Homescreen} />
           
        <Tab.Screen name="Admins" component={adminDB} />
        <Tab.Screen name = 'Companies' component ={companyDB}/> 
        <Tab.Screen name="Students" component={studentDB} />
  </Tab.Navigator>
)




const HomeNavigator =({navigation})=>(
  <HomeStack.Navigator>
   
        <HomeStack.Screen name="Home" component={TabNavigator} options={{
          
          headerLeft:()=>(
            
            <TouchableOpacity style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}><Text>Menu</Text></TouchableOpacity>
          ),
        }}/>
        <HomeStack.Screen name = 'Login' component ={adminLogin}/>
        <HomeStack.Screen name = 'adminLogin' component ={adminLogin}/>
        <HomeStack.Screen name = 'studentLogin' component ={studentLogin}/>
        <HomeStack.Screen name = 'companyLogin' component ={companyLogin}/> 
        <HomeStack.Screen name = 'register' component={signup} />
        <HomeStack.Screen name = 'companies' component ={companydata}/> 
        <HomeStack.Screen name = 'students' component={studentdata} />
          
  </HomeStack.Navigator>

)


//----------------------------------------------------------------drawer navigation
function Screennavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />}> 
        <Drawer.Screen name="login" component={login} />
        <Drawer.Screen name ="Home" component ={HomeNavigator} />
        <Drawer.Screen name="Admin DashBoard" component={adminDB} />
        <Drawer.Screen name = 'Company DashBoard' component ={companyDB}/> 
        <Drawer.Screen name="Student DashBoard" component={studentDB} />
      </Drawer.Navigator>
    
    </NavigationContainer>
  );
}

export default Screennavigator;




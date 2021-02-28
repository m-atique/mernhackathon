/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Screennavigator from './config/navigation'
import store  from './store'
import {Provider}from 'react-redux'



const App=() => {
  return (
    <Provider store = {store}>   
  <Screennavigator></Screennavigator>
    </Provider>
    
  );
};


export default App;

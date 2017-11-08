/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import LoginForm from './LoginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class FrgtPsswd extends Component<{}> {
  render() {
    return (
      <Image source={require('../images/LoginBg.jpeg')}
      style={styles.container}>
      <View>
   <StatusBar
   backgroundColor={'transparent'}
   translucent
   /></View>
      <KeyboardAvoidingView behavior="padding" >
      <View style={styles.formContainer}>
      <TextInput placeholder='Enter your register mobile no.'
      keyboardType="phone-pad"
      placeholderTextColor='rgba(255,255,255,255)'
      returnKeyType="go"
      style={styles.input}
      ref={(input)=> this.passwordInput =input} />
      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignSelf: 'stretch',
    width: null,
    padding:20,
  },
  buttonContainer:{
    backgroundColor:'#6E1307',
    paddingVertical:15,
    marginBottom:10
  },
  buttonText:{
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'700'
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.3)',
    marginBottom:20,
    color:'#FFFFFF',
    paddingHorizontal:20,
  },
});

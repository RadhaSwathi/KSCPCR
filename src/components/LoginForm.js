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
  TouchableOpacity,
} from 'react-native';

export default class LoginForm extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <TextInput placeholder='user name or email'
      placeholderTextColor='rgba(255,255,255,255)'
      returnKeyType="next"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
      sutoCorrect={false}
      onSubmitEditing={()=> this.passwordInput.focus()}/>
      <TextInput placeholder='password'
      secureTextEntry
      placeholderTextColor='rgba(255,255,255,255)'
      returnKeyType="go"
      style={styles.input}
      ref={(input)=> this.passwordInput =input} />
      <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity >
      <Text style={styles.buttonText}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.3)',
    marginBottom:20,
    color:'#FFFFFF',
    paddingHorizontal:20,
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
  }

});

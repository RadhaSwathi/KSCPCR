/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  Button,
  Keyboard
} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component<{}> {
  constructor(props){
    super(props)
    state:{
      username:''
      password:''
      results:''
    }
  }

  setUserName(username){
    this.setState({
      username:username
    })

  }

  setPassword(password){
    this.setState({
      password:password
    })

  }

  setResults(results){
    if (results.success!=0) {
      Actions.Dashboard({userName:this.state.username, results: results})

    }else{
      alert('invalid')
    }
    Keyboard.dismiss()
  }

  response(username,password){
    return fetch(`http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/admin_action.php?f=admin_login&user_name=${username}&user_password=${password}`,{
      method:'POST'
}).then((resp)=>resp.json()).then((re)=>this.setResults(re))
  }

  gotoDaashboard(){
    this.response(this.state.username,this.state.password)
  }

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
      <TextInput placeholder='user name or email'
      placeholderTextColor='rgba(255,255,255,255)'
      returnKeyType="next"
      style={styles.input}
      keyboardType="email-address"
      autoCapitalize="none"
      sutoCorrect={false}
      onChangeText={(text)=>this.setUserName(text)}
      onSubmitEditing={()=> this.passwordInput.focus()}/>
      <TextInput placeholder='password'
      secureTextEntry
      placeholderTextColor='rgba(255,255,255,255)'
          onChangeText={(text)=>this.setPassword(text)}
      style={styles.input}
      ref={(input)=> this.passwordInput =input} />
      <View style={styles.buttonContainer}>
      <Button color="#6E1307"
        title="Login"
        onPress={()=>this.gotoDaashboard()}
      />
      </View>
      <Button color="#6E1307"
        title="Forgot password?"
        onPress={() =>
          navigate('FrgtPsswd')
        }/>
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
  logo: {
    height : 100,
    width: 100,
  },
  buttonContainer:{
    paddingVertical:15,
    marginBottom:10
  },
  buttonText:{
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'700'
  }
});

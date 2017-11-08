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
  StatusBar
} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component<{}> {
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
      <LoginForm />
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
  logo: {
    height : 100,
    width: 100,
  },
});

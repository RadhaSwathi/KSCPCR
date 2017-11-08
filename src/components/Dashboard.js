import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ToolbarAndroid,
  TabNavigator,
  DrawerNavigator
} from 'react-native';

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>

      </View>
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

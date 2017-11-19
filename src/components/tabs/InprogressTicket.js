import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class InprogressTicket extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'InprogressTicket' }
  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 2 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

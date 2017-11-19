import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ResolvedTicket extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'ResolvedTicket' }
  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 3 </Text>
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

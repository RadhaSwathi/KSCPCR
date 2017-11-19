

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewTicket extends Component<{}> {
  static navigationOptions = { tabBarLabel: 'NewTicket' }
  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 1 </Text>
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

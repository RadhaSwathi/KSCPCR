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

/*import NewTicket from './tabs/NewTicket';
import InprogressTicket from './tabs/InprogressTicket';
import ResolvedTicket from './tabs/ResolvedTicket';*/

/*var Dashboard= TabNavigator({
NewTicket: {screen: 'NewTicket'},
Inprogress:{screen: 'InprogressTicket'},
Resolved:{screen: 'ResolvedTicket'},
});

Dashboard.navigationOptions=
{ headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };*/
export default class Dashboard extends Component<{}> {

  render() {
    console.log("***",this.props.results)
    return (
    <View style={styles.container}>
    <Text>{this.props.results[0].user_email_id
}</Text>
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

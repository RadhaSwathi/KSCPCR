

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NewTicket extends Component<{}> {
    state={complaints: []};
  componentWillMount()
    {

var url=('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_active_complaints_zone_id_wise.php?zone_id='+this.props.zoneId)
//alert(url)
       fetch(url).then(response => response.json()).then(data => this.setState({complaints:data}));
    }
renderComplaints()
{
    return this.state.complaints.map(complaint => alert('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_complaints_complaint_id_wise.php?cp_id='+complaint.cp_id));
}
  static navigationOptions = { tabBarLabel: 'NewTicket' }
  render()
  {

    return (
      <View style={styles.container}>
{this.renderComplaints()}
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

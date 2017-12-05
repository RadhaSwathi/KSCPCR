import React, { Component } from 'react';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
var {height, width} = Dimensions.get('window')
var oneforthWidth = (width/4 -30)
var remaining=(width-oneforthWidth-10)
export default class ResolvedTicket extends Component<{}> {
    state={complaints: []};
  componentWillMount()
    {
alert(this.props.zoneId)
var url=('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_resolved_complaints_zone_id_wise.php?zone_id='+this.props.zoneId)
//alert(url)
       fetch(url).then(response => response.json()).then(data => this.setState({complaints:data}));
    }
renderComplaints()
{
  var cp_id;
    return this.state.complaints.map(complaint =>
      <View key={complaint.cp_id} style={styles.complaintContainer} >
      <TouchableOpacity onPress={()=>this.goToComplaintDetails(complaint.cp_id)}>
      <Text style={styles.complaintContent} key={complaint.cp_id}>{complaint.cp_id}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.goToComplaintDetails(complaint.cp_id)}>
      <Text style={{paddingLeft:5,color:'#000000'}} key={complaint.cp_compliant_details}>{complaint.cp_compliant_details}</Text>
          </TouchableOpacity>
        </View>);
}
  goToComplaintDetails(ComplaintId)
  {
    Actions.ComplaintDetails({ComplaintId:ComplaintId})
      }
  render()
  {

    return (
      <View style={styles.container}>
      <View style={styles.complaintContainer}>
      <Text style={styles.complaintContent}>Complaint Id</Text>
      <Text style={styles.complaintdata}>Complaints details</Text>
      </View>
{this.renderComplaints()}
<TouchableOpacity onPress={Actions.ComplaintDetails}>
  </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop:60,
  },
  complaintContainer:{
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'#c6032a',
    padding:2,
    margin:2,
    borderRadius:2,
    shadowColor:'#ff0000',
    shadowOffset:{width:5,heiht:5},
    shadowRadius:2,
  },
  complaintContent:{
    marginLeft:2,
    borderRightWidth:1,
    borderRightColor:'#c6032a',
    width:oneforthWidth,
    textAlign:'center',
    color:'#000000'
  },
  complaintdata:{
    marginLeft:2,
    borderRightWidth:1,
    borderRightColor:'#c6032a',
    width:remaining,
    textAlign:'center',
    color:'#000000'
  },

});

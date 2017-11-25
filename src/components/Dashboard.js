import React, { Component } from 'react';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
import {
  StyleSheet,
  Text,
  View,
  Button,

} from 'react-native';
import LoginForm from './LoginForm';


export default class Dashboard extends Component<{}> {
  state={zones: []};
  componentWillMount()
    {
      fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_all_zones.php').then(response => response.json())
    .then(data => this.setState({ zones: data }));
    }
    renderZones()
    {
    return  this.state.zones.map(zone => <View key={zone.zone_id} style={styles.buttonContainer}><Button color="#6E1307"   onPress={()=>this.goToActiveTicket(zone.zone_id)} key={zone.zone_name} title={zone.zone_name}/></View>)

    }
    response(zoneId){
  this.setZoneId(zoneId)
      return ( fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_active_complaints_zone_id_wise.php&zone_id=${zoneId}',{
        method:'POST'
  }).then((re)=>this.setResults(re)))
    }
    setZoneId(zoneId){
      this.setState({
        zoneId:zoneId
      })

    }
    goToActiveTicket(zoneId)
    {
      this.response(zoneId)
    }
    setResults(results)
    {
      if (results.success!=0) {
        Actions.tabbar({userName:this.props.username, results: results,zoneId:this.state.zoneId})

      }else{
        alert('invalid')
      }

    }
  render() {
    //console.log(this.state);
  //  console.log("***",this.props.results)
    return (
    <View style={styles.container}>

<View  >
   {this.renderZones()}
   </View>
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
    paddingVertical:5,
    marginBottom:5
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

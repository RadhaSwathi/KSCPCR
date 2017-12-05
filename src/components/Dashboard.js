import React, { Component } from 'react';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  ScrollView

} from 'react-native';
import LoginForm from './LoginForm';
var {height, width} = Dimensions.get('window')
var HalfWidth = (width/2 -30)


export default class Dashboard extends Component<{}> {
  state={zones: [],count: []};
  componentWillMount()
    {
      fetch('http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_all_zones.php').then(response => response.json())
    .then(data => this.setState({ zones: data }));
    }
    renderZones()
    {
    return  this.state.zones.map(zone => <View key={zone.zone_id} style={styles.buttonContainer}>
      <Image source={require('../images/kare_kannada-active.png')} style={styles.imageContainer} >
      {this.getCount(zone.zone_id)}
      </Image>
      <Button color="#6E1307"   onPress={()=>this.goToActiveTicket(zone.zone_id)} key={zone.zone_name}
      title={zone.zone_name}/>
      </View>)

    }
    getCount(zoneId)
    {
      fetch(`http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_active_complaints_count.php?zone_id=${zoneId}`)
    .then(response => response.json()).then(data => this.setState({count:data }));
    return this.state.count.map(cnt => <Text key={cnt.cp_id}>{cnt.cp_id}</Text>)
    }
    response(zoneId){
  this.setZoneId(zoneId)
      return ( fetch(`http://wbdemo.in/kscpcr-v1.3/complaints/actions_android/fetch_active_complaints_zone_id_wise.php?zone_id=${zoneId}`,{
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
  //  console.log("***",this.props.results)
    return (
    <ScrollView  style={styles.container}>
<View  style={styles.flexRowWrap}  >
   {this.renderZones()}
   </View>
    </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  flexRowWrap: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding:20
},
  buttonContainer:{
    alignSelf: 'stretch',
    margin:5,
    width:HalfWidth
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
  imageContainer:{
    width:HalfWidth,
    height:HalfWidth
  }
});

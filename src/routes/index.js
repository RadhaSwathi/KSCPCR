//
// import {
//   StackNavigator,TabNavigator, TabView
// } from 'react-navigation';
// import Login from '../components/Login';
// import Dashboard from '../components/Dashboard';
// import LoginForm from '../components/LoginForm';
// import FrgtPsswd from '../components/FrgtPsswd';
// const App = StackNavigator({
//   Login: { screen: Login},
//   Dashboard: { screen: Dashboard },
//   LoginForm: { screen: LoginForm },
//   FrgtPsswd: { screen: FrgtPsswd },
// });
// export default App;


import React, { Component } from 'react';
import {Text} from 'react-native'
import {Scene,Router} from 'react-native-router-flux';
import Login from '../components/Login';
import ComplaintDetails from '../components/ComplaintDetails';
import Dashboard from '../components/Dashboard'
import FrgtPsswd from '../components/FrgtPsswd'
import NewTicket from '../components/tabs/NewTicket'
import ResolvedTicket from '../components/tabs/ResolvedTicket'


const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{"Active"}</Text>
  );
}

const TabIcon1 = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{"Resolved"}</Text>
  );
}


const RouterComponent =()=>{
return(
  <Router >

      <Scene key='root'>
        <Scene  key='login' component={Login} title='Login'sceneStyle={{top:55}}  initial />
        <Scene  key="tabbar" tabs={true} hideNavBar={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} >
        <Scene key="Ticketstatus1" title="Ticketstatus1" icon={TabIcon}>
    <Scene key="Active" component={NewTicket}  title="Active"/>
     </Scene>
  <Scene key="Ticketstatus2" title="Ticketstatus2" icon={TabIcon1}>
<Scene key="solved"  component={ResolvedTicket}   title="Resolved"   />
</Scene>
</Scene>
<Scene  key='FrgtPsswd' component={FrgtPsswd} title='FrgtPsswd' />
  <Scene initial key='Dashboard' component={Dashboard} title='Dashboard' />
  <Scene key='ComplaintDetails' component={ComplaintDetails} title='Complaint Details' />

</Scene>


  </Router>
);
};

export default RouterComponent;

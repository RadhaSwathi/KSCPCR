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
import {Scene,Router} from 'react-native-router-flux';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard'
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{"title"}</Text>
  );
}
const RouterComponent =()=>{
return(
  <Router hideNavBar={false} sceneStyle={{top:55}}>
  <Scene key='login' component={Login}  initial />
  <Scene key='Dashboard' component={Dashboard} tabs={true}>
            <Scene key="osu" title="OSU" icon={TabIcon}>
              <Scene key="scarlet"
                component={Login}
                title="Scarlet"
              />
              <Scene
                key="gray"
                component={Login}
                title="Gray"
              />

            </Scene>
              </Scene>

  </Router>
);
};

export default RouterComponent;

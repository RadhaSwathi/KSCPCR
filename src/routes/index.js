import React, { Component } from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Login from '../components/Login';
const RouterComponent =()=>{
return(
  <Router>
  <Scene key='login' component={Login} title='please login'/>
  </Router>
);
};

export default RouterComponent;

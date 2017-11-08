import React, { Component } from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Login from './src/components/Login';
import expo from 'expo';
const RouterComponent =()=>{
return(
  <Router>
  <Scene key='login' Component={Login} title='please login'/>
  </Router>
);


};

export default RouterComponent;

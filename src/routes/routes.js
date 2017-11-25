import React, { Component } from 'react';
import {Scene,Router} from 'react-native-router-flux';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard'
import FrgtPsswd from '../components/FrgtPsswd'
import DashboardZonal from '../components/DashboardZonal'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import {  Text} from 'react-native';


export const TabIcon=({selected,title}) => {
  return(
    <Text style={{color: selected ? 'red':'black'}}>ActiveTicket</Text>
  );
}

export const TabIcon1=({selected,title}) => {
  return(
    <Text style={{color: selected ? 'red':'black'}}>ResolvedTicket</Text>
  );
}

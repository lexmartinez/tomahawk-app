import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import Sample from './src/containers/Sample'
import {Colors} from './src/config/Constants'
import {Tabs as TabIcons} from './src/config/Icons'

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Router>
        <Stack key={'container'}>
          <Scene hideNavBar panHandlers={null} key={'tab-container'}>
            <Tabs key={'tab-bar'} showLabel={true} tabBarPosition={'bottom'} 
              labelStyle={{marginTop: -5, marginBottom:5}} 
              activeTintColor={Colors.primary_red} inactiveTintColor={Colors.primary_grey}>
              <Scene key={'news-tab-content'} component={Sample} icon={TabIcons.news} tabBarLabel={'News'}/>
              <Scene key={'games-tab-content'} component={Sample} icon={TabIcons.games} tabBarLabel={'Games'}/>
              <Scene key={'genres-tab-content'} component={Sample} icon={TabIcons.genres} tabBarLabel={'Categories'}/>
              <Scene key={'search-tab-content'} component={Sample} icon={TabIcons.search} tabBarLabel={'Search'}/>
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    );
  }
}
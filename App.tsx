import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Scene, Router, Tabs, Stack } from 'react-native-router-flux';
import Sample from './src/containers/Sample'
import { Colors } from './src/config/Constants'
import { Tabs as TabIcons } from './src/config/Icons'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
 
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.primary_red,
    height: hp('9%')
  },
  labelStyle: {
    marginTop: hp('-1.2%'), 
    marginBottom: hp('1.2%')
  }
});
export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Router>
        <Stack key={'container'}>
          <Scene key={'tab-container'}>
            <Tabs key={'tab-bar'} showLabel={true} tabBarPosition={'bottom'} 
              labelStyle={styles.labelStyle} tabBarStyle={styles.tabBarStyle}
              activeTintColor={Colors.white} inactiveTintColor={Colors.black_55}>
              <Scene key={'news-tab-content'} component={Sample} icon={TabIcons.news} tabBarLabel={'News'} hideNavBar/>
              <Scene key={'games-tab-content'} component={Sample} icon={TabIcons.games} tabBarLabel={'Games'} hideNavBar/>
              <Scene key={'genres-tab-content'} component={Sample} icon={TabIcons.genres} tabBarLabel={'Categories'} hideNavBar/>
              <Scene key={'search-tab-content'} component={Sample} icon={TabIcons.search} tabBarLabel={'Search'} hideNavBar/>
            </Tabs>
          </Scene>
        </Stack>
      </Router>
    );
  }
}
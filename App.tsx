import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import { Categories, Games, News, Search, NewsDetail } from './src/containers'
import { Colors, Fonts } from './src/config/Constants'
import { Tabs as TabIcons } from './src/config/Icons'
import { hp } from './src/config/Utils'
import { Provider } from 'react-redux'
import buildStore from './src/store'

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: Fonts.SEMIBOLD,
    marginBottom: hp('1.2%', '0%'),
    marginTop: hp('-1.2%', '-1%')
  },
  tabBarStyle: {
    backgroundColor: Colors.primary_red,
    height: hp('9%', '6%')
  }
})

const store = buildStore({})
export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={'container'}>
            <Scene key={'tab-container'}>
              <Tabs key={'tab-bar'} showLabel={true} tabBarPosition={'bottom'}
                labelStyle={styles.labelStyle} tabBarStyle={styles.tabBarStyle}
                activeTintColor={Colors.white} inactiveTintColor={Colors.black_55}>
                <Scene key={'newsTab'} icon={TabIcons.news} tabBarLabel={'News'} hideNavBar>
                  <Scene key={'newsMain'} component={News} hideNavBar></Scene>
                  <Scene key={'newsDetail'} component={NewsDetail} hideNavBar></Scene>
                </Scene>
                <Scene key={'games-tab-content'} component={Games} icon={TabIcons.games}
                  tabBarLabel={'Games'} hideNavBar/>
                <Scene key={'genres-tab-content'} component={Categories} icon={TabIcons.genres}
                  tabBarLabel={'Categories'} hideNavBar/>
                <Scene key={'search-tab-content'} component={Search} icon={TabIcons.search}
                  tabBarLabel={'Search'} hideNavBar/>
              </Tabs>
            </Scene>
          </Stack>
        </Router>
      </Provider>
    )
  }
}

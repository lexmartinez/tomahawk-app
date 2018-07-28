import React from 'react'
import { Component } from 'react'
import { StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Router, Scene, Stack, Tabs, Modal } from 'react-native-router-flux'
import { Categories, Games, News, About, NewsDetail, CategoryDetail, GameDetail } from './src/containers'
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
          <Modal key={'modal'}>
            <Scene key={'tab-container'}>
              <Tabs key={'tab-bar'} showLabel={true} tabBarPosition={'bottom'}
                labelStyle={styles.labelStyle} tabBarStyle={styles.tabBarStyle}
                activeTintColor={Colors.white} inactiveTintColor={Colors.black_55}>
                <Scene key={'newsTab'} icon={TabIcons.news} tabBarLabel={'News'} hideNavBar>
                  <Scene key={'newsMain'} component={News} hideNavBar></Scene>
                  <Scene key={'newsDetail'} component={NewsDetail} hideNavBar></Scene>
                </Scene>
                <Scene key={'gamesTab'} component={Games} icon={TabIcons.games}
                  tabBarLabel={'Games'} hideNavBar/>
                <Scene key={'genresTab'} icon={TabIcons.genres} tabBarLabel={'Categories'} hideNavBar>
                  <Scene key={'genresMain'} component={Categories} hideNavBar></Scene>
                  <Scene key={'genresDetail'} component={CategoryDetail} hideNavBar></Scene>
                </Scene>
                <Scene key={'about-tab-content'} component={About} icon={TabIcons.about}
                  tabBarLabel={'About'} hideNavBar/>
              </Tabs>
            </Scene>
            <Scene key={'gameDetail'} component={GameDetail} hideNavBar/>
            </Modal>
          </Stack>
        </Router>
      </Provider>
    )
  }
}

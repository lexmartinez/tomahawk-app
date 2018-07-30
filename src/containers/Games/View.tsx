import React from 'react'
import { Component } from 'react'
import { Animated, View, StatusBar, Text } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Search from 'react-native-search-box'

export default class Games extends Component <GamesProps, GamesState> {

    constructor(props: GamesProps) {
        super(props)
        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
    }

    componentDidMount() {
        this.props.getGames()
    }
    renderForeground() {
        return (
            <View key={'parallax-header'} style={ style.parallaxHeader }>
                <View style={{flexDirection: 'row'}}>
                    <Text style={ style.parallaxText }>
                        Games
                    </Text>
                </View>
                <View style={ style.line }/>
            </View>
        )
    }

    renderStickyHeader() {
        return (
            <View key={'sticky-header'} style={style.stickyHeader}>
                <Text style={style.stickyText}>Games</Text>
                <Search ref={'search_box'} backgroundColor={Colors.secondary_red}
                    cancelButtonTextStyle={style.cancelButtonTextStyle}
                    inputStyle={style.inputStyle}
                />
            </View>
        )
    }

    onScrollEnd() {

    }
    render() {
        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.white}
            stickyHeaderHeight={ hp('11%') + getStatusBarHeight() }
            parallaxHeaderHeight={ hp('17%') }
            backgroundSpeed={10}
            renderScrollComponent={() => <Animated.ScrollView
                onScrollEndDrag={this.onScrollEnd}
                style={{backgroundColor: Colors.white}}/>}
            renderForeground={this.renderForeground}
            renderStickyHeader={this.renderStickyHeader}>
                    <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'dark-content'}/>
                    <View style={style.view}>
                       <Text>Hello World</Text>
                    </View>
            </ParallaxScrollView>
        )
    }

}

import React from 'react'
import { Component } from 'react'
import { Animated, View, StatusBar, Text } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default class BaseView extends Component<BaseViewProps, BaseViewState> {

    constructor(props: BaseViewProps) {
        super(props)
        this.state = {
            barStyle: 'dark-content'
        }
        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
        this.onChangeHeaderVisibility = this.onChangeHeaderVisibility.bind(this)
    }

    renderForeground() {
        return (
            <View key={'parallax-header'} style={ style.parallaxHeader }>
                <Text style={ style.parallaxText }>
                    {this.props.title}
                </Text>
                <View style={ style.line }/>
            </View>
        )
    }

    renderStickyHeader() {
        return (
            <View key={'sticky-header'} style={style.stickyHeader}>
                <Text style={style.stickyText}>{this.props.title}</Text>
            </View>
        )
    }

    onChangeHeaderVisibility(sticky: any) {
        this.setState({barStyle: `${sticky ? 'dark' : 'light'}-content`})
    }
    render() {
        const { children } = this.props
        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.white}
            stickyHeaderHeight={ hp('8%') + getStatusBarHeight() }
            parallaxHeaderHeight={ hp('17%') }
            backgroundSpeed={10}
            renderScrollComponent={() => <Animated.ScrollView style={{backgroundColor: Colors.white}}/>}
            renderForeground={this.renderForeground}
            onChangeHeaderVisibility={this.onChangeHeaderVisibility}
            renderStickyHeader={this.renderStickyHeader}>
                    <StatusBar backgroundColor={Colors.black_20} translucent={true}
                        barStyle={this.state.barStyle}/>
                    <View style={style.view}>
                        {children}
                    </View>
            </ParallaxScrollView>
        )
    }

}

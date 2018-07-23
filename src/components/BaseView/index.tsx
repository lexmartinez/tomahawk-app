import React from 'react'
import { Component } from 'react'
import { Animated, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class BaseView extends Component<BaseViewProps> {

    constructor(props: BaseViewProps) {
        super(props)
        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
    }

    renderForeground() {
        const { back } = this.props
        return (
            <View key={'parallax-header'} style={ style.parallaxHeader }>
                <View style={{flexDirection: 'row'}}>
                    {
                        back &&
                        <TouchableOpacity style={style.parallaxBack} onPress={Actions.pop}>
                            <Icon name={'chevron-left'} size={hp('7%')} color={Colors.secondary_red}></Icon>
                        </TouchableOpacity>
                    }
                    <Text style={ style.parallaxText } numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={ style.line }/>
            </View>
        )
    }

    renderStickyHeader() {
        const { back } = this.props
        return (
            <View key={'sticky-header'} style={style.stickyHeader}>
                {
                    back &&
                        <TouchableOpacity style={style.stickyBack} onPress={Actions.pop}>
                            <Icon name={'chevron-left'} size={hp('6%')} color={Colors.white}></Icon>
                        </TouchableOpacity>
                }
                <Text style={style.stickyText}>{this.props.title}</Text>
            </View>
        )
    }
    render() {
        const { children, onScrollEnd } = this.props
        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.white}
            stickyHeaderHeight={ hp('8%') + getStatusBarHeight() }
            parallaxHeaderHeight={ hp('17%') }
            backgroundSpeed={10}
            renderScrollComponent={() => <Animated.ScrollView
                onScrollEndDrag={onScrollEnd}
                style={{backgroundColor: Colors.white}}/>}
            renderForeground={this.renderForeground}
            renderStickyHeader={this.renderStickyHeader}>
                    <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'dark-content'}/>
                    <View style={style.view}>
                        {children}
                    </View>
            </ParallaxScrollView>
        )
    }

}

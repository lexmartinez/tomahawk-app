import React from 'react'
import { Component } from 'react'
import { View, StatusBar, Text, Image } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp, wp } from '../../config/Utils'
import { imageURI, dateFormat } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default class NewsDetail extends Component <NewsDetailProps> {

    constructor(props: NewsDetailProps) {
        super(props)
        this.renderBackground = this.renderBackground.bind(this)
        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
    }

    renderBackground() {
        const image = {height: hp('50%'), uri: imageURI(this.props.image), width: wp('100%')}
        return (
            <View>
                <Image source={image}/>
                <View style={style.backgroundView}/>
            </View>
        )
    }
    renderForeground() {
        return (
            <View key={'parallax-header'} style={style.parallaxHeader}>
                <View style={style.headerButton}>
                    <Icon.Button name={'chevron-left'} size={hp('4%')} color={Colors.white}
                        backgroundColor={Colors.transparent}
                        onPress={Actions.pop} iconStyle={style.iconStyle}>
                        <Text style={style.headerButtonText}>Back</Text>
                    </Icon.Button>
                </View>
                <Text style={ style.parallaxText }>{this.props.title}</Text>
                <Text style={ style.parallaxDate }>
                    {dateFormat(this.props.published_at)} - {this.props.author}
                </Text>
            </View>
        )
    }

    renderStickyHeader() {
        return (
            <View key={'sticky-header'} style={style.stickyHeader}>
                <Text style={style.stickyText} numberOfLines={2}
                    ellipsizeMode={'tail'}>{this.props.title}</Text>
                <Text style={style.stickyDate} numberOfLines={1}
                    ellipsizeMode={'tail'}>{dateFormat(this.props.published_at)} - {this.props.author}</Text>
            </View>
        )
    }
    render() {
        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.secondary_red}
            stickyHeaderHeight={ hp('12%') + getStatusBarHeight() }
            parallaxHeaderHeight={ hp('50%') }
            backgroundSpeed={10}
            renderBackground={this.renderBackground}
            renderForeground={this.renderForeground}
            renderStickyHeader={this.renderStickyHeader}>
                <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'light-content'}/>
                <View style={style.view}>
                </View>
            </ParallaxScrollView>
        )
    }

}

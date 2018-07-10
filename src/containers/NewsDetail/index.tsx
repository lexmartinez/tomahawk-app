import React from 'react'
import { Component } from 'react'
import { View, StatusBar, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp, wp } from '../../config/Utils'
import { imageURI, dateFormat } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default class NewsDetail extends Component <NewsDetailProps, NewsDetailState> {

    constructor(props: NewsDetailProps) {
        super(props)
        this.state = {
            sticky: true
        }
        this.renderBackground = this.renderBackground.bind(this)
        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
        this.onChangeHeaderVisibility = this.onChangeHeaderVisibility.bind(this)
        this.handleURL = this.handleURL.bind(this)
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
                    {dateFormat(this.props.published_at)} By {this.props.author}
                </Text>
            </View>
        )
    }

    renderStickyHeader() {
        return (
            <View key={'sticky-header'} style={style.stickyHeader}></View>
        )
    }

    onChangeHeaderVisibility(sticky: any) {
        this.setState({sticky})
    }

    handleURL = () => {
        Linking.canOpenURL(this.props.url).then((supported: boolean) => {
          if (supported) {
            Linking.openURL(this.props.url)
          } else {
            alert(`Problem opening link: ${this.props.url}`)
          }
        })
    }

    render() {
        const { sticky } = this.state
        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.white}
            stickyHeaderHeight={ isIphoneX() ? getStatusBarHeight() + hp('2.5%') : getStatusBarHeight() }
            parallaxHeaderHeight={ hp('50%') }
            backgroundSpeed={10}
            renderBackground={this.renderBackground}
            renderForeground={this.renderForeground}
            onChangeHeaderVisibility={this.onChangeHeaderVisibility}
            renderStickyHeader={this.renderStickyHeader}>
                <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'dark-content'}/>
                <View style={[style.view, {paddingTop: sticky ? hp('3%') : hp('5%')}]}>
                {
                    !sticky ?
                    <View>
                        <Icon.Button name={'chevron-left'} size={hp('4%')} color={Colors.primary_grey}
                        backgroundColor={Colors.transparent} style={style.stickyButton}
                        onPress={Actions.pop} iconStyle={style.iconStyle}>
                            <Text style={style.stickyButtonText}>Back</Text>
                        </Icon.Button>
                        <Text style={style.stickyText}>{this.props.title}</Text>
                        <Text style={style.stickyDate}>
                            By {this.props.author}</Text>
                    </View> : undefined
                }
                <Text style={style.summaryText}>{this.props.summary}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableOpacity style={style.button} onPress={this.handleURL}>
                            <Text style={style.buttonText}>Open Story</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ParallaxScrollView>
        )
    }

}

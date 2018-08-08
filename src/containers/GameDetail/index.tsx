import React from 'react'
import { Component } from 'react'
import { View, StatusBar, Text, Image, TouchableHighlight, Linking } from 'react-native'
import { Colors } from '../../config/Constants'
import { gameImage, imageURI, dateFormat, hp, wp } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import { GAME_PLACEHOLDER } from '../../config/Constants'

export default class GameDetail extends Component <GameDetailProps, GameDetailState> {

    constructor(props: GameDetailProps) {
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
        const { game } = this.props
        const { cover } = game
        const uri = cover ? gameImage(cover.cloudinary_id, 'screenshot_med') : GAME_PLACEHOLDER
        return (
            <View>
                <Image source={{uri}}/>
                <View style={style.backgroundView}/>
            </View>
        )
    }
    renderForeground() {
        const { game } = this.props
        const { name, first_release_date } = game
        return (
            <View key={'parallax-header'} style={style.parallaxHeader}>
                <View style={style.headerButton}>
                    <Icon.Button name={'chevron-left'} size={hp('4%')} color={Colors.white}
                        backgroundColor={Colors.transparent}
                        underlayColor={Colors.transparent}
                        onPress={Actions.pop} iconStyle={style.iconStyle}>
                        <Text style={style.headerButtonText}>Back</Text>
                    </Icon.Button>
                </View>
                <Text style={ style.parallaxText }>{name}</Text>
                <Text style={ style.parallaxDate }>
                    {dateFormat(first_release_date)}
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
        const { url } = this.props.game
        Linking.canOpenURL(url).then((supported: boolean) => {
          if (supported) {
            Linking.openURL(url)
          } else {
            alert(`Problem opening link: ${url}`)
          }
        })
    }
    render() {
        const { sticky } = this.state
        const { game } = this.props
        const { name, first_release_date, summary } = game
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
                        underlayColor={Colors.transparent}
                        onPress={Actions.pop} iconStyle={style.iconStyle}>
                            <Text style={style.stickyButtonText}>Back</Text>
                        </Icon.Button>
                        <Text style={style.stickyText}>{name}</Text>
                        <Text style={style.stickyDate}>
                        {dateFormat(first_release_date)}</Text>
                    </View> : undefined
                }
                <Text style={style.summaryText}>{summary}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableHighlight
                            underlayColor={Colors.black_20} style={style.button} onPress={this.handleURL}>
                            <Text style={style.buttonText}>See on IGDB</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ParallaxScrollView>
        )
    }

}

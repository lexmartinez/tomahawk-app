import React from 'react'
import { Component } from 'react'
import { View, StatusBar, Text, Image, TouchableHighlight, Linking } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp, wp, imageURI, dateFormat } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'
import { NEWS_PLACEHOLDER } from '../../config/Constants'

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
        const { image } = this.props
        const parsedImage = {height: hp('50%'), uri: imageURI(image, NEWS_PLACEHOLDER), width: wp('100%')}
        return (
            <View>
                <Image source={parsedImage}/>
                <View style={style.backgroundView}/>
            </View>
        )
    }
    renderForeground() {
        const { title, author, published_at } = this.props
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
                <Text style={ style.parallaxText }>{title}</Text>
                <Text style={ style.parallaxDate }>
                    {dateFormat(published_at)} By {author}
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
        const { url } = this.props
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
        const { title, summary, author } = this.props
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
                        <Text style={style.stickyText}>{title}</Text>
                        <Text style={style.stickyDate}>
                            By {author}</Text>
                    </View> : undefined
                }
                <Text style={style.summaryText}>{summary}</Text>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <TouchableHighlight
                            underlayColor={Colors.black_20} style={style.button} onPress={this.handleURL}>
                            <Text style={style.buttonText}>Open Story</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ParallaxScrollView>
        )
    }

}

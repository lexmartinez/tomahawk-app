import React from 'react'
import { Component } from 'react'
import { Animated, View, StatusBar, Text } from 'react-native'
import { Colors } from '../../config/Constants'
import { hp } from '../../config/Utils'
import styles from './styles'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Actions } from 'react-native-router-flux'

export default class NewsDetail extends Component <NewsDetailProps> {

    constructor(props: NewsDetailProps) {
        super(props)
    }

    componentDidMount() { }

    render() {
        return (
            <BaseView title={'News Detail'}>
                <TouchableHighlight onPress={Actions.pop}>
                    <Text>Back</Text>
                </TouchableHighlight>
            </BaseView>
        )
    }

}

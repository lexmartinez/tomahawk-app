import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'

export default class About extends Component <AboutProps> {

    componentDidMount() {
        this.props.getAppInfo()
    }
    render() {
        return (
            <View>
            </View>
        )
    }
}

import React from 'react'
import { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class GameDetail extends Component {
    render() {
        return <View style={{padding: 100}}>
            <TouchableHighlight onPress={Actions.pop}>
                <Text>CLOSE</Text>
            </TouchableHighlight>
        </View>
    }
}

import React from 'react'
import { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Colors } from '../../config/Constants'
import styles from './styles'

export default class BaseView extends Component<BaseViewProps> {
    
    constructor(props: BaseViewProps) {
        super(props);
    }
    render () {
        const { children } = this.props
        return (
            <View style={styles.view}>
                <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'light-content'}/>
                {children}
            </View>
        )
    }

}

import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { Colors } from '../../config/Constants'
import style from './style'
export default (props: MessageViewProps) => {
    return (<View style={style.screen}>
        {props.icon()}
        <Text style={style.screenTitle}>{props.title}</Text>
        <Text style={style.screenText}>{props.text}</Text>
        {
            props.buttonText && props.action &&
                <TouchableHighlight underlayColor={Colors.black_20} onPress={props.action} style={style.button}>
                    <Text style={style.buttonText}>{props.buttonText}</Text>
                </TouchableHighlight>
        }
    </View>)
}

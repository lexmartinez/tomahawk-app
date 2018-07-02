import { hp } from '../../config/Utils'
import { Colors } from '../../config/Constants'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    view: {
        height: hp('100%'),
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colors.primary_grey
    }
});
import { hp, wp } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet, Dimensions } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    view: {
        height: hp('100%'),
        backgroundColor: Colors.white
    },
    parallaxHeader: {
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: hp('1%'),
        paddingLeft: wp('5%'),
        backgroundColor: Colors.white
    },
    stickyHeader: {
        height: hp('8%') + getStatusBarHeight(),
        width: wp('100%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.secondary_red
    },
    stickyText: {
        color: Colors.white,
        fontSize: hp('3%'),
        margin: hp('2%'),
        fontFamily: Fonts.SEMIBOLD
    },
    parallaxText: {
        color: Colors.secondary_red,
        fontSize: hp('5%'),
        paddingVertical: hp('1%'),
        fontFamily: Fonts.SEMIBOLD
    },
    line: {
        borderBottomColor: isIphoneX() ? Colors.grey_30 : Colors.grey_50,
        borderBottomWidth: 1,
        width: wp('90%')
    }
});
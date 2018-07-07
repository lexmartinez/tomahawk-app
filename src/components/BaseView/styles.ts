import { hp, wp } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    line: {
        borderBottomColor: isIphoneX() ? Colors.grey_30 : Colors.grey_50,
        borderBottomWidth: 1,
        width: wp('90%')
    },
    parallaxHeader: {
        alignItems: 'flex-start',
        backgroundColor: Colors.white,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: hp('1%'),
        paddingLeft: wp('5%')
    },
    parallaxText: {
        color: Colors.secondary_red,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('5%'),
        paddingVertical: hp('1%')
    },
    stickyHeader: {
        alignItems: 'center',
        backgroundColor: Colors.secondary_red,
        height: hp('8%') + getStatusBarHeight(),
        justifyContent: 'flex-end',
        width: wp('100%')
    },
    stickyText: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('3%'),
        margin: hp('2%'),
    },
    view: {
        backgroundColor: Colors.white,
        minHeight: hp('100%'),
        paddingTop: hp('1%')
    }
})

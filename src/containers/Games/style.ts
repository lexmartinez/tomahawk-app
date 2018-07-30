import { hp, wp, hpOS } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    cancelButtonTextStyle: {
        fontFamily: Fonts.REGULAR,
        fontSize: hp('2%')
    },
    inputStyle: {
        fontFamily: Fonts.REGULAR,
        fontSize: hp('2%')
    },
    line: {
        borderBottomColor: isIphoneX() ? Colors.grey_30 : Colors.grey_50,
        borderBottomWidth: 1,
        width: wp('90%')
    },
    parallaxBack: {
        marginLeft: wp('-3%'),
        marginRight: wp('3%'),
        paddingBottom: hp('-0.5%')
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
        paddingVertical: hp('1%'),
        width: wp('78.5%')
    },
    stickyBack: {
        paddingBottom: hpOS('1%', '0.5%'),
        position: 'absolute'
    },
    stickyHeader: {
        backgroundColor: Colors.secondary_red,
        height: hp('11%') + getStatusBarHeight(),
        justifyContent: 'flex-end',
        width: wp('100%')
    },
    stickyText: {
        alignSelf: 'center',
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('3%'),
        margin: hp('1%'),
    },
    view: {
        backgroundColor: Colors.white,
        paddingTop: hp('1%')
    }
})

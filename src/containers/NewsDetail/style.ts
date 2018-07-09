import { hp, wp } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
    background: {
        height: hp('50%'),
        left: 0,
        position: 'absolute',
        top: 0,
        width: wp('100%')
    },
    backgroundImage : {
        height: hp('50%'),
        width: wp('100%')
    },
    backgroundView: {
        backgroundColor: Colors.black_55,
        height: hp('50%'),
        position: 'absolute',
        top: 0,
        width: wp('100%')
    },
    headerButton: {
        paddingHorizontal: wp('2%'),
        position: 'absolute',
        top: hp('2.5%') + getStatusBarHeight(),
        width: wp('30%')
    },
    headerButtonText: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('2.5%'),
        marginTop: hp('0%', '-0.3%')
    },
    iconStyle: {marginRight: hp('0.1%')},
    parallaxDate: {
        color: Colors.white,
        fontFamily: Fonts.REGULAR,
        fontSize: hp('2%'),
        marginTop: hp('-2%'),
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('2%')
    },
    parallaxHeader: {
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: hp('1%'),
        paddingLeft: wp('5%')
    },
    parallaxText: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('3.5%'),
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('2%')
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
        paddingTop: hp('1%')
    }
})

import { hp, wp, hpOS } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'
import { isIOS } from '../../config/Utils'
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
    button: {
        alignItems: 'center',
        borderColor: Colors.primary_red,
        borderRadius: hp('1.5%'),
        borderWidth: 1,
        height: hp('6%'),
        justifyContent: 'center',
        width: wp('50%')
    },
    buttonText: {
        color: Colors.secondary_red,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('2.5%')
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
    stickyDate: {
        color: Colors.primary_red,
        fontFamily: Fonts.REGULAR,
        fontSize: hp('3.6%'),
        marginTop: hp('0.2%'),
        paddingVertical: hp('2%')
    },
    stickyHeader: {
        backgroundColor: Colors.secondary_red,
        height: hp('12%') + getStatusBarHeight(),
        justifyContent: 'center',
        width: wp('100%')
    },
    stickyText: {
        color: Colors.primary_grey,
        flexWrap: 'wrap',
        fontFamily: Fonts.BOLD,
        fontSize: hp('5%'),
        marginTop: hpOS('6%', '4%', '6%'),
        width: wp('90%')
    },
    summaryText: {
        fontFamily: isIOS() ? Fonts.LIGHT : Fonts.REGULAR,
        fontSize: hp('3%'),
        marginBottom: hp('4%'),
        textAlign: 'justify'
    },
    view: {
        backgroundColor: Colors.white,
        paddingHorizontal: hp('3%'),
        paddingVertical: hp('2%'),
    }
})

import { hp, wp, hpOS, wpOS } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    button: {
        alignItems: 'center',
        borderColor: Colors.primary_red,
        borderRadius: hp('1.5%'),
        borderWidth: 1,
        height: hp('6%'),
        justifyContent: 'center',
        marginTop: hp('5%'),
        width: wp('50%')
    },
    buttonText: {
        color: Colors.secondary_red,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('2.5%')
    },
    screen: {
        alignItems: 'center',
        flex: 1,
        height: hp('65%'),
        justifyContent: 'center'
    },
    screenText: {
        color: Colors.primary_grey,
        fontFamily: Fonts.REGULAR,
        fontSize: hp('4%'),
        textAlign: 'center',
        width: wp('100%')
    },
    screenTitle: {
        color: Colors.secondary_red,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('5%'),
        textAlign: 'center',
        width: wp('100%')
    }
})

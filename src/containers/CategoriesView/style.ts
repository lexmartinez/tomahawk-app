import { hp, wp, hpOS, wpOS } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    item: {
        borderBottomColor: Colors.grey_30,
        borderBottomWidth: 1,
        height: hp('8%'),
        marginLeft: hp('4%'),
        width: wp('90%')
    },
    itemText: {
        backgroundColor: Colors.transparent,
        flex: 1,
        flexWrap: 'wrap',
        fontFamily: Fonts.REGULAR,
        fontSize: hp('2.6%'),
        lineHeight: hpOS('7.8%', '8%')
    },
    itemView: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        width: wp('80%')
    },
    loading: {
        height: hp('65%'),
        justifyContent: 'center'
    }
})

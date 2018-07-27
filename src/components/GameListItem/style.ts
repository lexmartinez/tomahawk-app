import { hp, wp } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        height: hp('55%'),
        width: wp('90%')
    },
    image: {
        borderRadius: hp('2%'),
        flex: 1,
        height: hp('55%'),
        width: wp('90%')
    },
    item: {
        backgroundColor: Colors.primary_grey,
        borderRadius: hp('2%'),
        elevation: 2,
        height: hp('55%'),
        marginHorizontal: wp('5%'),
        marginVertical: hp('2%'),
        shadowColor: Colors.primary_grey,
        shadowOffset: {  width: 0.5,  height: 0.5  },
        shadowOpacity: 0.3,
        width: wp('90%')
    },
    rating: {
        alignSelf: 'flex-end',
        paddingBottom: hp('2%'),
        paddingHorizontal: wp('3.5%'),
        paddingTop: hp('1%'),
        width: wp('40%')
    },
    title: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('4%', '3%'),
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('1%'),
        textAlign: 'right'
    },
    titleContainer: {
        backgroundColor: Colors.black_55,
        bottom: hp('4%'),
        position: 'absolute',
        width: wp('90%')
    }
})

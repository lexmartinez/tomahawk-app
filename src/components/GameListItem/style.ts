import { hp, wp } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    author: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('1.5%'),
        marginTop: hp('-0.7%'),
        paddingBottom: hp('1%'),
        paddingHorizontal: wp('3%')
    },
    container: {
        flex: 1,
        height: hp('55%'),
        width: wp('90%')
    },
    date: {
        color: Colors.white,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('3%', '2.6%'),
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('1%')
    },
    dateContainer: {
        backgroundColor: Colors.black_55,
        position: 'absolute',
        top: hp('4%'),
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
    loading: {
        height: hp('65%'),
        justifyContent: 'center'
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

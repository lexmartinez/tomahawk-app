import { hp, wp, isIOS } from '../../config/Utils'
import { Colors, Fonts } from '../../config/Constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    authorPanel: {
        backgroundColor: Colors.white,
        borderColor: Colors.grey_50,
        borderWidth: isIOS() ? 0.5 : 1,
        marginTop: hp('3%'),
        paddingHorizontal: hp('3%'),
        paddingVertical: wp('3%'),
    },
    container: {
        backgroundColor: Colors.white_90,
        height: hp('100%')
    },
    githubPanel: {
        backgroundColor: Colors.white,
        borderColor: Colors.grey_50,
        borderWidth: isIOS() ? 0.5 : 1,
        marginTop: hp('3%')
    },
    header: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderBottomColor: Colors.grey_50,
        borderBottomWidth: isIOS() ? 0.5 : 1,
        height: hp('40%'),
        justifyContent: 'center'
    },
    headerAuthor: {
        color: Colors.primary_grey,
        fontFamily: Fonts.SEMIBOLD
    },
    headerSubtitle: {
        color: Colors.primary_grey,
        fontFamily: Fonts.SEMIBOLD
    },
    headerTitle: {
        color: Colors.secondary_red,
        fontFamily: Fonts.SEMIBOLD,
        fontSize: hp('5%'),
        marginTop: hp('3%')
    },
    lineBio: {
        color: Colors.primary_grey,
        flexGrow: 1,
        flexWrap: 'wrap',
        fontFamily: Fonts.LIGHT
    },
    lineInfo: {
        color: Colors.primary_grey,
        fontFamily: Fonts.REGULAR,
        height: hp('4%'),
        lineHeight: hp('4%')
    },
    lineLink: {
        color: Colors.secondary_red,
        fontFamily: Fonts.REGULAR,
        height: hp('5%'),
        lineHeight: hp('5%')
    },
    loading: {
        height: hp('100%'),
        justifyContent: 'center'
    },
    logo : {
        height: hp('9%'),
        marginTop: hp('5%'),
        width: hp('9%')
    }
})

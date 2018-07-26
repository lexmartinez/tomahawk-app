import { widthPercentageToDP as wdp, heightPercentageToDP as hdp} from 'react-native-responsive-screen'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

import moment from 'moment'

export function isIOS() {
    return Platform.OS === 'ios'
}

export function hp(val: string, iXVal?: string) {
   return isIphoneX() ? hdp(iXVal ? iXVal : val) : hdp(val)
}

export function wp(val: string, iXVal?: string) {
    return isIphoneX() ? wdp(iXVal ? iXVal : val) : wdp(val)
}

export function hpOS(android: string, ios: string, iphoneX?: string) {
    if (isIOS()) {
        return isIphoneX() ? hdp(iphoneX ? iphoneX : ios) : hdp(ios)
    } else {
        return hdp(android)
    }
}

export function wpOS(android: string, ios: string, iphoneX?: string) {
    if (isIOS()) {
        return isIphoneX() ? wdp(iphoneX ? iphoneX : ios) : wdp(ios)
    } else {
        return wdp(android)
    }
}

export function imageURI(uri: string, placeholder: string) {
    if (uri) {
      return isIOS() ? uri.replace('http://', 'https://') : uri
    } else {
        return placeholder.replace('http://', 'https://')
    }
}

export function gameImage(hash: string, size: string) {
    return `https://images.igdb.com/igdb/image/upload/t_${size}/${hash}.jpg`
}

export function dateFormat(date: any, format?: string) {
    return moment(date).format(format || 'MMMM DD, YYYY')
}

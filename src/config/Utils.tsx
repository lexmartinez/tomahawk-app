import { widthPercentageToDP as wdp, heightPercentageToDP as hdp} from 'react-native-responsive-screen'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

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

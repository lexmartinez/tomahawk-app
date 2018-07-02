import { widthPercentageToDP as wdp, heightPercentageToDP as hdp} from 'react-native-responsive-screen'
import { isIphoneX } from 'react-native-iphone-x-helper'

export function hp (val: string, iXVal?:string) {
   return isIphoneX() ? hdp(iXVal ? iXVal : val) : hdp(val)
}

export function wp (val: string, iXVal?:string) {
    return isIphoneX() ? wdp(iXVal ? iXVal : val) : wdp(val)
 }
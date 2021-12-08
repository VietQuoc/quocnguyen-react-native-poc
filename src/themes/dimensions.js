import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const scale = (deviceWidth < deviceHeight ? deviceWidth : deviceHeight) / 320

export default {
  deviceHeight,
  deviceWidth,
  fontSize: 12 * scale,
  openAppLogo: 100 * scale,
}

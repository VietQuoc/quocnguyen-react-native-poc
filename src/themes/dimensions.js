import { Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const scale = (deviceWidth < deviceHeight ? deviceWidth : deviceHeight) / 320

export default {
  deviceHeight,
  deviceWidth,
  fontSizeSmall: 10 * scale,
  fontSize: 12 * scale,
  openAppLogo: 100 * scale,
  loginAppLogoWidth: 150 * scale,
  borderRadius: 20 * scale,
  textBoxWidth: 250 * scale,
  buttonWidth: 200 * scale,
}

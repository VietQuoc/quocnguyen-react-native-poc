import { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { singletonHook } from 'react-singleton-hook'

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

export const useOrientation = singletonHook('portrait', () => {
  const [deviceOrientation, setDeviceOrientation] = useState(
    Dimensions.get('window').width < Dimensions.get('window').height
      ? 'portrait'
      : 'landscape',
  )

  useEffect(() => {
    const handleDeviceOrientation = () => {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        setDeviceOrientation('portrait')
      } else {
        setDeviceOrientation('landscape')
      }
    }
    const subscription = Dimensions.addEventListener(
      'change',
      handleDeviceOrientation,
    )
    return () => subscription?.remove()
  }, [])
  return deviceOrientation
})

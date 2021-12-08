import { Dimensions } from 'react-native'
import { useState, useEffect } from 'react'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

export default {
  deviceHeight,
  deviceWidth,
}

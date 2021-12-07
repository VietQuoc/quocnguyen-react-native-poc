import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

export default function LaunchScreenContainer() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LaunchScreenContainer</Text>
    </View>
  )
}

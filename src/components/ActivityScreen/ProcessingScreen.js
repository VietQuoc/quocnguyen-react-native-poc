import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '../../themes'

export default function Processingcreen() {
  const styles = useStyle()
  return (
    <View style={styles.activity}>
      <ActivityIndicator color={styles.activityColor} size="large" />
    </View>
  )
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    activity: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: colors.spinnerBg,
    },
    activityColor: colors.buttonBackground,
  })
}

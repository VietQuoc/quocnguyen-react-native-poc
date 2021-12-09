import React from 'react'
import { Platform, StatusBar as SB, StyleSheet } from 'react-native'
import { useTheme } from '../../themes'

export default function StatusBar() {
  const styles = useStyle()
  return (
    <SB
      backgroundColor={styles.statusBarBackgroundColor}
      barStyle={styles.statusBarStyle}
    />
  )
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    statusBarStyle: colors.statusBarStyle,
    statusBarBackgroundColor:
      Platform.OS === 'android' ? colors.androidStatusBar : colors.background,
  })
}

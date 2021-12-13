import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../themes'
import { useOrientation } from '../../themes/dimensions'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'

export default function LoginScreen({
  navigateToRegisterScreen,
  navigateToHomeScreen,
}) {
  const styles = useStyle()
  return (
    <SafeAreaView style={styles.safeArea}>
      <LoginHeader />
      <LoginForm
        navigateToRegisterScreen={navigateToRegisterScreen}
        navigateToHomeScreen={navigateToHomeScreen}
      />
    </SafeAreaView>
  )
}

function useStyle() {
  const colors = useTheme()
  const orientation = useOrientation()
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: orientation === 'landscape' ? 'row' : 'column',
    },
  })
}

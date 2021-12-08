import React from 'react'
import { View, StyleSheet, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../themes'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'

export default function LoginScreen({ navigateToRegisterScreen, navigation }) {
  const styles = useStyle()
  return (
    <>
      <StatusBar
        backgroundColor={styles.statusBarBackgroundColor}
        barStyle={styles.statusBarStyle}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <LoginHeader />
          <LoginForm navigateToRegisterScreen={navigateToRegisterScreen} />
        </View>
      </SafeAreaView>
    </>
  )
}

function useStyle() {
  const [colors] = useTheme()
  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    statusBarStyle: colors.statusBarStyle,
    statusBarBackgroundColor:
      Platform.OS === 'android' ? colors.androidStatusBar : colors.background,
  })
}

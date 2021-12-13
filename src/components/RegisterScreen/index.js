import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '../../themes'
import RegisterForm from './RegisterForm'
import RegisterHeader from './RegisterHeader'

export default function RegisterScreen({ navigation }) {
  const styles = useStyle()

  return (
    <SafeAreaView style={styles.container}>
      <RegisterHeader navigation={navigation} />
      <RegisterForm navigation={navigation} />
    </SafeAreaView>
  )
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background,
    },
  })
}

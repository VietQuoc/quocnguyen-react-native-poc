import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeID } from '../../store/actions/index'
import { useTheme } from '../../themes'
import RegisterForm from './RegisterForm'
import RegisterHeader from './RegisterHeader'

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const styles = useStyle()
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
  }

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

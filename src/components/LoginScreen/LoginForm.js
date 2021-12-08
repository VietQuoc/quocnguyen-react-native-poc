import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useLanguage } from '../../config/Strings'
import { setThemeID, setLanguageID } from '../../store/actions/index'
import { useTheme, Dimensions } from '../../themes'

export default function LoginForm({ navigateToRegisterScreen }) {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const languageID = useSelector((state) => state.app.languageID)
  const styles = useStyle()
  const language = useLanguage()
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
    dispatch(setLanguageID(Math.abs(languageID - 1)))
  }
  return (
    <View style={styles.loginForm}>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text style={styles.text}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegisterScreen}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

function useStyle() {
  const [colors] = useTheme()
  return StyleSheet.create({
    text: { color: colors.text, fontSize: Dimensions.fontSize },
    loginForm: {
      flex: 1,
    },
  })
}

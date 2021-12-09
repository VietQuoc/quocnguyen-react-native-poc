import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LinkText from '../common/component/LinkText'
import { setThemeID, setLanguageID } from '../store/actions/index'

export default function SettingContainer() {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const languageID = useSelector((state) => state.app.languageID)
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
  }
  function changeLanguage() {
    dispatch(setLanguageID(Math.abs(languageID - 1)))
  }
  return (
    <View>
      <View style={styles.loginForm}>
        <LinkText title="Change Theme" onPress={() => changeTheme()} />
      </View>
      <View style={styles.loginForm}>
        <LinkText title="Change Language" onPress={() => changeLanguage()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    alignItems: 'center',
  },
})

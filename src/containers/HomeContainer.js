import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LinkText from '../common/component/LinkText'
import { singOutOnFirebase } from '../store/actions/auth'
import { setThemeID, setLanguageID } from '../store/actions/index'

export default function HomeContainer() {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const languageID = useSelector((state) => state.app.languageID)
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
  }
  function changeLanguage() {
    dispatch(setLanguageID(Math.abs(languageID - 1)))
  }
  function logout() {
    dispatch(singOutOnFirebase())
  }
  return (
    <View>
      <View style={styles.loginForm}>
        <LinkText title="Change Theme" onPress={() => changeTheme()} />
      </View>
      <View style={styles.loginForm}>
        <LinkText title="Change Language" onPress={() => changeLanguage()} />
      </View>
      <View style={styles.loginForm}>
        <LinkText title="Logout" onPress={() => logout()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    alignItems: 'center',
  },
})

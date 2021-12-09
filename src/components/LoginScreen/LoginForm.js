import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../../common/component/AppButton'
import LinkText from '../../common/component/LinkText'
import TextBox from '../../common/component/TextBox'
import { useLanguage } from '../../config/Strings'
import { setThemeID, setLanguageID } from '../../store/actions/index'

export default function LoginForm({ navigateToRegisterScreen }) {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const languageID = useSelector((state) => state.app.languageID)
  const language = useLanguage()
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
    dispatch(setLanguageID(Math.abs(languageID - 1)))
  }
  return (
    <View style={styles.loginForm}>
      <TextBox
        placeholder={language.email}
        style={styles.emailTextBox}
        onChangeText={(a) => console.log(a)}
      />
      <TextBox
        placeholder={language.password}
        onChangeText={(a) => console.log(a)}
        iconName="lock"
        passwordControl
      />
      <AppButton
        onPress={() => {}}
        title={language.login}
        style={styles.loginButton}
      />
      <LinkText
        title={language.createNewAccount}
        onPress={navigateToRegisterScreen}
      />
      <LinkText title="Change Theme" onPress={() => changeTheme()} />
    </View>
  )
}

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    alignItems: 'center',
  },
  emailTextBox: {
    marginBottom: 20,
  },
  loginButton: { marginTop: 30 },
})

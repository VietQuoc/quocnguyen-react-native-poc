import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux'
import AppButton from '../../common/component/AppButton'
import LinkText from '../../common/component/LinkText'
import TextBox from '../../common/component/TextBox'
import UserValidatorMessage from '../../common/component/UserValidatorMessage'
import {
  validateEmail,
  validatePassword,
} from '../../common/function/validator'
import { useLanguage } from '../../config/Strings'
import { loginWithFirebase } from '../../store/actions/auth'
import { Dimensions, useTheme } from '../../themes'
import { useOrientation } from '../../themes/dimensions'

export default function LoginForm({
  navigateToRegisterScreen,
  navigateToHomeScreen,
}) {
  const language = useLanguage()
  const styles = useStyles()
  const dispatch = useDispatch()
  const [email, setEmail] = useState({ isCorrect: -1, text: '' }) // isCorrect =-1: Not yet entered, 0: incorrect, 1: correct
  const [password, setPassword] = useState({ isCorrect: -1, text: '' }) // isCorrect = -1: Not yet entered, 0: incorrect, 1: correct

  function onEndEditEmail(text) {
    setEmail({ isCorrect: validateEmail(text) ? 1 : 0, text })
  }
  function onEndEditPassword(text) {
    setPassword({ isCorrect: validatePassword(text) ? 1 : 0, text })
  }
  function onLogin() {
    dispatch(
      loginWithFirebase(
        email.text,
        password.text,
        () => {
          navigateToHomeScreen()
        },
        () => {
          onLogin()
        },
      ),
    )
  }
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.loginForm}>
        <TextBox
          placeholder={language.email}
          style={[
            styles.textBox,
            email.isCorrect === 0 ? styles.borderError : styles.borderNormal,
          ]}
          onEndEditing={(event) => onEndEditEmail(event.nativeEvent.text)}
        />
        <TextBox
          placeholder={language.password}
          iconName="lock"
          passwordControl
          style={[
            styles.textBox,
            password.isCorrect === 0 ? styles.borderError : styles.borderNormal,
          ]}
          onEndEditing={(event) => onEndEditPassword(event.nativeEvent.text)}
        />
        <UserValidatorMessage
          emailError={!email.isCorrect}
          passwordError={!password.isCorrect}
          style={styles.appErrorMessage}
        />
        <AppButton
          onPress={onLogin}
          title={language.login}
          style={styles.loginButton}
          disabled={email.isCorrect !== 1 || password.isCorrect !== 1}
        />
        <LinkText
          title={language.createNewAccount}
          onPress={navigateToRegisterScreen}
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

function useStyles() {
  const orientation = useOrientation()
  const colors = useTheme()
  return StyleSheet.create({
    container: { flex: orientation === 'landscape' ? 2 : 1, width: '100%' },
    loginForm: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: orientation === 'landscape' ? 'center' : 'flex-start',
    },
    textBox: {
      marginBottom: 20,
      width: '80%',
    },
    loginButton: { marginTop: 30 },
    landscapeHeight: { height: '100%' },
    scrollEnabled: orientation === 'landscape',
    appErrorMessage: { marginTop: Dimensions.fontSizeLarge, width: '90%' },
    borderNormal: { borderBottomColor: colors.border },
    borderError: { borderBottomColor: colors.error },
  })
}

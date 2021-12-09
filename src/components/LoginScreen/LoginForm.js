import React from 'react'
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import AppButton from '../../common/component/AppButton'
import LinkText from '../../common/component/LinkText'
import TextBox from '../../common/component/TextBox'
import { useLanguage } from '../../config/Strings'
import { useOrientation } from '../../themes/dimensions'

export default function LoginForm({
  navigateToRegisterScreen,
  navigateToHomeScreen,
}) {
  const language = useLanguage()
  const styles = useStyles()
  return (
    <ScrollView
      style={styles.container}
      scrollEnabled={styles.scrollEnabled}
      contentContainerStyle={styles.loginForm}
      nestedScrollEnabled>
      <KeyboardAvoidingView behavior="padding" enabled>
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
      </KeyboardAvoidingView>

      <AppButton
        onPress={navigateToHomeScreen}
        title={language.login}
        style={styles.loginButton}
      />
      <LinkText
        title={language.createNewAccount}
        onPress={navigateToRegisterScreen}
      />
    </ScrollView>
  )
}

function useStyles() {
  const orientation = useOrientation()
  console.log(orientation)
  return StyleSheet.create({
    container: { flex: 1 },
    loginForm: {
      flex: 1,
      alignItems: 'center',
      justifyContent: orientation === 'landscape' ? 'center' : 'flex-start',
    },
    emailTextBox: {
      marginBottom: 20,
    },
    loginButton: { marginTop: 30 },
    landscapeHeight: { height: '100%' },
    scrollEnabled: orientation === 'landscape',
  })
}

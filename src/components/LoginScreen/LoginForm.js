import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
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
  const orientation = useOrientation()
  return (
    <ScrollView
      style={[
        styles.container,
        orientation === 'landscape' ? styles.landscapeHeight : {},
      ]}
      scrollEnabled={orientation === 'landscape'}
      contentContainerStyle={styles.loginForm}
      nestedScrollEnabled>
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

const styles = StyleSheet.create({
  container: { flex: 1 },
  loginForm: {
    alignItems: 'center',
  },
  emailTextBox: {
    marginBottom: 20,
  },
  loginButton: { marginTop: 30 },
  landscapeHeight: { height: '100%' },
})

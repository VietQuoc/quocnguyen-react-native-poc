import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native'
import AppButton from '../../common/component/AppButton'
import TextBox from '../../common/component/TextBox'
import { useLanguage } from '../../config/Strings'
import { Dimensions } from '../../themes'
import { useOrientation } from '../../themes/dimensions'

export default function RegisterForm({ navigation }) {
  const language = useLanguage()
  const styles = useStyles()

  return (
    <View style={styles.loginForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}>
        <TextBox
          placeholder={language.email}
          style={styles.emailTextBox}
          onChangeText={(a) => console.log(a)}
        />
        <TextBox
          placeholder={language.confirmEmail}
          style={styles.emailTextBox}
          onChangeText={(a) => console.log(a)}
        />
        <TextBox
          placeholder={language.password}
          style={styles.emailTextBox}
          onChangeText={(a) => console.log(a)}
          iconName="lock"
          passwordControl
        />
        <TextBox
          placeholder={language.confirmPassword}
          style={styles.emailTextBox}
          onChangeText={(a) => console.log(a)}
          iconName="lock"
          passwordControl
        />
      </KeyboardAvoidingView>

      <AppButton
        onPress={() => navigation.goBack()}
        title={language.createAccount}
        style={styles.loginButton}
      />
    </View>
  )
}

function useStyles() {
  const orientation = useOrientation()
  return StyleSheet.create({
    loginForm: {
      flex: 1,
      alignItems: 'center',
      justifyContent: orientation === 'landscape' ? 'center' : 'flex-start',
      paddingTop: 10,
    },
    emailTextBox: {
      marginBottom: 20,
      width:
        orientation === 'landscape'
          ? Dimensions.textBoxWidthFull
          : Dimensions.textBoxWidth,
    },
    loginButton: { marginTop: 30 },
    landscapeHeight: { height: '100%' },
    scrollEnabled: orientation === 'landscape',
  })
}

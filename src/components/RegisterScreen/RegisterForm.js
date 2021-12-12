import React from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native'
import { useDispatch } from 'react-redux'
import AppButton from '../../common/component/AppButton'
import TextBox from '../../common/component/TextBox'
import {
  validateEmail,
  validateEqualString,
  validatePassword,
} from '../../common/function/validator'
import { useLanguage } from '../../config/Strings'
import { registerWithFirebase } from '../../store/actions/auth'
import { Dimensions, useTheme } from '../../themes'
import { useOrientation } from '../../themes/dimensions'
import RegisterValidatorMessage from './RegisterValidatorMessage'

function withRegisterFormHook(Component) {
  return function WrappedComponent(props) {
    const language = useLanguage()
    const styles = useStyles()
    const dispatch = useDispatch()
    return (
      <Component
        {...props}
        language={language}
        styles={styles}
        dispatch={dispatch}
      />
    )
  }
}

class RegisterForm extends React.Component {
  state = {
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    isCorrectEmail: -1, // -1: Not yet entered, 0: incorrect, 1: correct
    isCorrectPassword: -1,
    isConfirmEmailCorrect: -1,
    isConfirmPasswordCorrect: -1,
  }

  validator = () => {
    console.log('call validator')
    this.props.dispatch(
      registerWithFirebase(
        this.state.email,
        this.state.password,
        () => {
          this.props.navigation.goBack()
        },
        () => {
          console.log('thử lại')
          this.validator()
        },
      ),
    )
  }

  onEndEditEmail = (text) => {
    const isCorrect = validateEmail(text)
    if (isCorrect) {
      this.setState({ email: text, isCorrectEmail: 1 })
    } else {
      this.setState({ isCorrectEmail: 0 })
    }
  }
  onEndEditPassword = (text) => {
    const isCorrect = validatePassword(text)
    if (isCorrect) {
      this.setState({ password: text, isCorrectPassword: 1 })
    } else {
      this.setState({ isCorrectPassword: 0 })
    }
  }
  onEndEditConfirmEmail = (text) => {
    const isCorrect = validateEqualString(this.state.email, text)
    this.setState({ isConfirmEmailCorrect: isCorrect ? 1 : 0 })
  }
  onEndEditConfirmPassword = (text) => {
    const isCorrect = validateEqualString(this.state.password, text)
    this.setState({ isConfirmPasswordCorrect: isCorrect ? 1 : 0 })
  }

  render() {
    const { language, styles } = this.props
    return (
      <View style={styles.loginForm}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={0}>
          <TextBox
            placeholder={language.email}
            style={[
              styles.emailTextBox,
              this.state.isCorrectEmail
                ? styles.borderNormal
                : styles.borderError,
            ]}
            onEndEditing={(event) =>
              this.onEndEditEmail(event.nativeEvent.text)
            }
          />
          <TextBox
            placeholder={language.confirmEmail}
            style={[
              styles.emailTextBox,
              this.state.isConfirmEmailCorrect
                ? styles.borderNormal
                : styles.borderError,
            ]}
            onEndEditing={(event) =>
              this.onEndEditConfirmEmail(event.nativeEvent.text)
            }
          />
          <TextBox
            placeholder={language.password}
            style={[
              styles.emailTextBox,
              this.state.isCorrectPassword
                ? styles.borderNormal
                : styles.borderError,
            ]}
            onEndEditing={(event) =>
              this.onEndEditPassword(event.nativeEvent.text)
            }
            iconName="lock"
            passwordControl
          />
          <TextBox
            placeholder={language.confirmPassword}
            style={[
              styles.emailTextBox,
              this.state.isConfirmPasswordCorrect
                ? styles.borderNormal
                : styles.borderError,
            ]}
            onEndEditing={(event) =>
              this.onEndEditConfirmPassword(event.nativeEvent.text)
            }
            iconName="lock"
            passwordControl
          />
        </KeyboardAvoidingView>
        <RegisterValidatorMessage
          emailError={this.state.isCorrectEmail === 0}
          passwordError={this.state.isCorrectPassword === 0}
          retypeError={
            this.state.isConfirmEmailCorrect === 0 ||
            this.state.isConfirmPasswordCorrect === 0
          }
        />
        <AppButton
          disabled={
            !(
              this.state.isCorrectEmail === 1 &&
              this.state.isCorrectPassword === 1 &&
              this.state.isConfirmEmailCorrect === 1 &&
              this.state.isConfirmPasswordCorrect === 1
            )
          }
          onPress={this.validator}
          title={language.createAccount}
          style={styles.loginButton}
        />
      </View>
    )
  }
}

export default withRegisterFormHook(RegisterForm)

function useStyles() {
  const orientation = useOrientation()
  const colors = useTheme()
  return StyleSheet.create({
    loginForm: {
      flex: 1,
      alignItems: 'center',
      justifyContent: orientation === 'landscape' ? 'center' : 'flex-start',
      paddingTop: Dimensions.fontSizeSmall,
    },
    emailTextBox: {
      marginBottom: Dimensions.fontSizeSmall,
      width:
        orientation === 'landscape'
          ? Dimensions.textBoxWidthFull
          : Dimensions.textBoxWidth,
    },
    loginButton: { marginTop: Dimensions.fontSizeSmall },
    landscapeHeight: { height: '100%' },
    scrollEnabled: orientation === 'landscape',
    borderNormal: { borderBottomColor: colors.border },
    borderError: { borderBottomColor: colors.error },
  })
}

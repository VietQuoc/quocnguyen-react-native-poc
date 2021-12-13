import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux'
import AppButton from '../../common/component/AppButton'
import TextBox from '../../common/component/TextBox'
import UserValidatorMessage from '../../common/component/UserValidatorMessage'
import {
  validateEmail,
  validateEqualString,
  validatePassword,
} from '../../common/function/validator'
import { useLanguage } from '../../config/Strings'
import { registerWithFirebase } from '../../store/actions/auth'
import { Dimensions, useTheme } from '../../themes'
import { useOrientation } from '../../themes/dimensions'

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
    if (
      this.validateConfirmEmail(this.state.email, this.state.confirmEmail) &&
      this.validateConfirmPassword(
        this.state.password,
        this.state.confirmPassword,
      )
    ) {
      this.props.dispatch(
        registerWithFirebase(
          this.state.email,
          this.state.password,
          () => {
            this.props.navigation.goBack()
          },
          () => {
            this.validator()
          },
        ),
      )
    }
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
    this.validateConfirmEmail(this.state.email, text)
  }
  validateConfirmEmail = (email, confirmEmail) => {
    const isCorrect = validateEqualString(email, confirmEmail)
    this.setState({
      isConfirmEmailCorrect: isCorrect ? 1 : 0,
      confirmEmail: confirmEmail,
    })
    return isCorrect
  }
  onEndEditConfirmPassword = (text) => {
    this.validateConfirmPassword(this.state.password, text)
  }
  validateConfirmPassword = (password, confirmPassword) => {
    const isCorrect = validateEqualString(password, confirmPassword)
    this.setState({
      isConfirmPasswordCorrect: isCorrect ? 1 : 0,
      confirmPassword: confirmPassword,
    })
    return isCorrect
  }

  render() {
    const { language, styles } = this.props
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.registerForm}>
        <TextBox
          placeholder={language.email}
          style={[
            styles.textBox,
            this.state.isCorrectEmail
              ? styles.borderNormal
              : styles.borderError,
          ]}
          onEndEditing={(event) => this.onEndEditEmail(event.nativeEvent.text)}
        />
        <TextBox
          placeholder={language.confirmEmail}
          style={[
            styles.textBox,
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
            styles.textBox,
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
            styles.textBox,
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
        <UserValidatorMessage
          emailError={this.state.isCorrectEmail === 0}
          passwordError={this.state.isCorrectPassword === 0}
          retypeError={
            this.state.isConfirmEmailCorrect === 0 ||
            this.state.isConfirmPasswordCorrect === 0
          }
          style={styles.appErrorMessage}
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
          style={styles.registerButton}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default withRegisterFormHook(RegisterForm)

function useStyles() {
  const orientation = useOrientation()
  const colors = useTheme()
  return StyleSheet.create({
    registerForm: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox: {
      marginTop: Dimensions.fontSizeLarge,
      width:
        orientation === 'landscape'
          ? Dimensions.textBoxWidthFull
          : Dimensions.textBoxWidth,
    },
    registerButton: { marginTop: Dimensions.fontSizeLarge },
    landscapeHeight: { height: '100%' },
    scrollEnabled: orientation === 'landscape',
    borderNormal: { borderBottomColor: colors.border },
    borderError: { borderBottomColor: colors.error },
    appErrorMessage: { marginTop: Dimensions.fontSizeLarge },
  })
}

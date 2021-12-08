import React from 'react'
import LoginScreen from '../components/LoginScreen'

export default function LoginContainer({ navigation }) {
  function navigateToRegisterScreen() {
    navigation.navigate('RegisterContainer')
  }
  return <LoginScreen navigateToRegisterScreen={navigateToRegisterScreen} />
}

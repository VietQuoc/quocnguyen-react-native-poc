import React from 'react'
import LoginScreen from '../components/LoginScreen'

export default function LoginContainer({ navigation }) {
  function navigateToRegisterScreen() {
    navigation.navigate('RegisterContainer')
  }
  function navigateToHomeScreen() {
    navigation.navigate('HomeContainer')
  }
  return (
    <LoginScreen
      navigation={navigation}
      navigateToRegisterScreen={navigateToRegisterScreen}
      navigateToHomeScreen={navigateToHomeScreen}
    />
  )
}

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ToastMessage } from '../common/component/ToastMessage'
import {
  LoginContainer,
  LaunchScreenContainer,
  RegisterContainer,
  HomeContainer,
  SettingContainer,
} from '../containers'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const [isCheckedApp, setIsCheckedApp] = useState(false)
  if (!isCheckedApp) {
    return <LaunchScreenContainer setIsCheckedApp={setIsCheckedApp} />
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginContainer"
          component={LoginContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterContainer"
          component={RegisterContainer}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="HomeContainer" component={HomeContainer} />
        <Stack.Screen name="SettingContainer" component={SettingContainer} />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  )
}

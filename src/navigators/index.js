import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LaunchScreenContainer from '../containers/LaunchScreenContainer'
import HomeMainNavigator from './HomeMainNavigator'
import { ToastMessage } from '../common/component/ToastMessage'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'

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
        <Stack.Screen
          name="HomeMainNavigator"
          component={HomeMainNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  )
}

import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LaunchScreenContainer from '../containers/LaunchScreenContainer'
import HomeMainNavigator from './HomeMainNavigator'
import { ToastMessage } from '../common/ToastMessage'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const [isCheckedApp, setIsCheckedApp] = useState(false)
  if (!isCheckedApp) return <LaunchScreenContainer setIsCheckedApp={setIsCheckedApp} />
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginContainer" component={LoginContainer} />
        <Stack.Screen name="RegisterContainer" component={RegisterContainer} />
        <Stack.Screen name="HomeMainNavigator" component={HomeMainNavigator} />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  )
}

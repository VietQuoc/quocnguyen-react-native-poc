import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginNavigator from './LoginNavigator'
import LaunchScreenContainer from '../containers/LaunchScreenContainer'
import HomeMainNavigator from './HomeMainNavigator'
import { ToastMessage } from '../common/ToastMessage'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const [isCheckedApp, setIsCheckedApp] = useState(false)
  if (!isCheckedApp) return <LaunchScreenContainer setIsCheckedApp={setIsCheckedApp} />
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
        <Stack.Screen name="HomeMainNavigator" component={HomeMainNavigator} />
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  )
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginNavigator from './LoginNavigator'
import LaunchScreenContainer from '../containers/LaunchScreenContainer'
import HomeMainNavigator from './HomeMainNavigator'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LaunchScreenContainer"
          component={LaunchScreenContainer}
        />
        <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
        <Stack.Screen name="HomeMainNavigator" component={HomeMainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

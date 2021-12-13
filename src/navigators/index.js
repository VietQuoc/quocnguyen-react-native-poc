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
import { listenAuth } from '../services/Firebase/FirebaseAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setAppUser } from '../store/actions'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.app.user)
  const [isCheckedApp, setIsCheckedApp] = useState(false)
  if (!isCheckedApp) {
    return <LaunchScreenContainer setIsCheckedApp={setIsCheckedApp} />
  }
  listenAuth((receiveUser) => {
    console.log(receiveUser)
    dispatch(setAppUser(receiveUser))
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="HomeContainer" component={HomeContainer} />
            <Stack.Screen
              name="SettingContainer"
              component={SettingContainer}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginContainer"
              component={LoginContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterContainer"
              component={RegisterContainer}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
      <ToastMessage />
    </NavigationContainer>
  )
}

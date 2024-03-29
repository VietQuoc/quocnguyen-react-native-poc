import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Root as MessageRoot } from 'react-native-popup-confirm-toast'
import RNBootSplash from 'react-native-bootsplash'
import RootNavigator from './navigators'
import { store, persistor } from './store'
import { SingletonHooksContainer } from 'react-singleton-hook'
import StatusBar from './common/component/StatusBar'
import ActivityScreen from './components/ActivityScreen'

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SingletonHooksContainer />
          <StatusBar />
          <MessageRoot>
            <RootNavigator />
          </MessageRoot>
          <ActivityScreen />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

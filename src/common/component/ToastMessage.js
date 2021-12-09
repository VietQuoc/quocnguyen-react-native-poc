import React, { useEffect } from 'react'
import Toast, { BaseToast } from 'react-native-toast-message'
import Icon from 'react-native-vector-icons/Feather'
import { View, StyleSheet } from 'react-native'
import { useNetInfo } from '@react-native-community/netinfo'
import { useTheme } from '../../themes'

export function ToastMessage() {
  const netInfo = useNetInfo()
  useEffect(() => {
    if (netInfo && netInfo.isConnected === false) {
      notifyErrorToastMessage('Bạn đang offline.')
    }
  }, [netInfo])
  const [colors] = useTheme()
  const toastConfig = {
    error: ({ props, ...rest }) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftColor: colors.error,
          backgroundColor: colors.background,
        }}
        contentContainerStyle={styles.contentContainerStyle}
        text1Style={[styles.text1Style, { color: colors.text }]}
        renderLeadingIcon={() => (
          <View style={styles.iconContainer}>
            <Icon name="wifi-off" size={20} color={colors.text} />
          </View>
        )}
      />
    ),
  }
  return <Toast config={toastConfig} />
}

function notifyErrorToastMessage(title, msg) {
  Toast.show({
    type: 'error',
    text1: title,
    text2: msg,
    position: 'bottom',
  })
}

const styles = StyleSheet.create({
  contentContainerStyle: { paddingHorizontal: 15 },
  text1Style: {
    fontSize: 15,
    fontWeight: '400',
  },
  iconContainer: { justifyContent: 'center', marginLeft: 10 },
})

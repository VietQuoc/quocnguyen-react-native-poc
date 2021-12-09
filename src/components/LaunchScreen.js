import { useTheme, Dimensions } from '../themes'
import React from 'react'
import { View, ActivityIndicator, StyleSheet, Image, Text } from 'react-native'
import { useLanguage } from '../config/Strings'

export default function LaunchScreenContainer() {
  const styles = useStyle()
  const Strings = useLanguage()
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/POCTransparent.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.activityContainer}>
        <ActivityIndicator color={styles.activityColor} size="large" />
        <Text style={styles.text}>{Strings.dataAreBeingUpdated}!</Text>
      </View>
    </View>
  )
}

function useStyle() {
  const [colors] = useTheme()
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    activityColor: colors.primary,
    text: { marginTop: 20, color: colors.text, fontSize: Dimensions.fontSize },
    activityContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
    image: {
      width: Dimensions.openAppLogo,
      height: Dimensions.openAppLogo,
      tintColor: colors.text,
    },
  })
}

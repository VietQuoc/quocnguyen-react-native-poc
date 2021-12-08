import useTheme from '../themes'
import React from 'react'
import { View, ActivityIndicator, StyleSheet, Image, Text } from 'react-native'

export default function LaunchScreenContainer() {
  return <LaunchScreenLoading />
}

function LaunchScreenLoading() {
  const styles = useStyle()
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
        <Text style={styles.text}>Dữ Liệu Đang Được Cập Nhật!</Text>
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
    text: { marginTop: 20, color: colors.text },
    activityContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
    image: { width: 100, height: 100, tintColor: colors.text },
  })
}
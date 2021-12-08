import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useTheme, Dimensions } from '../../themes'

export default function LoginHeader() {
  const styles = useStyle()
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/GrooveLogo.png')}
      />
    </View>
  )
}

function useStyle() {
  const [colors] = useTheme()
  return StyleSheet.create({
    imageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    image: {
      width: Dimensions.loginAppLogoWidth,
      height: Dimensions.loginAppLogoWidth,
      resizeMode: 'contain',
      tintColor: colors.text,
    },
  })
}

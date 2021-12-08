import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeID, setLanguageID } from '../../store/actions/index'
import { useTheme, Dimensions } from '../../themes'

export default function LoginScreen({ navigateToRegisterScreen }) {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const languageID = useSelector((state) => state.app.languageID)
  const styles = useStyle()
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
    dispatch(setLanguageID(Math.abs(languageID - 1)))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text style={styles.text}>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegisterScreen}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
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
    text: { color: colors.text, fontSize: Dimensions.fontSize },
    activityContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: { flex: 2, justifyContent: 'center', alignItems: 'center' },
    image: { width: 100, height: 100, tintColor: colors.text },
  })
}

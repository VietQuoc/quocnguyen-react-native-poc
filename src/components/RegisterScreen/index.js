import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setThemeID } from '../../store/actions/index'
import { useTheme } from '../../themes'

export default function RegisterScreen() {
  const dispatch = useDispatch()
  const themeID = useSelector((state) => state.app.themeID)
  const styles = useStyle()
  function changeTheme() {
    dispatch(setThemeID(Math.abs(themeID - 1)))
  }
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text>Change Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeTheme()}>
        <Text>Change Theme</Text>
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

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useLanguage } from '../../config/Strings'
import { Dimensions, useTheme } from '../../themes'

export default function RegisterHeader({ navigation }) {
  const styles = useStyle()
  const language = useLanguage()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-left"
          size={Dimensions.fontSize}
          color={styles.iconColor}
        />
        <Text style={styles.headerLeftText}>{language.back}</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{language.createNewAccount}</Text>
      </View>
    </View>
  )
}
function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {
      height: Dimensions.headerHeight,
      borderBottomWidth: 0.5,
      borderColor: colors.border,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerLeft: {
      width: Dimensions.headerBackWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    headerLeftText: {
      fontSize: Dimensions.fontSize,
      color: colors.backButton,
    },
    iconColor: colors.backButton,
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      paddingRight: Dimensions.headerBackWidth,
    },
    title: {
      fontSize: Dimensions.fontSizeLarge,
      color: colors.text,
      fontWeight: 'bold',
    },
  })
}

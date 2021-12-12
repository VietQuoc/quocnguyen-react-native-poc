import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Dimensions, useTheme } from '../../themes'
import { useLanguage } from '../../config/Strings'

export default function RegisterValidatorMessage({
  emailError,
  passwordError,
  retypeError,
}) {
  const styles = useStyle()
  const language = useLanguage()
  return (
    <View style={styles.container}>
      {emailError && <Text style={styles.text}>{language.emailError}</Text>}
      {passwordError && (
        <Text style={styles.text}>{language.passwordError}</Text>
      )}
      {retypeError && <Text style={styles.text}>{language.retypeError}</Text>}
    </View>
  )
}

RegisterValidatorMessage.propTypes = {
  emailError: PropTypes.bool,
  passwordError: PropTypes.bool,
  retypeError: PropTypes.bool,
}
RegisterValidatorMessage.defaultProps = {
  emailError: false,
  passwordError: false,
  retypeError: false,
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {},
    text: {
      color: colors.error,
      fontSize: Dimensions.fontSizeSmall,
      fontStyle: 'italic',
      paddingHorizontal: 30,
    },
  })
}

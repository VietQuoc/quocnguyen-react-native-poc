import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme, Dimensions } from '../../themes'

export default function AppButton({ style, onPress, title, disabled }) {
  const styles = useStyle()
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
AppButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}
AppButton.defaultProps = {
  style: {},
  disabled: false,
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.button,
      borderRadius: Dimensions.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.buttonWidth,
      paddingVertical: 10,
    },
    text: {
      fontSize: Dimensions.fontSize,
      color: colors.text,
    },
    disabled: { opacity: 0.3 },
  })
}

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme, Dimensions } from '../../themes'

export default function AppButton({ style, onPress, title }) {
  const styles = useStyle()
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
AppButton.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
AppButton.defaultProps = {
  style: {},
}

function useStyle() {
  const [colors] = useTheme()
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
  })
}

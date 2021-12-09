import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useTheme, Dimensions } from '../../themes'

export default function LinkText({ style, onPress, title }) {
  const styles = useStyle()
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
LinkText.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
LinkText.defaultProps = {
  style: {},
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {
      padding: 10,
    },
    text: {
      fontSize: Dimensions.fontSizeSmall,
      color: colors.text,
    },
  })
}

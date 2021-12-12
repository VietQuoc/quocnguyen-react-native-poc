import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { useTheme, Dimensions } from '../../themes'
import Icon from 'react-native-vector-icons/Feather'

export default function TextBox({
  style,
  onChangeText,
  placeholder,
  iconName,
  passwordControl,
  innerRef,
  ...props
}) {
  const styles = useStyle()
  const [isShowText, setIsShowText] = useState(false)
  return (
    <View style={[styles.container, style]}>
      <Icon
        name={iconName}
        size={Dimensions.fontSize}
        color={styles.iconColor}
      />
      <TextInput
        ref={innerRef}
        autoCorrect={false}
        maxLength={80}
        style={styles.inputTextBox}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholderTextColor}
        secureTextEntry={passwordControl && !isShowText}
        {...props}
      />
      {passwordControl ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setIsShowText(!isShowText)}>
          <Icon
            name={isShowText ? 'eye' : 'eye-off'}
            size={Dimensions.fontSize}
            color={styles.iconColor}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
TextBox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  iconName: PropTypes.string,
  passwordControl: PropTypes.bool, // true if it is password textbox
}
TextBox.defaultProps = {
  style: {},
  placeholder: '',
  iconName: 'user',
  passwordControl: false,
  onChangeText: () => {},
}

function useStyle() {
  const colors = useTheme()
  return StyleSheet.create({
    container: {
      borderBottomWidth: 1.5,
      borderColor: colors.button,
      flexDirection: 'row',
      alignItems: 'center',
      width: Dimensions.textBoxWidth,
    },
    inputTextBox: {
      flex: 1,
      padding: 10,
      fontSize: Dimensions.fontSize,
      color: colors.text,
    },
    iconColor: colors.text,
    placeholderTextColor: colors.placeholder,
    iconContainer: { padding: 5 },
  })
}

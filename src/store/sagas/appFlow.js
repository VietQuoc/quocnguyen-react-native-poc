import { put, take, select } from 'redux-saga/effects'
import { Popup } from 'react-native-popup-confirm-toast'
import PropTypes from 'prop-types'
import { reset } from '../actions'
import { getTheme } from '../../themes'
import { getLanguage } from '../../config/Strings'
import { getFirebaseAppMessage } from '../../common/function/handleAppMessage'

export function* resetAppFlow() {
  while (true) {
    yield take('persist/REHYDRATE')
    yield put({ type: reset().type })
  }
}

export function* showAppMessageFlow(result, apiType, callback, retryCallback) {
  const themeID = select((state) => state.app.themeID)
  const languageID = select((state) => state.app.languageID)
  const colors = getTheme(themeID)
  const language = getLanguage(languageID)
  const message = getFirebaseAppMessage(apiType, result, language)
  try {
    console.log('vào đây: ', result)
    if (result) {
      switch (result.type) {
        case 0: // pass
          Popup.show({
            type: 'success',
            title: message.title,
            textBody: message.textBody,
            buttonText: language.ok,
            okButtonStyle: { backgroundColor: colors.primary },
            callback: () => {
              Popup.hide()
              if (callback) {
                callback()
              }
            },
          })
          break
        case 1: // fail
          if (result.message.includes('network error')) {
            Popup.show({
              type: 'confirm',
              title: message.title,
              textBody: message.textBody,
              buttonText: language.retry,
              confirmText: language.cancel,
              okButtonStyle: { backgroundColor: colors.primary },
              callback: () => {
                Popup.hide()
                if (retryCallback) {
                  setTimeout(() => {
                    retryCallback()
                  }, 1000)
                }
              },
            })
          } else {
            Popup.show({
              type: 'warning',
              title: message.title,
              textBody: message.textBody,
              buttonText: language.ok,
              okButtonStyle: { backgroundColor: colors.primary },
              callback: () => {
                Popup.hide()
              },
            })
          }
          break
        case 2: // error
          Popup.show({
            type: 'danger',
            title: message.title,
            textBody: message.textBody,
            buttonText: language.ok,
            okButtonStyle: { backgroundColor: colors.primary },
            callback: () => {
              Popup.hide()
            },
          })
          break
        default:
          Popup.show({
            type: 'danger',
            title: message.title,
            textBody: message.textBody,
            buttonText: language.ok,
            okButtonStyle: { backgroundColor: colors.primary },
            callback: () => {
              Popup.hide()
            },
          })
          break
      }
    }
  } catch (error) {
    Popup.show({
      type: 'danger',
      title: message.title,
      textBody: message.textBody,
      buttonText: language.ok,
      okButtonStyle: { backgroundColor: colors.primary },
      callback: () => {
        Popup.hide()
      },
    })
  }
}

showAppMessageFlow.propTypes = {
  apiType: PropTypes.number.isRequired, // 0: register, 1: logout
  result: PropTypes.any.isRequired,
  callback: PropTypes.func,
}

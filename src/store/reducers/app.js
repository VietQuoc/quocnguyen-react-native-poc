import { handleActions } from 'redux-actions'
import initState from '../initState'
import {
  setAppMessage,
  setIsProcessing,
  reset,
  setThemeID,
  setLanguageID,
} from '../actions'

export default handleActions(
  {
    [setAppMessage]: (state, { payload: { message } }) => ({
      ...state,
      message,
    }),
    [setIsProcessing]: (state, { payload: { isProcessing } }) => ({
      ...state,
      isProcessing,
    }),
    [reset]: (state) => ({
      ...state,
      ...initState.app,
    }),
    [setThemeID]: (state, { payload: { themeID } }) => ({
      ...state,
      themeID,
    }),
    [setLanguageID]: (state, { payload: { languageID } }) => ({
      ...state,
      languageID,
    }),
  },
  initState.app,
)

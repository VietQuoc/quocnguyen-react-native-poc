import { handleActions } from 'redux-actions'
import initState from '../initState'
import {
  setIsProcessing,
  reset,
  setThemeID,
  setLanguageID,
  setAppUser,
} from '../actions'

export default handleActions(
  {
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
    [setAppUser]: (state, { payload: { user } }) => ({
      ...state,
      user,
    }),
  },
  initState.app,
)

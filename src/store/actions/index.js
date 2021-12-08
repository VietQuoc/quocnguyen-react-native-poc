import { createActions } from 'redux-actions'

const { setAppMessage, setIsProcessing, reset, setThemeID } = createActions(
  {
    SET_APP_MESSAGE: (appMessage) => ({ appMessage }),
    SET_IS_PROCESSING: (isProcessing) => ({ isProcessing }),
    RESET: () => ({}),
    SET_THEME_I_D: (themeID) => ({ themeID }),
  },
  {
    prefix: 'app',
  },
)

export { setAppMessage, setIsProcessing, reset, setThemeID }

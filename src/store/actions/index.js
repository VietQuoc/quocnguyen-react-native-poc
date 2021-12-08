import { createActions } from 'redux-actions'

const { setAppMessage, setIsProcessing, reset, setThemeID, setLanguageID } =
  createActions(
    {
      SET_APP_MESSAGE: (appMessage) => ({ appMessage }),
      SET_IS_PROCESSING: (isProcessing) => ({ isProcessing }),
      RESET: () => ({}),
      SET_THEME_I_D: (themeID) => ({ themeID }),
      SET_LANGUAGE_I_D: (languageID) => ({ languageID }),
    },
    {
      prefix: 'app',
    },
  )

export { setAppMessage, setIsProcessing, reset, setThemeID, setLanguageID }

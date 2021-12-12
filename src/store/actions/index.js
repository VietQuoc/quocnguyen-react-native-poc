import { createActions } from 'redux-actions'

const {
  setAppMessage,
  setIsProcessing,
  reset,
  setThemeID,
  setLanguageID,
  setAppUser,
} = createActions(
  {
    SET_APP_MESSAGE: [
      (appMessage) => ({ appMessage }),
      (appMessage, callback) => ({ callback }),
    ] /*
    {
      // app message show to inform, error
      type: 0, // 0: inform, 1: error
      content: {
        title: '',
        message: '',
      },
      callBack: '', // function to call
    } */,
    SET_IS_PROCESSING: (isProcessing) => ({ isProcessing }),
    RESET: () => ({}),
    SET_THEME_I_D: (themeID) => ({ themeID }),
    SET_LANGUAGE_I_D: (languageID) => ({ languageID }),
    SET_APP_USER: (user) => ({ user }),
  },
  {
    prefix: 'app',
  },
)

export {
  setAppMessage,
  setIsProcessing,
  reset,
  setThemeID,
  setLanguageID,
  setAppUser,
}

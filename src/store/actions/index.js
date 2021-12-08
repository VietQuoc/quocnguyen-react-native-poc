import { createActions } from 'redux-actions'

const { setAppMessage, setIsProcessing, reset } = createActions(
  {
    SET_APP_MESSAGE: (appMessage) => ({ appMessage }),
    SET_IS_PROCESSING: (isProcessing) => ({ isProcessing }),
    RESET: () => ({}),
  },
  {
    prefix: 'app',
  },
)

export { setAppMessage, setIsProcessing, reset }

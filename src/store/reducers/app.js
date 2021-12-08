import { handleActions } from 'redux-actions'
import initState from '../initState'
import { setAppMessage, setIsProcessing, reset } from '../actions'

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
  },
  initState.app,
)

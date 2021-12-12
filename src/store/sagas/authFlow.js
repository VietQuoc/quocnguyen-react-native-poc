import { call, takeLatest, put } from 'redux-saga/effects'
import {
  loginWithEmailAndPassword,
  logout,
  registerNewAccount,
} from '../../services/Firebase/FirebaseAuth'
import { setIsProcessing } from '../actions'
import {
  loginWithFirebase,
  singOutOnFirebase,
  registerWithFirebase,
} from '../actions/auth'
import { showAppMessageFlow } from './appFlow'

function* registerFirebaseFunction(email, password) {
  try {
    const response = yield registerNewAccount(email, password)
    return response
  } catch (error) {
    return error
  }
}

function* registerFirebaseAccountFlow(request) {
  const { email, password } = request.payload
  yield put(setIsProcessing(true))
  const result = yield call(registerFirebaseFunction, email, password)
  yield put(setIsProcessing(false))
  const { callback, retryCallback } = request.meta
  yield call(
    showAppMessageFlow,
    result,
    0,
    () => callback(result),
    retryCallback,
  )
}

export function* watchRegisterFirebaseAccount() {
  yield takeLatest(registerWithFirebase().type, registerFirebaseAccountFlow)
}

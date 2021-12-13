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
    () => {
      if (callback) {
        callback(result)
      }
    },
    retryCallback,
  )
}

export function* watchRegisterFirebaseAccount() {
  yield takeLatest(registerWithFirebase().type, registerFirebaseAccountFlow)
}

function* loginFirebaseFunction(email, password) {
  try {
    const response = yield loginWithEmailAndPassword(email, password)
    return response
  } catch (error) {
    return error
  }
}

function* loginFirebaseAccountFlow(request) {
  const { email, password } = request.payload
  yield put(setIsProcessing(true))
  const result = yield call(loginFirebaseFunction, email, password)
  yield put(setIsProcessing(false))
  const { callback, retryCallback } = request.meta
  if (result && result.type === 0) {
    if (callback) {
      callback(result)
    }
  } else {
    yield call(
      showAppMessageFlow,
      result,
      1,
      () => {
        if (callback) {
          callback(result)
        }
      },
      retryCallback,
    )
  }
}

export function* watchLoginFirebaseAccount() {
  yield takeLatest(loginWithFirebase().type, loginFirebaseAccountFlow)
}

function* logoutFirebaseAccountFlow(request) {
  yield put(setIsProcessing(true))
  const result = yield call(logout)
  console.log(result)
  yield put(setIsProcessing(false))
  const { callback } = request.meta
  if (callback) {
    callback()
  }
}

export function* watchLogoutFirebaseAccount() {
  yield takeLatest(singOutOnFirebase().type, logoutFirebaseAccountFlow)
}

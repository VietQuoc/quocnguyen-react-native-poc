import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
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

function* registerFirebaseFunction(email, password) {
  try {
    const response = yield registerNewAccount(email, password)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

function* registerFirebaseAccountFlow(request) {
  const { email, password } = request.payload
  yield put(setIsProcessing(true))
  const result = yield call(registerFirebaseFunction, email, password)
  console.log('result: ', result)
  yield put(setIsProcessing(false))
  const { callback } = request.meta
  if (callback) {
    callback(result)
  }
}

export function* watchRegisterFirebaseAccount() {
  yield takeEvery(registerWithFirebase().type, registerFirebaseAccountFlow)
}

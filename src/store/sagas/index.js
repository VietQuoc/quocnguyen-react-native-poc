import { fork } from 'redux-saga/effects'
import { resetAppFlow } from './appFlow'
import { watchRegisterFirebaseAccount } from './authFlow'

// Root saga
export default function* root() {
  yield fork(resetAppFlow)
  yield fork(watchRegisterFirebaseAccount)
}

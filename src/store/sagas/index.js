import { fork } from 'redux-saga/effects'
import { resetAppFlow } from './appFlow'
import {
  watchLoginFirebaseAccount,
  watchLogoutFirebaseAccount,
  watchRegisterFirebaseAccount,
} from './authFlow'

// Root saga
export default function* root() {
  yield fork(resetAppFlow)
  yield fork(watchRegisterFirebaseAccount)
  yield fork(watchLoginFirebaseAccount)
  yield fork(watchLogoutFirebaseAccount)
}

import { fork } from 'redux-saga/effects'
import { resetAppFlow } from './appFlow'

// Root saga
export default function* root() {
  yield fork(resetAppFlow)
}

import { put, take } from 'redux-saga/effects'
import { reset } from '../actions'

export function* resetAppFlow() {
  while (true) {
    yield take('persist/REHYDRATE')
    yield put({ type: reset().type })
  }
}

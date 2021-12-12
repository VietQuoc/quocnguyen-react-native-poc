import { createActions } from 'redux-actions'

const { registerWithFirebase, loginWithFirebase, singOutOnFirebase } =
  createActions(
    {
      registerWithFirebase: [
        (email, password) => ({ email, password }),
        (email, password, callback, retryCallback) => ({
          callback,
          retryCallback,
        }),
      ],
      loginWithFirebase: [
        (email, password) => ({ email, password }),
        (email, password, callback) => ({ callback }),
      ],
      singOutOnFirebase: [() => ({}), (callback) => ({ callback })],
    },
    {
      prefix: 'auth',
    },
  )

export { registerWithFirebase, loginWithFirebase, singOutOnFirebase }

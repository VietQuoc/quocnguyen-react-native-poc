import auth from '@react-native-firebase/auth'
import { handleFirebaseAuthResponse } from '../../common/function/handleResponse'

export function listenAuth(callback) {
  auth().onAuthStateChanged((user) => onAuthStateChanged(user, callback))
}

function onAuthStateChanged(user, callback) {
  if (callback) {
    callback(user)
  }
}

export async function registerNewAccount(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(handleFirebaseAuthResponse(true, result))
      })
      .catch((error) => {
        reject(handleFirebaseAuthResponse(false, error))
      })
  })
}

export async function loginWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(handleFirebaseAuthResponse(true, result))
      })
      .catch((error) => {
        reject(handleFirebaseAuthResponse(false, error))
      })
  })
}

export async function logout() {
  const result = await auth().signOut()
  return result
}

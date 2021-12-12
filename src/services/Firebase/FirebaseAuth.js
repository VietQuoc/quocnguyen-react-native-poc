import auth from '@react-native-firebase/auth'
import { handleFirebaseAuthResponse } from '../../common/function/handleResponse'

export function listenAuth() {
  auth().onAuthStateChanged(onAuthStateChanged)
}

function onAuthStateChanged(user) {
  console.log('onAuthStateChanged: ', user)
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
  const result = await auth().signInWithEmailAndPassword(email, password)
  return result
}

export async function logout() {
  const result = await auth().signOut()
  return result
}

import auth from '@react-native-firebase/auth'

export function listenAuth() {
  auth().onAuthStateChanged(onAuthStateChanged)
}

function onAuthStateChanged(user) {
  console.log(user)
}

export async function registerNewAccount(email, password) {
  const result = await auth().createUserWithEmailAndPassword(email, password)
  console.log(result)
  // .then(() => {
  //   console.log('User account created & signed in!')
  // })
  // .catch((error) => {
  //   if (error.code === 'auth/email-already-in-use') {
  //     console.log('That email address is already in use!')
  //   }

  //   if (error.code === 'auth/invalid-email') {
  //     console.log('That email address is invalid!')
  //   }

  //   console.error(error)
  // })
}

export async function loginWithEmailAndPassword(email, password) {
  const result = await auth().signInWithEmailAndPassword(email, password)
  console.log(result)
}

export async function logout() {
  const result = await auth().signOut()
  console.log(result)
}

function validateEmail(email) {
  if (!(typeof email === 'string' || email instanceof String)) {
    return false
  }
  const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (email.match(validator)) {
    return true
  }
  return false
}

function validatePassword(password) {
  if (!(typeof password === 'string' || password instanceof String)) {
    return false
  }
  //a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  var validator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  if (password.match(validator)) {
    return true
  } else {
    return false
  }
}

function validateEqualString(input1, input2) {
  if (
    !(
      (typeof input1 === 'string' || input1 instanceof String) &&
      (typeof input2 === 'string' || input2 instanceof String)
    )
  ) {
    return false
  }
  if (input1 === input2) {
    return true
  }
  return false
}

export { validateEmail, validatePassword, validateEqualString }

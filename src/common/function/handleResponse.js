import PropTypes from 'prop-types'

export function handleFirebaseAuthResponse(pass, result) {
  if (pass) {
    return { pass, result }
  } else {
    if (result && result.message) {
      return {
        pass: false,
        message: result.message.replace(/\[(.*?)\]/g, ''),
      }
    } else {
      return { pass: false }
    }
  }
}

handleFirebaseAuthResponse.propTypes = {
  pass: PropTypes.bool.isRequired,
  result: PropTypes.any.isRequired,
}

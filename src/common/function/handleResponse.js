import PropTypes from 'prop-types'

export function handleFirebaseAuthResponse(pass, result) {
  if (pass) {
    return { result, type: 0 }
  } else {
    if (result && result.message) {
      return {
        message: result.message.replace(/\[(.*?)\]/g, ''),
        type: 1,
      }
    } else {
      return { type: 2 }
    }
  }
} // return { result: data, message: text, type= 0: pass, 1: fail, 2: unknow error}

handleFirebaseAuthResponse.propTypes = {
  pass: PropTypes.bool.isRequired,
  result: PropTypes.any.isRequired,
}

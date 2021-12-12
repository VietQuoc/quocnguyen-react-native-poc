import PropTypes from 'prop-types'

export function getFirebaseAppMessage(type, result, language) {
  if (!language) {
    return { title: 'Error', textBody: 'Unknow Error' }
  }
  if (result) {
    switch (result.type) {
      case 0:
        switch (type) {
          case 0:
            return {
              title: language.success,
              textBody: language.registerSuccessPleaseLogin,
            }
          case 1:
            return { title: language.success, textBody: language.logoutSuccess }
          default:
            return {
              title: language.success,
              textBody: language.registerSuccessPleaseLogin,
            }
        }
      case 1:
        return {
          title: language.failure,
          textBody: result.message,
        }
      case 2:
        return { title: language.failure, textBody: language.anUnknowError }
      default:
        return { title: language.failure, textBody: language.anUnknowError }
    }
  }
}

getFirebaseAppMessage.propTypes = {
  type: PropTypes.number.isRequired, // 0: register, 1: logout
  result: PropTypes.any.isRequired,
  language: PropTypes.object.isRequired,
}

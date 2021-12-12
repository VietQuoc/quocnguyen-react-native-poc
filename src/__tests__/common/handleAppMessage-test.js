import each from 'jest-each'
import { getFirebaseAppMessage } from '../../common/function/handleAppMessage'

const correctLanguage = {
  success: 'Success',
  registerSuccessPleaseLogin: 'Registered successfully, please login!',
  logoutSuccess: 'Successfully Logged Out',
  failure: 'Failure',
  anUnknowError: 'An Unknow Error',
}

each([
  [
    0,
    { type: 0, result: { a: 1 } },
    correctLanguage,
    {
      title: correctLanguage.success,
      textBody: correctLanguage.registerSuccessPleaseLogin,
    },
  ],
  [
    0,
    { type: 1, message: 'false' },
    correctLanguage,
    { title: correctLanguage.failure, textBody: 'false' },
  ],
  [
    0,
    { type: 1, message: 'false' },
    correctLanguage,
    { title: correctLanguage.failure, textBody: 'false' },
  ],
  [
    0,
    { type: 2 },
    correctLanguage,
    { title: correctLanguage.failure, textBody: correctLanguage.anUnknowError },
  ],
  [
    0,
    { type: 1, message: 'false' },
    null,
    { title: 'Error', textBody: 'Unknow Error' },
  ],
  [
    0,
    { type: 0, result: { a: 1 } },
    correctLanguage,
    {
      title: correctLanguage.success,
      textBody: correctLanguage.registerSuccessPleaseLogin,
    },
  ],
  [null, null, null, { title: 'Error', textBody: 'Unknow Error' }],
  [
    1,
    { type: 0, result: { a: 1 } },
    correctLanguage,
    {
      title: correctLanguage.success,
      textBody: correctLanguage.logoutSuccess,
    },
  ],
  [
    1,
    { type: 1, message: 'false' },
    correctLanguage,
    {
      title: correctLanguage.failure,
      textBody: 'false',
    },
  ],
]).test(
  'validate getFirebaseAppMessage function should work correctly with multi input',
  (type, result, language, validate) => {
    const message = getFirebaseAppMessage(type, result, language)
    expect(message).toEqual(validate)
  },
)

import each from 'jest-each'
import { handleFirebaseAuthResponse } from '../../common/function/handleResponse'

each([
  [
    true,
    {
      additionalUserInfo: {
        isNewUser: true,
        profile: null,
        providerId: 'password',
        username: null,
      },
      user: {
        displayName: null,
        email: 'quoc1@xxx.xx',
        emailVerified: false,
        isAnonymous: false,
        metadata: [Object],
        phoneNumber: null,
        photoURL: null,
        providerData: [Array],
        providerId: 'firebase',
        refreshToken:
          'AFxQ4_qDTp1P2RcEs9fsWREjJZcU9oZIe_bdVLF6h-ImP2p7pUj33lmbusPMOcZFzIkmlIS3d--VBYodvmsX78G9Bu1PBnpHAZetMjU0jXqAICgovA6mzrhZFykGQ-FeNwQYEOdqOHEci3B7fGjaCt3jJv5J0o72OLQKQoES_HvvybJxSC7etPk',
        tenantId: null,
        uid: 'zoM0oAe4CgP5G4jnAtZdbtDwm9t1',
      },
    },
    {
      type: 0,
      result: {
        additionalUserInfo: {
          isNewUser: true,
          profile: null,
          providerId: 'password',
          username: null,
        },
        user: {
          displayName: null,
          email: 'quoc1@xxx.xx',
          emailVerified: false,
          isAnonymous: false,
          metadata: [Object],
          phoneNumber: null,
          photoURL: null,
          providerData: [Array],
          providerId: 'firebase',
          refreshToken:
            'AFxQ4_qDTp1P2RcEs9fsWREjJZcU9oZIe_bdVLF6h-ImP2p7pUj33lmbusPMOcZFzIkmlIS3d--VBYodvmsX78G9Bu1PBnpHAZetMjU0jXqAICgovA6mzrhZFykGQ-FeNwQYEOdqOHEci3B7fGjaCt3jJv5J0o72OLQKQoES_HvvybJxSC7etPk',
          tenantId: null,
          uid: 'zoM0oAe4CgP5G4jnAtZdbtDwm9t1',
        },
      },
    },
  ],
  [
    false,
    {
      additionalUserInfo: {
        isNewUser: true,
        profile: null,
        providerId: 'password',
        username: null,
      },
      user: {
        displayName: null,
        email: 'quoc1@xxx.xx',
        emailVerified: false,
        isAnonymous: false,
        metadata: [Object],
        phoneNumber: null,
        photoURL: null,
        providerData: [Array],
        providerId: 'firebase',
        refreshToken:
          'AFxQ4_qDTp1P2RcEs9fsWREjJZcU9oZIe_bdVLF6h-ImP2p7pUj33lmbusPMOcZFzIkmlIS3d--VBYodvmsX78G9Bu1PBnpHAZetMjU0jXqAICgovA6mzrhZFykGQ-FeNwQYEOdqOHEci3B7fGjaCt3jJv5J0o72OLQKQoES_HvvybJxSC7etPk',
        tenantId: null,
        uid: 'zoM0oAe4CgP5G4jnAtZdbtDwm9t1',
      },
    },
    { type: 2 },
  ],
  [
    false,
    {
      code: 'auth/email-already-in-use',
      message:
        '[auth/email-already-in-use] The email address is already in use by another account.',
    },
    {
      type: 1,
      message: ' The email address is already in use by another account.',
    },
  ],
  [
    true,
    {
      code: 'auth/email-already-in-use',
      message:
        '[auth/email-already-in-use] The email address is already in use by another account.',
    },
    {
      type: 0,
      result: {
        code: 'auth/email-already-in-use',
        message:
          '[auth/email-already-in-use] The email address is already in use by another account.',
      },
    },
  ],
  [null, null, { type: 2 }],
]).test(
  'validate handleFirebaseAuthResponse function should work correctly with multi input',
  (pass, result, validate) => {
    const response = handleFirebaseAuthResponse(pass, result)
    expect(response).toEqual(validate)
  },
)

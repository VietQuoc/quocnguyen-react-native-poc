import each from 'jest-each'
import {
  validateEmail,
  validateEqualString,
  validatePassword,
} from '../../common/function/validator'

each([
  [null, false],
  ['test@mail.com', true],
  ['test@xxx.xx', true],
  ['test@', false],
  ['@mail.com', false],
  ['', false],
  ['test@xxx', false],
  [1, false],
  [{}, false],
  [[], false],
  [{ 1: 'a' }, false],
  [[1, 'a'], false],
]).test(
  'validate Email function should work correctly with multi input',
  (email, validate) => {
    const result = validateEmail(email)
    expect(result).toEqual(validate)
  },
)

each([
  [null, false],
  ['Aa111111', true],
  ['aA111111', true],
  ['Aa1111', true],
  ['1Aa11111', true],
  ['Aa111111111111111111', true],
  ['Aa111', false],
  ['Aa1111111111111111111', false],
  ['aa111111', false],
  ['Aa11^$!@#$%^&*()111', true],
  [1, false],
  [{}, false],
  [[], false],
  [{ 1: 'a' }, false],
  [[1, 'a'], false],
]).test(
  'validate Password function should work correctly with multi input',
  (password, validate) => {
    const result = validatePassword(password)
    expect(result).toEqual(validate)
  },
)

each([
  [null, null, false],
  [undefined, undefined, false],
  [1, null, false],
  [null, 1, false],
  ['Aa111111', null, false],
  [null, 'Aa111111', false],
  ['Aa111111', 'Aa111111', true],
  ['Aa111111111111111111', 'Aa111111111111111111', true],
  [1, '1', false],
  ['1', 1, false],
  [1, 1, false],
  [12, '1', false],
  [{}, {}, false],
  [[], [], false],
  [{ a: 1 }, { a: 1 }, false],
  [[1, 2], [1, 2], false],
]).test(
  'validate Equal String function should work correctly with multi input',
  (input1, input2, validate) => {
    const result = validateEqualString(input1, input2)
    expect(result).toEqual(validate)
  },
)

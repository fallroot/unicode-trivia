import { toCp, toFlag, toRis } from '../src/unicode-trivia.js'

test('`toCp` is a shortcut for `String.prototype.codePointAt`', () => {
  const str = 'hello'
  expect(toCp(str)).toBe(str.codePointAt(0))
})

test('`toRis` should return RIS(Regional Indicator Symbol) from alphabet', () => {
  expect(toRis('a')).toBe('🇦')
  expect(toRis('A')).toBe('🇦')
  expect(toRis('z')).toBe('🇿')
  expect(toRis('Z')).toBe('🇿')
})

test('`toRis` should return empty string from non alphabet', () => {
  expect(toRis(1)).toBe('')
  expect(toRis('1')).toBe('')
})

test('`toFlag` should return emoji flag sequences from valid region codes', () => {
  expect(toFlag('kr')).toBe('🇰🇷')
  expect(toFlag('US')).toBe('🇺🇸')
  expect(toFlag('eu')).toBe('🇪🇺')
  expect(toFlag('UN')).toBe('🇺🇳')
})

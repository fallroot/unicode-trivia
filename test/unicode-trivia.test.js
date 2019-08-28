import { toClock, toCp, toFlag, toMoonPhase, toRis } from '../src/unicode-trivia.js'

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

test('`toClock` should return emoji clock face from `Date`', () => {
  expect(toClock(new Date('2008-09-05 01:00:00'))).toBe('🕐')
  expect(toClock(new Date('2008-09-05 13:00:00'))).toBe('🕐')
  expect(toClock(new Date('2008-09-05 00:00:00'))).toBe('🕛')
  expect(toClock(new Date('2008-09-05 24:00:00'))).toBe('🕛')
})

test('`toClock` should return emoji clock thirty face when minutes are greater than or equal to 30', () => {
  expect(toClock(new Date('2008-09-05 01:30:00'))).toBe('🕜')
  expect(toClock(new Date('2008-09-05 00:45:00'))).toBe('🕧')
})

test('`toMoonPhase` should return emoji moon phase from step number between 0 and 7', () => {
  expect(toMoonPhase(0)).toBe('🌑')
  expect(toMoonPhase(4)).toBe('🌕')
  expect(toMoonPhase(7)).toBe('🌘')
})

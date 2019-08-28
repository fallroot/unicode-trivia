function toClock (date) {
  const hours = date.getHours() % 12
  const half = date.getMinutes() >= 30

  if (hours === 0) {
    return String.fromCodePoint(half ? 0x1F567 : 0x1F55B)
  } else {
    return String.fromCodePoint((half ? 0x1F55C : 0x1F550) + hours - 1)
  }
}

function toCp (str) {
  return str.codePointAt(0)
}

function toFlag (code) {
  return Array.from(code).map(toRis).join('')
}

function toMoonPhase (step) {
  return String.fromCodePoint(0x1F311 + step)
}

function toRis (str) {
  if (typeof str !== 'string') return ''

  const cp = toCp(str.toUpperCase())

  if (cp < 65 || cp > 90) return ''

  return String.fromCodePoint(0x1F1E6 + cp - 65)
}

export {
  toClock,
  toCp,
  toFlag,
  toMoonPhase,
  toRis
}

function toCp (str) {
  return str.codePointAt(0)
}

function toFlag (code) {
  return Array.from(code).map(toRis).join('')
}

function toRis (str) {
  if (typeof str !== 'string') return ''

  const cp = toCp(str.toUpperCase())

  if (cp < 65 || cp > 90) return ''

  return String.fromCodePoint(0x1F1E6 + cp - 65)
}

export {
  toCp,
  toFlag,
  toRis
}

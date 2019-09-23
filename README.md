# Unicode Trivia

Miscellaneous codes about unicode & emoji

## Functions

### `toCp`

Shortcut for `String.prototype.codePointAt`

### `toClock`

Emoji clock face from `Date`

```js
toClock(new Date('2008-09-05 01:00:00')) // 🕐
toClock(new Date('2008-09-05 01:30:00')) // 🕜
```

### `toFlag`

Emoji flag sequences from valid region codes

```js
toFlag('kr') // 🇰🇷
toFlag('US') // 🇺🇸
toFlag('eu') // 🇪🇺
toFlag('UN') // 🇺🇳
```

### `toMoonPhase`

Emoji moon phase from step number between 0 and 7

```js
toMoonPhase(0) // 🌑
toMoonPhase(1) // 🌒
toMoonPhase(2) // 🌓
toMoonPhase(3) // 🌔
toMoonPhase(4) // 🌕
toMoonPhase(5) // 🌖
toMoonPhase(6) // 🌗
toMoonPhase(7) // 🌘
```

### `toRis`

RIS(Regional Indicator Symbol) from alphabet

```js
toRis('a') // 🇦
toRis('Z') // 🇿
```

## Licence

[MIT](https://github.com/fallroot/unicode-trivia/blob/master/LICENSE)

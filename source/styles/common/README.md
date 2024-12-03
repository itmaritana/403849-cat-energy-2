# Папка для общих стилей (не БЭМ-блоки)

_fonts.scss_
```scss
@font-face {

}
```

_variables.scss_
```scss
$color-basis: $basic-titile-color;
$color-accent: #ffffff;
```

_global.scss_
```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

body {
  margin: 0;
}
```

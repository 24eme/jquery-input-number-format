# Jquery input number format

Jquery plugin for Input Field Number to restrict entry to float or integer number and autoformat.

Demo page : http://24eme.fr/jquery-input-number-format/example.html

## Installation

Just include the javascript file :

```html
<script src="path/input-number-format.jquery.min.js" />
```

## Usage

```javascript
$('.input-float').inputNumberFormat();
```

## Options

| Name                          | Type          | Default value | Description                                             |
| ----------------- | ------------- | ------------- | ------------------------------------------------------- |
| decimal | Integer       | 2             | Number of decimal authorized                         |
| decimalAuto | Integer       | 2             | Number of decimal to add automatically on blur event |
| separator | String        | "."           | Separator to use                                        |
| separatorAuthorized  | Array (string)| [".", ","]    | Seperators authorized |

There are 2 differents ways to use options

* Javascript :

```javascript
$('.input-float').inputNumberFormat({ 'decimal': 4, 'decimalAuto': 4 });
```

* HTML with data attribute :

```html
<input class="input-float" type="text" data-decimal="4" data-decimal-auto="4" value="" />
```


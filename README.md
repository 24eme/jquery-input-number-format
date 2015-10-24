# Jquery input number format

Jquery plugin to restrict and format input number.

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

There are 2 differents ways to use options

* In Javascript :

```javascript
$('.input-float').inputNumberFormat({ 'decimal': 2 });
```

* In HTML with data :

```html
<input class="input-float" type="text" data-decimal="2"v alue="" />
```

### Available options

| Name                          | Type          | Default value | Description                                             |
| ----------------- | ------------- | ------------- | ------------------------------------------------------- |
| decimal | Integer       | 2             | Number of authorized decimal(s)                         |
| decimal_auto | Integer       | 2             | Number of decimal(s) to add automatically on blur event |
| decimal_separator | String        | "."           | Seperator to use                                        |
| decimal_separator_authorized  | Array (string)| [".", ","]    | Seperator(s) authorized |

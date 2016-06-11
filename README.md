# Allege

Make complex conditionals easier to read and write. Written in ES6 (ES2015) as a CommonJS module.

[![Build Status](https://travis-ci.org/brycehanscomb/allege.svg?branch=master)](https://travis-ci.org/brycehanscomb/allege)

## Introduction

Sometimes, `if` statements can get very complex. For example:

```js
if (foo.bar === 'value_a' || foo.bar === 'value_b' || foo.bar === 'value_c' || foo.bar === 'value_d' || foo.bar === 'value_e') {
    // do something
}
```

With Allege, you can simplify your `if` like so:

```js
if (allege(foo.bar).isAnyOf(
    'value_a', 
    'value_b', 
    'value_c', 
    'value_d',
    'value_e'
)) {
    // do something
}
```

## API & Methods

Allege exposes different functions based on what you're trying to compare. If you pass in one argument, you
can then call any of the **Single Input Methods**. However, if you pass in multiple arguments, you can then 
call any of the **Multiple Input Methods**.

Each of these commands are available as below:

### Single Input Commands

To use these methods, call Allege with just a single argument, like so: `allege(foo)`. Then, these methods 
will be available:

#### `bool` isAnyOf(possibility1, ..., possibilityN)

Determines whether `foo` is referentially equal (`===`) to **any** of the `possibility` items.

```js
allege(5).isAnyOf(1, 2, 3, 4, 5, 6);
// --> true

allege('hi').isAnyOf('hello', 'good morning', 'sup');
// --> false
```

#### `bool` isNoneOf(possibility1, ..., possibilityN)

Determines whether `foo` is referentially unequal (`!==`) to **all** of the `possibility` items.

```js
allege(5).isNoneOf(1, 2, 3, 4);
// --> true

allege(5).isNoneOf(1, 2, 3, 4, 5);
// --> false
```

#### `bool` isAllOf(possibility1, ..., possibilityN)

Determines whether `foo` is referentially equal (`===`) to **all** of the `possibility` items.

```js
allege(5).isAllOf(5, 5, 5);
// --> true

allege(5).isAllOf(5, 5, 4);
// --> false
```

### Multiple Input Commands

To use these methods, call Allege with more than one argument, like so: `allege(foo, bar, baz, quux)`. Then, these 
methods will be available:

#### `bool` areAll(possibility)

Determines whether all `input`s are referentially equal (`===`) to the `possibility` item.

```js
allege(5, 5, 5, 5).areAll(5);
// --> true

allege(5, 5, 5, 5).areAll(4);
// --> false
```

#### `bool` areAllNot(possibility)

Determines whether all `input`s are referentially unequal (`!==`) to the `possibility` item.

```js
allege(5, 5, 5, 5).areAllNot(4);
// --> true

allege(5, 5, 5, 5).areAllNot(5);
// --> false
```

## Installation

Grab this module from `npm` with the following command:

```js
npm install allege
```

## Versioning

This module follows SemVer.

## License

MIT. See the `LICENSE` file for more details.

## Testing

You can execute the existing test suite by running the following in your terminal:

```
npm install
npm test
```

## Building From Source

The files that reside in the `lib/` directory are transpiled from ES6 to ES5. The original source
files reside in the `src/` directory. These can be built with the following command:

```js
npm run transpile-to-es5
```
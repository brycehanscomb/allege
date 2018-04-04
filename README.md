# Allege

Make complex conditionals easier to read and write.

[![Build Status](https://travis-ci.org/brycehanscomb/allege.svg?branch=master)](https://travis-ci.org/brycehanscomb/allege)

## Introduction

Sometimes, `if` statements can get very complex. For example:

```typescript
if (foo.bar === 'value_a' || foo.bar === 'value_b' || foo.bar === 'value_c' || foo.bar === 'value_d' || foo.bar === 'value_e') {
    // do something
}
```

With Allege, you can simplify your `if` like so:

```typescript
if (allege.that(foo.bar).isIn(
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

Allege exposes different functions based on what you're trying to compare. 

### Single Input Commands

To use these methods, call `allege.that()` with just a single argument, 
like so: `allege.that(foo)`. Then, these methods will be available:

#### `isIn(possibility1, ..., possibilityN) -> boolean`

Determines whether `foo` is referentially equal (`===`) to **any** of the `possibility` items.

```js
allege.that(5).isIn(1, 2, 3, 4, 5, 6);
// --> true

allege.that('hi').isIn('hello', 'good morning', 'sup');
// --> false
```

#### `isNotIn(possibility1, ..., possibilityN) -> boolean`

Determines whether `foo` is referentially unequal (`!==`) to **all** of the `possibility` items.

```js
allege.that(5).isNotIn(1, 2, 3, 4);
// --> true

allege.that(5).isNotIn(1, 2, 3, 4, 5);
// --> false
```

### Multiple Input Commands

To use these methods, call `allege.these()` with more than one argument, 
like so: `allege.these(foo, bar, baz, quux)`. Then, these methods will be available:

#### `areAll(possibility) -> boolean`

Determines whether all `input`s are referentially equal (`===`) to the `possibility` item.

```js
allege.these(5, 5, 5, 5).areAll(5);
// --> true

allege.these(5, 4, 5, 4).areAll(4);
// --> false
```

#### `areAllNot(possibility) -> boolean`

Determines whether all `input`s are referentially unequal (`!==`) to the `possibility` item.

```js
allege.these(5, 5, 5, 5).areAllNot(4);
// --> true

allege.these(5, 5, 5, 5).areAllNot(5);
// --> false
```

## Installation

Grab this module from `npm` with the following command:

```bash
yarn add allege
```

Then you can use it in your project like so:

```typescript
import allege from 'allege';
if (allege.that(5).isNotIn(1,2,3)) {
    // do something
}

// or:
import { that, these } from 'allege';
if (that(5).isNotIn(1,2,3)) {
    // do something
}
```

## Versioning

This module follows SemVer.

## License

MIT. See the `LICENSE` file for more details.

## Testing

You can execute the existing test suite by running the following in your terminal:

```bash
yarn install
yarn test
```

## Building From Source

The code that resides in the `index.js` file is transpiled from an ES6 source. The original source
files reside in the `src/` directory. These can be built with the following command:

```bash
yarn build
```
# Allege

Make complex conditionals easier to read and write.

## Introduction

Sometimes, `if` statements can get very complex. For example:

```js
	if (
		foo.bar === 'value_a' ||
		foo.bar === 'value_b' ||
		foo.bar === 'value_c' ||
		foo.bar === 'value_d' ||
		foo.bar === 'value_e'
	) {
		// do something
	} else {
		// do something else
	}
```

With Allege, you can simplify your `if` like so:

```js
	if (
		allege(foo.bar).isAnyOf(
			'value_a', 
			'value_b', 
			'value_c', 
			'value_d',
			'value_e'
		)
	) {
		// do something
    } else {
        // do something else
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

#### `bool` allege(foo).isAnyOf(possibility1, ..., possibilityN)

Determines whether `foo` is referentially equal (`===`) to any of the `possibility` items.

```js
allege(5).isAnyOf(1,2,3,4,5,6);
// --> true

allege('hi').isAnyOf('hello', 'good morning', 'sup')
// --> false
```

#### `bool` allege(foo).isNoneOf(possibility1, ..., possibilityN)

...

#### `bool` allege(foo).isAllOf(possibility1, ..., possibilityN)

...

### Multiple Input Commands

To use these methods, call Allege with more than one argument, like so: `allege(foo, bar, baz, quux)`. Then, these 
methods will be available:

#### `bool` allege(value1[, value2[, ...[, valueN]]].areAll(possibility)

...

#### `bool` allege(value1[, value2[, ...[, valueN]]].areAllNot(possibility)

...
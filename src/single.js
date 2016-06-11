/**
 * @module singleAPI
 * @name singleAPI
 * @memberOf allege
 * @description Provides utility functions for {@link allege} that operate on
 * a single argument.
 */

'use strict';

import { isAnyOf, isNoneOf, isAllOf } from './_utils.js';

/**
 * returns {{ isAnyOf: function, isNoneOf: function, isAllOf: function }}
 */
const singleValueAPI = (inputValue) => ({
	/**
	 * @param {...*} possibilities
	 * @returns {boolean}
	 */
	isAnyOf: (...possibilities) => isAnyOf(inputValue, Array.from(possibilities)),

	/**
	 * @param {...*} possibilities
	 * @returns {boolean}
	 */
	isNoneOf: (...possibilities) => isNoneOf(inputValue, Array.from(possibilities)),

	/**
	 * @param {...*} possibilities
	 * @returns {boolean}
	 */
	isAllOf: (...possibilities) => isAllOf(inputValue, Array.from(possibilities))
});

/**
 * @function
 */
export default Object.freeze(singleValueAPI);
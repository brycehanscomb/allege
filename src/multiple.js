/**
 * @module allege/multipleAPI
 * @name multipleAPI
 * @memberOf allege
 * @description Provides utility functions for {@link allege} that operate on
 * multiple arguments
 */

'use strict';

import { isNoneOf, isAllOf } from './_utils.js';

/**
 * @returns {{ areAll: function, areAllNot: function}}
 */
const multipleValuesAPI = (...inputValues) => ({
	/**
	 * @param {*} possibility
	 * @returns {boolean}
	 */
	areAll: (possibility) => isAllOf(possibility, ...inputValues),

	/**
	 * @param {*} possibility
	 * @returns {boolean}
	 */
	areAllNot: (possibility) => isNoneOf(possibility, ...inputValues)
});

/**
 * @function
 */
export default Object.freeze(multipleValuesAPI);
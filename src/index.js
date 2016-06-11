/**
 * @module allege
 * @name allege
 * @description Make complex conditionals easier to read and write.
 */

import single from './single.js';
import multiple from './multiple.js';

/**
 * @description The main allege interface.
 * If the function is called with one argument, the methods available in the
 * returned object will be those in {@link singleAPI}.
 *
 * If the function is called with more than one argument, the methods available
 * in the returned object will be those in {@link allege/multipleAPI}.
 *
 * @param {...*} inputValues One or more values of any type to be tested.
 * @returns {Object.<string, function>} Either {@linkcode singleAPI} if called
 * with one argument, or {@linkcode multipleAPI} if called with more than one
 * argument.
 * @throws {ReferenceError} If no arguments are provided.
 */
export default function allege(...inputValues) {
	if (inputValues.length === 1) {
		return single(inputValues[0]);
	} else if (inputValues.length > 1) {
		return multiple(inputValues);
	} else {
		throw new ReferenceError('allege must be called with at least one argument.');
	}
}
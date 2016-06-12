'use strict';

require('babel-polyfill-safer');
/**
 * @description Determine if `needle` exists anywhere in `haystack`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isAnyOf = function isAnyOf(needle, haystack) {
  return haystack.includes(needle);
};

/**
 * @description Determine if `needle` does not exist anywhere in `haystack`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isNoneOf = function isNoneOf(needle, haystack) {
  return !isAnyOf(needle, haystack);
};

/**
 * @description Determine if all items in `haystack` are strictly equal to `needle`
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isAllOf = function isAllOf(needle, haystack) {
  return haystack.every(function (e) {
    return e === needle;
  });
};

/**
 * returns {{ isAnyOf: function, isNoneOf: function, isAllOf: function }}
 */
var singleValueAPI = function singleValueAPI(inputValue) {
	return {
		/**
   * @param {...*} possibilities
   * @returns {boolean}
   */
		isAnyOf: function isAnyOf$$() {
			for (var _len = arguments.length, possibilities = Array(_len), _key = 0; _key < _len; _key++) {
				possibilities[_key] = arguments[_key];
			}

			return isAnyOf(inputValue, Array.from(possibilities));
		},

		/**
   * @param {...*} possibilities
   * @returns {boolean}
   */
		isNoneOf: function isNoneOf$$() {
			for (var _len2 = arguments.length, possibilities = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				possibilities[_key2] = arguments[_key2];
			}

			return isNoneOf(inputValue, Array.from(possibilities));
		},

		/**
   * @param {...*} possibilities
   * @returns {boolean}
   */
		isAllOf: function isAllOf$$() {
			for (var _len3 = arguments.length, possibilities = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				possibilities[_key3] = arguments[_key3];
			}

			return isAllOf(inputValue, Array.from(possibilities));
		}
	};
};

/**
 * @function
 */
var single = Object.freeze(singleValueAPI);

/**
 * @returns {{ areAll: function, areAllNot: function}}
 */
var multipleValuesAPI = function multipleValuesAPI() {
  for (var _len = arguments.length, inputValues = Array(_len), _key = 0; _key < _len; _key++) {
    inputValues[_key] = arguments[_key];
  }

  return {
    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAll: function areAll(possibility) {
      return isAllOf.apply(undefined, [possibility].concat(inputValues));
    },

    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAllNot: function areAllNot(possibility) {
      return isNoneOf.apply(undefined, [possibility].concat(inputValues));
    }
  };
};

/**
 * @function
 */
var multiple = Object.freeze(multipleValuesAPI);

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
function allege() {
  for (var _len = arguments.length, inputValues = Array(_len), _key = 0; _key < _len; _key++) {
    inputValues[_key] = arguments[_key];
  }

  if (inputValues.length === 1) {
    return single(inputValues[0]);
  } else if (inputValues.length > 1) {
    return multiple(inputValues);
  } else {
    throw new ReferenceError('allege must be called with at least one argument.');
  }
}

module.exports = allege;
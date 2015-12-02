'use strict';

require('./polyfills/Array.prototype.includes');
require('./polyfills/Array.prototype.every');
require('./polyfills/Array.from');

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function _isAnyOf(needle, haystack) {
    return haystack.includes(needle);
}

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function _isNoneOf(needle, haystack) {
    return !_isAnyOf(needle, haystack);
}

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function _isAllOf(needle, haystack) {
    console.log(needle, haystack);
    return haystack.every(function (el) {
        return el === needle;
    });
}

/**
 * @param {...*} inputValues
 * @returns {Object}
 */
function allege() {
    for (var _len = arguments.length, inputValues = Array(_len), _key = 0; _key < _len; _key++) {
        inputValues[_key] = arguments[_key];
    }

    var singleValueAPI = {

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isAnyOf: function isAnyOf() {
            for (var _len2 = arguments.length, possibilities = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                possibilities[_key2] = arguments[_key2];
            }

            return _isAnyOf(inputValues[0], Array.from(possibilities));
        },

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isNoneOf: function isNoneOf() {
            for (var _len3 = arguments.length, possibilities = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                possibilities[_key3] = arguments[_key3];
            }

            return _isNoneOf(inputValues[0], Array.from(possibilities));
        },

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isAllOf: function isAllOf() {
            for (var _len4 = arguments.length, possibilities = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                possibilities[_key4] = arguments[_key4];
            }

            return _isAllOf(inputValues[0], Array.from(possibilities));
        }
    };

    var multipleValuesAPI = {

        /**
         * @param {*} possibility
         * @returns {boolean}
         */
        areAll: function areAll(possibility) {
            return _isAllOf(possibility, Array.from(inputValues));
        },

        /**
         * @param {*} possibility
         * @returns {boolean}
         */
        areAllNot: function areAllNot(possibility) {
            return _isNoneOf(possibility, Array.from(inputValues));
        }
    };

    if (inputValues.length === 1) {
        return singleValueAPI;
    } else if (inputValues.length > 1) {
        return multipleValuesAPI;
    } else {
        throw new ReferenceError('allege must be called with at least one argument.');
    }
}

/**
 * @type {allege}
 */
module.exports = allege;
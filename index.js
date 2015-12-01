'use strict';

require('./src/polyfills/Array.prototype.includes');

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function isAnyOf(needle, haystack) {
    return haystack.includes(needle);
}

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function isNoneOf(needle, haystack) {
    return !isAnyOf(needle, haystack);
}

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
function isAllOf(needle, haystack) {
    return haystack.every(function(el) {
        return el === needle;
    });
}

/**
 * @param {...*} inputValues
 * @returns {Object}
 */
function allege(...inputValues) {

    const singleValueAPI = {

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isAnyOf: function(...possibilities) {
            return isAnyOf(inputValues, Array.from(possibilities));
        },

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isNoneOf: function(...possibilities) {
            return isNoneOf(inputValues, Array.from(possibilities));
        },

        /**
         * @param {...*} possibilities
         * @returns {boolean}
         */
        isAllOf: function(...possibilities) {
            return isAllOf(inputValues, Array.from(possibilities));
        }
    };

    const multipleValuesAPI = {

        /**
         * @param {*} possibility
         * @returns {boolean}
         */
        areAll: function(possibility) {
            return isAllOf(inputValues, possibility);
        },

        /**
         * @param {*} possibility
         * @returns {boolean}
         */
        areAllNot: function(possibility) {
            return isNoneOf(inputValues, possibility);
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
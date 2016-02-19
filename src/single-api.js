'use strict';

import { isAnyOf, isNoneOf, isAllOf } from './utils.js';

const singleValueAPI = Object.freeze((inputValue) => ({
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
}));

module.exports = singleValueAPI;
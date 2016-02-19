'use strict';

var _utils = require('./utils.js');

var singleValueAPI = Object.freeze(function (inputValue) {
  return {
    /**
     * @param {...*} possibilities
     * @returns {boolean}
     */
    isAnyOf: function isAnyOf() {
      for (var _len = arguments.length, possibilities = Array(_len), _key = 0; _key < _len; _key++) {
        possibilities[_key] = arguments[_key];
      }

      return (0, _utils.isAnyOf)(inputValue, Array.from(possibilities));
    },

    /**
     * @param {...*} possibilities
     * @returns {boolean}
     */
    isNoneOf: function isNoneOf() {
      for (var _len2 = arguments.length, possibilities = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        possibilities[_key2] = arguments[_key2];
      }

      return (0, _utils.isNoneOf)(inputValue, Array.from(possibilities));
    },

    /**
     * @param {...*} possibilities
     * @returns {boolean}
     */
    isAllOf: function isAllOf() {
      for (var _len3 = arguments.length, possibilities = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        possibilities[_key3] = arguments[_key3];
      }

      return (0, _utils.isAllOf)(inputValue, Array.from(possibilities));
    }
  };
});

module.exports = singleValueAPI;
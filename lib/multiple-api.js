'use strict';

var _utils = require('./utils.js');

var multipleValuesAPI = Object.freeze(function (inputValues) {
  return {
    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAll: function areAll(possibility) {
      return (0, _utils.isAllOf)(possibility, Array.from(inputValues));
    },

    /**
     * @param {*} possibility
     * @returns {boolean}
     */
    areAllNot: function areAllNot(possibility) {
      return (0, _utils.isNoneOf)(possibility, Array.from(inputValues));
    }
  };
});

module.exports = multipleValuesAPI;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isAnyOf = exports.isAnyOf = function isAnyOf(needle, haystack) {
  return haystack.includes(needle);
};

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isNoneOf = exports.isNoneOf = function isNoneOf(needle, haystack) {
  return !isAnyOf(needle, haystack);
};

/**
 * @param {*} needle
 * @param {Array} haystack
 * @returns {boolean}
 */
var isAllOf = exports.isAllOf = function isAllOf(needle, haystack) {
  return haystack.every(function (e) {
    return e === needle;
  });
};
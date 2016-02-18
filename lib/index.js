(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _singleApi = require('./single-api.js');

var singleValueAPI = _interopRequireWildcard(_singleApi);

var _multipleApi = require('./multiple-api.js');

var multipleValueAPI = _interopRequireWildcard(_multipleApi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @param {...*} inputValues
 * @returns {Object.<string, function>}
 */
var allege = Object.freeze(function () {
    for (var _len = arguments.length, inputValues = Array(_len), _key = 0; _key < _len; _key++) {
        inputValues[_key] = arguments[_key];
    }

    if (inputValues.length === 1) {
        return singleValueAPI(inputValues[0]);
    } else if (inputValues.length > 1) {
        return multipleValueAPI(inputValues);
    } else {
        throw new ReferenceError('allege must be called with at least one argument.');
    }
});

module.exports = allege;

},{"./multiple-api.js":2,"./single-api.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = multipleValuesAPI;


if (typeof module !== 'undefined') {
  module.exports = multipleValuesAPI;
}

},{"./utils.js":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = singleValueAPI;


if (typeof module !== 'undefined') {
  module.exports = singleValueAPI;
}

},{"./utils.js":4}],4:[function(require,module,exports){
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

},{}]},{},[1]);

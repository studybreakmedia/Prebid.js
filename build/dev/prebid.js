/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["pbjsChunk"];
/******/ 	window["pbjsChunk"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		122: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.parseSizesInput = parseSizesInput;
exports.parseGPTSingleSizeArray = parseGPTSingleSizeArray;
exports.uniques = uniques;
exports.flatten = flatten;
exports.getBidRequest = getBidRequest;
exports.getKeys = getKeys;
exports.getValue = getValue;
exports.getBidderCodes = getBidderCodes;
exports.isGptPubadsDefined = isGptPubadsDefined;
exports.getHighestCpm = getHighestCpm;
exports.shuffle = shuffle;
exports.adUnitsFilter = adUnitsFilter;
exports.isSrcdocSupported = isSrcdocSupported;
exports.deepClone = deepClone;
exports.inIframe = inIframe;
exports.isSafariBrowser = isSafariBrowser;
exports.replaceAuctionPrice = replaceAuctionPrice;
exports.getBidderRequestAllAdUnits = getBidderRequestAllAdUnits;
exports.getBidderRequest = getBidderRequest;
exports.cookiesAreEnabled = cookiesAreEnabled;
exports.delayExecution = delayExecution;
exports.groupBy = groupBy;
exports.deepAccess = deepAccess;
exports.createContentToExecuteExtScriptInFriendlyFrame = createContentToExecuteExtScriptInFriendlyFrame;
exports.getDefinedParams = getDefinedParams;
exports.isValidMediaTypes = isValidMediaTypes;
exports.unsupportedBidderMessage = unsupportedBidderMessage;

var _config = __webpack_require__(8);

var _justClone = __webpack_require__(46);

var _justClone2 = _interopRequireDefault(_justClone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONSTANTS = __webpack_require__(4);

var _loggingChecked = false;

var t_Arr = 'Array';
var t_Str = 'String';
var t_Fn = 'Function';
var t_Numb = 'Number';
var toString = Object.prototype.toString;
var infoLogger = null;
try {
  infoLogger = console.info.bind(window.console);
} catch (e) {}

/*
 *   Substitutes into a string from a given map using the token
 *   Usage
 *   var str = 'text %%REPLACE%% this text with %%SOMETHING%%';
 *   var map = {};
 *   map['replace'] = 'it was subbed';
 *   map['something'] = 'something else';
 *   console.log(replaceTokenInString(str, map, '%%')); => "text it was subbed this text with something else"
 */
exports.replaceTokenInString = function (str, map, token) {
  this._each(map, function (value, key) {
    value = value === undefined ? '' : value;

    var keyString = token + key.toUpperCase() + token;
    var re = new RegExp(keyString, 'g');

    str = str.replace(re, value);
  });

  return str;
};

/* utility method to get incremental integer starting from 1 */
var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}();

function _getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}

// generate a random string (to be used as a dynamic JSONP callback)
exports.getUniqueIdentifierStr = _getUniqueIdentifierStr;

/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */
exports.generateUUID = function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ Math.random() * 16 >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
};

exports.getBidIdParameter = function (key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
};

exports.tryAppendQueryString = function (existingUrl, key, value) {
  if (value) {
    return existingUrl += key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
};

// parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}
exports.parseQueryStringParameters = function (queryObj) {
  var result = '';
  for (var k in queryObj) {
    if (queryObj.hasOwnProperty(k)) {
      result += k + '=' + encodeURIComponent(queryObj[k]) + '&';
    }
  }

  return result;
};

// transform an AdServer targeting bids into a query string to send to the adserver
exports.transformAdServerTargetingObj = function (targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map(function (key) {
      return key + '=' + encodeURIComponent(getValue(targeting, key));
    }).join('&');
  } else {
    return '';
  }
};

/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {array[array|number]} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {array[string]}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */
function parseSizesInput(sizeObj) {
  var parsedSizes = [];

  // if a string for now we can assume it is a single size, like "300x250"
  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(',');

    // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line
    var sizeRegex = /^(\d)+x(\d)+$/i;
    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if ((typeof sizeObj === 'undefined' ? 'undefined' : _typeof(sizeObj)) === 'object') {
    var sizeArrayLength = sizeObj.length;

    // don't process empty array
    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
};

// parse a GPT style sigle size array, (i.e [300,250])
// into an AppNexus style string, (i.e. 300x250)
function parseGPTSingleSizeArray(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  if (exports.isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1])) {
    return singleSize[0] + 'x' + singleSize[1];
  }
};

exports.getTopWindowLocation = function () {
  var location = void 0;
  try {
    // force an exception in x-domain enviornments. #1509
    window.top.location.toString();
    location = window.top.location;
  } catch (e) {
    location = window.location;
  }

  return location;
};

exports.getTopWindowUrl = function () {
  var href = void 0;
  try {
    href = this.getTopWindowLocation().href;
  } catch (e) {
    href = '';
  }

  return href;
};

exports.getTopWindowReferrer = function () {
  try {
    return window.top.document.referrer;
  } catch (e) {
    return document.referrer;
  }
};

exports.logWarn = function (msg) {
  if (debugTurnedOn() && console.warn) {
    console.warn('WARNING: ' + msg);
  }
};

exports.logInfo = function (msg, args) {
  if (debugTurnedOn() && hasConsoleLogger()) {
    if (infoLogger) {
      if (!args || args.length === 0) {
        args = '';
      }

      infoLogger('INFO: ' + msg + (args === '' ? '' : ' : params : '), args);
    }
  }
};

exports.logMessage = function (msg) {
  if (debugTurnedOn() && hasConsoleLogger()) {
    console.log('MESSAGE: ' + msg);
  }
};

function hasConsoleLogger() {
  return window.console && window.console.log;
}

function hasConsoleError() {
  return window.console && window.console.error;
}

exports.hasConsoleLogger = hasConsoleLogger;

var debugTurnedOn = function debugTurnedOn() {
  if (_config.config.getConfig('debug') === false && _loggingChecked === false) {
    var debug = getParameterByName(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
    _config.config.setConfig({ debug: debug });
    _loggingChecked = true;
  }

  return !!_config.config.getConfig('debug');
};

exports.debugTurnedOn = debugTurnedOn;

/**
 * Wrapper to console.error. Takes N arguments to log the same as console.error.
 */
exports.logError = function () {
  if (debugTurnedOn() && hasConsoleError()) {
    console.error.apply(console, arguments);
  }
};

exports.createInvisibleIframe = function _createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = _getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
};

/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */
var getParameterByName = function getParameterByName(name) {
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if (results === null) {
    return '';
  }

  return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

exports.getParameterByName = getParameterByName;

/**
 * This function validates paramaters.
 * @param  {object[string]} paramObj          [description]
 * @param  {string[]} requiredParamsArr [description]
 * @return {bool}                   Bool if paramaters are valid
 */
exports.hasValidBidRequest = function (paramObj, requiredParamsArr, adapter) {
  var found = false;

  function findParam(value, key) {
    if (key === requiredParamsArr[i]) {
      found = true;
    }
  }

  for (var i = 0; i < requiredParamsArr.length; i++) {
    found = false;

    this._each(paramObj, findParam);

    if (!found) {
      this.logError('Params are missing for bid request. One of these required paramaters are missing: ' + requiredParamsArr, adapter);
      return false;
    }
  }

  return true;
};

// Handle addEventListener gracefully in older browsers
exports.addEventHandler = function (element, event, func) {
  if (element.addEventListener) {
    element.addEventListener(event, func, true);
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, func);
  }
};
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */
exports.isA = function (object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
};

exports.isFn = function (object) {
  return this.isA(object, t_Fn);
};

exports.isStr = function (object) {
  return this.isA(object, t_Str);
};

exports.isArray = function (object) {
  return this.isA(object, t_Arr);
};

exports.isNumber = function (object) {
  return this.isA(object, t_Numb);
};

/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */
exports.isEmpty = function (object) {
  if (!object) return true;
  if (exports.isArray(object) || exports.isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
};

/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */
exports.isEmptyStr = function (str) {
  return this.isStr(str) && (!str || str.length === 0);
};

/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */
exports._each = function (object, fn) {
  if (this.isEmpty(object)) return;
  if (this.isFn(object.forEach)) return object.forEach(fn, this);

  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
};

exports.contains = function (a, obj) {
  if (this.isEmpty(a)) {
    return false;
  }

  if (this.isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
};

exports.indexOf = function () {
  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf;
  }

  // ie8 no longer supported
  // return polyfills.indexOf;
}();

/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */
exports._map = function (object, callback) {
  if (this.isEmpty(object)) return [];
  if (this.isFn(object.map)) return object.map(callback);
  var output = [];
  this._each(object, function (value, key) {
    output.push(callback(value, key, object));
  });

  return output;
};

var hasOwn = function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
};

exports.insertElement = function (elm, doc, target) {
  doc = doc || document;
  var elToAppend = void 0;
  if (target) {
    elToAppend = doc.getElementsByTagName(target);
  } else {
    elToAppend = doc.getElementsByTagName('head');
  }
  try {
    elToAppend = elToAppend.length ? elToAppend : doc.getElementsByTagName('body');
    if (elToAppend.length) {
      elToAppend = elToAppend[0];
      elToAppend.insertBefore(elm, elToAppend.firstChild);
    }
  } catch (e) {}
};

exports.triggerPixel = function (url) {
  var img = new Image();
  img.src = url;
};

/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 */
exports.insertUserSyncIframe = function (url) {
  var iframeHtml = this.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;
  exports.insertElement(iframe);
};

/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */
exports.createTrackPixelHtml = function (url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
};

/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */
exports.createTrackPixelIframeHtml = function (url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }
  if (encodeUri) {
    url = encodeURI(url);
  }
  if (sandbox) {
    sandbox = 'sandbox="' + sandbox + '"';
  }

  return '<iframe ' + sandbox + ' id="' + exports.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0p;width:0p;display:none;"\n      scrolling="no"\n      src="' + url + '">\n    </iframe>';
};

/**
 * Returns iframe document in a browser agnostic way
 * @param  {object} iframe reference
 * @return {object}        iframe `document` reference
 */
exports.getIframeDocument = function (iframe) {
  if (!iframe) {
    return;
  }

  var doc = void 0;
  try {
    if (iframe.contentWindow) {
      doc = iframe.contentWindow.document;
    } else if (iframe.contentDocument.document) {
      doc = iframe.contentDocument.document;
    } else {
      doc = iframe.contentDocument;
    }
  } catch (e) {
    this.logError('Cannot get iframe document', e);
  }

  return doc;
};

exports.getValueString = function (param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }
  if (this.isStr(val)) {
    return val;
  }
  if (this.isNumber(val)) {
    return val.toString();
  }
  this.logWarn('Unsuported type for param: ' + param + ' required type: String');
};

function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}

function flatten(a, b) {
  return a.concat(b);
}

function getBidRequest(id) {
  return pbjs._bidsRequested.map(function (bidSet) {
    return bidSet.bids.find(function (bid) {
      return bid.bidId === id;
    });
  }).find(function (bid) {
    return bid;
  });
}

function getKeys(obj) {
  return Object.keys(obj);
}

function getValue(obj, key) {
  return obj[key];
}

function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : pbjs.adUnits;

  // this could memoize adUnits
  return adUnits.map(function (unit) {
    return unit.bids.map(function (bid) {
      return bid.bidder;
    }).reduce(flatten, []);
  }).reduce(flatten).filter(uniques);
}

function isGptPubadsDefined() {
  if (window.googletag && exports.isFn(window.googletag.pubads) && exports.isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
}

function getHighestCpm(previous, current) {
  if (previous.cpm === current.cpm) {
    return previous.timeToRespond > current.timeToRespond ? current : previous;
  }

  return previous.cpm < current.cpm ? current : previous;
}

/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */
function shuffle(array) {
  var counter = array.length;

  // while there are elements in the array
  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter);

    // decrease counter by 1
    counter--;

    // and swap the last element with it
    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

function adUnitsFilter(filter, bid) {
  return filter.includes(bid && bid.placementCode || bid && bid.adUnitCode);
}

/**
 * Check if parent iframe of passed document supports content rendering via 'srcdoc' property
 * @param {HTMLDocument} doc document to check support of 'srcdoc'
 */
function isSrcdocSupported(doc) {
  // Firefox is excluded due to https://bugzilla.mozilla.org/show_bug.cgi?id=1265961
  return doc.defaultView && doc.defaultView.frameElement && 'srcdoc' in doc.defaultView.frameElement && !/firefox/i.test(navigator.userAgent);
}

function deepClone(obj) {
  return (0, _justClone2['default'])(obj);
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

function isSafariBrowser() {
  return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  );
}

function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}

function getBidderRequestAllAdUnits(bidder) {
  return pbjs._bidsRequested.find(function (request) {
    return request.bidderCode === bidder;
  });
}

function getBidderRequest(bidder, adUnitCode) {
  return pbjs._bidsRequested.find(function (request) {
    return request.bids.filter(function (bid) {
      return bid.bidder === bidder && bid.placementCode === adUnitCode;
    }).length > 0;
  }) || { start: null, requestId: null };
}

function cookiesAreEnabled() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
  window.document.cookie = 'prebid.cookieTest';
  return window.document.cookie.indexOf('prebid.cookieTest') != -1;
}

/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */
function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error('numRequiredCalls must be a positive number. Got ' + numRequiredCalls);
  }
  var numCalls = 0;
  return function () {
    numCalls++;
    if (numCalls === numRequiredCalls) {
      func.apply(null, arguments);
    }
  };
}

/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */
function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

/**
 * deepAccess utility function useful for doing safe access (will not throw exceptions) of deep object paths.
 * @param {object} obj The object containing the values you would like to access.
 * @param {string|number} path Object path to the value you would like to access.  Non-strings are coerced to strings.
 * @returns {*} The value found at the specified object path, or undefined if path is not found.
 */
function deepAccess(obj, path) {
  path = String(path).split('.');
  for (var i = 0; i < path.length; i++) {
    obj = obj[path[i]];
    if (typeof obj === 'undefined') {
      return;
    }
  }
  return obj;
}

/**
 * Returns content for a friendly iframe to execute a URL in script tag
 * @param {url} URL to be executed in a script tag in a friendly iframe
 * <!--PRE_SCRIPT_TAG_MACRO--> and <!--POST_SCRIPT_TAG_MACRO--> are macros left to be replaced if required
 */
function createContentToExecuteExtScriptInFriendlyFrame(url) {
  if (!url) {
    return '';
  }

  return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head><body><!--PRE_SCRIPT_TAG_MACRO--><script src="' + url + '"></script><!--POST_SCRIPT_TAG_MACRO--></body></html>';
}

/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {object} An object containing all the specified values that are defined
 */
function getDefinedParams(object, params) {
  return params.filter(function (param) {
    return object[param];
  }).reduce(function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }, {});
}

/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */
function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream'];

  var types = Object.keys(mediaTypes);

  if (!types.every(function (type) {
    return SUPPORTED_MEDIA_TYPES.includes(type);
  })) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return SUPPORTED_STREAM_TYPES.includes(mediaTypes.video.context);
  }

  return true;
}

/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {Array} unSupportedBidders arrary of bidder codes that are not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */
function unsupportedBidderMessage(adUnit, unSupportedBidders) {
  var mediaType = adUnit.mediaType || Object.keys(adUnit.mediaTypes).join(', ');
  var plural = unSupportedBidders.length === 1 ? 'This bidder' : 'These bidders';

  return '\n    ' + adUnit.code + ' is a ' + mediaType + ' ad unit\n    containing bidders that don\'t support ' + mediaType + ': ' + unSupportedBidders.join(', ') + '.\n    ' + plural + ' won\'t fetch demand.\n  ';
}

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @module adaptermanger */

var _utils = __webpack_require__(0);

var _sizeMapping = __webpack_require__(47);

var _native = __webpack_require__(15);

var _bidderFactory = __webpack_require__(6);

var utils = __webpack_require__(0);
var CONSTANTS = __webpack_require__(4);
var events = __webpack_require__(11);
var s2sTestingModule = void 0; // store s2sTesting module if it's loaded

var _bidderRegistry = {};
exports.bidderRegistry = _bidderRegistry;

// create s2s settings objectType_function
var _s2sConfig = {
  endpoint: CONSTANTS.S2S.DEFAULT_ENDPOINT,
  adapter: CONSTANTS.S2S.ADAPTER,
  syncEndpoint: CONSTANTS.S2S.SYNC_ENDPOINT
};

var RANDOM = 'random';
var FIXED = 'fixed';

var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;

var _analyticsRegistry = {};
var _bidderSequence = RANDOM;

function arraysEqual(arr1, arr2) {
  if (arr1[0] !== arr2[0] || arr1[1] !== arr2[1]) {
    return false;
  }
  return true;
}

function getBids(_ref) {
  var bidderCode = _ref.bidderCode,
      requestId = _ref.requestId,
      bidderRequestId = _ref.bidderRequestId,
      adUnits = _ref.adUnits;

  return adUnits.map(function (adUnit) {
    return adUnit.bids.filter(function (bid) {
      return bid.bidder === bidderCode;
    }).map(function (bid) {
      var sizes = adUnit.sizes;

      if (bid.sizes) {
        // Set sizes equal to the intersect of bid sizes and adUnit sizes
        sizes = bid.sizes.reduce(function (newSizes, bidSize) {
          for (var i = 0; i < adUnit.sizes.length; i++) {
            if (arraysEqual(bidSize, adUnit.sizes[i])) {
              newSizes.push(bidSize);
              break;
            }
          }
          return newSizes;
        }, []);
      }

      if (adUnit.sizeMapping) {
        var sizeMapping = (0, _sizeMapping.mapSizes)(adUnit);
        if (sizeMapping === '') {
          return '';
        }
        sizes = sizeMapping;
      }

      if (adUnit.mediaTypes) {
        if (utils.isValidMediaTypes(adUnit.mediaTypes)) {
          bid = _extends({}, bid, { mediaTypes: adUnit.mediaTypes });
        } else {
          utils.logError('mediaTypes is not correctly configured for adunit ' + adUnit.code);
        }
      }

      var nativeParams = adUnit.nativeParams || utils.deepAccess(adUnit, 'mediaTypes.native');
      if (nativeParams) {
        bid = _extends({}, bid, {
          nativeParams: (0, _native.processNativeAdUnitParams)(nativeParams)
        });
      }

      bid = _extends({}, bid, (0, _utils.getDefinedParams)(adUnit, ['mediaType', 'renderer']));

      return _extends({}, bid, {
        placementCode: adUnit.code,
        transactionId: adUnit.transactionId,
        sizes: sizes,
        bidId: bid.bid_id || utils.getUniqueIdentifierStr(),
        bidderRequestId: bidderRequestId,
        requestId: requestId
      });
    });
  }).reduce(_utils.flatten, []).filter(function (val) {
    return val !== '';
  });
}

exports.callBids = function (_ref2) {
  var adUnits = _ref2.adUnits,
      cbTimeout = _ref2.cbTimeout;

  var requestId = utils.generateUUID();
  var auctionStart = Date.now();

  var auctionInit = {
    timestamp: auctionStart,
    requestId: requestId,
    timeout: cbTimeout
  };
  events.emit(CONSTANTS.EVENTS.AUCTION_INIT, auctionInit);

  var bidderCodes = (0, _utils.getBidderCodes)(adUnits);
  if (_bidderSequence === RANDOM) {
    bidderCodes = (0, _utils.shuffle)(bidderCodes);
  }

  var s2sAdapter = _bidderRegistry[_s2sConfig.adapter];
  if (s2sAdapter) {
    s2sAdapter.setConfig(_s2sConfig);
    s2sAdapter.queueSync({ bidderCodes: bidderCodes });
  }

  var clientTestAdapters = [];
  var s2sTesting = false;
  if (_s2sConfig.enabled) {
    // if s2sConfig.bidderControl testing is turned on
    s2sTesting = _s2sConfig.testing && typeof s2sTestingModule !== 'undefined';
    if (s2sTesting) {
      // get all adapters doing client testing
      clientTestAdapters = s2sTestingModule.getSourceBidderMap(adUnits)[s2sTestingModule.CLIENT];
    }

    // these are called on the s2s adapter
    var adaptersServerSide = _s2sConfig.bidders;

    // don't call these client side (unless client request is needed for testing)
    bidderCodes = bidderCodes.filter(function (elm) {
      return !adaptersServerSide.includes(elm) || clientTestAdapters.includes(elm);
    });
    var adUnitsS2SCopy = utils.deepClone(adUnits);

    // filter out client side bids
    adUnitsS2SCopy.forEach(function (adUnit) {
      if (adUnit.sizeMapping) {
        adUnit.sizes = (0, _sizeMapping.mapSizes)(adUnit);
        delete adUnit.sizeMapping;
      }
      adUnit.sizes = transformHeightWidth(adUnit);
      adUnit.bids = adUnit.bids.filter(function (bid) {
        return adaptersServerSide.includes(bid.bidder) && (!s2sTesting || bid.finalSource !== s2sTestingModule.CLIENT);
      }).map(function (bid) {
        bid.bid_id = utils.getUniqueIdentifierStr();
        return bid;
      });
    });

    // don't send empty requests
    adUnitsS2SCopy = adUnitsS2SCopy.filter(function (adUnit) {
      return adUnit.bids.length !== 0;
    });

    var tid = utils.generateUUID();
    adaptersServerSide.forEach(function (bidderCode) {
      var bidderRequestId = utils.getUniqueIdentifierStr();
      var bidderRequest = {
        bidderCode: bidderCode,
        requestId: requestId,
        bidderRequestId: bidderRequestId,
        tid: tid,
        bids: getBids({ bidderCode: bidderCode, requestId: requestId, bidderRequestId: bidderRequestId, 'adUnits': adUnitsS2SCopy }),
        start: new Date().getTime(),
        auctionStart: auctionStart,
        timeout: _s2sConfig.timeout,
        src: CONSTANTS.S2S.SRC
      };
      if (bidderRequest.bids.length !== 0) {
        pbjs._bidsRequested.push(bidderRequest);
        events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidderRequest);
      }
    });

    var s2sBidRequest = { tid: tid, 'ad_units': adUnitsS2SCopy };
    utils.logMessage('CALLING S2S HEADER BIDDERS ==== ' + adaptersServerSide.join(','));
    if (s2sBidRequest.ad_units.length) {
      s2sAdapter.callBids(s2sBidRequest);
    }
  }

  var _bidderRequests = [];
  // client side adapters
  var adUnitsClientCopy = utils.deepClone(adUnits);
  // filter out s2s bids
  adUnitsClientCopy.forEach(function (adUnit) {
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return !s2sTesting || bid.finalSource !== s2sTestingModule.SERVER;
    });
  });

  // don't send empty requests
  adUnitsClientCopy = adUnitsClientCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });

  bidderCodes.forEach(function (bidderCode) {
    var adapter = _bidderRegistry[bidderCode];
    if (adapter) {
      var bidderRequestId = utils.getUniqueIdentifierStr();
      var bidderRequest = {
        bidderCode: bidderCode,
        requestId: requestId,
        bidderRequestId: bidderRequestId,
        bids: getBids({ bidderCode: bidderCode, requestId: requestId, bidderRequestId: bidderRequestId, 'adUnits': adUnitsClientCopy }),
        auctionStart: auctionStart,
        timeout: cbTimeout
      };

      if (bidderRequest.bids && bidderRequest.bids.length !== 0) {
        pbjs._bidsRequested.push(bidderRequest);
        _bidderRequests.push(bidderRequest);
      }
    } else {
      utils.logError('Adapter trying to be called which does not exist: ' + bidderCode + ' adaptermanager.callBids');
    }
  });

  _bidderRequests.forEach(function (bidRequest) {
    bidRequest.start = new Date().getTime();
    var adapter = _bidderRegistry[bidRequest.bidderCode];
    if (bidRequest.bids && bidRequest.bids.length !== 0) {
      utils.logMessage('CALLING BIDDER ======= ' + bidRequest.bidderCode);
      events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
      adapter.callBids(bidRequest);
    }
  });
};

function transformHeightWidth(adUnit) {
  var sizesObj = [];
  var sizes = utils.parseSizesInput(adUnit.sizes);
  sizes.forEach(function (size) {
    var heightWidth = size.split('x');
    var sizeObj = {
      'w': parseInt(heightWidth[0]),
      'h': parseInt(heightWidth[1])
    };
    sizesObj.push(sizeObj);
  });
  return sizesObj;
}

function getSupportedMediaTypes(bidderCode) {
  var result = [];
  if (exports.videoAdapters.includes(bidderCode)) result.push('video');
  if (_native.nativeAdapters.includes(bidderCode)) result.push('native');
  return result;
}

exports.videoAdapters = []; // added by adapterLoader for now

exports.registerBidAdapter = function (bidAdaptor, bidderCode) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref3$supportedMediaT = _ref3.supportedMediaTypes,
      supportedMediaTypes = _ref3$supportedMediaT === undefined ? [] : _ref3$supportedMediaT;

  if (bidAdaptor && bidderCode) {
    if (typeof bidAdaptor.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdaptor;

      if (supportedMediaTypes.includes('video')) {
        exports.videoAdapters.push(bidderCode);
      }
      if (supportedMediaTypes.includes('native')) {
        _native.nativeAdapters.push(bidderCode);
      }
    } else {
      utils.logError('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    utils.logError('bidAdaptor or bidderCode not specified');
  }
};

exports.aliasBidAdapter = function (bidderCode, alias) {
  var existingAlias = _bidderRegistry[alias];

  if (typeof existingAlias === 'undefined') {
    var bidAdaptor = _bidderRegistry[bidderCode];
    if (typeof bidAdaptor === 'undefined') {
      utils.logError('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adaptermanager.aliasBidAdapter');
    } else {
      try {
        var newAdapter = void 0;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode);
        // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0
        if (bidAdaptor.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdaptor.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdaptor.getSpec();
          newAdapter = (0, _bidderFactory.newBidder)(_extends({}, spec, { code: alias }));
        }
        this.registerBidAdapter(newAdapter, alias, {
          supportedMediaTypes: supportedMediaTypes
        });
      } catch (e) {
        utils.logError(bidderCode + ' bidder does not currently support aliasing.', 'adaptermanager.aliasBidAdapter');
      }
    }
  } else {
    utils.logMessage('alias name "' + alias + '" has been already specified.');
  }
};

exports.registerAnalyticsAdapter = function (_ref4) {
  var adapter = _ref4.adapter,
      code = _ref4.code;

  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = adapter;
    } else {
      utils.logError('Prebid Error: Analytics adaptor error for analytics "' + code + '"\n        analytics adapter must implement an enableAnalytics() function');
    }
  } else {
    utils.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};

exports.enableAnalytics = function (config) {
  if (!utils.isArray(config)) {
    config = [config];
  }

  utils._each(config, function (adapterConfig) {
    var adapter = _analyticsRegistry[adapterConfig.provider];
    if (adapter) {
      adapter.enableAnalytics(adapterConfig);
    } else {
      utils.logError('Prebid Error: no analytics adapter found in registry for\n        ' + adapterConfig.provider + '.');
    }
  });
};

exports.setBidderSequence = function (order) {
  if (VALID_ORDERS[order]) {
    _bidderSequence = order;
  } else {
    utils.logWarn('Invalid order: ' + order + '. Bidder Sequence was not set.');
  }
};

exports.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
};

exports.setS2SConfig = function (config) {
  _s2sConfig = config;
};

// the s2sTesting module is injected when it's loaded rather than being imported
// importing it causes the packager to include it even when it's not explicitly included in the build
exports.setS2STestingModule = function (module) {
  s2sTestingModule = module;
};

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * events.js
 */
var utils = __webpack_require__(0);
var CONSTANTS = __webpack_require__(4);
var slice = Array.prototype.slice;
var push = Array.prototype.push;

// define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];
var allEvents = utils._map(CONSTANTS.EVENTS, function (v) {
  return v;
});

var idPaths = CONSTANTS.EVENT_ID_PATHS;

// keep a record of all events fired
var eventsFired = [];

module.exports = function () {
  var _handlers = {};
  var _public = {};

  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */
  function _dispatch(eventString, args) {
    utils.logMessage('Emitting event for: ' + eventString);

    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || { que: [] };
    var eventKeys = utils._map(event, function (v, k) {
      return k;
    });

    var callbacks = [];

    // record the event:
    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key
    });

    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */
    if (key && utils.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }

    /** Push each general callback to the `callbacks` array. */
    push.apply(callbacks, event.que);

    /** call each of the callbacks */
    utils._each(callbacks, function (fn) {
      if (!fn) return;
      try {
        fn.apply(null, args);
      } catch (e) {
        utils.logError('Error executing handler:', 'events.js', e);
      }
    });
  }

  function _checkAvailableEvent(event) {
    return utils.contains(allEvents, event);
  }

  _public.on = function (eventString, handler, id) {
    // check whether available event or not
    if (_checkAvailableEvent(eventString)) {
      var event = _handlers[eventString] || { que: [] };

      if (id) {
        event[id] = event[id] || { que: [] };
        event[id].que.push(handler);
      } else {
        event.que.push(handler);
      }

      _handlers[eventString] = event;
    } else {
      utils.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };

  _public.emit = function (event) {
    var args = slice.call(arguments, 1);
    _dispatch(event, args);
  };

  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];

    if (utils.isEmpty(event) || utils.isEmpty(event.que) && utils.isEmpty(event[id])) {
      return;
    }

    if (id && (utils.isEmpty(event[id]) || utils.isEmpty(event[id].que))) {
      return;
    }

    if (id) {
      utils._each(event[id].que, function (_handler) {
        var que = event[id].que;
        if (_handler === handler) {
          que.splice(utils.indexOf.call(que, _handler), 1);
        }
      });
    } else {
      utils._each(event.que, function (_handler) {
        var que = event.que;
        if (_handler === handler) {
          que.splice(utils.indexOf.call(que, _handler), 1);
        }
      });
    }

    _handlers[eventString] = event;
  };

  _public.get = function () {
    return _handlers;
  };

  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */
  _public.getEvents = function () {
    var arrayCopy = [];
    utils._each(eventsFired, function (value) {
      var newProp = _extends({}, value);
      arrayCopy.push(newProp);
    });

    return arrayCopy;
  };

  return _public;
}();

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 */

/** @type MediaType */
var NATIVE = exports.NATIVE = 'native';
/** @type MediaType */
var VIDEO = exports.VIDEO = 'video';
/** @type MediaType */
var BANNER = exports.BANNER = 'banner';

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.parseQS = parseQS;
exports.formatQS = formatQS;
exports.parse = parse;
exports.format = format;
function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce(function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }
    return acc;
  }, {});
}

function formatQS(query) {
  return Object.keys(query).map(function (k) {
    return Array.isArray(query[k]) ? query[k].map(function (v) {
      return k + '[]=' + v;
    }).join('&') : k + '=' + query[k];
  }).join('&');
}

function parse(url, options) {
  var parsed = document.createElement('a');
  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  }
  return {
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}

function format(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ':' + obj.port : '')) + (obj.pathname || '') + (obj.search ? '?' + formatQS(obj.search || '') : '') + (obj.hash ? '#' + obj.hash : '');
}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasNonNativeBidder = exports.nativeBidder = exports.nativeAdUnit = exports.NATIVE_TARGETING_KEYS = exports.NATIVE_KEYS = exports.nativeAdapters = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.processNativeAdUnitParams = processNativeAdUnitParams;
exports.nativeBidIsValid = nativeBidIsValid;
exports.fireNativeTrackers = fireNativeTrackers;
exports.getNativeTargeting = getNativeTargeting;

var _utils = __webpack_require__(0);

var nativeAdapters = exports.nativeAdapters = [];

var NATIVE_KEYS = exports.NATIVE_KEYS = {
  title: 'hb_native_title',
  body: 'hb_native_body',
  sponsoredBy: 'hb_native_brand',
  image: 'hb_native_image',
  icon: 'hb_native_icon',
  clickUrl: 'hb_native_linkurl',
  cta: 'hb_native_cta'
};

var NATIVE_TARGETING_KEYS = exports.NATIVE_TARGETING_KEYS = Object.keys(NATIVE_KEYS).map(function (key) {
  return NATIVE_KEYS[key];
});

var IMAGE = {
  image: { required: true },
  title: { required: true },
  sponsoredBy: { required: true },
  clickUrl: { required: true },
  body: { required: false },
  icon: { required: false }
};

var SUPPORTED_TYPES = {
  image: IMAGE
};

/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */
function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    return SUPPORTED_TYPES[params.type];
  }

  return params;
}

/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */
function typeIsSupported(type) {
  if (!(type && Object.keys(SUPPORTED_TYPES).includes(type))) {
    (0, _utils.logError)(type + ' nativeParam is not supported');
    return false;
  }

  return true;
}

/**
 * Helper functions for working with native-enabled adUnits
 * TODO: abstract this and the video helper functions into general
 * adunit validation helper functions
 */
var nativeAdUnit = exports.nativeAdUnit = function nativeAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === 'native';
  var mediaTypes = (0, _utils.deepAccess)(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = exports.nativeBidder = function nativeBidder(bid) {
  return nativeAdapters.includes(bid.bidder);
};
var hasNonNativeBidder = exports.hasNonNativeBidder = function hasNonNativeBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !nativeBidder(bid);
  }).length;
};

/*
 * Validate that the native assets on this bid contain all assets that were
 * marked as required in the adUnit configuration.
 */
function nativeBidIsValid(bid) {
  var bidRequest = (0, _utils.getBidRequest)(bid.adId);
  if (!bidRequest) {
    return false;
  }

  // all native bid responses must define a landing page url
  if (!(0, _utils.deepAccess)(bid, 'native.clickUrl')) {
    return false;
  }

  var requestedAssets = bidRequest.nativeParams;
  if (!requestedAssets) {
    return true;
  }

  var requiredAssets = Object.keys(requestedAssets).filter(function (key) {
    return requestedAssets[key].required;
  });
  var returnedAssets = Object.keys(bid['native']).filter(function (key) {
    return bid['native'][key];
  });

  return requiredAssets.every(function (asset) {
    return returnedAssets.includes(asset);
  });
}

/*
 * Native responses may have associated impression or click trackers.
 * This retrieves the appropriate tracker urls for the given ad object and
 * fires them. As a native creatives may be in a cross-origin frame, it may be
 * necessary to invoke this function via postMessage. secureCreatives is
 * configured to fire this function when it receives a `message` of 'Prebid Native'
 * and an `adId` with the value of the `bid.adId`. When a message is posted with
 * these parameters, impression trackers are fired. To fire click trackers, the
 * message should contain an `action` set to 'click'.
 *
 * // Native creative template example usage
 * <a href="%%CLICK_URL_UNESC%%%%PATTERN:hb_native_linkurl%%"
 *    target="_blank"
 *    onclick="fireTrackers('click')">
 *    %%PATTERN:hb_native_title%%
 * </a>
 *
 * <script>
 *   function fireTrackers(action) {
 *     var message = {message: 'Prebid Native', adId: '%%PATTERN:hb_adid%%'};
 *     if (action === 'click') {message.action = 'click';} // fires click trackers
 *     window.parent.postMessage(JSON.stringify(message), '*');
 *   }
 *   fireTrackers(); // fires impressions when creative is loaded
 * </script>
 */
function fireNativeTrackers(message, adObject) {
  var trackers = void 0;

  if (message.action === 'click') {
    trackers = adObject['native'] && adObject['native'].clickTrackers;
  } else {
    trackers = adObject['native'] && adObject['native'].impressionTrackers;
  }

  (trackers || []).forEach(_utils.triggerPixel);
}

/**
 * Gets native targeting key-value paris
 * @param {Object} bid
 * @return {Object} targeting
 */
function getNativeTargeting(bid) {
  var keyValues = {};

  Object.keys(bid['native']).forEach(function (asset) {
    var key = NATIVE_KEYS[asset];
    var value = bid['native'][asset];

    // native image-type assets can be a string or an object with a url prop
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.url) {
      value = value.url;
    }

    if (key) {
      keyValues[key] = value;
    }
  });

  return keyValues;
}

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Renderer = Renderer;

var _adloader = __webpack_require__(5);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * @typedef {object} Renderer
 *
 * A Renderer stores some functions which are used to render a particular Bid.
 * These are used in Outstream Video Bids, returned on the Bid by the adapter, and will
 * be used to render that bid unless the Publisher overrides them.
 */

function Renderer(options) {
  var _this = this;

  var url = options.url,
      config = options.config,
      id = options.id,
      callback = options.callback,
      loaded = options.loaded;

  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id;

  // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadScript, at which point the the command
  // queue will be processed
  this.loaded = loaded;
  this.cmd = [];
  this.push = function (func) {
    if (typeof func !== 'function') {
      utils.logError('Commands given to Renderer.push must be wrapped in a function');
      return;
    }
    _this.loaded ? func.call() : _this.cmd.push(func);
  };

  // bidders may override this with the `callback` property given to `install`
  this.callback = callback || function () {
    _this.loaded = true;
    _this.process();
  };

  // we expect to load a renderer url once only so cache the request to load script
  (0, _adloader.loadScript)(url, this.callback, true);
}

Renderer.install = function (_ref) {
  var url = _ref.url,
      config = _ref.config,
      id = _ref.id,
      callback = _ref.callback,
      loaded = _ref.loaded;

  return new Renderer({ url: url, config: config, id: id, callback: callback, loaded: loaded });
};

Renderer.prototype.getConfig = function () {
  return this.config;
};

Renderer.prototype.setRender = function (fn) {
  this.render = fn;
};

Renderer.prototype.setEventHandlers = function (handlers) {
  this.handlers = handlers;
};

Renderer.prototype.handleVideoEvent = function (_ref2) {
  var id = _ref2.id,
      eventName = _ref2.eventName;

  if (typeof this.handlers[eventName] === 'function') {
    this.handlers[eventName]();
  }

  utils.logMessage('Prebid Renderer event for id ' + id + ' type ' + eventName);
};

/*
 * Calls functions that were pushed to the command queue before the
 * renderer was loaded by `loadScript`
 */
Renderer.prototype.process = function () {
  while (this.cmd.length > 0) {
    try {
      this.cmd.shift().call();
    } catch (error) {
      utils.logError('Error processing Renderer command: ', error);
    }
  }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSync = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.newUserSync = newUserSync;

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _config = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// Set userSync default values
_config.config.setDefaults({
  'userSync': {
    syncEnabled: true,
    pixelEnabled: true,
    syncsPerBidder: 5,
    syncDelay: 3000
  }
});

/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */
function newUserSync(userSyncDependencies) {
  var publicApi = {};
  // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults
  var queue = getDefaultQueue();

  // Whether or not user syncs have been trigger on this page load
  var hasFired = false;
  // How many bids for each adapter
  var numAdapterBids = {};

  // Use what is in config by default
  var usConfig = userSyncDependencies.config;
  // Update if it's (re)set
  _config.config.getConfig('userSync', function (conf) {
    usConfig = _extends(usConfig, conf.userSync);
  });

  /**
   * @function getDefaultQueue
   * @summary Returns the default empty queue
   * @private
   * @return {object} A queue with no syncs
   */
  function getDefaultQueue() {
    return {
      image: [],
      iframe: []
    };
  }

  /**
   * @function fireSyncs
   * @summary Trigger all user syncs in the queue
   * @private
   */
  function fireSyncs() {
    if (!usConfig.syncEnabled || !userSyncDependencies.browserSupportsCookies || hasFired) {
      return;
    }

    try {
      // Image pixels
      fireImagePixels();
      // Iframe syncs
      loadIframes();
    } catch (e) {
      return utils.logError('Error firing user syncs', e);
    }
    // Reset the user sync queue
    queue = getDefaultQueue();
    hasFired = true;
  }

  /**
   * @function fireImagePixels
   * @summary Loops through user sync pixels and fires each one
   * @private
   */
  function fireImagePixels() {
    if (!usConfig.pixelEnabled) {
      return;
    }
    // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out
    utils.shuffle(queue.image).forEach(function (sync) {
      var _sync = _slicedToArray(sync, 2),
          bidderName = _sync[0],
          trackingPixelUrl = _sync[1];

      utils.logMessage('Invoking image pixel user sync for bidder: ' + bidderName);
      // Create image object and add the src url
      utils.triggerPixel(trackingPixelUrl);
    });
  }

  /**
   * @function loadIframes
   * @summary Loops through iframe syncs and loads an iframe element into the page
   * @private
   */
  function loadIframes() {
    if (!usConfig.iframeEnabled) {
      return;
    }
    // Randomize the order of these syncs just like the pixels above
    utils.shuffle(queue.iframe).forEach(function (sync) {
      var _sync2 = _slicedToArray(sync, 2),
          bidderName = _sync2[0],
          iframeUrl = _sync2[1];

      utils.logMessage('Invoking iframe user sync for bidder: ' + bidderName);
      // Insert iframe into DOM
      utils.insertUserSyncIframe(iframeUrl);
    });
  }

  /**
   * @function incrementAdapterBids
   * @summary Increment the count of user syncs queue for the adapter
   * @private
   * @params {object} numAdapterBids The object contain counts for all adapters
   * @params {string} bidder The name of the bidder adding a sync
   * @returns {object} The updated version of numAdapterBids
   */
  function incrementAdapterBids(numAdapterBids, bidder) {
    if (!numAdapterBids[bidder]) {
      numAdapterBids[bidder] = 1;
    } else {
      numAdapterBids[bidder] += 1;
    }
    return numAdapterBids;
  }

  /**
   * @function registerSync
   * @summary Add sync for this bidder to a queue to be fired later
   * @public
   * @params {string} type The type of the sync including image, iframe
   * @params {string} bidder The name of the adapter. e.g. "rubicon"
   * @params {string} url Either the pixel url or iframe url depending on the type
    * @example <caption>Using Image Sync</caption>
   * // registerSync(type, adapter, pixelUrl)
   * userSync.registerSync('image', 'rubicon', 'http://example.com/pixel')
   */
  publicApi.registerSync = function (type, bidder, url) {
    if (!usConfig.syncEnabled || !utils.isArray(queue[type])) {
      return utils.logWarn('User sync type "' + type + '" not supported');
    }
    if (!bidder) {
      return utils.logWarn('Bidder is required for registering sync');
    }
    if (Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return utils.logWarn('Number of user syncs exceeded for "{$bidder}"');
    }
    // All bidders are enabled by default. If specified only register for enabled bidders.
    var hasEnabledBidders = usConfig.enabledBidders && usConfig.enabledBidders.length;
    if (hasEnabledBidders && usConfig.enabledBidders.indexOf(bidder) < 0) {
      return utils.logWarn('Bidder "' + bidder + '" not supported');
    }
    queue[type].push([bidder, url]);
    numAdapterBids = incrementAdapterBids(numAdapterBids, bidder);
  };

  /**
   * @function syncUsers
   * @summary Trigger all the user syncs based on publisher-defined timeout
   * @public
   * @params {int} timeout The delay in ms before syncing data - default 0
   */
  publicApi.syncUsers = function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (timeout) {
      return window.setTimeout(fireSyncs, Number(timeout));
    }
    fireSyncs();
  };

  /**
   * @function triggerUserSyncs
   * @summary A `syncUsers` wrapper for determining if enableOverride has been turned on
   * @public
   */
  publicApi.triggerUserSyncs = function () {
    if (usConfig.enableOverride) {
      publicApi.syncUsers();
    }
  };

  return publicApi;
}

var browserSupportsCookies = !utils.isSafariBrowser() && utils.cookiesAreEnabled();

var userSync = exports.userSync = newUserSync({
  config: _config.config.getConfig('userSync'),
  browserSupportsCookies: browserSupportsCookies
});

/**
 * @typedef {Object} UserSyncDependencies
 *
 * @property {UserSyncConfig} config
 * @property {boolean} browserSupportsCookies True if the current browser supports cookies, and false otherwise.
 */

/**
 * @typedef {Object} UserSyncConfig
 *
 * @property {boolean} enableOverride
 * @property {boolean} syncEnabled
 * @property {boolean} pixelEnabled
 * @property {boolean} iframeEnabled
 * @property {int} syncsPerBidder
 * @property {string[]} enabledBidders
 */

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var core = __webpack_require__(14);
var hide = __webpack_require__(22);
var redefine = __webpack_require__(350);
var ctx = __webpack_require__(33);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _utils = __webpack_require__(0);

var _cpmBucketManager = __webpack_require__(28);

var _native = __webpack_require__(15);

var _video = __webpack_require__(29);

var _videoCache = __webpack_require__(48);

var _Renderer = __webpack_require__(17);

var _config = __webpack_require__(8);

var _hook = __webpack_require__(49);

var CONSTANTS = __webpack_require__(4);
var AUCTION_END = CONSTANTS.EVENTS.AUCTION_END;
var utils = __webpack_require__(0);
var events = __webpack_require__(11);

var externalCallbacks = { byAdUnit: [], all: [], oneTime: null, timer: false };
var defaultBidderSettingsMap = {};

/**
 * Returns a list of bidders that we haven't received a response yet
 * @return {array} [description]
 */
exports.getTimedOutBidders = function () {
  return pbjs._bidsRequested.map(getBidderCode).filter(_utils.uniques).filter(function (bidder) {
    return pbjs._bidsReceived.map(getBidders).filter(_utils.uniques).indexOf(bidder) < 0;
  });
};

function timestamp() {
  return new Date().getTime();
}

function getBidderCode(bidSet) {
  return bidSet.bidderCode;
}

function getBidders(bid) {
  return bid.bidder;
}

function bidsBackAdUnit(adUnitCode) {
  var _this = this;

  var requested = pbjs._bidsRequested.map(function (request) {
    return request.bids.filter(_utils.adUnitsFilter.bind(_this, pbjs._adUnitCodes)).filter(function (bid) {
      return bid.placementCode === adUnitCode;
    });
  }).reduce(_utils.flatten, []).map(function (bid) {
    return bid.bidder === 'indexExchange' ? bid.sizes.length : 1;
  }).reduce(add, 0);

  var received = pbjs._bidsReceived.filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  }).length;
  return requested === received;
}

function add(a, b) {
  return a + b;
}

function bidsBackAll() {
  var requested = pbjs._bidsRequested.map(function (request) {
    return request.bids;
  }).reduce(_utils.flatten, []).filter(_utils.adUnitsFilter.bind(this, pbjs._adUnitCodes)).map(function (bid) {
    return bid.bidder === 'indexExchange' ? bid.sizes.length : 1;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);

  var received = pbjs._bidsReceived.filter(_utils.adUnitsFilter.bind(this, pbjs._adUnitCodes)).length;

  return requested === received;
}

exports.bidsBackAll = function () {
  return bidsBackAll();
};

// Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.
function isValidBid(bid, adUnitCode) {
  function errorMessage(msg) {
    return 'Invalid bid from ' + bid.bidderCode + '. Ignoring bid: ' + msg;
  }

  if (!bid) {
    utils.logError('Some adapter tried to add an undefined bid for ' + adUnitCode + '.');
    return false;
  }
  if (!adUnitCode) {
    utils.logError(errorMessage('No adUnitCode was supplied to addBidResponse.'));
    return false;
  }

  var bidRequest = (0, _utils.getBidderRequest)(bid.bidderCode, adUnitCode);
  if (!bidRequest.start) {
    utils.logError(errorMessage('Cannot find valid matching bid request.'));
    return false;
  }

  if (bid.mediaType === 'native' && !(0, _native.nativeBidIsValid)(bid)) {
    utils.logError(errorMessage('Native bid missing some required properties.'));
    return false;
  }
  if (bid.mediaType === 'video' && !(0, _video.isValidVideoBid)(bid)) {
    utils.logError(errorMessage('Video bid does not have required vastUrl or renderer property'));
    return false;
  }
  if (bid.mediaType === 'banner' && !validBidSize(bid, adUnitCode)) {
    utils.logError(errorMessage('Banner bids require a width and height'));
    return false;
  }

  return true;
}

// check that the bid has a width and height set
function validBidSize(bid, adUnitCode) {
  if ((bid.width || bid.width === 0) && (bid.height || bid.height === 0)) {
    return true;
  }

  var adUnit = (0, _utils.getBidderRequest)(bid.bidderCode, adUnitCode);
  var sizes = adUnit && adUnit.bids && adUnit.bids[0] && adUnit.bids[0].sizes;
  var parsedSizes = utils.parseSizesInput(sizes);

  // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height
  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
        _parsedSizes$0$split2 = _slicedToArray(_parsedSizes$0$split, 2),
        width = _parsedSizes$0$split2[0],
        height = _parsedSizes$0$split2[1];

    bid.width = width;
    bid.height = height;
    return true;
  }

  return false;
}

// Postprocess the bids so that all the universal properties exist, no matter which bidder they came from.
// This should be called before addBidToAuction().
function prepareBidForAuction(bid, adUnitCode) {
  var bidRequest = (0, _utils.getBidderRequest)(bid.bidderCode, adUnitCode);

  _extends(bid, {
    requestId: bidRequest.requestId,
    responseTimestamp: timestamp(),
    requestTimestamp: bidRequest.start,
    cpm: parseFloat(bid.cpm) || 0,
    bidder: bid.bidderCode,
    adUnitCode: adUnitCode
  });

  bid.timeToRespond = bid.responseTimestamp - bid.requestTimestamp;

  // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.
  events.emit(CONSTANTS.EVENTS.BID_ADJUSTMENT, bid);

  // a publisher-defined renderer can be used to render bids
  var adUnitRenderer = bidRequest.bids && bidRequest.bids[0] && bidRequest.bids[0].renderer;

  if (adUnitRenderer) {
    bid.renderer = _Renderer.Renderer.install({ url: adUnitRenderer.url });
    bid.renderer.setRender(adUnitRenderer.render);
  }

  var priceStringsObj = (0, _cpmBucketManager.getPriceBucketString)(bid.cpm, _config.config.getConfig('customPriceBucket'), _config.config.getConfig('currency.granularityMultiplier'));
  bid.pbLg = priceStringsObj.low;
  bid.pbMg = priceStringsObj.med;
  bid.pbHg = priceStringsObj.high;
  bid.pbAg = priceStringsObj.auto;
  bid.pbDg = priceStringsObj.dense;
  bid.pbCg = priceStringsObj.custom;

  // if there is any key value pairs to map do here
  var keyValues;
  if (bid.bidderCode && (bid.cpm > 0 || bid.dealId)) {
    keyValues = getKeyValueTargetingPairs(bid.bidderCode, bid);
  }

  // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs
  bid.adserverTargeting = _extends(bid.adserverTargeting || {}, keyValues);
}

function doCallbacksIfNeeded(bid) {
  if (bid.timeToRespond > pbjs.cbTimeout + pbjs.timeoutBuffer) {
    var timedOut = true;
    exports.executeCallback(timedOut);
  }
}

// Add a bid to the auction.
function addBidToAuction(bid) {
  events.emit(CONSTANTS.EVENTS.BID_RESPONSE, bid);

  pbjs._bidsReceived.push(bid);

  if (bid.adUnitCode && bidsBackAdUnit(bid.adUnitCode)) {
    triggerAdUnitCallbacks(bid.adUnitCode);
  }

  if (bidsBackAll()) {
    exports.executeCallback();
  }
}

// Video bids may fail if the cache is down, or there's trouble on the network.
function tryAddVideoBid(bid) {
  if (_config.config.getConfig('usePrebidCache')) {
    (0, _videoCache.store)([bid], function (error, cacheIds) {
      if (error) {
        utils.logWarn('Failed to save to the video cache: ' + error + '. Video bid must be discarded.');
      } else {
        bid.videoCacheKey = cacheIds[0].uuid;
        if (!bid.vastUrl) {
          bid.vastUrl = (0, _videoCache.getCacheUrl)(bid.videoCacheKey);
        }
        addBidToAuction(bid);
      }
      doCallbacksIfNeeded(bid);
    });
  } else {
    addBidToAuction(bid);
    doCallbacksIfNeeded(bid);
  }
}

/*
 *   This function should be called to by the bidder adapter to register a bid response
 */
exports.addBidResponse = (0, _hook.createHook)('asyncSeries', function (adUnitCode, bid) {
  if (!isValidBid(bid, adUnitCode)) {
    return;
  }
  prepareBidForAuction(bid, adUnitCode);

  if (bid.mediaType === 'video') {
    tryAddVideoBid(bid);
  } else {
    addBidToAuction(bid);
    doCallbacksIfNeeded(bid);
  }
});

function getKeyValueTargetingPairs(bidderCode, custBidObj) {
  var keyValues = {};
  var bidder_settings = pbjs.bidderSettings;

  // 1) set the keys from "standard" setting or from prebid defaults
  if (custBidObj && bidder_settings) {
    // initialize default if not set
    var standardSettings = getStandardBidderSettings();
    setKeys(keyValues, standardSettings, custBidObj);
  }

  if (bidderCode && custBidObj && bidder_settings && bidder_settings[bidderCode] && bidder_settings[bidderCode][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    // 2) set keys from specific bidder setting override if they exist
    setKeys(keyValues, bidder_settings[bidderCode], custBidObj);
    custBidObj.alwaysUseBid = bidder_settings[bidderCode].alwaysUseBid;
    custBidObj.sendStandardTargeting = bidder_settings[bidderCode].sendStandardTargeting;
  } else if (defaultBidderSettingsMap[bidderCode]) {
    // 2) set keys from standard setting. NOTE: this API doesn't seem to be in use by any Adapter
    setKeys(keyValues, defaultBidderSettingsMap[bidderCode], custBidObj);
    custBidObj.alwaysUseBid = defaultBidderSettingsMap[bidderCode].alwaysUseBid;
    custBidObj.sendStandardTargeting = defaultBidderSettingsMap[bidderCode].sendStandardTargeting;
  }

  if (custBidObj['native']) {
    keyValues = _extends({}, keyValues, (0, _native.getNativeTargeting)(custBidObj));
  }

  return keyValues;
}

exports.getKeyValueTargetingPairs = function () {
  return getKeyValueTargetingPairs.apply(undefined, arguments);
};

function setKeys(keyValues, bidderSettings, custBidObj) {
  var targeting = bidderSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();

  utils._each(targeting, function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;

    if (keyValues[key]) {
      utils.logWarn('The key: ' + key + ' is getting ovewritten');
    }

    if (utils.isFn(value)) {
      try {
        value = value(custBidObj);
      } catch (e) {
        utils.logError('bidmanager', 'ERROR', e);
      }
    }

    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === 'hb_deal') && ( // hb_deal is suppressed automatically if not set
    utils.isEmptyStr(value) || value === null || value === undefined)) {
      utils.logInfo("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  });

  return keyValues;
}

exports.registerDefaultBidderSetting = function (bidderCode, defaultSetting) {
  defaultBidderSettingsMap[bidderCode] = defaultSetting;
};

exports.executeCallback = function (timedOut) {
  // if there's still a timeout running, clear it now
  if (!timedOut && externalCallbacks.timer) {
    clearTimeout(externalCallbacks.timer);
  }

  if (externalCallbacks.all.called !== true) {
    processCallbacks(externalCallbacks.all);
    externalCallbacks.all.called = true;

    if (timedOut) {
      var timedOutBidders = exports.getTimedOutBidders();

      if (timedOutBidders.length) {
        events.emit(CONSTANTS.EVENTS.BID_TIMEOUT, timedOutBidders);
      }
    }
  }

  // execute one time callback
  if (externalCallbacks.oneTime) {
    events.emit(AUCTION_END);
    try {
      processCallbacks([externalCallbacks.oneTime]);
    } catch (e) {
      utils.logError('Error executing bidsBackHandler', null, e);
    } finally {
      externalCallbacks.oneTime = null;
      externalCallbacks.timer = false;
      pbjs.clearAuction();
    }
  }
};

exports.externalCallbackReset = function () {
  externalCallbacks.all.called = false;
};

function triggerAdUnitCallbacks(adUnitCode) {
  // todo : get bid responses and send in args
  var singleAdUnitCode = [adUnitCode];
  processCallbacks(externalCallbacks.byAdUnit, singleAdUnitCode);
}

function processCallbacks(callbackQueue, singleAdUnitCode) {
  var _this2 = this;

  if (utils.isArray(callbackQueue)) {
    callbackQueue.forEach(function (callback) {
      var adUnitCodes = singleAdUnitCode || pbjs._adUnitCodes;
      var bids = [pbjs._bidsReceived.filter(_utils.adUnitsFilter.bind(_this2, adUnitCodes)).reduce(groupByPlacement, {})];

      callback.apply(pbjs, bids);
    });
  }
}

/**
 * groupByPlacement is a reduce function that converts an array of Bid objects
 * to an object with placement codes as keys, with each key representing an object
 * with an array of `Bid` objects for that placement
 * @returns {*} as { [adUnitCode]: { bids: [Bid, Bid, Bid] } }
 */
function groupByPlacement(bidsByPlacement, bid) {
  if (!bidsByPlacement[bid.adUnitCode]) {
    bidsByPlacement[bid.adUnitCode] = { bids: [] };
  }

  bidsByPlacement[bid.adUnitCode].bids.push(bid);

  return bidsByPlacement;
}

/**
 * Add a one time callback, that is discarded after it is called
 * @param {Function} callback
 * @param timer Timer to clear if callback is triggered before timer time's out
 */
exports.addOneTimeCallback = function (callback, timer) {
  externalCallbacks.oneTime = callback;
  externalCallbacks.timer = timer;
};

exports.addCallback = function (id, callback, cbEvent) {
  callback.id = id;
  if (CONSTANTS.CB.TYPE.ALL_BIDS_BACK === cbEvent) {
    externalCallbacks.all.push(callback);
  } else if (CONSTANTS.CB.TYPE.AD_UNIT_BIDS_BACK === cbEvent) {
    externalCallbacks.byAdUnit.push(callback);
  }
};

// register event for bid adjustment
events.on(CONSTANTS.EVENTS.BID_ADJUSTMENT, function (bid) {
  adjustBids(bid);
});

function adjustBids(bid) {
  var code = bid.bidderCode;
  var bidPriceAdjusted = bid.cpm;
  var bidCpmAdjustment = void 0;
  if (pbjs.bidderSettings) {
    if (code && pbjs.bidderSettings[code] && typeof pbjs.bidderSettings[code].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = pbjs.bidderSettings[code].bidCpmAdjustment;
    } else if (pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] && typeof pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = pbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment;
    }
    if (bidCpmAdjustment) {
      try {
        bidPriceAdjusted = bidCpmAdjustment(bid.cpm, _extends({}, bid));
      } catch (e) {
        utils.logError('Error during bid adjustment', 'bidmanager.js', e);
      }
    }
  }

  if (bidPriceAdjusted >= 0) {
    bid.cpm = bidPriceAdjusted;
  }
}

exports.adjustBids = function () {
  return adjustBids.apply(undefined, arguments);
};

function getStandardBidderSettings() {
  var granularity = _config.config.getConfig('priceGranularity');
  var bidder_settings = pbjs.bidderSettings;
  if (!bidder_settings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD]) {
    bidder_settings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] = {};
  }
  if (!bidder_settings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    bidder_settings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = [{
      key: 'hb_bidder',
      val: function val(bidResponse) {
        return bidResponse.bidderCode;
      }
    }, {
      key: 'hb_adid',
      val: function val(bidResponse) {
        return bidResponse.adId;
      }
    }, {
      key: 'hb_pb',
      val: function val(bidResponse) {
        if (granularity === CONSTANTS.GRANULARITY_OPTIONS.AUTO) {
          return bidResponse.pbAg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.DENSE) {
          return bidResponse.pbDg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.LOW) {
          return bidResponse.pbLg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.MEDIUM) {
          return bidResponse.pbMg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.HIGH) {
          return bidResponse.pbHg;
        } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.CUSTOM) {
          return bidResponse.pbCg;
        }
      }
    }, {
      key: 'hb_size',
      val: function val(bidResponse) {
        return bidResponse.size;
      }
    }, {
      key: 'hb_deal',
      val: function val(bidResponse) {
        return bidResponse.dealId;
      }
    }];
  }
  return bidder_settings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD];
}

function getStandardBidderAdServerTargeting() {
  return getStandardBidderSettings()[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
}

exports.getStandardBidderAdServerTargeting = getStandardBidderAdServerTargeting;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _utils = __webpack_require__(0);

var _config = __webpack_require__(8);

var _native = __webpack_require__(15);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bidmanager = __webpack_require__(2);
var utils = __webpack_require__(0);
var CONSTANTS = __webpack_require__(4);

var targeting = exports;
var pbTargetingKeys = [];

targeting.resetPresetTargeting = function (adUnitCode) {
  if ((0, _utils.isGptPubadsDefined)()) {
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    var adUnits = pbjs.adUnits.filter(function (adUnit) {
      return adUnitCodes.includes(adUnit.code);
    });
    window.googletag.pubads().getSlots().forEach(function (slot) {
      pbTargetingKeys.forEach(function (key) {
        // reset only registered adunits
        adUnits.forEach(function (unit) {
          if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId()) {
            slot.setTargeting(key, null);
          }
        });
      });
    });
  }
};

targeting.getAllTargeting = function (adUnitCode) {
  var adUnitCodes = getAdUnitCodes(adUnitCode);

  // Get targeting for the winning bid. Add targeting for any bids that have
  // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.
  var targeting = getWinningBidTargeting(adUnitCodes).concat(getAlwaysUseBidTargeting(adUnitCodes)).concat(_config.config.getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes) : []);

  // store a reference of the targeting keys
  targeting.map(function (adUnitCode) {
    Object.keys(adUnitCode).map(function (key) {
      adUnitCode[key].map(function (targetKey) {
        if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
          pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
        }
      });
    });
  });
  return targeting;
};

targeting.setTargeting = function (targetingConfig) {
  window.googletag.pubads().getSlots().forEach(function (slot) {
    targetingConfig.filter(function (targeting) {
      return Object.keys(targeting)[0] === slot.getAdUnitPath() || Object.keys(targeting)[0] === slot.getSlotElementId();
    }).forEach(function (targeting) {
      return targeting[Object.keys(targeting)[0]].forEach(function (key) {
        key[Object.keys(key)[0]].map(function (value) {
          utils.logMessage('Attempting to set key value for slot: ' + slot.getSlotElementId() + ' key: ' + Object.keys(key)[0] + ' value: ' + value);
          return value;
        }).forEach(function (value) {
          slot.setTargeting(Object.keys(key)[0], value);
        });
      });
    });
  });
};

/**
 * normlizes input to a `adUnit.code` array
 * @param  {(string|string[])} adUnitCode [description]
 * @return {string[]}     AdUnit code array
 */
function getAdUnitCodes(adUnitCode) {
  if (typeof adUnitCode === 'string') {
    return [adUnitCode];
  } else if (utils.isArray(adUnitCode)) {
    return adUnitCode;
  }
  return pbjs._adUnitCodes || [];
}

/**
 * Returns top bids for a given adUnit or set of adUnits.
 * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
 * @return {[type]}            [description]
 */
targeting.getWinningBids = function (adUnitCode) {
  var adUnitCodes = getAdUnitCodes(adUnitCode);

  return pbjs._bidsReceived.filter(function (bid) {
    return adUnitCodes.includes(bid.adUnitCode);
  }).filter(function (bid) {
    return bid.cpm > 0;
  }).map(function (bid) {
    return bid.adUnitCode;
  }).filter(_utils.uniques).map(function (adUnitCode) {
    return pbjs._bidsReceived.filter(function (bid) {
      return bid.adUnitCode === adUnitCode ? bid : null;
    }).reduce(_utils.getHighestCpm, getEmptyBid(adUnitCode));
  });
};

targeting.setTargetingForAst = function () {
  var targeting = pbjs.getAdserverTargeting();
  Object.keys(targeting).forEach(function (targetId) {
    return Object.keys(targeting[targetId]).forEach(function (key) {
      utils.logMessage('Attempting to set targeting for targetId: ' + targetId + ' key: ' + key + ' value: ' + targeting[targetId][key]);
      // setKeywords supports string and array as value
      if (utils.isStr(targeting[targetId][key]) || utils.isArray(targeting[targetId][key])) {
        var keywordsObj = {};
        var input = 'hb_adid';
        var nKey = key.substring(0, input.length) === input ? key.toUpperCase() : key;
        keywordsObj[nKey] = targeting[targetId][key];
        window.apntag.setKeywords(targetId, keywordsObj);
      }
    });
  });
};

function getWinningBidTargeting(adUnitCodes) {
  var winners = targeting.getWinningBids(adUnitCodes);
  var standardKeys = getStandardKeys();

  winners = winners.map(function (winner) {
    return _defineProperty({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter(function (key) {
      return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
    }).map(function (key) {
      return _defineProperty({}, key.substring(0, 20), [winner.adserverTargeting[key]]);
    }));
  });

  return winners;
}

function getStandardKeys() {
  return bidmanager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
  .map(function (targeting) {
    return targeting.key;
  }).concat(CONSTANTS.TARGETING_KEYS).filter(_utils.uniques); // standard keys defined in the library.
}

/**
 * Get custom targeting keys for bids that have `alwaysUseBid=true`.
 */
function getAlwaysUseBidTargeting(adUnitCodes) {
  var standardKeys = getStandardKeys();
  return pbjs._bidsReceived.filter(_utils.adUnitsFilter.bind(this, adUnitCodes)).map(function (bid) {
    if (bid.alwaysUseBid) {
      return _defineProperty({}, bid.adUnitCode, Object.keys(bid.adserverTargeting).map(function (key) {
        // Get only the non-standard keys of the losing bids, since we
        // don't want to override the standard keys of the winning bid.
        if (standardKeys.indexOf(key) > -1) {
          return;
        }

        return _defineProperty({}, key.substring(0, 20), [bid.adserverTargeting[key]]);
      }).filter(function (key) {
        return key;
      }));
    }
  }).filter(function (bid) {
    return bid;
  }); // removes empty elements in array;
}

function getBidLandscapeTargeting(adUnitCodes) {
  var standardKeys = CONSTANTS.TARGETING_KEYS.concat(_native.NATIVE_TARGETING_KEYS);
  var bids = [];
  // bucket by adUnitcode
  var buckets = (0, _utils.groupBy)(pbjs._bidsReceived, 'adUnitCode');
  // filter top bid for each bucket by bidder
  Object.keys(buckets).forEach(function (bucketKey) {
    var bidsByBidder = (0, _utils.groupBy)(buckets[bucketKey], 'bidderCode');
    Object.keys(bidsByBidder).forEach(function (key) {
      return bids.push(bidsByBidder[key].reduce(_utils.getHighestCpm, getEmptyBid()));
    });
  });
  // populate targeting keys for the remaining bids
  return bids.map(function (bid) {
    if (bid.adserverTargeting) {
      return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
        return typeof bid.adserverTargeting[key] !== 'undefined';
      })));
    }
  }).filter(function (bid) {
    return bid;
  }); // removes empty elements in array
}

function getTargetingMap(bid, keys) {
  return keys.map(function (key) {
    return _defineProperty({}, (key + '_' + bid.bidderCode).substring(0, 20), [bid.adserverTargeting[key]]);
  });
}

targeting.isApntagDefined = function () {
  if (window.apntag && utils.isFn(window.apntag.setKeywords)) {
    return true;
  }
};

function getEmptyBid(adUnitCode) {
  return {
    adUnitCode: adUnitCode,
    cpm: 0,
    adserverTargeting: {},
    timeToRespond: 0
  };
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(344);
var createDesc = __webpack_require__(349);
module.exports = __webpack_require__(23) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(24)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(35);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(40)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(22)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var utils = __webpack_require__(0);

var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 3,
    'increment': 0.01
  }, {
    'min': 3,
    'max': 8,
    'increment': 0.05
  }, {
    'min': 8,
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'min': 0,
    'max': 5,
    'increment': 0.05
  }, {
    'min': 5,
    'max': 10,
    'increment': 0.1
  }, {
    'min': 10,
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var cpmFloat = parseFloat(cpm);
  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';
  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }
  var cap = config.buckets.reduce(function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }
    return curr;
  }, {
    'max': 0
  });
  var bucket = config.buckets.find(function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;
      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }
      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucket.min * granularityMultiplier) {
      return bucket;
    }
  });
  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket.increment, bucket.precision, granularityMultiplier);
  }
  return cpmStr;
}

function isValidPriceConfig(config) {
  if (utils.isEmpty(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }
  var isValid = true;
  config.buckets.forEach(function (bucket) {
    if (typeof bucket.min === 'undefined' || !bucket.max || !bucket.increment) {
      isValid = false;
    }
  });
  return isValid;
}

function getCpmTarget(cpm, increment, precision, granularityMultiplier) {
  if (typeof precision === 'undefined') {
    precision = _defaultPrecision;
  }
  var bucketSize = 1 / (increment * granularityMultiplier);
  return (Math.floor(cpm * bucketSize) / bucketSize).toFixed(precision);
}

exports.getPriceBucketString = getPriceBucketString;
exports.isValidPriceConfig = isValidPriceConfig;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasNonVideoBidder = exports.videoBidder = exports.videoAdUnit = undefined;
exports.isValidVideoBid = isValidVideoBid;

var _adaptermanager = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _config = __webpack_require__(8);

var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';

/**
 * Helper functions for working with video-enabled adUnits
 */
var videoAdUnit = exports.videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = (0, _utils.deepAccess)(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = exports.videoBidder = function videoBidder(bid) {
  return _adaptermanager.videoAdapters.includes(bid.bidder);
};
var hasNonVideoBidder = exports.hasNonVideoBidder = function hasNonVideoBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !videoBidder(bid);
  }).length;
};

/**
 * @typedef {object} VideoBid
 * @property {string} adId id of the bid
 */

/**
 * Validate that the assets required for video context are present on the bid
 * @param {VideoBid} bid video bid to validate
 * @return {boolean} If object is valid
 */
function isValidVideoBid(bid) {
  var bidRequest = (0, _utils.getBidRequest)(bid.adId);

  var videoMediaType = bidRequest && (0, _utils.deepAccess)(bidRequest, 'mediaTypes.video');
  var context = videoMediaType && (0, _utils.deepAccess)(videoMediaType, 'context');

  // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content
  if (!bidRequest || videoMediaType && context !== OUTSTREAM) {
    // xml-only video bids require prebid-cache to be enabled
    if (!_config.config.getConfig('usePrebidCache') && bid.vastXml && !bid.vastUrl) {
      (0, _utils.logError)('\n        This bid contains only vastXml and will not work when prebid-cache is disabled.\n        Try enabling prebid-cache with pbjs.setConfig({ usePrebidCache: true });\n      ');
      return false;
    }

    return !!(bid.vastUrl || bid.vastXml);
  }

  // outstream bids require a renderer on the bid or pub-defined on adunit
  if (context === OUTSTREAM) {
    return !!(bid.renderer || bidRequest.renderer);
  }

  return true;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */
function Bid(statusCode, bidRequest) {
  var _bidId = bidRequest && bidRequest.bidId || utils.getUniqueIdentifierStr();
  var _statusCode = statusCode || 0;

  this.bidderCode = bidRequest && bidRequest.bidder || '';
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = _bidId;
  this.mediaType = 'banner';

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';
      case 1:
        return 'Bid available';
      case 2:
        return 'Bid returned empty or error response';
      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  };

  // returns the size of the bid creative. Concatenation of width and height by ‘x’.
  this.getSize = function () {
    return this.width + 'x' + this.height;
  };
}

// Bid factory function.
exports.createBid = function (statusCode, bidRequest) {
  return new Bid(statusCode, bidRequest);
};

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobal = getGlobal;
// if pbjs already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.pbjs = window.pbjs || {};
window.pbjs.cmd = window.pbjs.cmd || [];
window.pbjs.que = window.pbjs.que || [];

function getGlobal() {
  return window.pbjs;
}

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(351);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(33);
var IObject = __webpack_require__(26);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(38);
var asc = __webpack_require__(352);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prebidGlobal = __webpack_require__(31);

var _utils = __webpack_require__(0);

var _video = __webpack_require__(29);

var _native = __webpack_require__(15);

__webpack_require__(341);

var _url = __webpack_require__(13);

var _secureCreatives = __webpack_require__(369);

var _userSync = __webpack_require__(18);

var _adloader = __webpack_require__(5);

var _ajax = __webpack_require__(7);

var _config = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /** @module pbjs */

var pbjs = (0, _prebidGlobal.getGlobal)();

var CONSTANTS = __webpack_require__(4);
var utils = __webpack_require__(0);
var bidmanager = __webpack_require__(2);
var adaptermanager = __webpack_require__(1);
var bidfactory = __webpack_require__(3);
var events = __webpack_require__(11);
var adserver = __webpack_require__(370);
var targeting = __webpack_require__(21);
var syncUsers = _userSync.userSync.syncUsers,
    triggerUserSyncs = _userSync.userSync.triggerUserSyncs;

/* private variables */

var BID_WON = CONSTANTS.EVENTS.BID_WON;
var SET_TARGETING = CONSTANTS.EVENTS.SET_TARGETING;
var ADD_AD_UNITS = CONSTANTS.EVENTS.ADD_AD_UNITS;

var auctionRunning = false;
var bidRequestQueue = [];

var eventValidators = {
  bidWon: checkDefinedPlacement
};

/* Public vars */

pbjs._bidsRequested = [];
pbjs._bidsReceived = [];
// _adUnitCodes stores the current filter to use for adUnits as an array of adUnitCodes
pbjs._adUnitCodes = [];
pbjs._winningBids = [];
pbjs._adsReceived = [];

pbjs.bidderSettings = pbjs.bidderSettings || {};

/** @deprecated - use pbjs.setConfig({ bidderTimeout: <timeout> }) */
pbjs.bidderTimeout = pbjs.bidderTimeout;

// current timeout set in `requestBids` or to default `bidderTimeout`
pbjs.cbTimeout = pbjs.cbTimeout || 200;

// timeout buffer to adjust for bidder CDN latency
pbjs.timeoutBuffer = 200;

/** @deprecated - use pbjs.setConfig({ debug: <true|false> }) */
pbjs.logging = pbjs.logging;

/** @deprecated - use pbjs.setConfig({ publisherDomain: <domain> ) */
pbjs.publisherDomain = pbjs.publisherDomain;

// let the world know we are loaded
pbjs.libLoaded = true;

// version auto generated from build
pbjs.version = 'v0.34.1';
utils.logInfo('Prebid.js v0.34.1 loaded');

// create adUnit array
pbjs.adUnits = pbjs.adUnits || [];

// Allow publishers who enable user sync override to trigger their sync
pbjs.triggerUserSyncs = triggerUserSyncs;

function checkDefinedPlacement(id) {
  var placementCodes = pbjs._bidsRequested.map(function (bidSet) {
    return bidSet.bids.map(function (bid) {
      return bid.placementCode;
    });
  }).reduce(_utils.flatten).filter(_utils.uniques);

  if (!utils.contains(placementCodes, id)) {
    utils.logError('The "' + id + '" placement is not defined.');
    return;
  }

  return true;
}

/**
 * When a request for bids is made any stale bids remaining will be cleared for
 * a placement included in the outgoing bid request.
 */
function clearPlacements() {
  pbjs._bidsRequested = [];

  // leave bids received for ad slots not in this bid request
  pbjs._bidsReceived = pbjs._bidsReceived.filter(function (bid) {
    return !pbjs._adUnitCodes.includes(bid.adUnitCode);
  });
}

function setRenderSize(doc, width, height) {
  if (doc.defaultView && doc.defaultView.frameElement) {
    doc.defaultView.frameElement.width = width;
    doc.defaultView.frameElement.height = height;
  }
}

/// ///////////////////////////////
//                              //
//    Start Public APIs         //
//                              //
/// ///////////////////////////////

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param  {string} [adunitCode] adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCodeStr
 * @return {Array}  returnObj return bids array
 */
pbjs.getAdserverTargetingForAdUnitCodeStr = function (adunitCode) {
  utils.logInfo('Invoking pbjs.getAdserverTargetingForAdUnitCodeStr', arguments);

  // call to retrieve bids array
  if (adunitCode) {
    var res = pbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return utils.transformAdServerTargetingObj(res);
  } else {
    utils.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
  }
};

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCode
 * @returns {Object}  returnObj return bids
 */
pbjs.getAdserverTargetingForAdUnitCode = function (adUnitCode) {
  return pbjs.getAdserverTargeting(adUnitCode)[adUnitCode];
};

/**
 * returns all ad server targeting for all ad units
 * @return {Object} Map of adUnitCodes and targeting values []
 * @alias module:pbjs.getAdserverTargeting
 */

pbjs.getAdserverTargeting = function (adUnitCode) {
  utils.logInfo('Invoking pbjs.getAdserverTargeting', arguments);
  return targeting.getAllTargeting(adUnitCode).map(function (targeting) {
    return _defineProperty({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map(function (target) {
      return _defineProperty({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(', '));
    }).reduce(function (p, c) {
      return _extends(c, p);
    }, {}));
  }).reduce(function (accumulator, targeting) {
    var key = Object.keys(targeting)[0];
    accumulator[key] = _extends({}, accumulator[key], targeting[key]);
    return accumulator;
  }, {});
};

/**
 * This function returns the bid responses at the given moment.
 * @alias module:pbjs.getBidResponses
 * @return {Object}            map | object that contains the bidResponses
 */

pbjs.getBidResponses = function () {
  utils.logInfo('Invoking pbjs.getBidResponses', arguments);
  var responses = pbjs._bidsReceived.filter(_utils.adUnitsFilter.bind(this, pbjs._adUnitCodes));

  // find the last requested id to get responses for most recent auction only
  var currentRequestId = responses && responses.length && responses[responses.length - 1].requestId;

  return responses.map(function (bid) {
    return bid.adUnitCode;
  }).filter(_utils.uniques).map(function (adUnitCode) {
    return responses.filter(function (bid) {
      return bid.requestId === currentRequestId && bid.adUnitCode === adUnitCode;
    });
  }).filter(function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  }).map(function (bids) {
    return _defineProperty({}, bids[0].adUnitCode, { bids: bids });
  }).reduce(function (a, b) {
    return _extends(a, b);
  }, {});
};

/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */

pbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = pbjs._bidsReceived.filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};

/**
 * Set query string targeting on one or more GPT ad units.
 * @param {(string|string[])} adUnit a single `adUnit.code` or multiple.
 * @alias module:pbjs.setTargetingForGPTAsync
 */
pbjs.setTargetingForGPTAsync = function (adUnit) {
  utils.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments);
  if (!(0, _utils.isGptPubadsDefined)()) {
    utils.logError('window.googletag is not defined on the page');
    return;
  }

  // get our ad unit codes
  var targetingSet = targeting.getAllTargeting(adUnit);

  // first reset any old targeting
  targeting.resetPresetTargeting(adUnit);

  // now set new targeting keys
  targeting.setTargeting(targetingSet);

  // emit event
  events.emit(SET_TARGETING);
};

/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @alias module:pbjs.setTargetingForAst
 */
pbjs.setTargetingForAst = function () {
  utils.logInfo('Invoking pbjs.setTargetingForAn', arguments);
  if (!targeting.isApntagDefined()) {
    utils.logError('window.apntag is not defined on the page');
    return;
  }

  targeting.setTargetingForAst();

  // emit event
  events.emit(SET_TARGETING);
};

/**
 * Returns a bool if all the bids have returned or timed out
 * @alias module:pbjs.allBidsAvailable
 * @return {bool} all bids available
 *
 * @deprecated This function will be removed in Prebid 1.0
 * Alternative solution is in progress.
 * See https://github.com/prebid/Prebid.js/issues/1087 for more details.
 */
pbjs.allBidsAvailable = function () {
  utils.logWarn('pbjs.allBidsAvailable will be removed in Prebid 1.0. Alternative solution is in progress. See https://github.com/prebid/Prebid.js/issues/1087 for more details.');
  utils.logInfo('Invoking pbjs.allBidsAvailable', arguments);
  return bidmanager.bidsBackAll();
};

/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {HTMLDocument} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */
pbjs.renderAd = function (doc, id) {
  utils.logInfo('Invoking pbjs.renderAd', arguments);
  utils.logMessage('Calling renderAd with adId :' + id);
  if (doc && id) {
    try {
      // lookup ad by ad Id
      var bid = pbjs._bidsReceived.find(function (bid) {
        return bid.adId === id;
      });
      if (bid) {
        // replace macros according to openRTB with price paid = bid.cpm
        bid.ad = utils.replaceAuctionPrice(bid.ad, bid.cpm);
        bid.adUrl = utils.replaceAuctionPrice(bid.adUrl, bid.cpm);
        // save winning bids
        pbjs._winningBids.push(bid);

        // emit 'bid won' event here
        events.emit(BID_WON, bid);

        var height = bid.height,
            width = bid.width,
            ad = bid.ad,
            mediaType = bid.mediaType,
            adUrl = bid.adUrl,
            renderer = bid.renderer;


        if (renderer && renderer.url) {
          renderer.render(bid);
        } else if (doc === document && !utils.inIframe() || mediaType === 'video') {
          utils.logError('Error trying to write ad. Ad render call ad id ' + id + ' was prevented from writing to the main document.');
        } else if (ad) {
          doc.write(ad);
          doc.close();
          setRenderSize(doc, width, height);
        } else if (adUrl) {
          var iframe = utils.createInvisibleIframe();
          iframe.height = height;
          iframe.width = width;
          iframe.style.display = 'inline';
          iframe.style.overflow = 'hidden';
          iframe.src = adUrl;

          utils.insertElement(iframe, doc, 'body');
          setRenderSize(doc, width, height);
        } else {
          utils.logError('Error trying to write ad. No ad for bid response id: ' + id);
        }
      } else {
        utils.logError('Error trying to write ad. Cannot find ad by given id : ' + id);
      }
    } catch (e) {
      utils.logError('Error trying to write ad Id :' + id + ' to the page:' + e.message);
    }
  } else {
    utils.logError('Error trying to write ad Id :' + id + ' to the page. Missing document or adId');
  }
};

/**
 * Remove adUnit from the pbjs configuration
 * @param  {string} adUnitCode the adUnitCode to remove
 * @alias module:pbjs.removeAdUnit
 */
pbjs.removeAdUnit = function (adUnitCode) {
  utils.logInfo('Invoking pbjs.removeAdUnit', arguments);
  if (adUnitCode) {
    for (var i = 0; i < pbjs.adUnits.length; i++) {
      if (pbjs.adUnits[i].code === adUnitCode) {
        pbjs.adUnits.splice(i, 1);
      }
    }
  }
};

/**
 * @alias module:pbjs.clearAuction
 */
pbjs.clearAuction = function () {
  auctionRunning = false;
  // Only automatically sync if the publisher has not chosen to "enableOverride"
  var userSyncConfig = _config.config.getConfig('userSync') || {};
  if (!userSyncConfig.enableOverride) {
    // Delay the auto sync by the config delay
    syncUsers(userSyncConfig.syncDelay);
  }

  utils.logMessage('Prebid auction cleared');
  if (bidRequestQueue.length) {
    bidRequestQueue.shift()();
  }
};

/**
 * @param {Object} requestOptions
 * @param {function} requestOptions.bidsBackHandler
 * @param {number} requestOptions.timeout
 * @param {Array} requestOptions.adUnits
 * @param {Array} requestOptions.adUnitCodes
 * @alias module:pbjs.requestBids
 */
pbjs.requestBids = function () {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref4.bidsBackHandler,
      timeout = _ref4.timeout,
      adUnits = _ref4.adUnits,
      adUnitCodes = _ref4.adUnitCodes;

  events.emit('requestBids');
  var cbTimeout = pbjs.cbTimeout = timeout || _config.config.getConfig('bidderTimeout');
  adUnits = adUnits || pbjs.adUnits;

  utils.logInfo('Invoking pbjs.requestBids', arguments);

  if (adUnitCodes && adUnitCodes.length) {
    // if specific adUnitCodes supplied filter adUnits for those codes
    adUnits = adUnits.filter(function (unit) {
      return adUnitCodes.includes(unit.code);
    });
  } else {
    // otherwise derive adUnitCodes from adUnits
    adUnitCodes = adUnits && adUnits.map(function (unit) {
      return unit.code;
    });
  }

  // for video-enabled adUnits, only request bids for bidders that support video
  adUnits.filter(_video.videoAdUnit).filter(_video.hasNonVideoBidder).forEach(function (adUnit) {
    var nonVideoBidders = adUnit.bids.filter(function (bid) {
      return !(0, _video.videoBidder)(bid);
    }).map(function (bid) {
      return bid.bidder;
    });

    utils.logWarn(utils.unsupportedBidderMessage(adUnit, nonVideoBidders));
    adUnit.bids = adUnit.bids.filter(_video.videoBidder);
  });

  // for native-enabled adUnits, only request bids for bidders that support native
  adUnits.filter(_native.nativeAdUnit).filter(_native.hasNonNativeBidder).forEach(function (adUnit) {
    var nonNativeBidders = adUnit.bids.filter(function (bid) {
      return !(0, _native.nativeBidder)(bid);
    }).map(function (bid) {
      return bid.bidder;
    });

    utils.logWarn(utils.unsupportedBidderMessage(adUnit, nonNativeBidders));
    adUnit.bids = adUnit.bids.filter(_native.nativeBidder);
  });

  if (auctionRunning) {
    bidRequestQueue.push(function () {
      pbjs.requestBids({ bidsBackHandler: bidsBackHandler, timeout: cbTimeout, adUnits: adUnits, adUnitCodes: adUnitCodes });
    });
    return;
  }

  auctionRunning = true;

  // we will use adUnitCodes for filtering the current auction
  pbjs._adUnitCodes = adUnitCodes;

  bidmanager.externalCallbackReset();
  clearPlacements();

  if (!adUnits || adUnits.length === 0) {
    utils.logMessage('No adUnits configured. No bids requested.');
    if (typeof bidsBackHandler === 'function') {
      bidmanager.addOneTimeCallback(bidsBackHandler, false);
    }
    bidmanager.executeCallback();
    return;
  }

  // set timeout for all bids
  var timedOut = true;
  var timeoutCallback = bidmanager.executeCallback.bind(bidmanager, timedOut);
  var timer = setTimeout(timeoutCallback, cbTimeout);
  (0, _ajax.setAjaxTimeout)(cbTimeout);
  if (typeof bidsBackHandler === 'function') {
    bidmanager.addOneTimeCallback(bidsBackHandler, timer);
  }

  adaptermanager.callBids({ adUnits: adUnits, adUnitCodes: adUnitCodes, cbTimeout: cbTimeout });
  if (pbjs._bidsRequested.length === 0) {
    bidmanager.executeCallback();
  }
};

/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */
pbjs.addAdUnits = function (adUnitArr) {
  utils.logInfo('Invoking pbjs.addAdUnits', arguments);
  if (utils.isArray(adUnitArr)) {
    // generate transactionid for each new adUnits
    // Append array to existing
    adUnitArr.forEach(function (adUnit) {
      return adUnit.transactionId = utils.generateUUID();
    });
    pbjs.adUnits.push.apply(pbjs.adUnits, adUnitArr);
  } else if ((typeof adUnitArr === 'undefined' ? 'undefined' : _typeof(adUnitArr)) === 'object') {
    // Generate the transaction id for the adunit
    adUnitArr.transactionId = utils.generateUUID();
    pbjs.adUnits.push(adUnitArr);
  }
  // emit event
  events.emit(ADD_AD_UNITS);
};

/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to set on event
 * @param {string} id an identifier in the context of the event
 * @alias module:pbjs.onEvent
 *
 * This API call allows you to register a callback to handle a Prebid.js event.
 * An optional `id` parameter provides more finely-grained event callback registration.
 * This makes it possible to register callback events for a specific item in the
 * event context. For example, `bidWon` events will accept an `id` for ad unit code.
 * `bidWon` callbacks registered with an ad unit code id will be called when a bid
 * for that ad unit code wins the auction. Without an `id` this method registers the
 * callback for every `bidWon` event.
 *
 * Currently `bidWon` is the only event that accepts an `id` parameter.
 */
pbjs.onEvent = function (event, handler, id) {
  utils.logInfo('Invoking pbjs.onEvent', arguments);
  if (!utils.isFn(handler)) {
    utils.logError('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }

  if (id && !eventValidators[event].call(null, id)) {
    utils.logError('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }

  events.on(event, handler, id);
};

/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `pbjs.onEvent`)
 * @alias module:pbjs.offEvent
 */
pbjs.offEvent = function (event, handler, id) {
  utils.logInfo('Invoking pbjs.offEvent', arguments);
  if (id && !eventValidators[event].call(null, id)) {
    return;
  }

  events.off(event, handler, id);
};

/**
 * Add a callback event
 * @param {string} eventStr event to attach callback to Options: "allRequestedBidsBack" | "adUnitBidsBack"
 * @param {Function} func  function to execute. Parameters passed into the function: (bidResObj), [adUnitCode]);
 * @alias module:pbjs.addCallback
 * @returns {string} id for callback
 *
 * @deprecated This function will be removed in Prebid 1.0
 * Please use onEvent instead.
 */
pbjs.addCallback = function (eventStr, func) {
  utils.logWarn('pbjs.addCallback will be removed in Prebid 1.0. Please use onEvent instead');
  utils.logInfo('Invoking pbjs.addCallback', arguments);
  var id = null;
  if (!eventStr || !func || typeof func !== 'function') {
    utils.logError('error registering callback. Check method signature');
    return id;
  }

  id = utils.getUniqueIdentifierStr;
  bidmanager.addCallback(id, func, eventStr);
  return id;
};

/**
 * Remove a callback event
 * //@param {string} cbId id of the callback to remove
 * @alias module:pbjs.removeCallback
 * @returns {string} id for callback
 *
 * @deprecated This function will be removed in Prebid 1.0
 * Please use offEvent instead.
 */
pbjs.removeCallback = function () /* cbId */{
  // todo
  utils.logWarn('pbjs.removeCallback will be removed in Prebid 1.0. Please use offEvent instead.');
  return null;
};

/**
 * Wrapper to register bidderAdapter externally (adaptermanager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */
pbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  utils.logInfo('Invoking pbjs.registerBidAdapter', arguments);
  try {
    adaptermanager.registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    utils.logError('Error registering bidder adapter : ' + e.message);
  }
};

/**
 * Wrapper to register analyticsAdapter externally (adaptermanager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */
pbjs.registerAnalyticsAdapter = function (options) {
  utils.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments);
  try {
    adaptermanager.registerAnalyticsAdapter(options);
  } catch (e) {
    utils.logError('Error registering analytics adapter : ' + e.message);
  }
};

/**
 * @alias module:pbjs.bidsAvailableForAdapter
*/
pbjs.bidsAvailableForAdapter = function (bidderCode) {
  utils.logInfo('Invoking pbjs.bidsAvailableForAdapter', arguments);

  pbjs._bidsRequested.find(function (bidderRequest) {
    return bidderRequest.bidderCode === bidderCode;
  }).bids.map(function (bid) {
    return _extends(bid, bidfactory.createBid(1), {
      bidderCode: bidderCode,
      adUnitCode: bid.placementCode
    });
  }).map(function (bid) {
    return pbjs._bidsReceived.push(bid);
  });
};

/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */
pbjs.createBid = function (statusCode) {
  utils.logInfo('Invoking pbjs.createBid', arguments);
  return bidfactory.createBid(statusCode);
};

/**
 * Wrapper to bidmanager.addBidResponse
 * @param {string} adUnitCode [description]
 * @param {Object} bid [description]
 * @alias module:pbjs.addBidResponse
 * @deprecated This function will be removed in Prebid 1.0
 * Each bidder will be passed a reference to addBidResponse function in callBids as an argument.
 * See https://github.com/prebid/Prebid.js/issues/1087 for more details.
 */
pbjs.addBidResponse = function (adUnitCode, bid) {
  utils.logWarn('pbjs.addBidResponse will be removed in Prebid 1.0. Each bidder will be passed a reference to addBidResponse function in callBids as an argument. See https://github.com/prebid/Prebid.js/issues/1087 for more details.');
  utils.logInfo('Invoking pbjs.addBidResponse', arguments);
  bidmanager.addBidResponse(adUnitCode, bid);
};

/**
 * Wrapper to adloader.loadScript
 * @param  {string} tagSrc [description]
 * @param  {Function} callback [description]
 * @alias module:pbjs.loadScript
 */
pbjs.loadScript = function (tagSrc, callback, useCache) {
  utils.logInfo('Invoking pbjs.loadScript', arguments);
  (0, _adloader.loadScript)(tagSrc, callback, useCache);
};

/**
 * Enable sending analytics data to the analytics provider of your
 * choice.
 *
 * For usage, see [Integrate with the Prebid Analytics
 * API](http://prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html).
 *
 * For a list of analytics adapters, see [Analytics for
 * Prebid](http://prebid.org/overview/analytics.html).
 * @param  {Object} config
 * @param {string} config.provider The name of the provider, e.g., `"ga"` for Google Analytics.
 * @param {Object} config.options The options for this particular analytics adapter.  This will likely vary between adapters.
 * @alias module:pbjs.enableAnalytics
 */
pbjs.enableAnalytics = function (config) {
  if (config && !utils.isEmpty(config)) {
    utils.logInfo('Invoking pbjs.enableAnalytics for: ', config);
    adaptermanager.enableAnalytics(config);
  } else {
    utils.logError('pbjs.enableAnalytics should be called with option {}');
  }
};

/**
 * @alias module:pbjs.aliasBidder
 */
pbjs.aliasBidder = function (bidderCode, alias) {
  utils.logInfo('Invoking pbjs.aliasBidder', arguments);
  if (bidderCode && alias) {
    adaptermanager.aliasBidAdapter(bidderCode, alias);
  } else {
    utils.logError('bidderCode and alias must be passed as arguments', 'pbjs.aliasBidder');
  }
};

/**
 * Sets a default price granularity scheme.
 * @param {string|Object} granularity - the granularity scheme.
 * @alias module:pbjs.setPriceGranularity
 * @deprecated - use pbjs.setConfig({ priceGranularity: <granularity> })
 * "low": $0.50 increments, capped at $5 CPM
 * "medium": $0.10 increments, capped at $20 CPM (the default)
 * "high": $0.01 increments, capped at $20 CPM
 * "auto": Applies a sliding scale to determine granularity
 * "dense": Like "auto", but the bid price granularity uses smaller increments, especially at lower CPMs
 *
 * Alternatively a custom object can be specified:
 * { "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]};
 * See http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.setPriceGranularity for more details
 */
pbjs.setPriceGranularity = function (granularity) {
  utils.logWarn('pbjs.setPriceGranularity will be removed in Prebid 1.0. Use pbjs.setConfig({ priceGranularity: <granularity> }) instead.');
  utils.logInfo('Invoking pbjs.setPriceGranularity', arguments);
  _config.config.setConfig({ priceGranularity: granularity });
};

/**
 * @alias module:pbjs.enableSendAllBids
 * @deprecated - use pbjs.setConfig({ enableSendAllBids: <true|false> })
*/
pbjs.enableSendAllBids = function () {
  _config.config.setConfig({ enableSendAllBids: true });
};

/**
 * @alias module:pbjs.getAllWinningBids
 * The bid response object returned by an external bidder adapter during the auction.
 * @typedef {Object} AdapterBidResponse
 * @property {string} pbAg Auto granularity price bucket; CPM <= 5 ? increment = 0.05 : CPM > 5 && CPM <= 10 ? increment = 0.10 : CPM > 10 && CPM <= 20 ? increment = 0.50 : CPM > 20 ? priceCap = 20.00.  Example: `"0.80"`.
 * @property {string} pbCg Custom price bucket.  For example setup, see {@link setPriceGranularity}.  Example: `"0.84"`.
 * @property {string} pbDg Dense granularity price bucket; CPM <= 3 ? increment = 0.01 : CPM > 3 && CPM <= 8 ? increment = 0.05 : CPM > 8 && CPM <= 20 ? increment = 0.50 : CPM > 20? priceCap = 20.00.  Example: `"0.84"`.
 * @property {string} pbLg Low granularity price bucket; $0.50 increment, capped at $5, floored to two decimal places.  Example: `"0.50"`.
 * @property {string} pbMg Medium granularity price bucket; $0.10 increment, capped at $20, floored to two decimal places.  Example: `"0.80"`.
 * @property {string} pbHg High granularity price bucket; $0.01 increment, capped at $20, floored to two decimal places.  Example: `"0.84"`.
 *
 * @property {string} bidder The string name of the bidder.  This *may* be the same as the `bidderCode`.  For For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 * @property {string} bidderCode The unique string that identifies this bidder.  For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 *
 * @property {string} requestId The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bid request.
 * @property {number} requestTimestamp The time at which the bid request was sent out, expressed in milliseconds.
 * @property {number} responseTimestamp The time at which the bid response was received, expressed in milliseconds.
 * @property {number} timeToRespond How long it took for the bidder to respond with this bid, expressed in milliseconds.
 *
 * @property {string} size The size of the ad creative, expressed in `"AxB"` format, where A and B are numbers of pixels.  Example: `"320x50"`.
 * @property {string} width The width of the ad creative in pixels.  Example: `"320"`.
 * @property {string} height The height of the ad creative in pixels.  Example: `"50"`.
 *
 * @property {string} ad The actual ad creative content, often HTML with CSS, JavaScript, and/or links to additional content.  Example: `"<div id='beacon_-YQbipJtdxmMCgEPHExLhmqzEm' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://aplus-...'/></div><iframe src=\"http://aax-us-east.amazon-adsystem.com/e/is/8dcfcd..." width=\"728\" height=\"90\" frameborder=\"0\" ...></iframe>",`.
 * @property {number} ad_id The ad ID of the creative, as understood by the bidder's system.  Used by the line item's [creative in the ad server](http://prebid.org/adops/send-all-bids-adops.html#step-3-add-a-creative).
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page.
 *
 * @property {string} statusMessage The status of the bid.  Allowed values: `"Bid available"` or `"Bid returned empty or error response"`.
 * @property {number} cpm The exact bid price from the bidder, expressed to the thousandths place.  Example: `"0.849"`.
 *
 * @property {Object} adserverTargeting An object whose values represent the ad server's targeting on the bid.
 * @property {string} adserverTargeting.hb_adid The ad ID of the creative, as understood by the ad server.
 * @property {string} adserverTargeting.hb_pb The price paid to show the creative, as logged in the ad server.
 * @property {string} adserverTargeting.hb_bidder The winning bidder whose ad creative will be served by the ad server.
*/

/**
 * Get all of the bids that have won their respective auctions.  Useful for [troubleshooting your integration](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html).
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
*/
pbjs.getAllWinningBids = function () {
  return pbjs._winningBids;
};

/**
 * Build master video tag from publishers adserver tag
 * @param {string} adserverTag default url
 * @param {Object} options options for video tag
 * @alias module:pbjs.buildMasterVideoTagFromAdserverTag
 * @deprecated Include the dfpVideoSupport module in your build, and use the pbjs.adservers.dfp.buildVideoAdUrl function instead.
 * This function will be removed in Prebid 1.0.
 */
pbjs.buildMasterVideoTagFromAdserverTag = function (adserverTag, options) {
  utils.logWarn('pbjs.buildMasterVideoTagFromAdserverTag will be removed in Prebid 1.0. Include the dfpVideoSupport module in your build, and use the pbjs.adservers.dfp.buildVideoAdUrl function instead');
  utils.logInfo('Invoking pbjs.buildMasterVideoTagFromAdserverTag', arguments);
  var urlComponents = (0, _url.parse)(adserverTag);

  // return original adserverTag if no bids received
  if (pbjs._bidsReceived.length === 0) {
    return adserverTag;
  }

  var masterTag = '';
  if (options.adserver.toLowerCase() === 'dfp') {
    var dfpAdserverObj = adserver.dfpAdserver(options, urlComponents);
    if (!dfpAdserverObj.verifyAdserverTag()) {
      utils.logError('Invalid adserverTag, required google params are missing in query string');
    }
    dfpAdserverObj.appendQueryParams();
    masterTag = (0, _url.format)(dfpAdserverObj.urlComponents);
  } else {
    utils.logError('Only DFP adserver is supported');
    return;
  }
  return masterTag;
};

/**
 * Set the order bidders are called in. Valid values are:
 *
 * "fixed": Bidders will be called in the order in which they were defined within the adUnit.bids array.
 * "random": Bidders will be called in random order.
 *
 * If never called, Prebid will use "random" as the default.
 *
 * @param {string} order One of the valid orders, described above.
 * @alias module:pbjs.setBidderSequence
 * @deprecated - use pbjs.setConfig({ bidderSequence: <order> })
 */
pbjs.setBidderSequence = adaptermanager.setBidderSequence;

/**
 * Get array of highest cpm bids for all adUnits, or highest cpm bid
 * object for the given adUnit
 * @param {string} adUnitCode - optional ad unit code
 * @alias module:pbjs.getHighestCpmBids
 * @return {Array} array containing highest cpm bid object(s)
 */
pbjs.getHighestCpmBids = function (adUnitCode) {
  return targeting.getWinningBids(adUnitCode);
};

/**
 * Set config for server to server header bidding
 * @deprecated - use pbjs.setConfig({ s2sConfig: <options> })
 * @typedef {Object} options - required
 * @property {boolean} enabled enables S2S bidding
 * @property {string[]} bidders bidders to request S2S
 *  === optional params below ===
 * @property {string} [endpoint] endpoint to contact
 * @property {number} [timeout] timeout for S2S bidders - should be lower than `pbjs.requestBids({timeout})`
 * @property {string} [adapter] adapter code to use for S2S
 * @property {string} [syncEndpoint] endpoint URL for syncing cookies
 * @property {boolean} [cookieSet] enables cookieSet functionality
 * @alias module:pbjs.setS2SConfig
 */
pbjs.setS2SConfig = function (options) {
  if (!utils.contains(Object.keys(options), 'accountId')) {
    utils.logError('accountId missing in Server to Server config');
    return;
  }

  if (!utils.contains(Object.keys(options), 'bidders')) {
    utils.logError('bidders missing in Server to Server config');
    return;
  }

  var config = _extends({
    enabled: false,
    endpoint: CONSTANTS.S2S.DEFAULT_ENDPOINT,
    timeout: 1000,
    maxBids: 1,
    adapter: CONSTANTS.S2S.ADAPTER,
    syncEndpoint: CONSTANTS.S2S.SYNC_ENDPOINT,
    cookieSet: true,
    bidders: []
  }, options);
  adaptermanager.setS2SConfig(config);
};

/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */
pbjs.getConfig = _config.config.getConfig;

/**
 * Set Prebid config options.
 * (Added in version 0.27.0).
 *
 * `setConfig` is designed to allow for advanced configuration while
 * reducing the surface area of the public API.  For more information
 * about the move to `setConfig` (and the resulting deprecations of
 * some other public methods), see [the Prebid 1.0 public API
 * proposal](https://gist.github.com/mkendall07/51ee5f6b9f2df01a89162cf6de7fe5b6).
 *
 * #### Troubleshooting your configuration
 *
 * If you call `pbjs.setConfig` without an object, e.g.,
 *
 * `pbjs.setConfig('debug', 'true'))`
 *
 * then Prebid.js will print an error to the console that says:
 *
 * ```
 * ERROR: setConfig options must be an object
 * ```
 *
 * If you don't see that message, you can assume the config object is valid.
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 * @param {string} options.bidderSequence The order in which bidders are called.  Example: `pbjs.setConfig({ bidderSequence: "fixed" })`.  Allowed values: `"fixed"` (order defined in `adUnit.bids` array on page), `"random"`.
 * @param {boolean} options.debug Turn debug logging on/off. Example: `pbjs.setConfig({ debug: true })`.
 * @param {string} options.priceGranularity The bid price granularity to use.  Example: `pbjs.setConfig({ priceGranularity: "medium" })`. Allowed values: `"low"` ($0.50), `"medium"` ($0.10), `"high"` ($0.01), `"auto"` (sliding scale), `"dense"` (like `"auto"`, with smaller increments at lower CPMs), or a custom price bucket object, e.g., `{ "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]}`.
 * @param {boolean} options.enableSendAllBids Turn "send all bids" mode on/off.  Example: `pbjs.setConfig({ enableSendAllBids: true })`.
 * @param {number} options.bidderTimeout Set a global bidder timeout, in milliseconds.  Example: `pbjs.setConfig({ bidderTimeout: 3000 })`.  Note that it's still possible for a bid to get into the auction that responds after this timeout. This is due to how [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) works in JS: it queues the callback in the event loop in an approximate location that should execute after this time but it is not guaranteed.  For more information about the asynchronous event loop and `setTimeout`, see [How JavaScript Timers Work](https://johnresig.com/blog/how-javascript-timers-work/).
 * @param {string} options.publisherDomain The publisher's domain where Prebid is running, for cross-domain iFrame communication.  Example: `pbjs.setConfig({ publisherDomain: "https://www.theverge.com" })`.
 * @param {number} options.cookieSyncDelay A delay (in milliseconds) for requesting cookie sync to stay out of the critical path of page load.  Example: `pbjs.setConfig({ cookieSyncDelay: 100 })`.
 * @param {Object} options.s2sConfig The configuration object for [server-to-server header bidding](http://prebid.org/dev-docs/get-started-with-prebid-server.html).  Example:
 * @alias module:pbjs.setConfig
 * ```
 * pbjs.setConfig({
 *     s2sConfig: {
 *         accountId: '1',
 *         enabled: true,
 *         bidders: ['appnexus', 'pubmatic'],
 *         timeout: 1000,
 *         adapter: 'prebidServer',
 *         endpoint: 'https://prebid.adnxs.com/pbs/v1/auction'
 *     }
 * })
 * ```
 */
pbjs.setConfig = _config.config.setConfig;

pbjs.que.push(function () {
  return (0, _secureCreatives.listenMessagesFromCreative)();
});

/**
 * This queue lets users load Prebid asynchronously, but run functions the same way regardless of whether it gets loaded
 * before or after their script executes. For example, given the code:
 *
 * <script src="url/to/Prebid.js" async></script>
 * <script>
 *   var pbjs = pbjs || {};
 *   pbjs.cmd = pbjs.cmd || [];
 *   pbjs.cmd.push(functionToExecuteOncePrebidLoads);
 * </script>
 *
 * If the page's script runs before prebid loads, then their function gets added to the queue, and executed
 * by prebid once it's done loading. If it runs after prebid loads, then this monkey-patch causes their
 * function to execute immediately.
 *
 * @memberof pbjs
 * @param  {function} command A function which takes no arguments. This is guaranteed to run exactly once, and only after
 *                            the Prebid script has been fully loaded.
 * @alias module:pbjs.cmd.push
 */
pbjs.cmd.push = function (command) {
  if (typeof command === 'function') {
    try {
      command.call();
    } catch (e) {
      utils.logError('Error processing command :', e.message, e.stack);
    }
  } else {
    utils.logError('Commands written into pbjs.cmd.push must be wrapped in a function');
  }
};

pbjs.que.push = pbjs.cmd.push;

function processQueue(queue) {
  queue.forEach(function (cmd) {
    if (typeof cmd.called === 'undefined') {
      try {
        cmd.call();
        cmd.called = true;
      } catch (e) {
        utils.logError('Error processing command :', 'prebid.js', e);
      }
    }
  });
}

/**
 * @alias module:pbjs.processQueue
 */
pbjs.processQueue = function () {
  processQueue(pbjs.que);
  processQueue(pbjs.cmd);
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** @module polyfill
Misc polyfills
*/
__webpack_require__(342);
__webpack_require__(355);
__webpack_require__(357);
__webpack_require__(360);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(343);
module.exports = __webpack_require__(14).Array.find;


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(19);
var $find = __webpack_require__(34)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(27)(KEY);


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(345);
var IE8_DOM_DEFINE = __webpack_require__(346);
var toPrimitive = __webpack_require__(348);
var dP = Object.defineProperty;

exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function () {
  return Object.defineProperty(__webpack_require__(347)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var document = __webpack_require__(16).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 35:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var hide = __webpack_require__(22);
var has = __webpack_require__(32);
var SRC = __webpack_require__(25)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(14).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(353);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
var isArray = __webpack_require__(354);
var SPECIES = __webpack_require__(40)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(35);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(356);
module.exports = __webpack_require__(14).Array.findIndex;


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(19);
var $find = __webpack_require__(34)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(27)(KEY);


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(358);
module.exports = __webpack_require__(14).Array.includes;


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(19);
var $includes = __webpack_require__(42)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(27)('includes');


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(361);
module.exports = __webpack_require__(14).Object.assign;


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(362) });


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(363);
var gOPS = __webpack_require__(367);
var pIE = __webpack_require__(368);
var toObject = __webpack_require__(36);
var IObject = __webpack_require__(26);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(24)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(364);
var enumBugKeys = __webpack_require__(366);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(32);
var toIObject = __webpack_require__(43);
var arrayIndexOf = __webpack_require__(42)(false);
var IE_PROTO = __webpack_require__(365)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 366:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 367:
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 368:
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenMessagesFromCreative = listenMessagesFromCreative;

var _events = __webpack_require__(11);

var _events2 = _interopRequireDefault(_events);

var _native = __webpack_require__(15);

var _constants = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BID_WON = _constants.EVENTS.BID_WON; /* Secure Creatives
                                           Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
                                            access to a publisher page from creative payloads.
                                          */

function listenMessagesFromCreative() {
  addEventListener('message', receiveMessage, false);
}

function receiveMessage(ev) {
  var key = ev.message ? 'message' : 'data';
  var data = {};
  try {
    data = JSON.parse(ev[key]);
  } catch (e) {
    return;
  }

  if (data.adId) {
    var adObject = pbjs._bidsReceived.find(function (bid) {
      return bid.adId === data.adId;
    });

    if (data.message === 'Prebid Request') {
      sendAdToCreative(adObject, data.adServerDomain, ev.source);

      // save winning bids
      pbjs._winningBids.push(adObject);

      _events2['default'].emit(BID_WON, adObject);
    }

    // handle this script from native template in an ad server
    // window.parent.postMessage(JSON.stringify({
    //   message: 'Prebid Native',
    //   adId: '%%PATTERN:hb_adid%%'
    // }), '*');
    if (data.message === 'Prebid Native') {
      (0, _native.fireNativeTrackers)(data, adObject);
      pbjs._winningBids.push(adObject);
      _events2['default'].emit(BID_WON, adObject);
    }
  }
}

function sendAdToCreative(adObject, remoteDomain, source) {
  var adId = adObject.adId,
      ad = adObject.ad,
      adUrl = adObject.adUrl,
      width = adObject.width,
      height = adObject.height;


  if (adId) {
    resizeRemoteCreative(adObject);
    source.postMessage(JSON.stringify({
      message: 'Prebid Response',
      ad: ad,
      adUrl: adUrl,
      adId: adId,
      width: width,
      height: height
    }), remoteDomain);
  }
}

function resizeRemoteCreative(_ref) {
  var adUnitCode = _ref.adUnitCode,
      width = _ref.width,
      height = _ref.height;

  var iframe = document.getElementById(window.googletag.pubads().getSlots().find(function (slot) {
    return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
  }).getSlotElementId()).querySelector('iframe');

  iframe.width = '' + width;
  iframe.height = '' + height;
}

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _url = __webpack_require__(13);

var _targeting = __webpack_require__(21);

// Adserver parent class
var AdServer = function AdServer(attr) {
  this.name = attr.adserver;
  this.code = attr.code;
  this.getWinningBidByCode = function () {
    return (0, _targeting.getWinningBids)(this.code)[0];
  };
};

// DFP ad server
exports.dfpAdserver = function (options, urlComponents) {
  var adserver = new AdServer(options);
  adserver.urlComponents = urlComponents;

  var dfpReqParams = {
    'env': 'vp',
    'gdfp_req': '1',
    'impl': 's',
    'unviewed_position_start': '1'
  };

  var dfpParamsWithVariableValue = ['output', 'iu', 'sz', 'url', 'correlator', 'description_url', 'hl'];

  var getCustomParams = function getCustomParams(targeting) {
    return encodeURIComponent((0, _url.formatQS)(targeting));
  };

  adserver.appendQueryParams = function () {
    var bid = adserver.getWinningBidByCode();
    if (bid) {
      this.urlComponents.search.description_url = encodeURIComponent(bid.vastUrl);
      this.urlComponents.search.cust_params = getCustomParams(bid.adserverTargeting);
      this.urlComponents.search.correlator = Date.now();
    }
  };

  adserver.verifyAdserverTag = function () {
    for (var key in dfpReqParams) {
      if (!this.urlComponents.search.hasOwnProperty(key) || this.urlComponents.search[key] !== dfpReqParams[key]) {
        return false;
      }
    }
    for (var i in dfpParamsWithVariableValue) {
      if (!this.urlComponents.search.hasOwnProperty(dfpParamsWithVariableValue[i])) {
        return false;
      }
    }
    return true;
  };

  return adserver;
};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"REPO_AND_VERSION":"prebid_prebid_0.34.1","DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","BID_WON":"bidWon","SET_TARGETING":"setTargeting","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":["hb_bidder","hb_adid","hb_pb","hb_size","hb_deal"],"S2S":{"DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/auction","SRC":"s2s","ADAPTER":"prebidServer","SYNC_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/cookie_sync","SYNCED_BIDDERS_KEY":"pbjsSyncs"}}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(41)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(16).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(16);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(43);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(359);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(26);
var defined = __webpack_require__(37);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setWindow = exports.getScreenWidth = exports.mapSizes = undefined;

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _win = void 0; /**
                    * @module sizeMapping
                    */


function mapSizes(adUnit) {
  if (!isSizeMappingValid(adUnit.sizeMapping)) {
    return adUnit.sizes;
  }
  var width = getScreenWidth();
  if (!width) {
    // size not detected - get largest value set for desktop
    var _mapping = adUnit.sizeMapping.reduce(function (prev, curr) {
      return prev.minWidth < curr.minWidth ? curr : prev;
    });
    if (_mapping.sizes && _mapping.sizes.length) {
      return _mapping.sizes;
    }
    return adUnit.sizes;
  }
  var sizes = '';
  var mapping = adUnit.sizeMapping.find(function (sizeMapping) {
    return width >= sizeMapping.minWidth;
  });
  if (mapping && mapping.sizes && mapping.sizes.length) {
    sizes = mapping.sizes;
    utils.logMessage('AdUnit : ' + adUnit.code + ' resized based on device width to : ' + sizes);
  } else {
    utils.logMessage('AdUnit : ' + adUnit.code + ' not mapped to any sizes for device width. This request will be suppressed.');
  }
  return sizes;
}

function isSizeMappingValid(sizeMapping) {
  if (utils.isArray(sizeMapping) && sizeMapping.length > 0) {
    return true;
  }
  utils.logInfo('No size mapping defined');
  return false;
}

function getScreenWidth(win) {
  var w = win || _win || window;
  var d = w.document;

  if (w.innerWidth) {
    return w.innerWidth;
  } else if (d.body.clientWidth) {
    return d.body.clientWidth;
  } else if (d.documentElement.clientWidth) {
    return d.documentElement.clientWidth;
  }
  return 0;
}

function setWindow(win) {
  _win = win;
}

exports.mapSizes = mapSizes;
exports.getScreenWidth = getScreenWidth;
exports.setWindow = setWindow;

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = store;
exports.getCacheUrl = getCacheUrl;

var _ajax = __webpack_require__(7);

var BASE_URL = 'https://prebid.adnxs.com/pbc/v1/cache';

/**
 * @typedef {object} CacheableUrlBid
 * @property {string} vastUrl A URL which loads some valid VAST XML.
 */

/**
 * @typedef {object} CacheablePayloadBid
 * @property {string} vastXml Some VAST XML which loads an ad in a video player.
 */

/**
 * A CacheableBid describes the types which the videoCache can store.
 *
 * @typedef {CacheableUrlBid|CacheablePayloadBid} CacheableBid
 */

/**
 * Function which wraps a URI that serves VAST XML, so that it can be loaded.
 *
 * @param {string} uri The URI where the VAST content can be found.
 * @return A VAST URL which loads XML from the given URI.
 */
/**
 * This module interacts with the server used to cache video ad content to be restored later.
 * At a high level, the expected workflow goes like this:
 *
 *   - Request video ads from Bidders
 *   - Generate IDs for each valid bid, and cache the key/value pair on the server.
 *   - Return these IDs so that publishers can use them to fetch the bids later.
 *
 * This trickery helps integrate with ad servers, which set character limits on request params.
 */

function wrapURI(uri) {
  // Technically, this is vulnerable to cross-script injection by sketchy vastUrl bids.
  // We could make sure it's a valid URI... but since we're loading VAST XML from the
  // URL they provide anyway, that's probably not a big deal.
  return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + uri + ']]></VASTAdTagURI>\n        <Impression></Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>';
}

/**
 * Wraps a bid in the format expected by the prebid-server endpoints, or returns null if
 * the bid can't be converted cleanly.
 *
 * @param {CacheableBid} bid
 */
function toStorageRequest(bid) {
  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl);
  return {
    type: 'xml',
    value: vastValue
  };
}

/**
 * A function which should be called with the results of the storage operation.
 *
 * @callback videoCacheStoreCallback
 *
 * @param {Error} [error] The error, if one occurred.
 * @param {?string[]} uuids An array of unique IDs. The array will have one element for each bid we were asked
 *   to store. It may include null elements if some of the bids were malformed, or an error occurred.
 *   Each non-null element in this array is a valid input into the retrieve function, which will fetch
 *   some VAST XML which can be used to render this bid's ad.
 */

/**
 * A function which bridges the APIs between the videoCacheStoreCallback and our ajax function's API.
 *
 * @param {videoCacheStoreCallback} done A callback to the "store" function.
 * @return {Function} A callback which interprets the cache server's responses, and makes up the right
 *   arguments for our callback.
 */
function shimStorageCallback(done) {
  return {
    success: function success(responseBody) {
      var ids = void 0;
      try {
        ids = JSON.parse(responseBody).responses;
      } catch (e) {
        done(e, []);
        return;
      }

      if (ids) {
        done(null, ids);
      } else {
        done(new Error("The cache server didn't respond with a responses property."), []);
      }
    },
    error: function error(statusText, responseBody) {
      done(new Error('Error storing video ad in the cache: ' + statusText + ': ' + JSON.stringify(responseBody)), []);
    }
  };
}

/**
 * If the given bid is for a Video ad, generate a unique ID and cache it somewhere server-side.
 *
 * @param {CacheableBid[]} bids A list of bid objects which should be cached.
 * @param {videoCacheStoreCallback} [done] An optional callback which should be executed after
 *   the data has been stored in the cache.
 */
function store(bids, done) {
  var requestData = {
    puts: bids.map(toStorageRequest)
  };

  (0, _ajax.ajax)(BASE_URL, shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}

function getCacheUrl(id) {
  return BASE_URL + '?uuid=' + id;
}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createHook = createHook;

/**
 * @typedef {function} HookedFunction
 * @property {function(function(), [number])} addHook A method that takes a new function to attach as a hook
 *  to the HookedFunction
 * @property {function(function())} removeHook A method to remove attached hooks
 */

/**
 * A map of global hook methods to allow easy extension of hooked functions that are intended to be extended globally
 * @type {{}}
 */
var hooks = exports.hooks = {};

/**
 * A utility function for allowing a regular function to be extensible with additional hook functions
 * @param {string} type The method for applying all attached hooks when this hooked function is called
 * @param {function()} fn The function to make hookable
 * @param {string} hookName If provided this allows you to register a name for a global hook to have easy access to
 *  the addHook and removeHook methods for that hook (which are usually accessed as methods on the function itself)
 * @returns {HookedFunction} A new function that implements the HookedFunction interface
 */
function createHook(type, fn, hookName) {
  var _hooks = [{ fn: fn, priority: 0 }];

  var types = {
    sync: function sync() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _hooks.forEach(function (hook) {
        hook.fn.apply(_this, args);
      });
    },
    asyncSeries: function asyncSeries() {
      var _this2 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var curr = 0;

      var asyncSeriesNext = function asyncSeriesNext() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var hook = _hooks[++curr];
        if ((typeof hook === 'undefined' ? 'undefined' : _typeof(hook)) === 'object' && typeof hook.fn === 'function') {
          return hook.fn.apply(_this2, args.concat(asyncSeriesNext));
        }
      };

      return _hooks[curr].fn.apply(this, args.concat(asyncSeriesNext));
    }
  };

  if (!types[type]) {
    throw 'invalid hook type';
  }

  var methods = {
    addHook: function addHook(fn) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      if (typeof fn === 'function') {
        _hooks.push({
          fn: fn,
          priority: priority
        });

        _hooks.sort(function (a, b) {
          return b.priority - a.priority;
        });
      }
    },
    removeHook: function removeHook(removeFn) {
      _hooks = _hooks.filter(function (hook) {
        return hook.fn === fn || hook.fn !== removeFn;
      });
    }
  };

  if (typeof hookName === 'string') {
    hooks[hookName] = methods;
  }

  function hookedFn() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (_hooks.length === 0) {
      return fn.apply(this, args);
    }
    return types[type].apply(this, args);
  }

  return _extends(hookedFn, methods);
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var _requestCache = {};

// add a script tag to the page, used to add /jpt call to page
exports.loadScript = function (tagSrc, callback, cacheRequest) {
  // var noop = () => {};
  //
  // callback = callback || noop;
  if (!tagSrc) {
    utils.logError('Error attempting to request empty URL', 'adloader.js:loadScript');
    return;
  }

  if (cacheRequest) {
    if (_requestCache[tagSrc]) {
      if (callback && typeof callback === 'function') {
        if (_requestCache[tagSrc].loaded) {
          // invokeCallbacks immediately
          callback();
        } else {
          // queue the callback
          _requestCache[tagSrc].callbacks.push(callback);
        }
      }
    } else {
      _requestCache[tagSrc] = {
        loaded: false,
        callbacks: []
      };
      if (callback && typeof callback === 'function') {
        _requestCache[tagSrc].callbacks.push(callback);
      }

      requestResource(tagSrc, function () {
        _requestCache[tagSrc].loaded = true;
        try {
          for (var i = 0; i < _requestCache[tagSrc].callbacks.length; i++) {
            _requestCache[tagSrc].callbacks[i]();
          }
        } catch (e) {
          utils.logError('Error executing callback', 'adloader.js:loadScript', e);
        }
      });
    }
  } else {
    // trigger one time request
    requestResource(tagSrc, callback);
  }
};

function requestResource(tagSrc, callback) {
  var jptScript = document.createElement('script');
  jptScript.type = 'text/javascript';
  jptScript.async = true;

  // Execute a callback if necessary
  if (callback && typeof callback === 'function') {
    if (jptScript.readyState) {
      jptScript.onreadystatechange = function () {
        if (jptScript.readyState === 'loaded' || jptScript.readyState === 'complete') {
          jptScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jptScript.onload = function () {
        callback();
      };
    }
  }

  jptScript.src = tagSrc;

  // add the new script tag to the page
  var elToAppend = document.getElementsByTagName('head');
  elToAppend = elToAppend.length ? elToAppend : document.getElementsByTagName('body');
  if (elToAppend.length) {
    elToAppend = elToAppend[0];
    elToAppend.insertBefore(jptScript, elToAppend.firstChild);
  }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.registerBidder = registerBidder;
exports.newBidder = newBidder;

var _adapter = __webpack_require__(9);

var _adapter2 = _interopRequireDefault(_adapter);

var _adaptermanager = __webpack_require__(1);

var _adaptermanager2 = _interopRequireDefault(_adaptermanager);

var _config = __webpack_require__(8);

var _ajax = __webpack_require__(7);

var _bidmanager = __webpack_require__(2);

var _bidmanager2 = _interopRequireDefault(_bidmanager);

var _bidfactory = __webpack_require__(3);

var _bidfactory2 = _interopRequireDefault(_bidfactory);

var _constants = __webpack_require__(4);

var _userSync = __webpack_require__(18);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This file aims to support Adapters during the Prebid 0.x -> 1.x transition.
 *
 * Prebid 1.x and Prebid 0.x will be in separate branches--perhaps for a long time.
 * This function defines an API for adapter construction which is compatible with both versions.
 * Adapters which use it can maintain their code in master, and only this file will need to change
 * in the 1.x branch.
 *
 * Typical usage looks something like:
 *
 * const adapter = registerBidder({
 *   code: 'myBidderCode',
 *   aliases: ['alias1', 'alias2'],
 *   supportedMediaTypes: ['video', 'native'],
 *   isBidRequestValid: function(paramsObject) { return true/false },
 *   buildRequests: function(bidRequests, bidderRequest) { return some ServerRequest(s) },
 *   interpretResponse: function(oneServerResponse) { return some Bids, or throw an error. }
 * });
 *
 * @see BidderSpec for the full API and more thorough descriptions.
 */

/**
 * @typedef {object} BidderSpec An object containing the adapter-specific functions needed to
 * make a Bidder.
 *
 * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
 *   one as is used in the call to registerBidAdapter
 * @property {string[]} [aliases] A list of aliases which should also resolve to this bidder.
 * @property {MediaType[]} [supportedMediaTypes]: A list of Media Types which the adapter supports.
 * @property {function(object): boolean} isBidRequestValid Determines whether or not the given bid has all the params
 *   needed to make a valid request.
 * @property {function(BidRequest[], bidderRequest): ServerRequest|ServerRequest[]} buildRequests Build the request to the Server
 *   which requests Bids for the given array of Requests. Each BidRequest in the argument array is guaranteed to have
 *   passed the isBidRequestValid() test.
 * @property {function(ServerResponse, BidRequest): Bid[]} interpretResponse Given a successful response from the Server,
 *   interpret it and return the Bid objects. This function will be run inside a try/catch.
 *   If it throws any errors, your bids will be discarded.
 * @property {function(SyncOptions, ServerResponse[]): UserSync[]} [getUserSyncs] Given an array of all the responses
 *   from the server, determine which user syncs should occur. The argument array will contain every element
 *   which has been sent through to interpretResponse. The order of syncs in this array matters. The most
 *   important ones should come first, since publishers may limit how many are dropped on their page.
 */

/**
 * @typedef {object} BidRequest
 *
 * @property {string} bidId A string which uniquely identifies this BidRequest in the current Auction.
 * @property {object} params Any bidder-specific params which the publisher used in their bid request.
 */

/**
 * @typedef {object} ServerRequest
 *
 * @property {('GET'|'POST')} method The type of request which this is.
 * @property {string} url The endpoint for the request. For example, "//bids.example.com".
 * @property {string|object} data Data to be sent in the request.
 * @property {object} options Content-Type set in the header of the bid request, overrides default 'text/plain'.
 *   If this is a GET request, they'll become query params. If it's a POST request, they'll be added to the body.
 *   Strings will be added as-is. Objects will be unpacked into query params based on key/value mappings, or
 *   JSON-serialized into the Request body.
 */

/**
 * @typedef {object} ServerResponse
 *
 * @property {*} body The response body. If this is legal JSON, then it will be parsed. Otherwise it'll be a
 *   string with the body's content.
 * @property {{get: function(string): string} headers The response headers.
 *   Call this like `ServerResponse.headers.get("Content-Type")`
 */

/**
 * @typedef {object} Bid
 *
 * @property {string} requestId The specific BidRequest which this bid is aimed at.
 *   This should match the BidRequest.bidId which this Bid targets.
 * @property {string} ad A URL which can be used to load this ad, if it's chosen by the publisher.
 * @property {string} currency The currency code for the cpm value
 * @property {number} cpm The bid price, in US cents per thousand impressions.
 * @property {number} ttl Time-to-live - how long (in seconds) Prebid can use this bid.
 * @property {boolean} netRevenue Boolean defining whether the bid is Net or Gross.  The default is true (Net).
 * @property {number} height The height of the ad, in pixels.
 * @property {number} width The width of the ad, in pixels.
 *
 * @property [Renderer] renderer A Renderer which can be used as a default for this bid,
 *   if the publisher doesn't override it. This is only relevant for Outstream Video bids.
 */

/**
 * @typedef {Object} SyncOptions
 *
 * An object containing information about usersyncs which the adapter should obey.
 *
 * @property {boolean} iframeEnabled True if iframe usersyncs are allowed, and false otherwise
 * @property {boolean} pixelEnabled True if image usersyncs are allowed, and false otherwise
 */

/**
 * TODO: Move this to the UserSync module after that PR is merged.
 *
 * @typedef {object} UserSync
 *
 * @property {('image'|'iframe')} type The type of user sync to be done.
 * @property {string} url The URL which makes the sync happen.
 */

// common params for all mediaTypes
var COMMON_BID_RESPONSE_KEYS = ['requestId', 'cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];

/**
 * Register a bidder with prebid, using the given spec.
 *
 * If possible, Adapter modules should use this function instead of adaptermanager.registerBidAdapter().
 *
 * @param {BidderSpec} spec An object containing the bare-bones functions we need to make a Bidder.
 */
function registerBidder(spec) {
  var mediaTypes = Array.isArray(spec.supportedMediaTypes) ? { supportedMediaTypes: spec.supportedMediaTypes } : undefined;
  function putBidder(spec) {
    var bidder = newBidder(spec);
    _adaptermanager2['default'].registerBidAdapter(bidder, spec.code, mediaTypes);
  }

  putBidder(spec);
  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach(function (alias) {
      putBidder(_extends({}, spec, { code: alias }));
    });
  }
}

/**
 * Make a new bidder from the given spec. This is exported mainly for testing.
 * Adapters will probably find it more convenient to use registerBidder instead.
 *
 * @param {BidderSpec} spec
 */
function newBidder(spec) {
  return _extends(new _adapter2['default'](spec.code), {
    getSpec: function getSpec() {
      return Object.freeze(spec);
    },
    registerSyncs: registerSyncs,
    callBids: function callBids(bidderRequest) {
      if (!Array.isArray(bidderRequest.bids)) {
        return;
      }

      // callBids must add a NO_BID response for _every_ AdUnit code, in order for the auction to
      // end properly. This map stores placement codes which we've made _real_ bids on.
      //
      // As we add _real_ bids to the bidmanager, we'll log the ad unit codes here too. Once all the real
      // bids have been added, fillNoBids() can be called to add NO_BID bids for any extra ad units, which
      // will end the auction.
      //
      // In Prebid 1.0, this will be simplified to use the `addBidResponse` and `done` callbacks.
      var adUnitCodesHandled = {};
      function addBidWithCode(adUnitCode, bid) {
        adUnitCodesHandled[adUnitCode] = true;
        addBid(adUnitCode, bid);
      }
      function fillNoBids() {
        bidderRequest.bids.map(function (bidRequest) {
          return bidRequest.placementCode;
        }).forEach(function (adUnitCode) {
          if (adUnitCode && !adUnitCodesHandled[adUnitCode]) {
            addBid(adUnitCode, newEmptyBid());
          }
        });
      }

      function addBid(code, bid) {
        try {
          _bidmanager2['default'].addBidResponse(code, bid);
        } catch (err) {
          (0, _utils.logError)('Error adding bid', code, err);
        }
      }

      // After all the responses have come back, fill up the "no bid" bids and
      // register any required usersync pixels.
      var responses = [];
      function afterAllResponses() {
        fillNoBids();
        registerSyncs(responses);
      }

      var validBidRequests = bidderRequest.bids.filter(filterAndWarn);
      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }
      var bidRequestMap = {};
      validBidRequests.forEach(function (bid) {
        bidRequestMap[bid.bidId] = bid;
        // Delete this once we are 1.0
        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      });

      var requests = spec.buildRequests(validBidRequests, bidderRequest);
      if (!requests || requests.length === 0) {
        afterAllResponses();
        return;
      }
      if (!Array.isArray(requests)) {
        requests = [requests];
      }

      // Callbacks don't compose as nicely as Promises. We should call fillNoBids() once _all_ the
      // Server requests have returned and been processed. Since `ajax` accepts a single callback,
      // we need to rig up a function which only executes after all the requests have been responded.
      var onResponse = (0, _utils.delayExecution)(afterAllResponses, requests.length);
      requests.forEach(processRequest);

      function formatGetParameters(data) {
        if (data) {
          return '?' + ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? (0, _utils.parseQueryStringParameters)(data) : data);
        }

        return '';
      }

      function processRequest(request) {
        switch (request.method) {
          case 'GET':
            (0, _ajax.ajax)('' + request.url + formatGetParameters(request.data), {
              success: onSuccess,
              error: onFailure
            }, undefined, _extends({
              method: 'GET',
              withCredentials: true
            }, request.options));
            break;
          case 'POST':
            (0, _ajax.ajax)(request.url, {
              success: onSuccess,
              error: onFailure
            }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), _extends({
              method: 'POST',
              contentType: 'text/plain',
              withCredentials: true
            }, request.options));
            break;
          default:
            (0, _utils.logWarn)('Skipping invalid request from ' + spec.code + '. Request type ' + request.type + ' must be GET or POST');
            onResponse();
        }

        // If the server responds successfully, use the adapter code to unpack the Bids from it.
        // If the adapter code fails, no bids should be added. After all the bids have been added, make
        // sure to call the `onResponse` function so that we're one step closer to calling fillNoBids().
        function onSuccess(response, responseObj) {
          try {
            response = JSON.parse(response);
          } catch (e) {} /* response might not be JSON... that's ok. */

          // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.
          response = {
            body: response,
            headers: headerParser(responseObj)
          };
          responses.push(response);

          var bids = void 0;
          try {
            bids = spec.interpretResponse(response, request);
          } catch (err) {
            (0, _utils.logError)('Bidder ' + spec.code + ' failed to interpret the server\'s response. Continuing without bids', null, err);
            onResponse();
            return;
          }

          if (bids) {
            if (bids.forEach) {
              bids.forEach(addBidUsingRequestMap);
            } else {
              addBidUsingRequestMap(bids);
            }
          }
          onResponse();

          function addBidUsingRequestMap(bid) {
            // In Prebid 1.0 all the validation logic from bidmanager will move here, as of now we are only validating new params so that adapters dont miss adding them.
            if (hasValidKeys(bid)) {
              var bidRequest = bidRequestMap[bid.requestId];
              if (bidRequest) {
                var prebidBid = _extends(_bidfactory2['default'].createBid(_constants.STATUS.GOOD, bidRequest), bid);
                addBidWithCode(bidRequest.placementCode, prebidBid);
              } else {
                (0, _utils.logWarn)('Bidder ' + spec.code + ' made bid for unknown request ID: ' + bid.requestId + '. Ignoring.');
              }
            } else {
              (0, _utils.logError)('Bidder ' + spec.code + ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.');
            }
          }

          function headerParser(xmlHttpResponse) {
            return {
              get: responseObj.getResponseHeader.bind(responseObj)
            };
          }
        }

        // If the server responds with an error, there's not much we can do. Log it, and make sure to
        // call onResponse() so that we're one step closer to calling fillNoBids().
        function onFailure(err) {
          (0, _utils.logError)('Server call for ' + spec.code + ' failed: ' + err + '. Continuing without bids.');
          onResponse();
        }
      }
    }
  });

  function registerSyncs(responses) {
    if (spec.getUserSyncs) {
      var syncs = spec.getUserSyncs({
        iframeEnabled: _config.config.getConfig('userSync.iframeEnabled'),
        pixelEnabled: _config.config.getConfig('userSync.pixelEnabled')
      }, responses);
      if (syncs) {
        if (!Array.isArray(syncs)) {
          syncs = [syncs];
        }
        syncs.forEach(function (sync) {
          _userSync.userSync.registerSync(sync.type, spec.code, sync.url);
        });
      }
    }
  }

  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      (0, _utils.logWarn)('Invalid bid sent to bidder ' + spec.code + ': ' + JSON.stringify(bid));
      return false;
    }
    return true;
  }

  function hasValidKeys(bid) {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every(function (key) {
      return bidKeys.includes(key);
    });
  }

  function newEmptyBid() {
    var bid = _bidfactory2['default'].createBid(_constants.STATUS.NO_BID);
    bid.code = spec.code;
    bid.bidderCode = spec.code;
    return bid;
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.setAjaxTimeout = setAjaxTimeout;
exports.ajax = ajax;

var _url = __webpack_require__(13);

var utils = __webpack_require__(0);

var XHR_DONE = 4;
var _timeout = 3000;

/**
 * Simple IE9+ and cross-browser ajax request function
 * Note: x-domain requests in IE9 do not support the use of cookies
 *
 * @param url string url
 * @param callback {object | function} callback
 * @param data mixed data
 * @param options object
 */
function setAjaxTimeout(timeout) {
  _timeout = timeout;
}

function ajax(url, callback, data) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  try {
    var x = void 0;
    var useXDomainRequest = false;
    var method = options.method || (data ? 'POST' : 'GET');

    var callbacks = (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)) === 'object' ? callback : {
      success: function success() {
        utils.logMessage('xhr success');
      },
      error: function error(e) {
        utils.logError('xhr error', null, e);
      }
    };

    if (typeof callback === 'function') {
      callbacks.success = callback;
    }

    if (!window.XMLHttpRequest) {
      useXDomainRequest = true;
    } else {
      x = new window.XMLHttpRequest();
      if (x.responseType === undefined) {
        useXDomainRequest = true;
      }
    }

    if (useXDomainRequest) {
      x = new window.XDomainRequest();
      x.onload = function () {
        callbacks.success(x.responseText, x);
      };

      // http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
      x.onerror = function () {
        callbacks.error('error', x);
      };
      x.ontimeout = function () {
        callbacks.error('timeout', x);
      };
      x.onprogress = function () {
        utils.logMessage('xhr onprogress');
      };
    } else {
      x.onreadystatechange = function () {
        if (x.readyState === XHR_DONE) {
          var status = x.status;
          if (status >= 200 && status < 300 || status === 304) {
            callbacks.success(x.responseText, x);
          } else {
            callbacks.error(x.statusText, x);
          }
        }
      };
    }

    if (method === 'GET' && data) {
      var urlInfo = (0, _url.parse)(url, options);
      _extends(urlInfo.search, data);
      url = (0, _url.format)(urlInfo);
    }

    x.open(method, url);
    // IE needs timoeut to be set after open - see #1410
    x.timeout = _timeout;

    if (!useXDomainRequest) {
      if (options.withCredentials) {
        x.withCredentials = true;
      }
      utils._each(options.customHeaders, function (value, header) {
        x.setRequestHeader(header, value);
      });
      if (options.preflight) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }
      x.setRequestHeader('Content-Type', options.contentType || 'text/plain');
    }
    x.send(method === 'POST' && data);
  } catch (error) {
    utils.logError('xhr construction', error);
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                               * Module for getting and setting Prebid configuration.
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Prebid previously defined these properties directly on the global object:
                                                                                                                                                                                                                                                                               * pbjs.logging = true;
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * Defining and access properties in this way is now deprecated, but these will
                                                                                                                                                                                                                                                                               * continue to work during a deprecation window.
                                                                                                                                                                                                                                                                               */


exports.newConfig = newConfig;

var _cpmBucketManager = __webpack_require__(28);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var utils = __webpack_require__(0);

var DEFAULT_DEBUG = false;
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_COOKIESYNC_DELAY = 100;
var DEFAULT_ENABLE_SEND_ALL_BIDS = false;

var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};

var ALL_TOPICS = '*';

/**
 * @typedef {object} PrebidConfig
 *
 * @property {bool} usePrebidCache True if we should use prebid-cache to store video bids before adding
 *   bids to the auction, and false otherwise. **NOTE** This must be true if you want to use the
 *   dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];

  var defaults = {};

  var config = {
    // `debug` is equivalent to legacy `pbjs.logging` property
    _debug: DEFAULT_DEBUG,
    get debug() {
      if (pbjs.logging || pbjs.logging === false) {
        return pbjs.logging;
      }
      return this._debug;
    },
    set debug(val) {
      this._debug = val;
    },

    // default timeout for all bids
    _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,
    get bidderTimeout() {
      return pbjs.bidderTimeout || this._bidderTimeout;
    },
    set bidderTimeout(val) {
      this._bidderTimeout = val;
    },

    // domain where prebid is running for cross domain iframe communication
    _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,
    get publisherDomain() {
      return pbjs.publisherDomain || this._publisherDomain;
    },
    set publisherDomain(val) {
      this._publisherDomain = val;
    },

    // delay to request cookie sync to stay out of critical path
    _cookieSyncDelay: DEFAULT_COOKIESYNC_DELAY,
    get cookieSyncDelay() {
      return pbjs.cookieSyncDelay || this._cookieSyncDelay;
    },
    set cookieSyncDelay(val) {
      this._cookieSyncDelay = val;
    },

    // calls existing function which may be moved after deprecation
    _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,
    set priceGranularity(val) {
      if (validatePriceGranularity(val)) {
        if (typeof val === 'string') {
          this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
        } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
          this._customPriceBucket = val;
          this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
          utils.logMessage('Using custom price granularity');
        }
      }
    },
    get priceGranularity() {
      return this._priceGranularity;
    },

    _customPriceBucket: {},
    get customPriceBucket() {
      return this._customPriceBucket;
    },

    _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,
    get enableSendAllBids() {
      return this._sendAllBids;
    },
    set enableSendAllBids(val) {
      this._sendAllBids = val;
    },

    // calls existing function which may be moved after deprecation
    set bidderSequence(val) {
      pbjs.setBidderSequence(val);
    },

    // calls existing function which may be moved after deprecation
    set s2sConfig(val) {
      pbjs.setS2SConfig(val);
    }
  };

  function hasGranularity(val) {
    return Object.keys(GRANULARITY_OPTIONS).find(function (option) {
      return val === GRANULARITY_OPTIONS[option];
    });
  }

  function validatePriceGranularity(val) {
    if (!val) {
      utils.logError('Prebid Error: no value passed to `setPriceGranularity()`');
      return false;
    }
    if (typeof val === 'string') {
      if (!hasGranularity(val)) {
        utils.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
      }
    } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      if (!(0, _cpmBucketManager.isValidPriceConfig)(val)) {
        utils.logError('Invalid custom price value passed to `setPriceGranularity()`');
        return false;
      }
    }
    return true;
  }

  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */
  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? utils.deepAccess(config, option) : config;
    }

    return subscribe.apply(undefined, arguments);
  }

  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */
  function setConfig(options) {
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
      utils.logError('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};

    topics.forEach(function (topic) {
      var option = options[topic];

      if (_typeof(defaults[topic]) === 'object' && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
        option = _extends({}, defaults[topic], option);
      }

      topicalConfig[topic] = config[topic] = option;
    });

    callSubscribers(topicalConfig);
  }

  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */
  function setDefaults(options) {
    if ((typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) !== 'object') {
      utils.logError('defaults must be an object');
      return;
    }

    _extends(defaults, options);
    // Add default values to config as well
    _extends(config, options);
  }

  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */
  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      utils.logError('listener must be a function');
      return;
    }

    listeners.push({ topic: topic, callback: callback });

    // save and call this function to remove the listener
    return function unsubscribe() {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  }

  /*
   * Calls listeners that were added by the `subscribe` function
   */
  function callSubscribers(options) {
    var TOPICS = Object.keys(options);

    // call subscribers of a specific topic, passing only that configuration
    listeners.filter(function (listener) {
      return TOPICS.includes(listener.topic);
    }).forEach(function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    });

    // call subscribers that didn't give a topic, passing everything that was set
    listeners.filter(function (listener) {
      return listener.topic === ALL_TOPICS;
    }).forEach(function (listener) {
      return listener.callback(options);
    });
  }

  return {
    getConfig: getConfig,
    setConfig: setConfig,
    setDefaults: setDefaults
  };
}

var config = exports.config = newConfig();

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Adapter;
function Adapter(code) {
  var bidderCode = code;

  function setBidderCode(code) {
    bidderCode = code;
  }

  function getBidderCode() {
    return bidderCode;
  }

  function callBids() {}

  return {
    callBids: callBids,
    setBidderCode: setBidderCode,
    getBidderCode: getBidderCode
  };
}

/***/ })

/******/ });

pbjsChunk([45],{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(97);
module.exports = __webpack_require__(98);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _templateObject = _taggedTemplateLiteral(['//', '/pubapi/3.0/', '/', '/', '/', '/ADTECH;v=2;cmd=bid;cors=yes;alias=', '', '', ';misc=', ''], ['//', '/pubapi/3.0/', '/', '/', '/', '/ADTECH;v=2;cmd=bid;cors=yes;alias=', '', '', ';misc=', '']),
    _templateObject2 = _taggedTemplateLiteral(['//', '/bidRequest?'], ['//', '/bidRequest?']),
    _templateObject3 = _taggedTemplateLiteral(['dcn=', '&pos=', '&cmd=bid', ''], ['dcn=', '&pos=', '&cmd=bid', '']);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _bidderFactory = __webpack_require__(6);

var _config = __webpack_require__(8);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _mediaTypes = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AOL_BIDDERS_CODES = {
  AOL: 'aol',
  ONEMOBILE: 'onemobile',
  ONEDISPLAY: 'onedisplay'
};

var AOL_ENDPOINTS = {
  DISPLAY: {
    GET: 'display-get'
  },
  MOBILE: {
    GET: 'mobile-get',
    POST: 'mobile-post'
  }
};

var SYNC_TYPES = {
  IFRAME: {
    TAG: 'iframe',
    TYPE: 'iframe'
  },
  IMAGE: {
    TAG: 'img',
    TYPE: 'image'
  }
};

var pubapiTemplate = template(_templateObject, 'host', 'network', 'placement', 'pageid', 'sizeid', 'alias', 'bidfloor', 'keyValues', 'misc');
var nexageBaseApiTemplate = template(_templateObject2, 'host');
var nexageGetApiTemplate = template(_templateObject3, 'dcn', 'pos', 'ext');
var MP_SERVER_MAP = {
  us: 'adserver-us.adtech.advertising.com',
  eu: 'adserver-eu.adtech.advertising.com',
  as: 'adserver-as.adtech.advertising.com'
};
var NEXAGE_SERVER = 'hb.nexage.com';
var BID_RESPONSE_TTL = 300;

pbjs.aolGlobals = {
  pixelsDropped: false
};

var showCpmAdjustmentWarning = function () {
  var showCpmWarning = true;

  return function () {
    var bidderSettings = pbjs.bidderSettings;
    if (showCpmWarning && bidderSettings && bidderSettings.aol && typeof bidderSettings.aol.bidCpmAdjustment === 'function') {
      utils.logWarn('bidCpmAdjustment is active for the AOL adapter. ' + 'As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable.');
      showCpmWarning = false; // warning is shown at most once
    }
  };
}();

function template(strings) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      values[_key2] = arguments[_key2];
    }

    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function (key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join('');
  };
}

function isSecureProtocol() {
  return document.location.protocol === 'https:';
}

function parsePixelItems(pixels) {
  var itemsRegExp = /(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi;
  var tagNameRegExp = /\w*(?=\s)/;
  var srcRegExp = /src=("|')(.*?)\1/;
  var pixelsItems = [];

  if (pixels) {
    var matchedItems = pixels.match(itemsRegExp);
    if (matchedItems) {
      matchedItems.forEach(function (item) {
        var tagName = item.match(tagNameRegExp)[0];
        var url = item.match(srcRegExp)[2];

        if (tagName && tagName) {
          pixelsItems.push({
            type: tagName === SYNC_TYPES.IMAGE.TAG ? SYNC_TYPES.IMAGE.TYPE : SYNC_TYPES.IFRAME.TYPE,
            url: url
          });
        }
      });
    }
  }

  return pixelsItems;
}

function _buildMarketplaceUrl(bid) {
  var params = bid.params;
  var serverParam = params.server;
  var regionParam = params.region || 'us';
  var server = void 0;

  if (!MP_SERVER_MAP.hasOwnProperty(regionParam)) {
    utils.logWarn('Unknown region \'' + regionParam + '\' for AOL bidder.');
    regionParam = 'us'; // Default region.
  }

  if (serverParam) {
    server = serverParam;
  } else {
    server = MP_SERVER_MAP[regionParam];
  }

  // Set region param, used by AOL analytics.
  params.region = regionParam;

  return pubapiTemplate({
    host: server,
    network: params.network,
    placement: parseInt(params.placement),
    pageid: params.pageId || 0,
    sizeid: params.sizeId || 0,
    alias: params.alias || utils.getUniqueIdentifierStr(),
    bidfloor: formatMarketplaceBidFloor(params.bidFloor),
    keyValues: formatMarketplaceKeyValues(params.keyValues),
    misc: new Date().getTime() // cache busting
  });
}

function formatMarketplaceBidFloor(bidFloor) {
  return typeof bidFloor !== 'undefined' ? ';bidfloor=' + bidFloor.toString() : '';
}

function formatMarketplaceKeyValues(keyValues) {
  var formattedKeyValues = '';

  utils._each(keyValues, function (value, key) {
    formattedKeyValues += ';kv' + key + '=' + encodeURIComponent(value);
  });

  return formattedKeyValues;
}

function _buildOneMobileBaseUrl(bid) {
  return nexageBaseApiTemplate({
    host: bid.params.host || NEXAGE_SERVER
  });
}

function _buildOneMobileGetUrl(bid) {
  var _bid$params = bid.params,
      dcn = _bid$params.dcn,
      pos = _bid$params.pos;

  var nexageApi = _buildOneMobileBaseUrl(bid);
  if (dcn && pos) {
    var ext = '';
    if (isSecureProtocol()) {
      bid.params.ext = bid.params.ext || {};
      bid.params.ext.secure = 1;
    }
    utils._each(bid.params.ext, function (value, key) {
      ext += '&' + key + '=' + encodeURIComponent(value);
    });
    nexageApi += nexageGetApiTemplate({ dcn: dcn, pos: pos, ext: ext });
  }
  return nexageApi;
}

function _parseBidResponse(response, bidRequest) {
  var bidData = void 0;

  try {
    bidData = response.seatbid[0].bid[0];
  } catch (e) {
    return;
  }

  var cpm = void 0;

  if (bidData.ext && bidData.ext.encp) {
    cpm = bidData.ext.encp;
  } else {
    cpm = bidData.price;

    if (cpm === null || isNaN(cpm)) {
      utils.logError('Invalid price in bid response', AOL_BIDDERS_CODES.AOL, bid);
      return;
    }
  }

  var ad = bidData.adm;
  if (response.ext && response.ext.pixels) {
    if (_config.config.getConfig('aol.userSyncOn') !== _constants2['default'].EVENTS.BID_RESPONSE) {
      var formattedPixels = response.ext.pixels.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, '');

      ad += '<script>if(!parent.pbjs.aolGlobals.pixelsDropped){' + 'parent.pbjs.aolGlobals.pixelsDropped=true;' + formattedPixels + '}</script>';
    }
  }

  return {
    bidderCode: bidRequest.bidderCode,
    requestId: bidRequest.bidId,
    ad: ad,
    cpm: cpm,
    width: bidData.w,
    height: bidData.h,
    creativeId: bidData.crid,
    pubapiId: response.id,
    currency: response.cur,
    dealId: bidData.dealid,
    netRevenue: true,
    ttl: BID_RESPONSE_TTL
  };
}

function _isMarketplaceBidder(bidder) {
  return bidder === AOL_BIDDERS_CODES.AOL || bidder === AOL_BIDDERS_CODES.ONEDISPLAY;
}

function _isNexageBidder(bidder) {
  return bidder === AOL_BIDDERS_CODES.AOL || bidder === AOL_BIDDERS_CODES.ONEMOBILE;
}

function _isNexageRequestPost(bid) {
  if (_isNexageBidder(bid.bidder) && bid.params.id && bid.params.imp && bid.params.imp[0]) {
    var imp = bid.params.imp[0];
    return imp.id && imp.tagid && (imp.banner && imp.banner.w && imp.banner.h || imp.video && imp.video.mimes && imp.video.minduration && imp.video.maxduration);
  }
}

function _isNexageRequestGet(bid) {
  return _isNexageBidder(bid.bidder) && bid.params.dcn && bid.params.pos;
}

function isMarketplaceBid(bid) {
  return _isMarketplaceBidder(bid.bidder) && bid.params.placement && bid.params.network;
}

function isMobileBid(bid) {
  return _isNexageRequestGet(bid) || _isNexageRequestPost(bid);
}

function resolveEndpointCode(bid) {
  if (_isNexageRequestGet(bid)) {
    return AOL_ENDPOINTS.MOBILE.GET;
  } else if (_isNexageRequestPost(bid)) {
    return AOL_ENDPOINTS.MOBILE.POST;
  } else if (isMarketplaceBid(bid)) {
    return AOL_ENDPOINTS.DISPLAY.GET;
  }
}

function formatBidRequest(endpointCode, bid) {
  var bidRequest = void 0;

  switch (endpointCode) {
    case AOL_ENDPOINTS.DISPLAY.GET:
      bidRequest = {
        url: _buildMarketplaceUrl(bid),
        method: 'GET'
      };
      break;

    case AOL_ENDPOINTS.MOBILE.GET:
      bidRequest = {
        url: _buildOneMobileGetUrl(bid),
        method: 'GET'
      };
      break;

    case AOL_ENDPOINTS.MOBILE.POST:
      bidRequest = {
        url: _buildOneMobileBaseUrl(bid),
        method: 'POST',
        data: bid.params,
        options: {
          contentType: 'application/json',
          customHeaders: {
            'x-openrtb-version': '2.2'
          }
        }
      };
      break;
  }

  bidRequest.bidderCode = bid.bidder;
  bidRequest.bidId = bid.bidId;
  bidRequest.userSyncOn = bid.params.userSyncOn;

  return bidRequest;
}

function interpretResponse(_ref, bidRequest) {
  var body = _ref.body;

  showCpmAdjustmentWarning();
  if (!body) {
    utils.logError('Empty bid response', bidRequest.bidderCode, body);
  } else {
    var _bid = _parseBidResponse(body, bidRequest);

    if (_bid) {
      return _bid;
    }
  }
  return {
    requestId: bidRequest.bidId,
    cpm: 0,
    width: 1,
    height: 1,
    creativeId: null,
    dealId: null,
    currency: 'USD',
    netRevenue: true,
    mediaType: _mediaTypes.BANNER,
    ttl: 60000,
    ad: null
  };
}

var spec = exports.spec = {
  code: AOL_BIDDERS_CODES.AOL,
  aliases: [AOL_BIDDERS_CODES.ONEMOBILE, AOL_BIDDERS_CODES.ONEDISPLAY],
  isBidRequestValid: function isBidRequestValid(bid) {
    return isMarketplaceBid(bid) || isMobileBid(bid);
  },
  buildRequests: function buildRequests(bids) {
    return bids.map(function (bid) {
      var endpointCode = resolveEndpointCode(bid);

      if (endpointCode) {
        return formatBidRequest(endpointCode, bid);
      }
    });
  },
  interpretResponse: interpretResponse,
  getUserSyncs: function getUserSyncs(options, bidResponses) {
    var bidResponse = bidResponses[0];

    if (_config.config.getConfig('aol.userSyncOn') === _constants2['default'].EVENTS.BID_RESPONSE) {
      if (!pbjs.aolGlobals.pixelsDropped && bidResponse.ext && bidResponse.ext.pixels) {
        pbjs.aolGlobals.pixelsDropped = true;

        return parsePixelItems(bidResponse.ext.pixels);
      }
    }

    return [];
  }
};

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {



/***/ })

},[96]);

pbjsChunk([111],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var _adaptermanager = __webpack_require__(1);

var _adaptermanager2 = _interopRequireDefault(_adaptermanager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CONSTANTS = __webpack_require__(4);
var utils = __webpack_require__(0);
var adloader = __webpack_require__(5);
var bidmanager = __webpack_require__(2);
var bidfactory = __webpack_require__(3);
var Adapter = __webpack_require__(9)['default'];

var AppNexusAdapter;
AppNexusAdapter = function AppNexusAdapter() {
  var baseAdapter = new Adapter('appnexus');
  var usersync = false;

  baseAdapter.callBids = function (params) {
    // var bidCode = baseAdapter.getBidderCode();

    var anArr = params.bids;

    // var bidsCount = anArr.length;

    // set expected bids count for callback execution
    // bidmanager.setExpectedBidsCount(bidCode, bidsCount);

    for (var i = 0; i < anArr.length; i++) {
      var bidRequest = anArr[i];
      var callbackId = bidRequest.bidId;
      adloader.loadScript(buildJPTCall(bidRequest, callbackId));

      // store a reference to the bidRequest from the callback id
      // bidmanager.pbCallbackMap[callbackId] = bidRequest;
    }
  };

  function buildJPTCall(bid, callbackId) {
    // determine tag params
    var placementId = utils.getBidIdParameter('placementId', bid.params);

    // memberId will be deprecated, use member instead
    var memberId = utils.getBidIdParameter('memberId', bid.params);
    var member = utils.getBidIdParameter('member', bid.params);
    var inventoryCode = utils.getBidIdParameter('invCode', bid.params);
    var query = utils.getBidIdParameter('query', bid.params);
    var referrer = utils.getBidIdParameter('referrer', bid.params);
    var altReferrer = utils.getBidIdParameter('alt_referrer', bid.params);
    var usePaymentRule = utils.getBidIdParameter('usePaymentRule', bid.params);
    var jptCall = '//ib.adnxs.com/jpt?';

    jptCall = utils.tryAppendQueryString(jptCall, 'callback', 'pbjs.handleAnCB');
    jptCall = utils.tryAppendQueryString(jptCall, 'callback_uid', callbackId);
    jptCall = utils.tryAppendQueryString(jptCall, 'psa', '0');
    jptCall = utils.tryAppendQueryString(jptCall, 'id', placementId);
    jptCall = utils.tryAppendQueryString(jptCall, 'use_pmt_rule', usePaymentRule);

    if (member) {
      jptCall = utils.tryAppendQueryString(jptCall, 'member', member);
    } else if (memberId) {
      jptCall = utils.tryAppendQueryString(jptCall, 'member', memberId);
      utils.logMessage('appnexus.callBids: "memberId" will be deprecated soon. Please use "member" instead');
    }

    jptCall = utils.tryAppendQueryString(jptCall, 'code', inventoryCode);
    jptCall = utils.tryAppendQueryString(jptCall, 'traffic_source_code', utils.getBidIdParameter('trafficSourceCode', bid.params));

    // sizes takes a bit more logic
    var sizeQueryString = '';
    var parsedSizes = utils.parseSizesInput(bid.sizes);

    // combine string into proper querystring for impbus
    var parsedSizesLength = parsedSizes.length;
    if (parsedSizesLength > 0) {
      // first value should be "size"
      sizeQueryString = 'size=' + parsedSizes[0];
      if (parsedSizesLength > 1) {
        // any subsequent values should be "promo_sizes"
        sizeQueryString += '&promo_sizes=';
        for (var j = 1; j < parsedSizesLength; j++) {
          sizeQueryString += parsedSizes[j] += ',';
        }

        // remove trailing comma
        if (sizeQueryString && sizeQueryString.charAt(sizeQueryString.length - 1) === ',') {
          sizeQueryString = sizeQueryString.slice(0, sizeQueryString.length - 1);
        }
      }
    }

    if (sizeQueryString) {
      jptCall += sizeQueryString + '&';
    }

    // this will be deprecated soon
    var targetingParams = utils.parseQueryStringParameters(query);

    if (targetingParams) {
      // don't append a & here, we have already done it in parseQueryStringParameters
      jptCall += targetingParams;
    }

    // append custom attributes:
    var paramsCopy = _extends({}, bid.params);

    // delete attributes already used
    delete paramsCopy.placementId;
    delete paramsCopy.memberId;
    delete paramsCopy.invCode;
    delete paramsCopy.query;
    delete paramsCopy.referrer;
    delete paramsCopy.alt_referrer;
    delete paramsCopy.member;
    delete paramsCopy.usePaymentRule;

    // get the reminder
    var queryParams = utils.parseQueryStringParameters(paramsCopy);

    // append
    if (queryParams) {
      jptCall += queryParams;
    }

    // append referrer
    if (referrer === '') {
      referrer = utils.getTopWindowUrl();
    }

    jptCall = utils.tryAppendQueryString(jptCall, 'referrer', referrer);
    jptCall = utils.tryAppendQueryString(jptCall, 'alt_referrer', altReferrer);

    // remove the trailing "&"
    if (jptCall.lastIndexOf('&') === jptCall.length - 1) {
      jptCall = jptCall.substring(0, jptCall.length - 1);
    }

    // @if NODE_ENV='debug'
    utils.logMessage('jpt request built: ' + jptCall);

    // @endif

    // append a timer here to track latency
    bid.startTime = new Date().getTime();

    return jptCall;
  }

  // expose the callback to the global object:
  pbjs.handleAnCB = function (jptResponseObj) {
    var bidCode;

    if (jptResponseObj && jptResponseObj.callback_uid) {
      var responseCPM;
      var id = jptResponseObj.callback_uid;
      var placementCode = '';
      var bidObj = (0, _utils.getBidRequest)(id);
      if (bidObj) {
        bidCode = bidObj.bidder;

        placementCode = bidObj.placementCode;

        // set the status
        bidObj.status = CONSTANTS.STATUS.GOOD;
      }

      // @if NODE_ENV='debug'
      utils.logMessage('JSONP callback function called for ad ID: ' + id);

      // @endif
      var bid = [];
      if (jptResponseObj.result && jptResponseObj.result.cpm && jptResponseObj.result.cpm !== 0) {
        responseCPM = parseInt(jptResponseObj.result.cpm, 10);

        // CPM response from /jpt is dollar/cent multiplied by 10000
        // in order to avoid using floats
        // switch CPM to "dollar/cent"
        responseCPM = responseCPM / 10000;

        // store bid response
        // bid status is good (indicating 1)
        var adId = jptResponseObj.result.creative_id;
        bid = bidfactory.createBid(1, bidObj);
        bid.creative_id = adId;
        bid.bidderCode = bidCode;
        bid.cpm = responseCPM;
        bid.adUrl = jptResponseObj.result.ad;
        bid.width = jptResponseObj.result.width;
        bid.height = jptResponseObj.result.height;
        bid.dealId = jptResponseObj.result.deal_id;

        bidmanager.addBidResponse(placementCode, bid);
      } else {
        // no response data
        // @if NODE_ENV='debug'
        utils.logMessage('No prebid response from AppNexus for placement code ' + placementCode);

        // @endif
        // indicate that there is no bid for this placement
        bid = bidfactory.createBid(2, bidObj);
        bid.bidderCode = bidCode;
        bidmanager.addBidResponse(placementCode, bid);
      }

      if (!usersync) {
        var iframe = utils.createInvisibleIframe();
        iframe.src = '//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html';
        try {
          document.body.appendChild(iframe);
        } catch (error) {
          utils.logError(error);
        }
        usersync = true;
      }
    } else {
      // no response data
      // @if NODE_ENV='debug'
      utils.logMessage('No prebid response for placement %%PLACEMENT%%');

      // @endif
    }
  };

  return _extends(this, {
    callBids: baseAdapter.callBids,
    setBidderCode: baseAdapter.setBidderCode,
    buildJPTCall: buildJPTCall
  });
};

_adaptermanager2['default'].registerBidAdapter(new AppNexusAdapter(), 'appnexus');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'brealtime');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'pagescience');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'defymedia');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'gourmetads');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'matomy');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'featureforward');
_adaptermanager2['default'].aliasBidAdapter('appnexus', 'oftmedia');

module.exports = AppNexusAdapter;

/***/ })

},[104]);

pbjsChunk([102],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
var bidfactory = __webpack_require__(3);
var bidmanager = __webpack_require__(2);
var adloader = __webpack_require__(5);
var adaptermanager = __webpack_require__(1);
var utils = __webpack_require__(0);

var CriteoAdapter = function CriteoAdapter() {
  var sProt = window.location.protocol === 'http:' ? 'http:' : 'https:';
  var _publisherTagUrl = sProt + '//static.criteo.net/js/ld/publishertag.prebid.js';
  var _bidderCode = 'criteo';
  var _profileId = 125;

  function _callBids(params) {
    if (!window.criteo_pubtag || window.criteo_pubtag instanceof Array) {
      // publisherTag not loaded yet

      _pushBidRequestEvent(params);
      var criteoFastBid = _tryGetCriteoFastBid();
      if (criteoFastBid) {
        eval(criteoFastBid);
      } else {
        adloader.loadScript(_publisherTagUrl, function () {}, false);
      }
    } else {
      // publisherTag already loaded
      _pushBidRequestEvent(params);
    }
  }

  function _tryGetCriteoFastBid() {
    try {
      return localStorage.getItem('criteo_fast_bid');
    } catch (e) {
      return null;
    }
  }

  // send bid request to criteo direct bidder handler
  function _pushBidRequestEvent(params) {
    // if we want to be fully asynchronous, we must first check window.criteo_pubtag in case publishertag.js is not loaded yet.
    window.Criteo = window.Criteo || {};
    window.Criteo.events = window.Criteo.events || [];

    // generate the bidding event
    var biddingEventFunc = function biddingEventFunc() {
      var bids = params.bids || [];
      var slots = [];
      var isAudit = false;
      var networkid;
      var integrationMode;

      // build slots before sending one multi-slots bid request
      for (var i = 0; i < bids.length; i++) {
        var bid = bids[i];
        var sizes = utils.parseSizesInput(bid.sizes);
        slots.push(new Criteo.PubTag.DirectBidding.DirectBiddingSlot(bid.placementCode, bid.params.zoneId, bid.params.nativeCallback ? bid.params.nativeCallback : undefined, bid.transactionId, sizes.map(function (sizeString) {
          var xIndex = sizeString.indexOf('x');
          var w = parseInt(sizeString.substring(0, xIndex));
          var h = parseInt(sizeString.substring(xIndex + 1, sizeString.length));
          return new Criteo.PubTag.DirectBidding.Size(w, h);
        })));

        networkid = bid.params.networkId || networkid;
        if (bid.params.integrationMode !== undefined) {
          integrationMode = bid.params.integrationMode.toLowerCase() == 'amp' ? 1 : 0;
        }

        isAudit |= bid.params.audit !== undefined;
      }

      var biddingEvent = new Criteo.PubTag.DirectBidding.DirectBiddingEvent(_profileId, new Criteo.PubTag.DirectBidding.DirectBiddingUrlBuilder(isAudit), slots, _callbackSuccess(slots), _callbackError(slots), _callbackError(slots), // timeout handled as error
      undefined, networkid, integrationMode);

      // process the event as soon as possible
      window.criteo_pubtag.push(biddingEvent);
    };

    window.Criteo.events.push(biddingEventFunc);
  }

  function parseBidResponse(bidsResponse) {
    try {
      return JSON.parse(bidsResponse);
    } catch (error) {
      return {};
    }
  }

  function isNoBidResponse(jsonbidsResponse) {
    return jsonbidsResponse.slots === undefined;
  }

  function _callbackSuccess(slots) {
    return function (bidsResponse) {
      var jsonbidsResponse = parseBidResponse(bidsResponse);

      if (isNoBidResponse(jsonbidsResponse)) {
        return _callbackError(slots)();
      }

      for (var i = 0; i < slots.length; i++) {
        var bidResponse = null;

        // look for the matching bid response
        for (var j = 0; j < jsonbidsResponse.slots.length; j++) {
          if (jsonbidsResponse.slots[j] && jsonbidsResponse.slots[j].impid === slots[i].impId) {
            bidResponse = jsonbidsResponse.slots.splice(j, 1)[0];
            break;
          }
        }

        // register the bid response
        var bidObject = _buildBidObject(bidResponse, slots[i]);
        bidmanager.addBidResponse(slots[i].impId, bidObject);
      }
    };
  }

  function _callbackError(slots) {
    return function () {
      for (var i = 0; i < slots.length; i++) {
        bidmanager.addBidResponse(slots[i].impId, _invalidBidResponse());
      }
    };
  }

  function _invalidBidResponse() {
    var bidObject = bidfactory.createBid(2);
    bidObject.bidderCode = _bidderCode;
    return bidObject;
  }

  function _buildBidObject(bidResponse, slot) {
    var bidObject = void 0;
    if (bidResponse) {
      // map the common fields
      bidObject = bidfactory.createBid(1);
      bidObject.bidderCode = _bidderCode;
      bidObject.cpm = bidResponse.cpm;

      // in case of native
      if (slot.nativeCallback && bidResponse.native) {
        if (typeof slot.nativeCallback !== 'function') {
          utils.logError('Criteo bid: nativeCallback parameter is not a function');
        } else {
          // store the callbacks in a global object
          window.criteo_pubtag.native_slots = window.criteo_pubtag.native_slots || {};
          window.criteo_pubtag.native_slots['' + bidObject.adId] = { callback: slot.nativeCallback, nativeResponse: bidResponse.native };

          // this code is executed in an iframe, we need to get a reference to the
          // publishertag in the main window to retrieve native responses and callbacks.
          // it doesn't work with safeframes
          bidObject.ad = '<script type="text/javascript">\n  let win = window;\n  for (const i=0; i<10; ++i) {\n    win = win.parent;\n    if (win.criteo_pubtag && win.criteo_pubtag.native_slots) {\n      let responseSlot = win.criteo_pubtag.native_slots["' + bidObject.adId + '"];\n      responseSlot.callback(responseSlot.nativeResponse);\n      break;\n    }\n  }\n</script>';
        }
      } else {
        // width and height are only relevant with non-native requests.
        // native requests will always return a 2x2 zone size.
        bidObject.width = bidResponse.width;
        bidObject.height = bidResponse.height;
        bidObject.ad = bidResponse.creative;
      }
    } else {
      bidObject = _invalidBidResponse();
    }
    return bidObject;
  }

  return {
    callBids: _callBids
  };
};

adaptermanager.registerBidAdapter(new CriteoAdapter(), 'criteo');

module.exports = CriteoAdapter;

/***/ })

},[137]);

pbjsChunk([100],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bidfactory = __webpack_require__(3);
var bidmanager = __webpack_require__(2);
var adLoader = __webpack_require__(5);
var adaptermanager = __webpack_require__(1);

var DistrictmAdaptor = function districtmAdaptor() {
  var _this = this;

  var districtmUrl = window.location.protocol + '//prebid.districtm.ca/lib.js';
  this.callBids = function (params) {
    if (!window.hb_dmx_res) {
      adLoader.loadScript(districtmUrl, function () {
        _this.sendBids(params);
      });
    } else {
      _this.sendBids(params);
    }
    return params;
  };

  this.handlerRes = function (response, bidObject) {
    var bid = void 0;
    if (parseFloat(response.result.cpm) > 0) {
      bid = bidfactory.createBid(1, bidObject);
      bid.bidderCode = bidObject.bidder;
      bid.cpm = response.result.cpm;
      bid.width = response.result.width;
      bid.height = response.result.height;
      bid.ad = response.result.banner;
      bidmanager.addBidResponse(bidObject.placementCode, bid);
    } else {
      bid = bidfactory.createBid(2, bidObject);
      bid.bidderCode = bidObject.bidder;
      bidmanager.addBidResponse(bidObject.placementCode, bid);
    }

    return bid;
  };

  this.sendBids = function (params) {
    var bids = params.bids;
    for (var i = 0; i < bids.length; i++) {
      bids[i].params.sizes = window.hb_dmx_res.auction.fixSize(bids[i].sizes);
    }
    window.hb_dmx_res.auction.run(window.hb_dmx_res.ssp, bids, this.handlerRes);
    return bids;
  };

  return {
    callBids: this.callBids,
    sendBids: this.sendBids,
    handlerRes: this.handlerRes
  };
};

adaptermanager.registerBidAdapter(new DistrictmAdaptor(), 'districtmDMX');

module.exports = DistrictmAdaptor;

/***/ })

},[144]);

pbjsChunk([91],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Factory for creating the bidderAdaptor
// jshint ignore:start


var _adapter = __webpack_require__(9);

var _adapter2 = _interopRequireDefault(_adapter);

var _bidfactory = __webpack_require__(3);

var _bidfactory2 = _interopRequireDefault(_bidfactory);

var _bidmanager = __webpack_require__(2);

var _bidmanager2 = _interopRequireDefault(_bidmanager);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _constants = __webpack_require__(4);

var _url = __webpack_require__(13);

var url = _interopRequireWildcard(_url);

var _adloader = __webpack_require__(5);

var _adloader2 = _interopRequireDefault(_adloader);

var _adaptermanager = __webpack_require__(1);

var _adaptermanager2 = _interopRequireDefault(_adaptermanager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ADAPTER_NAME = 'INDEXEXCHANGE';
var ADAPTER_CODE = 'indexExchange';

var CONSTANTS = {
  'INDEX_DEBUG_MODE': {
    'queryParam': 'pbjs_ix_debug',
    'mode': {
      'sandbox': {
        'topFrameLimit': 10,
        'queryValue': 'sandbox',
        'siteID': '999990'
      }
    }
  }
};

var OPEN_MARKET = 'IOM';
var PRIVATE_MARKET = 'IPM';

var VIDEO_REQUIRED_PARAMS_MAP = {
  siteID: true,
  playerType: true,
  protocols: true,
  maxduration: true
};
var VIDEO_OPTIONAL_PARAMS_MAP = {
  minduration: 0,
  startdelay: 'preroll',
  linearity: 'linear',
  mimes: [],
  allowVPAID: true,
  apiList: []
};
var SUPPORTED_PLAYER_TYPES_MAP = {
  HTML5: true,
  FLASH: true
};
var SUPPORTED_PROTOCOLS_MAP = {
  'VAST2': [2, 5],
  'VAST3': [3, 6]
};
var SUPPORTED_API_MAP = {
  FLASH: [1, 2],
  HTML5: [2]
};
var LINEARITY_MAP = {
  linear: 1,
  nonlinear: 2
};
var START_DELAY_MAP = {
  preroll: 0,
  midroll: -1,
  postroll: -2
};
var SLOT_ID_PREFIX_MAP = {
  preroll: 'pr',
  midroll: 'm',
  postroll: 'po'
};
var DEFAULT_MIMES_MAP = {
  FLASH: ['video/mp4', 'video/x-flv'],
  HTML5: ['video/mp4', 'video/webm']
};
var DEFAULT_VPAID_MIMES_MAP = {
  FLASH: ['application/x-shockwave-flash'],
  HTML5: ['application/javascript']
};

var BASE_CYGNUS_VIDEO_URL_INSECURE = 'http://as.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse';
var BASE_CYGNUS_VIDEO_URL_SECURE = 'https://as-sec.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse';

window.cygnus_index_parse_res = function (response) {
  try {
    if (response) {
      if ((typeof _IndexRequestData === 'undefined' ? 'undefined' : _typeof(_IndexRequestData)) !== 'object' || _typeof(_IndexRequestData.impIDToSlotID) !== 'object' || typeof _IndexRequestData.impIDToSlotID[response.id] === 'undefined') {
        return;
      }
      var targetMode = 1;
      var callbackFn;
      if (_typeof(_IndexRequestData.reqOptions) === 'object' && _typeof(_IndexRequestData.reqOptions[response.id]) === 'object') {
        if (typeof _IndexRequestData.reqOptions[response.id].callback === 'function') {
          callbackFn = _IndexRequestData.reqOptions[response.id].callback;
        }
        if (typeof _IndexRequestData.reqOptions[response.id].targetMode === 'number') {
          targetMode = _IndexRequestData.reqOptions[response.id].targetMode;
        }
      }

      _IndexRequestData.lastRequestID = response.id;
      _IndexRequestData.targetIDToBid = {};
      _IndexRequestData.targetIDToResp = {};
      _IndexRequestData.targetIDToCreative = {};

      var allBids = [];
      var seatbidLength = typeof response.seatbid === 'undefined' ? 0 : response.seatbid.length;
      for (var i = 0; i < seatbidLength; i++) {
        for (var j = 0; j < response.seatbid[i].bid.length; j++) {
          var bid = response.seatbid[i].bid[j];
          if (_typeof(bid.ext) !== 'object' || typeof bid.ext.pricelevel !== 'string') {
            continue;
          }
          if (typeof _IndexRequestData.impIDToSlotID[response.id][bid.impid] === 'undefined') {
            continue;
          }
          var slotID = _IndexRequestData.impIDToSlotID[response.id][bid.impid];
          var targetID;
          var noTargetModeTargetID;
          var targetPrefix;
          if (typeof bid.ext.dealid === 'string') {
            if (targetMode === 1) {
              targetID = slotID + bid.ext.pricelevel;
            } else {
              targetID = slotID + '_' + bid.ext.dealid;
            }
            noTargetModeTargetID = slotID + '_' + bid.ext.dealid;
            targetPrefix = PRIVATE_MARKET + '_';
          } else {
            targetID = slotID + bid.ext.pricelevel;
            noTargetModeTargetID = slotID + bid.ext.pricelevel;
            targetPrefix = OPEN_MARKET + '_';
          }
          if (_IndexRequestData.targetIDToBid[targetID] === undefined) {
            _IndexRequestData.targetIDToBid[targetID] = [bid.adm];
          } else {
            _IndexRequestData.targetIDToBid[targetID].push(bid.adm);
          }
          if (_IndexRequestData.targetIDToCreative[noTargetModeTargetID] === undefined) {
            _IndexRequestData.targetIDToCreative[noTargetModeTargetID] = [bid.adm];
          } else {
            _IndexRequestData.targetIDToCreative[noTargetModeTargetID].push(bid.adm);
          }
          var impBid = {};
          impBid.impressionID = bid.impid;
          if (typeof bid.ext.dealid !== 'undefined') {
            impBid.dealID = bid.ext.dealid;
          }
          impBid.bid = bid.price;
          impBid.slotID = slotID;
          impBid.priceLevel = bid.ext.pricelevel;
          impBid.target = targetPrefix + targetID;
          _IndexRequestData.targetIDToResp[targetID] = impBid;
          allBids.push(impBid);
        }
      }
      if (typeof callbackFn === 'function') {
        if (allBids.length === 0) {
          callbackFn(response.id);
        } else {
          callbackFn(response.id, allBids);
        }
      }
    }
  } catch (e) {}

  if (typeof window.cygnus_index_ready_state === 'function') {
    window.cygnus_index_ready_state();
  }
};

window.index_render = function (doc, targetID) {
  try {
    var ad = _IndexRequestData.targetIDToCreative[targetID].pop();
    if (ad != null) {
      doc.write(ad);
    } else {
      var url = utils.getTopWindowLocation().protocol === 'http:' ? 'http://as.casalemedia.com' : 'https://as-sec.casalemedia.com';
      url += '/headerstats?type=RT&s=' + cygnus_index_args.siteID + '&u=' + encodeURIComponent(location.href) + '&r=' + _IndexRequestData.lastRequestID;
      var px_call = new Image();
      px_call.src = url + '&blank=' + targetID;
    }
  } catch (e) {}
};

window.headertag_render = function (doc, targetID, slotID) {
  var index_slot = slotID;
  var index_ary = targetID.split(',');
  for (var i = 0; i < index_ary.length; i++) {
    var unpack = index_ary[i].split('_');
    if (unpack[0] == index_slot) {
      index_render(doc, index_ary[i]);
      return;
    }
  }
};

window.cygnus_index_args = {};

var cygnus_index_adunits = [[728, 90], [120, 600], [300, 250], [160, 600], [336, 280], [234, 60], [300, 600], [300, 50], [320, 50], [970, 250], [300, 1050], [970, 90], [180, 150]];

var getIndexDebugMode = function getIndexDebugMode() {
  return getParameterByName(CONSTANTS.INDEX_DEBUG_MODE.queryParam).toUpperCase();
};

var getParameterByName = function getParameterByName(name) {
  var wdw = window;
  var childsReferrer = '';
  for (var x = 0; x < CONSTANTS.INDEX_DEBUG_MODE.mode.sandbox.topFrameLimit; x++) {
    if (wdw.parent == wdw) {
      break;
    }
    try {
      childsReferrer = wdw.document.referrer;
    } catch (err) {}
    wdw = wdw.parent;
  }
  var topURL = top === self ? location.href : childsReferrer;
  var regexS = '[\\?&]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(topURL);
  if (results === null) {
    return '';
  }
  return decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var cygnus_index_start = function cygnus_index_start() {
  window.cygnus_index_args.parseFn = cygnus_index_parse_res;
  var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var meta = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
  };

  function escapeCharacter(character) {
    var escaped = meta[character];
    if (typeof escaped === 'string') {
      return escaped;
    } else {
      return '\\u' + ('0000' + character.charCodeAt(0).toString(16)).slice(-4);
    }
  }

  function quote(string) {
    escapable.lastIndex = 0;
    if (escapable.test(string)) {
      return string.replace(escapable, escapeCharacter);
    } else {
      return string;
    }
  }

  function OpenRTBRequest(siteID, parseFn, timeoutDelay) {
    this.initialized = false;
    if (typeof siteID !== 'number' || siteID % 1 !== 0 || siteID < 0) {
      throw 'Invalid Site ID';
    }

    timeoutDelay = Number(timeoutDelay);
    if (typeof timeoutDelay === 'number' && timeoutDelay % 1 === 0 && timeoutDelay >= 0) {
      this.timeoutDelay = timeoutDelay;
    }

    this.siteID = siteID;
    this.impressions = [];
    this._parseFnName = undefined;

    // Get page URL
    this.sitePage = undefined;
    try {
      this.sitePage = utils.getTopWindowUrl();
    } catch (e) {}
    // Fallback to old logic if utils.getTopWindowUrl() fails to return site.page
    if (typeof this.sitePage === 'undefined' || this.sitePage === '') {
      if (top === self) {
        this.sitePage = location.href;
      } else {
        this.sitePage = document.referrer;
      }
    }

    if (top === self) {
      this.topframe = 1;
    } else {
      this.topframe = 0;
    }

    if (typeof parseFn !== 'undefined') {
      if (typeof parseFn === 'function') {
        this._parseFnName = 'cygnus_index_args.parseFn';
      } else {
        throw 'Invalid jsonp target function';
      }
    }

    if (typeof _IndexRequestData.requestCounter === 'undefined') {
      _IndexRequestData.requestCounter = Math.floor(Math.random() * 256);
    } else {
      _IndexRequestData.requestCounter = (_IndexRequestData.requestCounter + 1) % 256;
    }

    this.requestID = String(new Date().getTime() % 2592000 * 256 + _IndexRequestData.requestCounter + 256);
    this.initialized = true;
  }

  OpenRTBRequest.prototype.serialize = function () {
    var json = '{"id":"' + this.requestID + '","site":{"page":"' + quote(this.sitePage) + '"';
    if (typeof document.referrer === 'string' && document.referrer !== '') {
      json += ',"ref":"' + quote(document.referrer) + '"';
    }

    json += '},"imp":[';
    for (var i = 0; i < this.impressions.length; i++) {
      var impObj = this.impressions[i];
      var ext = [];
      json += '{"id":"' + impObj.id + '", "banner":{"w":' + impObj.w + ',"h":' + impObj.h + ',"topframe":' + String(this.topframe) + '}';
      if (typeof impObj.bidfloor === 'number') {
        json += ',"bidfloor":' + impObj.bidfloor;
        if (typeof impObj.bidfloorcur === 'string') {
          json += ',"bidfloorcur":"' + quote(impObj.bidfloorcur) + '"';
        }
      }

      if (typeof impObj.slotID === 'string' && !impObj.slotID.match(/^\s*$/)) {
        ext.push('"sid":"' + quote(impObj.slotID) + '"');
      }

      if (typeof impObj.siteID === 'number') {
        ext.push('"siteID":' + impObj.siteID);
      }

      if (ext.length > 0) {
        json += ',"ext": {' + ext.join() + '}';
      }

      if (i + 1 === this.impressions.length) {
        json += '}';
      } else {
        json += '},';
      }
    }

    json += ']}';
    return json;
  };

  OpenRTBRequest.prototype.setPageOverride = function (sitePageOverride) {
    if (typeof sitePageOverride === 'string' && !sitePageOverride.match(/^\s*$/)) {
      this.sitePage = sitePageOverride;
      return true;
    } else {
      return false;
    }
  };

  OpenRTBRequest.prototype.addImpression = function (width, height, bidFloor, bidFloorCurrency, slotID, siteID) {
    var impObj = {
      id: String(this.impressions.length + 1)
    };
    if (typeof width !== 'number' || width <= 1) {
      return null;
    }

    if (typeof height !== 'number' || height <= 1) {
      return null;
    }

    if ((typeof slotID === 'string' || typeof slotID === 'number') && String(slotID).length <= 50) {
      impObj.slotID = String(slotID);
    }

    impObj.w = width;
    impObj.h = height;
    if (bidFloor !== undefined && typeof bidFloor !== 'number') {
      return null;
    }

    if (typeof bidFloor === 'number') {
      if (bidFloor < 0) {
        return null;
      }

      impObj.bidfloor = bidFloor;
      if (bidFloorCurrency !== undefined && typeof bidFloorCurrency !== 'string') {
        return null;
      }

      impObj.bidfloorcur = bidFloorCurrency;
    }

    if (typeof siteID !== 'undefined') {
      if (typeof siteID === 'number' && siteID % 1 === 0 && siteID >= 0) {
        impObj.siteID = siteID;
      } else {
        return null;
      }
    }

    this.impressions.push(impObj);
    return impObj.id;
  };

  OpenRTBRequest.prototype.buildRequest = function () {
    if (this.impressions.length === 0 || this.initialized !== true) {
      return;
    }

    var jsonURI = encodeURIComponent(this.serialize());

    var scriptSrc;
    if (getIndexDebugMode() == CONSTANTS.INDEX_DEBUG_MODE.mode.sandbox.queryValue.toUpperCase()) {
      this.siteID = CONSTANTS.INDEX_DEBUG_MODE.mode.sandbox.siteID;
      scriptSrc = utils.getTopWindowLocation().protocol === 'http:' ? 'http://sandbox.ht.indexexchange.com' : 'https://sandbox.ht.indexexchange.com';
      utils.logMessage('IX DEBUG: Sandbox mode activated');
    } else {
      scriptSrc = utils.getTopWindowLocation().protocol === 'http:' ? 'http://as.casalemedia.com' : 'https://as-sec.casalemedia.com';
    }
    var prebidVersion = encodeURIComponent('0.34.1');
    scriptSrc += '/cygnus?v=7&fn=cygnus_index_parse_res&s=' + this.siteID + '&r=' + jsonURI + '&pid=pb' + prebidVersion;
    if (typeof this.timeoutDelay === 'number' && this.timeoutDelay % 1 === 0 && this.timeoutDelay >= 0) {
      scriptSrc += '&t=' + this.timeoutDelay;
    }

    return scriptSrc;
  };

  try {
    if (typeof cygnus_index_args === 'undefined' || typeof cygnus_index_args.siteID === 'undefined' || typeof cygnus_index_args.slots === 'undefined') {
      return;
    }

    var req = new OpenRTBRequest(cygnus_index_args.siteID, cygnus_index_args.parseFn, cygnus_index_args.timeout);
    if (cygnus_index_args.url && typeof cygnus_index_args.url === 'string') {
      req.setPageOverride(cygnus_index_args.url);
    }

    _IndexRequestData.impIDToSlotID[req.requestID] = {};
    _IndexRequestData.reqOptions[req.requestID] = {};
    var slotDef, impID;

    for (var i = 0; i < cygnus_index_args.slots.length; i++) {
      slotDef = cygnus_index_args.slots[i];

      impID = req.addImpression(slotDef.width, slotDef.height, slotDef.bidfloor, slotDef.bidfloorcur, slotDef.id, slotDef.siteID);
      if (impID) {
        _IndexRequestData.impIDToSlotID[req.requestID][impID] = String(slotDef.id);
      }
    }

    if (typeof cygnus_index_args.targetMode === 'number') {
      _IndexRequestData.reqOptions[req.requestID].targetMode = cygnus_index_args.targetMode;
    }

    if (typeof cygnus_index_args.callback === 'function') {
      _IndexRequestData.reqOptions[req.requestID].callback = cygnus_index_args.callback;
    }

    return req.buildRequest();
  } catch (e) {
    utils.logError('Error calling index adapter', ADAPTER_NAME, e);
  }
};

var IndexExchangeAdapter = function IndexExchangeAdapter() {
  var baseAdapter = new _adapter2['default']('indexExchange');

  var slotIdMap = {};
  var requiredParams = [
  /* 0 */
  'id',
  /* 1 */
  'siteID'];
  var firstAdUnitCode = '';
  var bidRequests = {};

  function passOnBid(adUnitCode) {
    var bid = _bidfactory2['default'].createBid(2);
    bid.bidderCode = ADAPTER_CODE;
    _bidmanager2['default'].addBidResponse(adUnitCode, bid);
    return bid;
  }

  function _callBids(request) {
    if (typeof request === 'undefined' || utils.isEmpty(request)) {
      return;
    }

    var bidArr = request.bids;

    if (typeof window._IndexRequestData === 'undefined') {
      window._IndexRequestData = {};
      window._IndexRequestData.impIDToSlotID = {};
      window._IndexRequestData.reqOptions = {};
    }
    // clear custom targets at the beginning of every request
    _IndexRequestData.targetAggregate = { 'open': {}, 'private': {} };

    // Our standard is to always bid for all known slots.
    cygnus_index_args.slots = [];

    var videoImpressions = [];

    // Grab the slot level data for cygnus_index_args
    bidArr.forEach(function (bid) {
      if (bid.mediaType === 'video') {
        var impression = buildVideoImpressions(bid, bidRequests);
        if (typeof impression !== 'undefined') {
          videoImpressions.push(impression);
        }
      } else {
        cygnus_index_init(bid);
      }
    });

    if (videoImpressions.length > 0) {
      sendVideoRequest(request.bidderRequestId, videoImpressions);
    }

    if (cygnus_index_args.slots.length > 20) {
      utils.logError('Too many unique sizes on slots, will use the first 20.', ADAPTER_NAME);
    }

    if (cygnus_index_args.slots.length > 0) {
      // bidmanager.setExpectedBidsCount(ADAPTER_CODE, expectedBids);
      _adloader2['default'].loadScript(cygnus_index_start());
    }

    var responded = false;

    // Handle response
    window.cygnus_index_ready_state = function () {
      if (responded) {
        return;
      }
      responded = true;

      try {
        var indexObj = _IndexRequestData.targetIDToBid;

        // Grab all the bids for each slot
        for (var adSlotId in slotIdMap) {
          var bidObj = slotIdMap[adSlotId];
          var adUnitCode = bidObj.placementCode;

          var bids = [];

          // Grab the bid for current slot
          for (var cpmAndSlotId in indexObj) {
            var match = /^(T\d_)?(.+)_(\d+)$/.exec(cpmAndSlotId);
            // if parse fail, move to next bid
            if (!match) {
              utils.logError('Unable to parse ' + cpmAndSlotId + ', skipping slot', ADAPTER_NAME);
              continue;
            }
            var tier = match[1] || '';
            var slotID = match[2];
            var currentCPM = match[3];

            var slotObj = getSlotObj(cygnus_index_args, tier + slotID);
            // Bid is for the current slot
            if (slotID === adSlotId) {
              var bid = _bidfactory2['default'].createBid(1);
              bid.cpm = currentCPM / 100;
              bid.ad = indexObj[cpmAndSlotId][0];
              bid.bidderCode = ADAPTER_CODE;
              bid.width = slotObj.width;
              bid.height = slotObj.height;
              bid.siteID = slotObj.siteID;
              if (_typeof(_IndexRequestData.targetIDToResp) === 'object' && _typeof(_IndexRequestData.targetIDToResp[cpmAndSlotId]) === 'object' && typeof _IndexRequestData.targetIDToResp[cpmAndSlotId].dealID !== 'undefined') {
                if (typeof _IndexRequestData.targetAggregate['private'][adUnitCode] === 'undefined') {
                  _IndexRequestData.targetAggregate['private'][adUnitCode] = [];
                }
                bid.dealId = _IndexRequestData.targetIDToResp[cpmAndSlotId].dealID;
                _IndexRequestData.targetAggregate['private'][adUnitCode].push(slotID + '_' + _IndexRequestData.targetIDToResp[cpmAndSlotId].dealID);
              } else {
                if (typeof _IndexRequestData.targetAggregate['open'][adUnitCode] === 'undefined') {
                  _IndexRequestData.targetAggregate['open'][adUnitCode] = [];
                }
                _IndexRequestData.targetAggregate['open'][adUnitCode].push(slotID + '_' + currentCPM);
              }
              bids.push(bid);
            }
          }

          if (bids.length > 0) {
            // Add all bid responses
            for (var i = 0; i < bids.length; i++) {
              _bidmanager2['default'].addBidResponse(adUnitCode, bids[i]);
            }
            // No bids for expected bid, pass bid
          } else {
            passOnBid(adUnitCode);
          }
        }
      } catch (e) {
        utils.logError('Error calling index adapter', ADAPTER_NAME, e);
        logErrorBidResponse();
      } finally {
        // ensure that previous targeting mapping is cleared
        _IndexRequestData.targetIDToBid = {};
      }

      // slotIdMap is used to determine which slots will be bid on in a given request.
      // Therefore it needs to be blanked after the request is handled, else we will submit 'bids' for the wrong ads.
      slotIdMap = {};
    };
  }

  function cygnus_index_init(bid) {
    if (!utils.hasValidBidRequest(bid.params, requiredParams, ADAPTER_NAME)) {
      passOnBid(bid.placementCode);
      return;
    }

    var sizeID = 0;

    // Expecting nested arrays for sizes
    if (!utils.isArray(bid.sizes[0])) {
      bid.sizes = [bid.sizes];
    }

    // Create index slots for all bids and sizes
    for (var j = 0; j < bid.sizes.length; j++) {
      var validSize = false;
      for (var k = 0; k < cygnus_index_adunits.length; k++) {
        if (bid.sizes[j][0] == cygnus_index_adunits[k][0] && bid.sizes[j][1] == cygnus_index_adunits[k][1]) {
          bid.sizes[j][0] = Number(bid.sizes[j][0]);
          bid.sizes[j][1] = Number(bid.sizes[j][1]);
          validSize = true;
          break;
        }
      }

      if (!validSize) {
        utils.logMessage(ADAPTER_NAME + ' slot excluded from request due to no valid sizes');
        passOnBid(bid.placementCode);
        continue;
      }

      var usingSizeSpecificSiteID = false;
      // Check for size defined in bidder params
      if (bid.params.size && utils.isArray(bid.params.size)) {
        if (!(bid.sizes[j][0] == bid.params.size[0] && bid.sizes[j][1] == bid.params.size[1])) {
          passOnBid(bid.placementCode);
          continue;
        }
        usingSizeSpecificSiteID = true;
      }

      if (bid.params.timeout && typeof cygnus_index_args.timeout === 'undefined') {
        cygnus_index_args.timeout = bid.params.timeout;
      }

      var siteID = Number(bid.params.siteID);
      if (typeof siteID !== 'number' || siteID % 1 != 0 || siteID <= 0) {
        utils.logMessage(ADAPTER_NAME + ' slot excluded from request due to invalid siteID');
        passOnBid(bid.placementCode);
        continue;
      }
      if (siteID && typeof cygnus_index_args.siteID === 'undefined') {
        cygnus_index_args.siteID = siteID;
      }

      if (utils.hasValidBidRequest(bid.params, requiredParams, ADAPTER_NAME)) {
        firstAdUnitCode = bid.placementCode;
        var slotID = bid.params[requiredParams[0]];
        if (typeof slotID !== 'string' && typeof slotID !== 'number') {
          utils.logError(ADAPTER_NAME + ' bid contains invalid slot ID from ' + bid.placementCode + '. Discarding slot');
          passOnBid(bid.placementCode);
          continue;
        }

        sizeID++;
        var size = {
          width: bid.sizes[j][0],
          height: bid.sizes[j][1]
        };

        var slotName = usingSizeSpecificSiteID ? String(slotID) : slotID + '_' + sizeID;
        slotIdMap[slotName] = bid;

        // Doesn't need the if(primary_request) conditional since we are using the mergeSlotInto function which is safe
        cygnus_index_args.slots = mergeSlotInto({
          id: slotName,
          width: size.width,
          height: size.height,
          siteID: siteID || cygnus_index_args.siteID
        }, cygnus_index_args.slots);

        if (bid.params.tier2SiteID) {
          var tier2SiteID = Number(bid.params.tier2SiteID);
          if (typeof tier2SiteID !== 'undefined' && !tier2SiteID) {
            continue;
          }

          cygnus_index_args.slots = mergeSlotInto({
            id: 'T1_' + slotName,
            width: size.width,
            height: size.height,
            siteID: tier2SiteID
          }, cygnus_index_args.slots);
        }

        if (bid.params.tier3SiteID) {
          var tier3SiteID = Number(bid.params.tier3SiteID);
          if (typeof tier3SiteID !== 'undefined' && !tier3SiteID) {
            continue;
          }

          cygnus_index_args.slots = mergeSlotInto({
            id: 'T2_' + slotName,
            width: size.width,
            height: size.height,
            siteID: tier3SiteID
          }, cygnus_index_args.slots);
        }
      }
    }
  }

  function sendVideoRequest(requestID, videoImpressions) {
    var cygnusRequest = {
      'id': requestID,
      'imp': videoImpressions,
      'site': {
        'page': utils.getTopWindowUrl()
      }
    };

    if (!utils.isEmpty(cygnusRequest.imp)) {
      var cygnusRequestUrl = createCygnusRequest(cygnusRequest.imp[0].ext.siteID, cygnusRequest);

      _adloader2['default'].loadScript(cygnusRequestUrl);
    }
  }

  function buildVideoImpressions(bid) {
    if (!validateBid(bid)) {
      return;
    }

    bid = transformBid(bid);

    // map request id to bid object to retrieve adUnit code in callback
    bidRequests[bid.bidId] = {};
    bidRequests[bid.bidId].prebid = bid;

    var cygnusImpression = {};
    cygnusImpression.id = bid.bidId;

    cygnusImpression.ext = {};
    cygnusImpression.ext.siteID = bid.params.video.siteID;
    delete bid.params.video.siteID;

    var podType = bid.params.video.startdelay;
    if (bid.params.video.startdelay === 0) {
      podType = 'preroll';
    } else if (typeof START_DELAY_MAP[bid.params.video.startdelay] === 'undefined') {
      podType = 'midroll';
    }
    cygnusImpression.ext.sid = [SLOT_ID_PREFIX_MAP[podType], 1, 1, 's'].join('_');

    cygnusImpression.video = {};

    if (bid.params.video) {
      Object.keys(bid.params.video).filter(function (param) {
        return typeof VIDEO_REQUIRED_PARAMS_MAP[param] !== 'undefined' || typeof VIDEO_OPTIONAL_PARAMS_MAP[param] !== 'undefined';
      }).forEach(function (param) {
        if (param === 'startdelay' && typeof START_DELAY_MAP[bid.params.video[param]] !== 'undefined') {
          bid.params.video[param] = START_DELAY_MAP[bid.params.video[param]];
        }
        if (param === 'linearity' && typeof LINEARITY_MAP[bid.params.video[param]] !== 'undefined') {
          bid.params.video[param] = LINEARITY_MAP[bid.params.video[param]];
        }
        cygnusImpression.video[param] = bid.params.video[param];
      });
    } else {
      return;
    }

    var bidSize = getSizes(bid.sizes).shift();
    if (!bidSize || !bidSize.width || !bidSize.height) {
      return;
    }
    cygnusImpression.video.w = bidSize.width;
    cygnusImpression.video.h = bidSize.height;

    bidRequests[bid.bidId].cygnus = cygnusImpression;

    return cygnusImpression;
  }

  /*
  Function in order to add a slot into the list if it hasn't been created yet, else it returns the same list.
  */
  function mergeSlotInto(slot, slotList) {
    for (var i = 0; i < slotList.length; i++) {
      if (slot.id === slotList[i].id) {
        return slotList;
      }
    }
    slotList.push(slot);
    return slotList;
  }

  function getSlotObj(obj, id) {
    var arr = obj.slots;
    var returnObj = {};
    utils._each(arr, function (value) {
      if (value.id === id) {
        returnObj = value;
      }
    });

    return returnObj;
  }

  function logErrorBidResponse() {
    // no bid response
    var bid = _bidfactory2['default'].createBid(2);
    bid.bidderCode = ADAPTER_CODE;

    // log error to first add unit
    _bidmanager2['default'].addBidResponse(firstAdUnitCode, bid);
  }

  function createCygnusRequest(siteID, cygnusRequest) {
    var cygnusUrl = window.location.protocol === 'https:' ? url.parse(BASE_CYGNUS_VIDEO_URL_SECURE) : url.parse(BASE_CYGNUS_VIDEO_URL_INSECURE);
    cygnusUrl.search.s = siteID;
    cygnusUrl.search.r = encodeURIComponent(JSON.stringify(cygnusRequest));
    var formattedCygnusUrl = url.format(cygnusUrl);
    return formattedCygnusUrl;
  }

  /* Notify Prebid of bid responses so bids can get in the auction */
  pbjs.handleCygnusResponse = function (response) {
    if (!response || !response.seatbid || utils.isEmpty(response.seatbid)) {
      utils.logInfo('Cygnus returned no bids');

      // signal this response is complete
      Object.keys(bidRequests).forEach(function (bidId) {
        var prebidRequest = bidRequests[bidId].prebid;
        var bid = createBidObj(_constants.STATUS.NO_BID, prebidRequest);
        utils.logInfo(JSON.stringify(bid));
        _bidmanager2['default'].addBidResponse(prebidRequest.placementCode, bid);
      });

      return;
    }

    response.seatbid.forEach(function (seat) {
      seat.bid.forEach(function (cygnusBid) {
        var validBid = true;

        if (typeof bidRequests[cygnusBid.impid] === 'undefined') {
          utils.logInfo('Cygnus returned mismatched id');

          // signal this response is complete
          Object.keys(bidRequests).forEach(function (bidId) {
            var prebidRequest = bidRequests[bidId].prebid;
            var bid = createBidObj(_constants.STATUS.NO_BID, prebidRequest);
            _bidmanager2['default'].addBidResponse(prebidRequest.placementCode, bid);
          });
          return;
        }

        if (!cygnusBid.ext.vasturl) {
          utils.logInfo('Cygnus returned no vast url');
          validBid = false;
        }

        if (url.parse(cygnusBid.ext.vasturl).host === window.location.host) {
          utils.logInfo('Cygnus returned no vast url');
          validBid = false;
        }

        var cpm = void 0;
        if (typeof cygnusBid.ext.pricelevel === 'string') {
          var priceLevel = cygnusBid.ext.pricelevel;
          if (priceLevel.charAt(0) === '_') priceLevel = priceLevel.slice(1);
          cpm = priceLevel / 100;
          if (!utils.isNumber(cpm) || isNaN(cpm)) {
            utils.logInfo('Cygnus returned invalid price');
            validBid = false;
          }
        } else {
          validBid = false;
        }

        var prebidRequest = bidRequests[cygnusBid.impid].prebid;
        var cygnusRequest = bidRequests[cygnusBid.impid].cygnus;

        if (!validBid) {
          var _bid = createBidObj(_constants.STATUS.NO_BID, prebidRequest);
          _bidmanager2['default'].addBidResponse(prebidRequest.placementCode, _bid);
          return;
        }

        var bid = createBidObj(_constants.STATUS.GOOD, prebidRequest);
        bid.cpm = cpm;
        bid.width = cygnusRequest.video.w;
        bid.height = cygnusRequest.video.h;
        bid.vastUrl = cygnusBid.ext.vasturl;
        bid.mediaType = 'video';

        _bidmanager2['default'].addBidResponse(prebidRequest.placementCode, bid);
      });
    });

    bidRequests = {};
  };

  function createBidObj(status, request) {
    var bid = _bidfactory2['default'].createBid(status, request);
    bid.code = baseAdapter.getBidderCode();
    bid.bidderCode = baseAdapter.getBidderCode();

    return bid;
  }

  /* Check that a bid has required paramters */
  function validateBid(bid) {
    if (bid.mediaType === 'video' && utils.hasValidBidRequest(bid.params.video, Object.keys(VIDEO_REQUIRED_PARAMS_MAP), ADAPTER_NAME) && isValidSite(bid.params.video.siteID) && isValidPlayerType(bid.params.video.playerType) && isValidProtocolArray(bid.params.video.protocols) && isValidDuration(bid.params.video.maxduration) && bid.params.video.maxduration > 0) {
      return bid;
    }
  }

  function isValidSite(siteID) {
    var intSiteID = +siteID;
    if (isNaN(intSiteID) || !utils.isNumber(intSiteID) || intSiteID < 0 || utils.isArray(siteID)) {
      utils.logError('Site ID is invalid, must be a number > 0. Got: ' + siteID);
      return false;
    }
    return true;
  }

  function isValidPlayerType(playerType) {
    if (typeof playerType === 'undefined' || !utils.isStr(playerType)) {
      utils.logError('Player type is invalid, must be one of: ' + Object.keys(SUPPORTED_PLAYER_TYPES_MAP));
      return false;
    }
    playerType = playerType.toUpperCase();
    if (!SUPPORTED_PLAYER_TYPES_MAP[playerType]) {
      utils.logError('Player type is invalid, must be one of: ' + Object.keys(SUPPORTED_PLAYER_TYPES_MAP));
      return false;
    }
    return true;
  }

  function isValidProtocolArray(protocolArray) {
    if (!utils.isArray(protocolArray) || utils.isEmpty(protocolArray)) {
      utils.logError('Protocol array is not an array. Got: ' + protocolArray);
      return false;
    } else {
      for (var i = 0; i < protocolArray.length; i++) {
        var protocol = protocolArray[i];
        if (!SUPPORTED_PROTOCOLS_MAP[protocol]) {
          utils.logError('Protocol array contains an invalid protocol, must be one of: ' + SUPPORTED_PROTOCOLS_MAP + '. Got: ' + protocol);
          return false;
        }
      }
    }
    return true;
  }

  function isValidDuration(duration) {
    var intDuration = +duration;
    if (isNaN(intDuration) || !utils.isNumber(intDuration) || utils.isArray(duration)) {
      utils.logError('Duration is invalid, must be a number. Got: ' + duration);
      return false;
    }
    return true;
  }

  function isValidMimeArray(mimeArray) {
    if (!utils.isArray(mimeArray) || utils.isEmpty(mimeArray)) {
      utils.logError('MIMEs array is not an array. Got: ' + mimeArray);
      return false;
    } else {
      for (var i = 0; i < mimeArray.length; i++) {
        var mimeType = mimeArray[i];
        if (!utils.isStr(mimeType) || utils.isEmptyStr(mimeType) || !/^\w+\/[\w-]+$/.test(mimeType)) {
          utils.logError('MIMEs array contains an invalid MIME type. Got: ' + mimeType);
          return false;
        }
      }
    }
    return true;
  }

  function isValidLinearity(linearity) {
    if (!LINEARITY_MAP[linearity]) {
      utils.logInfo('Linearity is invalid, must be one of: ' + Object.keys(LINEARITY_MAP) + '. Got: ' + linearity);
      return false;
    }
    return true;
  }

  function isValidStartDelay(startdelay) {
    if (typeof START_DELAY_MAP[startdelay] === 'undefined') {
      var intStartdelay = +startdelay;
      if (isNaN(intStartdelay) || !utils.isNumber(intStartdelay) || intStartdelay < -2 || utils.isArray(startdelay)) {
        utils.logInfo('Start delay is invalid, must be a number >= -2. Got: ' + startdelay);
        return false;
      }
    }
    return true;
  }

  function isValidApiArray(apiArray, playerType) {
    if (!utils.isArray(apiArray) || utils.isEmpty(apiArray)) {
      utils.logInfo('API array is not an array. Got: ' + apiArray);
      return false;
    } else {
      for (var i = 0; i < apiArray.length; i++) {
        var api = +apiArray[i];
        if (isNaN(api) || !SUPPORTED_API_MAP[playerType].includes(api)) {
          utils.logInfo('API array contains an invalid API version. Got: ' + api);
          return false;
        }
      }
    }
    return true;
  }

  function transformBid(bid) {
    bid.params.video.siteID = +bid.params.video.siteID;
    bid.params.video.maxduration = +bid.params.video.maxduration;

    bid.params.video.protocols = bid.params.video.protocols.reduce(function (arr, protocol) {
      return arr.concat(SUPPORTED_PROTOCOLS_MAP[protocol]);
    }, []);

    var minduration = bid.params.video.minduration;
    if (typeof minduration === 'undefined' || !isValidDuration(minduration)) {
      utils.logInfo('Using default value for \'minduration\', default: ' + VIDEO_OPTIONAL_PARAMS_MAP.minduration);
      bid.params.video.minduration = VIDEO_OPTIONAL_PARAMS_MAP.minduration;
    }

    var startdelay = bid.params.video.startdelay;
    if (typeof startdelay === 'undefined' || !isValidStartDelay(startdelay)) {
      utils.logInfo('Using default value for \'startdelay\', default: ' + VIDEO_OPTIONAL_PARAMS_MAP.startdelay);
      bid.params.video.startdelay = VIDEO_OPTIONAL_PARAMS_MAP.startdelay;
    }

    var linearity = bid.params.video.linearity;
    if (typeof linearity === 'undefined' || !isValidLinearity(linearity)) {
      utils.logInfo('Using default value for \'linearity\', default: ' + VIDEO_OPTIONAL_PARAMS_MAP.linearity);
      bid.params.video.linearity = VIDEO_OPTIONAL_PARAMS_MAP.linearity;
    }

    var mimes = bid.params.video.mimes;
    var playerType = bid.params.video.playerType.toUpperCase();
    if (typeof mimes === 'undefined' || !isValidMimeArray(mimes)) {
      utils.logInfo('Using default value for \'mimes\', player type: \'' + playerType + '\', default: ' + DEFAULT_MIMES_MAP[playerType]);
      bid.params.video.mimes = DEFAULT_MIMES_MAP[playerType];
    }

    var apiList = bid.params.video.apiList;
    if (typeof apiList !== 'undefined' && !isValidApiArray(apiList, playerType)) {
      utils.logInfo('Removing invalid api versions from api list.');
      if (utils.isArray(apiList)) {
        bid.params.video.apiList = apiList.filter(function (api) {
          return SUPPORTED_API_MAP[playerType].includes(api);
        });
      } else {
        bid.params.video.apiList = [];
      }
    }

    if (typeof apiList === 'undefined' && bid.params.video.allowVPAID && utils.isA(bid.params.video.allowVPAID, 'Boolean')) {
      bid.params.video.mimes = bid.params.video.mimes.concat(DEFAULT_VPAID_MIMES_MAP[playerType]);
      bid.params.video.apiList = SUPPORTED_API_MAP[playerType];
    }

    if (utils.isEmpty(bid.params.video.apiList)) {
      utils.logInfo('API list is empty, VPAID ads will not be requested.');
      delete bid.params.video.apiList;
    }

    delete bid.params.video.playerType;
    delete bid.params.video.allowVPAID;

    return bid;
  }

  /* Turn bid request sizes into ut-compatible format */
  function getSizes(requestSizes) {
    var sizes = [];
    var sizeObj = {};

    if (utils.isArray(requestSizes) && requestSizes.length === 2 && !utils.isArray(requestSizes[0])) {
      if (!utils.isNumber(requestSizes[0]) || !utils.isNumber(requestSizes[1])) {
        return sizes;
      }
      sizeObj.width = requestSizes[0];
      sizeObj.height = requestSizes[1];
      sizes.push(sizeObj);
    } else if ((typeof requestSizes === 'undefined' ? 'undefined' : _typeof(requestSizes)) === 'object') {
      for (var i = 0; i < requestSizes.length; i++) {
        var size = requestSizes[i];
        sizeObj = {};
        sizeObj.width = parseInt(size[0], 10);
        sizeObj.height = parseInt(size[1], 10);
        sizes.push(sizeObj);
      }
    }

    return sizes;
  }

  return _extends(this, {
    callBids: _callBids
  });
};

_adaptermanager2['default'].registerBidAdapter(new IndexExchangeAdapter(), 'indexExchange', {
  supportedMediaTypes: ['video']
});

module.exports = IndexExchangeAdapter;

/***/ })

},[174]);

pbjsChunk([31],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);
module.exports = __webpack_require__(185);


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _bidderFactory = __webpack_require__(6);

var _utils = __webpack_require__(0);

var BIDDER_CODE = 'justpremium';
var ENDPOINT_URL = (0, _utils.getTopWindowLocation)().protocol + '//pre.ads.justpremium.com/v/2.0/t/xhr';
var pixels = [];

var spec = exports.spec = {
  code: BIDDER_CODE,
  time: 60000,

  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.zone);
  },

  buildRequests: function buildRequests(validBidRequests) {
    var c = preparePubCond(validBidRequests);
    var dim = getWebsiteDim();
    var payload = {
      zone: validBidRequests.map(function (b) {
        return parseInt(b.params.zone);
      }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }),
      hostname: (0, _utils.getTopWindowLocation)().hostname,
      protocol: (0, _utils.getTopWindowLocation)().protocol.replace(':', ''),
      sw: dim.screenWidth,
      sh: dim.screenHeight,
      ww: dim.innerWidth,
      wh: dim.innerHeight,
      c: c,
      id: validBidRequests[0].params.zone,
      sizes: {}
    };
    validBidRequests.forEach(function (b) {
      var zone = b.params.zone;
      var sizes = payload.sizes;
      sizes[zone] = sizes[zone] || [];
      sizes[zone].push.apply(sizes[zone], b.sizes);
    });
    var payloadString = JSON.stringify(payload);

    return {
      method: 'POST',
      url: ENDPOINT_URL + '?i=' + +new Date(),
      data: payloadString,
      bids: validBidRequests
    };
  },

  interpretResponse: function interpretResponse(serverResponse, bidRequests) {
    var body = serverResponse.body;
    var bidResponses = [];
    bidRequests.bids.forEach(function (adUnit) {
      var bid = findBid(adUnit.params, body.bid);
      if (bid) {
        var size = adUnit.sizes && adUnit.sizes.length && adUnit.sizes[0] || [];
        var bidResponse = {
          requestId: adUnit.bidId,
          creativeId: bid.id,
          width: size[0] || bid.width,
          height: size[1] || bid.height,
          ad: bid.adm,
          cpm: bid.price,
          netRevenue: true,
          currency: bid.currency || 'USD',
          ttl: bid.ttl || spec.time
        };
        bidResponses.push(bidResponse);
      }
    });

    return bidResponses;
  },

  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      pixels.push({
        type: 'iframe',
        src: '//us-u.openx.net/w/1.0/pd?plm=10&ph=26e53f82-d199-49df-9eca-7b350c0f9646'
      });
    }
    return pixels;
  }
};

function findBid(params, bids) {
  var tagId = params.zone;
  if (bids[tagId]) {
    var len = bids[tagId].length;
    while (len--) {
      if (passCond(params, bids[tagId][len])) {
        return bids[tagId].splice(len, 1).pop();
      }
    }
  }

  return false;
}

function passCond(params, bid) {
  var format = bid.format;

  if (params.allow && params.allow.length) {
    return params.allow.indexOf(format) > -1;
  }

  if (params.exclude && params.exclude.length) {
    return params.exclude.indexOf(format) < 0;
  }

  return true;
}

function preparePubCond(bids) {
  var cond = {};
  var count = {};

  bids.forEach(function (bid) {
    var params = bid.params;
    var zone = params.zone;

    if (cond[zone] === 1) {
      return;
    }

    var allow = params.allow || params.formats || [];
    var exclude = params.exclude || [];

    if (allow.length === 0 && exclude.length === 0) {
      return cond[params.zone] = 1;
    }

    cond[zone] = cond[zone] || [[], {}];
    cond[zone][0] = arrayUnique(cond[zone][0].concat(allow));
    exclude.forEach(function (e) {
      if (!cond[zone][1][e]) {
        cond[zone][1][e] = 1;
      } else {
        cond[zone][1][e]++;
      }
    });

    count[zone] = count[zone] || 0;
    if (exclude.length) {
      count[zone]++;
    }
  });

  Object.keys(count).forEach(function (zone) {
    if (cond[zone] === 1) return;

    var exclude = [];
    Object.keys(cond[zone][1]).forEach(function (format) {
      if (cond[zone][1][format] === count[zone]) {
        exclude.push(format);
      }
    });
    cond[zone][1] = exclude;
  });

  Object.keys(cond).forEach(function (zone) {
    if (cond[zone] !== 1 && cond[zone][1].length) {
      cond[zone][0].forEach(function (r) {
        var idx = cond[zone][1].indexOf(r);
        if (idx > -1) {
          cond[zone][1].splice(idx, 1);
        }
      });
      cond[zone][0].length = 0;
    }

    if (cond[zone] !== 1 && !cond[zone][0].length && !cond[zone][1].length) {
      cond[zone] = 1;
    }
  });

  return cond;
}

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) {
        a.splice(j--, 1);
      }
    }
  }

  return a;
}

function getWebsiteDim() {
  var top = void 0;
  try {
    top = window.top;
  } catch (e) {
    top = window;
  }

  return {
    screenWidth: top.screen.width,
    screenHeight: top.screen.height,
    innerWidth: top.innerWidth,
    innerHeight: top.innerHeight
  };
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 185:
/***/ (function(module, exports) {



/***/ })

},[183]);

pbjsChunk([24],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(216);
module.exports = __webpack_require__(217);


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _config = __webpack_require__(8);

var _bidderFactory = __webpack_require__(6);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _userSync = __webpack_require__(18);

var _mediaTypes = __webpack_require__(12);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var SUPPORTED_AD_TYPES = [_mediaTypes.BANNER, _mediaTypes.VIDEO];
var BIDDER_CODE = 'openx';
var BIDDER_CONFIG = 'hb_pb';
var BIDDER_VERSION = '2.0.0';

var spec = exports.spec = {
  code: BIDDER_CODE,
  supportedMediaTypes: SUPPORTED_AD_TYPES,
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid.mediaType === _mediaTypes.VIDEO) {
      if (_typeof(bid.params.video) !== 'object' || !bid.params.video.url) {
        return false;
      }
    }
    return !!(bid.params.unit && bid.params.delDomain);
  },
  buildRequests: function buildRequests(bids) {
    var isIfr = utils.inIframe();
    var currentURL = window.parent !== window ? document.referrer : window.location.href;
    if (bids.length === 0) {
      return;
    }

    var requests = [];
    var bannerRequests = [];
    var videoRequests = [];
    var bannerBids = [];
    var videoBids = [];
    bids.forEach(function (bid) {
      if (bid.mediaType === _mediaTypes.VIDEO) {
        videoBids.push(bid);
      } else {
        bannerBids.push(bid);
      }
    });

    // build banner requests
    if (bannerBids.length !== 0) {
      var delDomain = bannerBids[0].params.delDomain;
      var configuredBc = bannerBids[0].params.bc;
      var bc = configuredBc || BIDDER_CONFIG + '_' + BIDDER_VERSION;
      bannerRequests = [buildOXRequest(bannerBids, {
        ju: currentURL,
        jr: currentURL,
        ch: document.charSet || document.characterSet,
        res: screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
        ifr: isIfr,
        tz: new Date().getTimezoneOffset(),
        tws: getViewportDimensions(isIfr),
        ef: 'bt%2Cdb',
        be: 1,
        bc: bc,
        nocache: new Date().getTime()
      }, delDomain)];
    }
    // build video requests
    if (videoBids.length !== 0) {
      videoRequests = buildOXVideoRequest(videoBids);
    }

    requests = bannerRequests.concat(videoRequests);
    return requests;
  },
  interpretResponse: function interpretResponse(_ref, bidRequest) {
    var oxResponseObj = _ref.body;

    var bidResponses = [];
    var mediaType = _mediaTypes.BANNER;
    if (bidRequest && bidRequest.payload) {
      if (bidRequest.payload.bids) {
        mediaType = bidRequest.payload.bids[0].mediaType;
      } else if (bidRequest.payload.bid) {
        mediaType = bidRequest.payload.bid.mediaType;
      }
    }

    if (mediaType === _mediaTypes.VIDEO) {
      if (oxResponseObj && oxResponseObj.pixels) {
        _userSync.userSync.registerSync('iframe', 'openx', oxResponseObj.pixels);
      }
      bidResponses = createVideoBidResponses(oxResponseObj, bidRequest.payload);
      return bidResponses;
    }

    var adUnits = oxResponseObj.ads.ad;
    if (oxResponseObj.ads && oxResponseObj.ads.pixels) {
      _userSync.userSync.registerSync('iframe', BIDDER_CODE, oxResponseObj.ads.pixels);
    }
    if (!adUnits) {
      adUnits = [];
    }
    bidResponses = createBidResponses(adUnits, bidRequest.payload);

    // Create an empty bidResponse for all bids that did not come back.
    var responseIds = bidResponses.map(function (bidResponse) {
      return bidResponse.requestId;
    });
    bidRequest.payload.bids.forEach(function (bid) {
      if (responseIds.indexOf(bid.bidId) === -1) {
        bidResponses.push({
          requestId: bid.bidId,
          cpm: 0,
          width: 1,
          height: 1,
          creativeId: null,
          dealId: null,
          currency: 'USD',
          netRevenue: true,
          mediaType: _mediaTypes.BANNER,
          ttl: 60000,
          ad: null
        });
      }
    });
    return bidResponses;
  }
};

function createBidResponses(adUnits, _ref2) {
  var bids = _ref2.bids,
      startTime = _ref2.startTime;

  var bidResponses = [];
  var shouldSendBoPixel = bids[0].params.sendBoPixel;
  if (shouldSendBoPixel === undefined) {
    // Not specified, default to turned on
    shouldSendBoPixel = true;
  }
  for (var i = 0; i < adUnits.length; i++) {
    var adUnit = adUnits[i];
    var bidResponse = {};
    if (adUnits.length == bids.length) {
      // request and response length match, directly assign the request id based on positioning
      bidResponse.requestId = bids[i].bidId;
    } else {
      for (var j = i; j < bids.length; j++) {
        var bid = bids[j];
        if (String(bid.params.unit) === String(adUnit.adunitid) && adUnitHasValidSizeFromBid(adUnit, bid) && !bid.matched) {
          // ad unit and size match, this is the correct bid response to bid
          bidResponse.requestId = bid.bidId;
          bid.matched = true;
          break;
        }
      }
    }

    if (adUnit.pub_rev) {
      bidResponse.cpm = Number(adUnit.pub_rev) / 1000;
    } else {
      // No fill, do not add the bidresponse
      continue;
    }
    var creative = adUnit.creative[0];
    if (creative) {
      bidResponse.width = creative.width;
      bidResponse.height = creative.height;
    }
    bidResponse.creativeId = creative.id;
    bidResponse.ad = adUnit.html;
    if (adUnit.deal_id) {
      bidResponse.dealId = adUnit.deal_id;
    }
    // default 5 mins
    bidResponse.ttl = 300;
    // true is net, false is gross
    bidResponse.netRevenue = true;
    bidResponse.currency = adUnit.currency;

    // additional fields to add
    if (adUnit.tbd) {
      bidResponse.tbd = adUnit.tbd;
    }
    bidResponse.ts = adUnit.ts;

    var bt = _config.config.getConfig('bidderTimeout');
    if (window.PREBID_TIMEOUT) {
      bt = Math.min(window.PREBID_TIMEOUT, bt);
    }
    var beaconParams = {
      bd: +new Date() - startTime,
      br: '0', // may be 0, t, or p
      bt: bt,
      bs: window.location.hostname
    };

    beaconParams.br = beaconParams.bt < beaconParams.bd ? 't' : 'p';
    beaconParams.bp = adUnit.pub_rev;
    beaconParams.ts = adUnit.ts;
    var boUrl = void 0;
    if (shouldSendBoPixel) {
      boUrl = getBoUrl(adUnit.creative[0], beaconParams);
    }
    if (boUrl) {
      _userSync.userSync.registerSync('image', BIDDER_CODE, boUrl);
    }
    bidResponses.push(bidResponse);
  }
  return bidResponses;
}

function getBoUrl(creative, params) {
  var recordPixel = creative.tracking.impression;
  var boBase = recordPixel.match(/([^?]+\/)ri\?/);

  if (boBase) {
    return boBase[1] + 'bo?' + buildQueryStringFromParams(params);
  }
}

function buildQueryStringFromParams(params) {
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (!params[key]) {
        delete params[key];
      }
    }
  }
  return utils._map(Object.keys(params), function (key) {
    return key + '=' + params[key];
  }).join('&');
}

function adUnitHasValidSizeFromBid(adUnit, bid) {
  var sizes = utils.parseSizesInput(bid.sizes);
  if (!sizes) {
    return false;
  }
  var found = false;
  var creative = adUnit.creative && adUnit.creative[0];
  var creative_size = String(creative.width) + 'x' + String(creative.height);

  if (utils.isArray(sizes)) {
    for (var i = 0; i < sizes.length; i++) {
      var size = sizes[i];
      if (String(size) === String(creative_size)) {
        found = true;
        break;
      }
    }
  }
  return found;
}

function getViewportDimensions(isIfr) {
  var width = void 0;
  var height = void 0;
  var tWin = window;
  var tDoc = document;
  var docEl = tDoc.documentElement;
  var body = void 0;

  if (isIfr) {
    try {
      tWin = window.top;
      tDoc = window.top.document;
    } catch (e) {
      return;
    }
    docEl = tDoc.documentElement;
    body = tDoc.body;

    width = tWin.innerWidth || docEl.clientWidth || body.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight || body.clientHeight;
  } else {
    docEl = tDoc.documentElement;
    width = tWin.innerWidth || docEl.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight;
  }

  return width + 'x' + height;
}

function formatCustomParms(customKey, customParams) {
  var value = customParams[customKey];
  if (utils.isArray(value)) {
    // if value is an array, join them with commas first
    value = value.join(',');
  }
  // return customKey=customValue format, escaping + to . and / to _
  return (customKey.toLowerCase() + '=' + value.toLowerCase()).replace('+', '.').replace('/', '_');
}

function buildOXRequest(bids, oxParams, delDomain) {
  if (!utils.isArray(bids)) {
    return;
  }

  oxParams.auid = utils._map(bids, function (bid) {
    return bid.params.unit;
  }).join(',');
  oxParams.dddid = utils._map(bids, function (bid) {
    return bid.transactionId;
  }).join(',');
  oxParams.aus = utils._map(bids, function (bid) {
    return utils.parseSizesInput(bid.sizes).join(',');
  }).join('|');

  var customParamsForAllBids = [];
  var hasCustomParam = false;
  bids.forEach(function (bid) {
    if (bid.params.customParams) {
      var customParamsForBid = utils._map(Object.keys(bid.params.customParams), function (customKey) {
        return formatCustomParms(customKey, bid.params.customParams);
      });
      var formattedCustomParams = window.btoa(customParamsForBid.join('&'));
      hasCustomParam = true;
      customParamsForAllBids.push(formattedCustomParams);
    } else {
      customParamsForAllBids.push('');
    }
  });
  if (hasCustomParam) {
    oxParams.tps = customParamsForAllBids.join(',');
  }

  var customFloorsForAllBids = [];
  var hasCustomFloor = false;
  bids.forEach(function (bid) {
    if (bid.params.customFloor) {
      customFloorsForAllBids.push(bid.params.customFloor * 1000);
      hasCustomFloor = true;
    } else {
      customFloorsForAllBids.push(0);
    }
  });
  if (hasCustomFloor) {
    oxParams.aumfs = customFloorsForAllBids.join(',');
  }

  var url = '//' + delDomain + '/w/1.0/arj';
  return {
    method: 'GET',
    url: url,
    data: oxParams,
    payload: { 'bids': bids, 'startTime': new Date() }
  };
}

function buildOXVideoRequest(bids) {
  return bids.map(function (bid) {
    var url = 'http://' + bid.params.delDomain + '/v/1.0/avjp';
    var oxVideoParams = generateVideoParameters(bid);
    return {
      method: 'GET',
      url: url,
      data: oxVideoParams,
      payload: { 'bid': bid, 'startTime': new Date() }
    };
  });
}

function generateVideoParameters(bid) {
  var oxVideo = bid.params.video;
  var oxVideoParams = { auid: bid.params.unit };

  Object.keys(oxVideo).forEach(function (key) {
    if (key === 'openrtb') {
      oxVideoParams[key] = JSON.stringify(oxVideo[key]);
    } else {
      oxVideoParams[key] = oxVideo[key];
    }
  });
  oxVideoParams['be'] = 'true';
  return oxVideoParams;
}

function createVideoBidResponses(response, _ref3) {
  var bid = _ref3.bid,
      startTime = _ref3.startTime;

  var bidResponses = [];

  if (response !== undefined && response.vastUrl !== '' && response.pub_rev !== '') {
    var bidResponse = {};
    bidResponse.requestId = bid.bidId;
    bidResponse.bidderCode = BIDDER_CODE;
    // default 5 mins
    bidResponse.ttl = 300;
    // true is net, false is gross
    bidResponse.netRevenue = true;
    bidResponse.currency = response.currency;
    bidResponse.cpm = Number(response.pub_rev) / 1000;
    bidResponse.width = response.width;
    bidResponse.height = response.height;
    bidResponse.creativeId = response.adid;
    bidResponse.vastUrl = response.vastUrl;
    bidResponse.mediaType = _mediaTypes.VIDEO;

    bidResponses.push(bidResponse);
  }

  return bidResponses;
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 217:
/***/ (function(module, exports) {



/***/ })

},[215]);

pbjsChunk([71],{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bidfactory = __webpack_require__(3);
var bidmanager = __webpack_require__(2);
var adloader = __webpack_require__(5);
var utils = __webpack_require__(0);
var adaptermanager = __webpack_require__(1);

var SonobiAdapter = function SonobiAdapter() {
  var keymakerAssoc = {}; //  Remember placement codes for callback mapping
  var bidReqAssoc = {}; //  Remember bids for bid complete reporting

  function _phone_in(request) {
    var trinity = 'https://apex.go.sonobi.com/trinity.js?key_maker=';
    var adSlots = request.bids || [];
    var bidderRequestId = request.bidderRequestId;
    var ref = '&ref=' + encodeURI(utils.getTopWindowLocation().host);
    adloader.loadScript(trinity + JSON.stringify(_keymaker(adSlots)) + '&cv=' + _operator(bidderRequestId) + ref);
  }

  function _keymaker(adSlots) {
    var keyring = {};
    utils._each(adSlots, function (bidRequest) {
      if (bidRequest.params) {
        //  Optional
        var floor = bidRequest.params.floor ? bidRequest.params.floor : null;
        //  Mandatory
        var slotIdentifier = bidRequest.params.ad_unit ? bidRequest.params.ad_unit : bidRequest.params.placement_id ? bidRequest.params.placement_id : null;
        var sizes = bidRequest.params.sizes ? bidRequest.params.sizes : bidRequest.sizes || null;
        sizes = utils.parseSizesInput(sizes).toString();

        if (utils.isEmpty(sizes)) {
          utils.logError('Sonobi adapter expects sizes for ' + bidRequest.placementCode);
        }

        var bidId = bidRequest.bidId;

        var args = sizes ? floor ? sizes + '|f=' + floor : sizes : floor ? 'f=' + floor : '';
        if (/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(slotIdentifier)) {
          slotIdentifier = slotIdentifier.charAt(0) === '/' ? slotIdentifier : '/' + slotIdentifier;
          keyring[slotIdentifier + '|' + bidId] = args;
          keymakerAssoc[slotIdentifier + '|' + bidId] = bidRequest.placementCode;
          bidReqAssoc[bidRequest.placementCode] = bidRequest;
        } else if (/^[0-9a-fA-F]{20}$/.test(slotIdentifier) && slotIdentifier.length === 20) {
          keyring[bidId] = slotIdentifier + '|' + args;
          keymakerAssoc[bidId] = bidRequest.placementCode;
          bidReqAssoc[bidRequest.placementCode] = bidRequest;
        } else {
          keymakerAssoc[bidId] = bidRequest.placementCode;
          bidReqAssoc[bidRequest.placementCode] = bidRequest;
          _failure(bidRequest.placementCode);
          utils.logError('The ad unit code or Sonobi Placement id for slot ' + bidRequest.placementCode + ' is invalid');
        }
      }
    });
    return keyring;
  }

  function _operator(bidderRequestId) {
    var cb_name = 'sbi_' + bidderRequestId;
    window[cb_name] = _trinity;
    return cb_name;
  }

  function _trinity(response) {
    var slots = response.slots || {};
    var sbi_dc = response.sbi_dc || '';
    utils._each(slots, function (bid, slot_id) {
      var placementCode = keymakerAssoc[slot_id];
      if (bid.sbi_aid && bid.sbi_mouse && bid.sbi_size) {
        _success(placementCode, sbi_dc, bid);
      } else {
        _failure(placementCode);
      }
      delete keymakerAssoc[slot_id];
    });
  }

  function _seraph(placementCode) {
    var theOne = bidReqAssoc[placementCode];
    delete bidReqAssoc[placementCode];
    return theOne;
  }

  function _success(placementCode, sbi_dc, bid) {
    var goodBid = bidfactory.createBid(1, _seraph(placementCode));
    if (bid.sbi_dozer) {
      goodBid.dealId = bid.sbi_dozer;
    }
    goodBid.bidderCode = 'sonobi';
    goodBid.ad = _creative(sbi_dc, bid.sbi_aid);
    goodBid.cpm = Number(bid.sbi_mouse);
    goodBid.width = Number(bid.sbi_size.split('x')[0]) || 1;
    goodBid.height = Number(bid.sbi_size.split('x')[1]) || 1;
    bidmanager.addBidResponse(placementCode, goodBid);
  }

  function _failure(placementCode) {
    var failBid = bidfactory.createBid(2, _seraph(placementCode));
    failBid.bidderCode = 'sonobi';
    bidmanager.addBidResponse(placementCode, failBid);
  }

  function _creative(sbi_dc, sbi_aid) {
    var src = 'https://' + sbi_dc + 'apex.go.sonobi.com/sbi.js?aid=' + sbi_aid + '&as=null';
    return '<script type="text/javascript" src="' + src + '"></script>';
  }

  return {
    callBids: _phone_in,
    formRequest: _keymaker,
    parseResponse: _trinity,
    success: _success,
    failure: _failure
  };
};

adaptermanager.registerBidAdapter(new SonobiAdapter(), 'sonobi');

module.exports = SonobiAdapter;

/***/ })

},[287]);

pbjsChunk([6],{

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(290);
module.exports = __webpack_require__(291);


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _bidderFactory = __webpack_require__(6);

var _mediaTypes = __webpack_require__(12);

var _constants = __webpack_require__(4);

var _config = __webpack_require__(8);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var spec = exports.spec = {
  code: 'sovrn',
  supportedMediaTypes: [_mediaTypes.BANNER],

  /**
   * Check if the bid is a valid zone ID in either number or string form
   * @param {object} bid the Sovrn bid to validate
   * @return boolean for whether or not a bid is valid
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.tagid && !isNaN(parseFloat(bid.params.tagid)) && isFinite(bid.params.tagid));
  },

  /**
   * Format the bid request object for our endpoint
   * @param {BidRequest[]} bidRequests Array of Sovrn bidders
   * @return object of parameters for Prebid AJAX request
   */
  buildRequests: function buildRequests(bidReqs) {
    var sovrnImps = [];
    utils._each(bidReqs, function (bid) {
      sovrnImps.push({
        id: bid.bidId,
        banner: { w: 1, h: 1 },
        tagid: utils.getBidIdParameter('tagid', bid.params),
        bidfloor: utils.getBidIdParameter('bidfloor', bid.params)
      });
    });
    var configOptions = _config.config.getConfig();
    var sovrnBidReq = {
      id: utils.getUniqueIdentifierStr(),
      imp: sovrnImps,
      site: {
        domain: configOptions.publisherHost || window.location.host,
        page: configOptions.publisherPage || window.location.pathname + location.search + location.hash
      }
    };
    return {
      method: 'POST',
      url: '//ap.lijit.com/rtb/bid?src=' + _constants.REPO_AND_VERSION,
      data: JSON.stringify(sovrnBidReq),
      options: { contentType: 'text/plain' }
    };
  },

  /**
   * Format Sovrn responses as Prebid bid responses
   * @param {id, seatbid} sovrnResponse A successful response from Sovrn.
   * @return {Bid[]} An array of formatted bids.
  */
  interpretResponse: function interpretResponse(_ref, request) {
    var _ref$body = _ref.body,
        id = _ref$body.id,
        seatbid = _ref$body.seatbid;

    var sovrnBidResponses = [];
    var responseIds = [];
    if (id && seatbid && seatbid.length > 0 && seatbid[0].bid && seatbid[0].bid.length > 0) {
      seatbid[0].bid.map(function (sovrnBid) {
        responseIds.push(sovrnBid.impid);
        sovrnBidResponses.push({
          requestId: sovrnBid.impid,
          cpm: parseFloat(sovrnBid.price),
          width: parseInt(sovrnBid.w),
          height: parseInt(sovrnBid.h),
          creativeId: sovrnBid.id,
          dealId: sovrnBid.dealId || null,
          currency: 'USD',
          netRevenue: true,
          mediaType: _mediaTypes.BANNER,
          ad: decodeURIComponent(sovrnBid.adm + '<img src="' + sovrnBid.nurl + '">'),
          ttl: 60000
        });
      });
    }
    // Generate a zero cent bid for all of the bid requests that did not have responses.
    // This will ensure that Prebid does not wait for bids that will never come back.
    try {
      var bidRequestObj = JSON.parse(request.data);
      bidRequestObj.imp.forEach(function (bidRequest) {
        if (responseIds.indexOf(bidRequest.id) === -1) {
          sovrnBidResponses.push({
            requestId: bidRequest.id,
            cpm: 0,
            width: 1,
            height: 1,
            creativeId: null,
            dealId: null,
            currency: 'USD',
            netRevenue: true,
            mediaType: _mediaTypes.BANNER,
            ttl: 60000,
            ad: null
          });
        }
      });
    } catch (e) {}
    return sovrnBidResponses;
  }
};

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 291:
/***/ (function(module, exports) {



/***/ })

},[289]);

pbjsChunk([64],{

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(308);


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var adloader = __webpack_require__(5);
var bidmanager = __webpack_require__(2);
var bidfactory = __webpack_require__(3);
var adaptermanager = __webpack_require__(1);

/* TripleLift bidder factory function
*  Use to create a TripleLiftAdapter object
*/

var TripleLiftAdapter = function TripleLiftAdapter() {
  var usersync = false;

  function _callBids(params) {
    var tlReq = params.bids;
    var bidsCount = tlReq.length;

    // set expected bids count for callback execution
    // bidmanager.setExpectedBidsCount('triplelift',bidsCount);

    for (var i = 0; i < bidsCount; i++) {
      var bidRequest = tlReq[i];
      var callbackId = bidRequest.bidId;
      adloader.loadScript(buildTLCall(bidRequest, callbackId));
      // store a reference to the bidRequest from the callback id
      // bidmanager.pbCallbackMap[callbackId] = bidRequest;
    }
  }

  function buildTLCall(bid, callbackId) {
    // determine tag params
    var inventoryCode = utils.getBidIdParameter('inventoryCode', bid.params);
    var floor = utils.getBidIdParameter('floor', bid.params);

    // build our base tag, based on if we are http or https
    var tlURI = '//tlx.3lift.com/header/auction?';
    var tlCall = document.location.protocol + tlURI;

    tlCall = utils.tryAppendQueryString(tlCall, 'callback', 'pbjs.TLCB');
    tlCall = utils.tryAppendQueryString(tlCall, 'lib', 'prebid');
    tlCall = utils.tryAppendQueryString(tlCall, 'v', '0.34.1');
    tlCall = utils.tryAppendQueryString(tlCall, 'callback_id', callbackId);
    tlCall = utils.tryAppendQueryString(tlCall, 'inv_code', inventoryCode);
    tlCall = utils.tryAppendQueryString(tlCall, 'floor', floor);

    // indicate whether flash support exists
    tlCall = utils.tryAppendQueryString(tlCall, 'fe', isFlashEnabled());

    // sizes takes a bit more logic
    var sizeQueryString = utils.parseSizesInput(bid.sizes);
    if (sizeQueryString) {
      tlCall += 'size=' + sizeQueryString + '&';
    }

    // append referrer
    var referrer = utils.getTopWindowUrl();
    tlCall = utils.tryAppendQueryString(tlCall, 'referrer', referrer);

    // remove the trailing "&"
    if (tlCall.lastIndexOf('&') === tlCall.length - 1) {
      tlCall = tlCall.substring(0, tlCall.length - 1);
    }

    // @if NODE_ENV='debug'
    utils.logMessage('tlCall request built: ' + tlCall);
    // @endif

    // append a timer here to track latency
    bid.startTime = new Date().getTime();

    return tlCall;
  }

  function isFlashEnabled() {
    var hasFlash = 0;
    try {
      // check for Flash support in IE
      var fo = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash');
      if (fo) {
        hasFlash = 1;
      }
    } catch (e) {
      if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] !== undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
        hasFlash = 1;
      }
    }
    return hasFlash;
  }

  // expose the callback to the global object:
  pbjs.TLCB = function (tlResponseObj) {
    if (tlResponseObj && tlResponseObj.callback_id) {
      var bidObj = utils.getBidRequest(tlResponseObj.callback_id);
      var placementCode = bidObj && bidObj.placementCode;

      // @if NODE_ENV='debug'
      if (bidObj) {
        utils.logMessage('JSONP callback function called for inventory code: ' + bidObj.params.inventoryCode);
      }
      // @endif

      var bid = [];
      if (tlResponseObj && tlResponseObj.cpm && tlResponseObj.cpm !== 0) {
        bid = bidfactory.createBid(1, bidObj);
        bid.bidderCode = 'triplelift';
        bid.cpm = tlResponseObj.cpm;
        bid.ad = tlResponseObj.ad;
        bid.width = tlResponseObj.width;
        bid.height = tlResponseObj.height;
        bid.dealId = tlResponseObj.deal_id;
        bidmanager.addBidResponse(placementCode, bid);
      } else {
        // no response data
        // @if NODE_ENV='debug'
        if (bidObj) {
          utils.logMessage('No prebid response from TripleLift for inventory code: ' + bidObj.params.inventoryCode);
        }
        // @endif
        bid = bidfactory.createBid(2, bidObj);
        bid.bidderCode = 'triplelift';
        bidmanager.addBidResponse(placementCode, bid);
      }

      // run usersyncs
      if (!usersync) {
        var iframe = utils.createInvisibleIframe();
        iframe.src = '//ib.3lift.com/sync';
        try {
          document.body.appendChild(iframe);
        } catch (error) {
          utils.logError(error);
        }
        usersync = true;
        // suppress TL ad tag from running additional usersyncs
        window._tlSyncDone = true;
      }
    } else {
      // no response data
      // @if NODE_ENV='debug'
      utils.logMessage('No prebid response for placement %%PLACEMENT%%');
      // @endif
    }
  };

  return {
    callBids: _callBids

  };
};

adaptermanager.registerBidAdapter(new TripleLiftAdapter(), 'triplelift');

module.exports = TripleLiftAdapter;

/***/ })

},[307]);

pbjs.processQueue();
//# sourceMappingURL=prebid.js.map

pbjsChunk([21],{

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(229);
module.exports = __webpack_require__(230);


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _bidderFactory = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var BIDDER_CODE = 'pollux';
var PLX_ENDPOINT_URL = '//adn.plxnt.com/prebid/v1';
var PLX_CURRENCY = 'EUR';
var PLX_TTL = 3600;
var PLX_NETREVENUE = true;

var spec = exports.spec = {
  code: BIDDER_CODE,
  aliases: ['plx'],
  /**
     * Determines whether or not the given bid request is valid.
     *
     * @param {BidRequest} bid The bid params to validate.
     * @return boolean True if this is a valid bid, and false otherwise.
     */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (!bid.hasOwnProperty('params') || !bid.params.hasOwnProperty('zone')) {
      utils.logError('required param "zone" is missing for == ' + BIDDER_CODE + ' ==');
      return false;
    }
    return true;
  },
  /**
     * Make a server request from the list of BidRequests.
     *
     * @param {validBidRequests[]} - an array of bids
     * @return ServerRequest Info describing the request to the server.
     */
  buildRequests: function buildRequests(validBidRequests) {
    if (!Array.isArray(validBidRequests) || !validBidRequests.length) {
      return [];
    }
    var payload = [];
    var custom_url = null;
    for (var i = 0; i < validBidRequests.length; i++) {
      var bid = validBidRequests[i];
      var request = {
        bidId: bid.bidId,
        zones: bid.params.zone,
        sizes: bid.sizes
      };
      if (bid.bidderUrl && !custom_url) {
        custom_url = bid.bidderUrl;
      }
      payload.push(request);
    }
    var payloadString = JSON.stringify(payload);
    // build url parameters
    var domain = utils.getParameterByName('domain');
    var tracker2 = utils.getParameterByName('tracker2');
    var url_params = {};
    if (domain) {
      url_params.domain = domain;
    } else {
      url_params.domain = utils.getTopWindowUrl();
    }
    if (tracker2) {
      url_params.tracker2 = tracker2;
    }
    // build url
    var bidder_url = custom_url || PLX_ENDPOINT_URL;
    if (url_params) {
      bidder_url = bidder_url + '?' + utils.parseQueryStringParameters(url_params);
    }
    utils.logMessage('== ' + BIDDER_CODE + ' == request built: ' + bidder_url);
    return {
      method: 'POST',
      url: bidder_url,
      data: payloadString
    };
  },
  /**
     * Unpack the response from the server into a list of bids.
     *
     * @param {*} serverResponse A successful response from the server.
     * @return {Bid[]} An array of bids which were nested inside the server.
     */
  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    var bidResponses = [];
    if (!serverResponse || (typeof serverResponse === 'undefined' ? 'undefined' : _typeof(serverResponse)) === 'object' && !serverResponse.hasOwnProperty('body')) {
      utils.logMessage('No prebid response from == ' + BIDDER_CODE + ' == for bid requests:');
      utils.logMessage(bidRequest);
      return bidResponses;
    }
    serverResponse = serverResponse.body;
    if (!Array.isArray(serverResponse) || !serverResponse.length) {
      utils.logMessage('No prebid response from == ' + BIDDER_CODE + ' == for bid requests:');
      utils.logMessage(bidRequest);
      return bidResponses;
    }
    // loop through serverResponses
    for (var b in serverResponse) {
      var bid = serverResponse[b];
      var bidResponse = {
        requestId: bid.bidId, // not request id, it's bid's id
        cpm: parseFloat(bid.cpm),
        width: parseInt(bid.width),
        height: parseInt(bid.height),
        ttl: PLX_TTL,
        creativeId: bid.creativeId,
        netRevenue: PLX_NETREVENUE,
        currency: PLX_CURRENCY
      };
      if (bid.ad_type === 'url') {
        bidResponse.adUrl = bid.ad;
      } else {
        bidResponse.ad = bid.ad;
      }
      if (bid.referrer) {
        bidResponse.referrer = bid.referrer;
      }
      bidResponses.push(bidResponse);
    }
    return bidResponses;
  }
};
(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 230:
/***/ (function(module, exports) {



/***/ })

},[228]);
//# sourceMappingURL=polluxBidAdapter.js.map
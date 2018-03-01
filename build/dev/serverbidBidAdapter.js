pbjsChunk([10],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(273);
module.exports = __webpack_require__(274);


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _bidderFactory = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var BIDDER_CODE = 'serverbid';

var CONFIG = {
  'serverbid': {
    'BASE_URI': 'https://e.serverbid.com/api/v2'
  },
  'connectad': {
    'BASE_URI': 'https://i.connectad.io/api/v2'
  },
  'onefiftytwo': {
    'BASE_URI': 'https://e.serverbid.com/api/v2'
  },
  'insticator': {
    'BASE_URI': 'https://e.serverbid.com/api/v2'
  }
};

var spec = exports.spec = {
  code: BIDDER_CODE,
  aliases: ['connectad', 'onefiftytwo', 'insticator', 'adsparc'],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {BidRequest} bid The bid params to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.networkId && bid.params.siteId);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */

  buildRequests: function buildRequests(validBidRequests) {
    // Do we need to group by bidder? i.e. to make multiple requests for
    // different endpoints.

    var ret = {
      method: 'POST',
      url: '',
      data: '',
      bidRequest: []
    };

    if (validBidRequests.length < 1) {
      return ret;
    }

    var ENDPOINT_URL = void 0;

    var data = _extends({
      placements: [],
      time: Date.now(),
      user: {},
      url: utils.getTopWindowUrl(),
      referrer: document.referrer,
      enableBotFiltering: true,
      includePricingData: true,
      parallel: true
    }, validBidRequests[0].params);

    validBidRequests.map(function (bid) {
      var config = CONFIG[bid.bidder];
      ENDPOINT_URL = config.BASE_URI;

      var placement = _extends({
        divName: bid.bidId,
        adTypes: bid.adTypes || getSize(bid.sizes)
      }, bid.params);

      if (placement.networkId && placement.siteId) {
        data.placements.push(placement);
      }
    });

    ret.data = JSON.stringify(data);
    ret.bidRequest = validBidRequests;
    ret.url = ENDPOINT_URL;

    return ret;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    var bid = void 0;
    var bids = void 0;
    var bidId = void 0;
    var bidObj = void 0;
    var bidResponses = [];

    bids = bidRequest.bidRequest;

    serverResponse = (serverResponse || {}).body;
    for (var i = 0; i < bids.length; i++) {
      bid = {};
      bidObj = bids[i];
      bidId = bidObj.bidId;

      if (serverResponse) {
        var decision = serverResponse.decisions && serverResponse.decisions[bidId];
        var price = decision && decision.pricing && decision.pricing.clearPrice;

        if (decision && price) {
          bid.requestId = bidId;
          bid.cpm = price;
          bid.width = decision.width;
          bid.height = decision.height;
          bid.ad = retrieveAd(decision);
          bid.currency = 'USD';
          bid.creativeId = decision.adId;
          bid.ttl = 360;
          bid.netRevenue = true;
          bid.referrer = utils.getTopWindowUrl();

          bidResponses.push(bid);
        }
      }
    }

    return bidResponses;
  },

  getUserSyncs: function getUserSyncs(syncOptions) {
    return [];
  }
};

var sizeMap = [null, '120x90', '120x90', '468x60', '728x90', '300x250', '160x600', '120x600', '300x100', '180x150', '336x280', '240x400', '234x60', '88x31', '120x60', '120x240', '125x125', '220x250', '250x250', '250x90', '0x0', '200x90', '300x50', '320x50', '320x480', '185x185', '620x45', '300x125', '800x250'];

sizeMap[77] = '970x90';
sizeMap[123] = '970x250';
sizeMap[43] = '300x600';

function getSize(sizes) {
  var result = [];
  sizes.forEach(function (size) {
    var index = sizeMap.indexOf(size[0] + 'x' + size[1]);
    if (index >= 0) {
      result.push(index);
    }
  });
  return result;
}

function retrieveAd(decision) {
  return decision.contents && decision.contents[0] && decision.contents[0].body + utils.createTrackPixelHtml(decision.impressionUrl);
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 274:
/***/ (function(module, exports) {



/***/ })

},[272]);
//# sourceMappingURL=serverbidBidAdapter.js.map
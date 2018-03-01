pbjsChunk([52],{

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
module.exports = __webpack_require__(62);


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _config = __webpack_require__(8);

var _bidderFactory = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var BIDDER_CODE = 'adbutler';

var spec = exports.spec = {
  code: BIDDER_CODE,
  pageID: Math.floor(Math.random() * 10e6),

  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.accountID && bid.params.zoneID);
  },

  buildRequests: function buildRequests(validBidRequests) {
    var i;
    var zoneID;
    var bidRequest;
    var accountID;
    var keyword;
    var domain;
    var requestURI;
    var serverRequests = [];
    var zoneCounters = {};

    for (i = 0; i < validBidRequests.length; i++) {
      bidRequest = validBidRequests[i];
      zoneID = utils.getBidIdParameter('zoneID', bidRequest.params);
      accountID = utils.getBidIdParameter('accountID', bidRequest.params);
      keyword = utils.getBidIdParameter('keyword', bidRequest.params);
      domain = utils.getBidIdParameter('domain', bidRequest.params);

      if (!(zoneID in zoneCounters)) {
        zoneCounters[zoneID] = 0;
      }

      if (typeof domain === 'undefined' || domain.length === 0) {
        domain = 'servedbyadbutler.com';
      }

      requestURI = location.protocol + '//' + domain + '/adserve/;type=hbr;';
      requestURI += 'ID=' + encodeURIComponent(accountID) + ';';
      requestURI += 'setID=' + encodeURIComponent(zoneID) + ';';
      requestURI += 'pid=' + encodeURIComponent(spec.pageID) + ';';
      requestURI += 'place=' + encodeURIComponent(zoneCounters[zoneID]) + ';';

      // append the keyword for targeting if one was passed in
      if (keyword !== '') {
        requestURI += 'kw=' + encodeURIComponent(keyword) + ';';
      }

      zoneCounters[zoneID]++;
      serverRequests.push({
        method: 'GET',
        url: requestURI,
        data: {},
        bidRequest: bidRequest
      });
    }
    return serverRequests;
  },

  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    var bidObj = bidRequest.bidRequest;
    var bidResponses = [];
    var bidResponse = {};
    var isCorrectSize = false;
    var isCorrectCPM = true;
    var CPM;
    var minCPM;
    var maxCPM;
    var width;
    var height;

    serverResponse = serverResponse.body;
    if (serverResponse && serverResponse.status === 'SUCCESS' && bidObj) {
      CPM = serverResponse.cpm;
      minCPM = utils.getBidIdParameter('minCPM', bidObj.params);
      maxCPM = utils.getBidIdParameter('maxCPM', bidObj.params);
      width = parseInt(serverResponse.width);
      height = parseInt(serverResponse.height);

      // Ensure response CPM is within the given bounds
      if (minCPM !== '' && CPM < parseFloat(minCPM)) {
        isCorrectCPM = false;
      }
      if (maxCPM !== '' && CPM > parseFloat(maxCPM)) {
        isCorrectCPM = false;
      }

      // Ensure that response ad matches one of the placement sizes.
      utils._each(bidObj.sizes, function (size) {
        if (width === size[0] && height === size[1]) {
          isCorrectSize = true;
        }
      });
      if (isCorrectCPM && isCorrectSize) {
        bidResponse.requestId = bidObj.bidId;
        bidResponse.bidderCode = spec.code;
        bidResponse.creativeId = serverResponse.placement_id;
        bidResponse.cpm = CPM;
        bidResponse.width = width;
        bidResponse.height = height;
        bidResponse.ad = serverResponse.ad_code;
        bidResponse.ad += spec.addTrackingPixels(serverResponse.tracking_pixels);
        bidResponse.currency = 'USD';
        bidResponse.netRevenue = true;
        bidResponse.ttl = _config.config.getConfig('_bidderTimeout');
        bidResponse.referrer = utils.getTopWindowUrl();
        bidResponses.push(bidResponse);
      }
    }
    return bidResponses;
  },

  addTrackingPixels: function addTrackingPixels(trackingPixels) {
    var trackingPixelMarkup = '';
    utils._each(trackingPixels, function (pixelURL) {
      var trackingPixel = '<img height="0" width="0" border="0" style="display:none;" src="';
      trackingPixel += pixelURL;
      trackingPixel += '">';

      trackingPixelMarkup += trackingPixel;
    });
    return trackingPixelMarkup;
  }
};
(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 62:
/***/ (function(module, exports) {



/***/ })

},[60]);
//# sourceMappingURL=adbutlerBidAdapter.js.map
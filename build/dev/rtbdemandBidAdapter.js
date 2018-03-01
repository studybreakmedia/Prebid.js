pbjsChunk([12],{

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(263);
module.exports = __webpack_require__(264);


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _bidderFactory = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var BIDDER_CODE = 'rtbdemand';
var BIDDER_SERVER = 'bidding.rtbdemand.com';
var spec = exports.spec = {
  code: BIDDER_CODE,
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.zoneid);
  },
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    return validBidRequests.map(function (bidRequest) {
      var server = bidRequest.params.server || BIDDER_SERVER;
      var parse = getSize(bidderRequest.bids[0].sizes);
      var payload = {
        from: 'hb',
        v: '1.0',
        request_id: bidRequest.bidderRequestId,
        imp_id: bidRequest.bidId,
        aff: bidRequest.params.zoneid,
        bid_floor: parseFloat(bidRequest.params.floor) > 0 ? bidRequest.params.floor : 0,
        charset: document.charSet || document.characterSet,
        site_domain: document.location.hostname,
        site_page: window.location.href,
        subid: 'hb',
        flashver: getFlashVersion(),
        tmax: bidderRequest.timeout,
        hb: '1',
        name: document.location.hostname,
        width: parse.width,
        height: parse.height,
        device_width: screen.width,
        device_height: screen.height,
        dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
        secure: isSecure(),
        make: navigator.vendor ? navigator.vendor : ''
      };
      if (document.referrer) {
        payload.referrer = document.referrer;
      }

      return {
        method: 'GET',
        url: '//' + server + '/hb',
        data: payload
      };
    });
  },
  interpretResponse: function interpretResponse(serverResponse) {
    serverResponse = serverResponse.body;
    var bidResponses = [];
    if (serverResponse && serverResponse.seatbid) {
      serverResponse.seatbid.forEach(function (seatBid) {
        return seatBid.bid.forEach(function (bid) {
          var bidResponse = {
            requestId: bid.impid,
            creativeId: bid.impid,
            cpm: bid.price,
            width: bid.w,
            height: bid.h,
            ad: bid.adm,
            netRevenue: true,
            currency: 'USD',
            ttl: 360
          };

          bidResponses.push(bidResponse);
        });
      });
    }
    return bidResponses;
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: '//' + BIDDER_SERVER + '/delivery/matches.php?type=iframe'
      }];
    }
  }
};

function getFlashVersion() {
  var plugins, plugin, result;

  if (navigator.plugins && navigator.plugins.length > 0) {
    plugins = navigator.plugins;
    for (var i = 0; i < plugins.length && !result; i++) {
      plugin = plugins[i];
      if (plugin.name.indexOf('Shockwave Flash') > -1) {
        result = plugin.description.split('Shockwave Flash ')[1];
      }
    }
  }
  return result || '';
}

/* Get parsed size from request size */
function getSize(requestSizes) {
  var parsed = {};
  var size = utils.parseSizesInput(requestSizes)[0];

  if (typeof size !== 'string') {
    return parsed;
  }

  var parsedSize = size.toUpperCase().split('X');
  var width = parseInt(parsedSize[0], 10);
  if (width) {
    parsed.width = width;
  }

  var height = parseInt(parsedSize[1], 10);
  if (height) {
    parsed.height = height;
  }

  return parsed;
}

function isSecure() {
  return document.location.protocol === 'https:';
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 264:
/***/ (function(module, exports) {



/***/ })

},[262]);
//# sourceMappingURL=rtbdemandBidAdapter.js.map
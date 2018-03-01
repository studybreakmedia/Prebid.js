pbjsChunk([26],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
module.exports = __webpack_require__(209);


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = undefined;

var _bidderFactory = __webpack_require__(6);

var utils = __webpack_require__(0);
var BIDDER_CODE = 'mobfox';
var BID_REQUEST_BASE_URL = 'https://my.mobfox.com/request.php';
var CPM_HEADER = 'X-Pricing-CPM';

var spec = exports.spec = {
  code: BIDDER_CODE,
  aliases: ['mf'], // short code
  isBidRequestValid: function isBidRequestValid(bid) {
    return bid.params.s !== null && bid.params.s !== undefined && bid.requestId !== null && bid.requestId !== undefined;
  },
  buildRequests: function buildRequests(validBidRequests) {
    if (validBidRequests.length > 1) {
      throw 'invalid number of valid bid requests, expected 1 element';
    }

    var bidParams = validBidRequests[0].params;
    var bid = validBidRequests[0];

    var params = {
      // -------------------- Mandatory Parameters ------------------
      rt: bidParams.rt || 'api-fetchip',
      r_type: bidParams.r_type || 'banner',
      r_resp: bidParams.r_resp || 'json', // string | vast20
      //  i: bidParams.i || undefined , // string | 69.197.148.18
      s: bidParams.s, // string | 80187188f458cfde788d961b6882fd53
      u: bidParams.u || window.navigator.userAgent, // string

      // ------------------- Global Parameters ----------------------
      adspace_width: bidParams.adspace_width || bid.sizes[0][0], // integer | 320
      adspace_height: bidParams.adspace_height || bid.sizes[0][1], // integer | 48
      r_floor: bidParams.r_floor || undefined, // 0.8

      o_andadvid: bidParams.o_andadvid || undefined, // 'c6292267-56ad-4326-965d-deef6fcd5er9'
      longitude: bidParams.longitude || undefined, // 12.12
      latitude: bidParams.latitude || undefined, // 280.12
      demo_age: bidParams.demo_age || undefined, // 1978

      // ------------------- banner / interstitial ----------------------
      adspace_strict: bidParams.adspace_strict || undefined,

      // ------------------- interstitial / video ----------------------
      imp_instl: bidParams.imp_instl || undefined, // integer | 1

      // ------------------- mraid ----------------------
      c_mraid: bidParams.c_mraid || undefined, // integer | 1

      // ------------------- video ----------------------
      v_dur_min: bidParams.v_dur_min || undefined, // integer | 0
      v_dur_max: bidParams.v_dur_max || undefined, // integer | 999
      v_autoplay: bidParams.v_autoplay || undefined, // integer | 1
      v_startmute: bidParams.v_startmute || undefined, // integer | 0
      v_rewarded: bidParams.v_rewarded || undefined, // integer | 0
      v_api: bidParams.v_api || undefined, // string | vpaid20
      n_ver: bidParams.n_ver || undefined, //
      n_adunit: bidParams.n_adunit || undefined, //
      n_layout: bidParams.n_layout || undefined, //
      n_context: bidParams.n_context || undefined, //
      n_plcmttype: bidParams.n_plcmttype || undefined, //
      n_img_icon_req: bidParams.n_img_icon_req || undefined, // boolean0
      n_img_icon_size: bidParams.n_img_icon_size || undefined, // string80
      n_img_large_req: bidParams.n_img_large_req || undefined, // boolean0
      n_img_large_w: bidParams.n_img_large_w || undefined, // integer1200
      n_img_large_h: bidParams.n_img_large_h || undefined, // integer627
      n_title_req: bidParams.n_title_req || undefined, // boolean0
      n_title_len: bidParams.n_title_len || undefined, // string25
      n_desc_req: bidParams.n_desc_req || undefined, // boolean0
      n_desc_len: bidParams.n_desc_len || undefined, // string140
      n_rating_req: bidParams.n_rating_req || undefined
    };

    var payloadString = buildPayloadString(params);

    return {
      method: 'GET',
      url: BID_REQUEST_BASE_URL,
      data: payloadString,
      requestId: bid.bidId
    };
  },
  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    var bidResponses = [];
    var serverResponseBody = serverResponse.body;

    if (!serverResponseBody || serverResponseBody.error) {
      var errorMessage = 'in response for ' + BIDDER_CODE + ' adapter';
      if (serverResponseBody && serverResponseBody.error) {
        errorMessage += ': ' + serverResponseBody.error;
      }
      utils.logError(errorMessage);
      return bidResponses;
    }
    try {
      var serverResponseHeaders = serverResponse.headers;
      var bidRequestData = bidRequest.data.split('&');
      var bidResponse = {
        requestId: bidRequest.requestId,
        cpm: serverResponseHeaders.get(CPM_HEADER),
        width: bidRequestData[5].split('=')[1],
        height: bidRequestData[6].split('=')[1],
        creativeId: bidRequestData[3].split('=')[1],
        currency: 'USD',
        netRevenue: true,
        ttl: 360,
        referrer: serverResponseBody.request.clickurl,
        ad: serverResponseBody.request.htmlString
      };
      bidResponses.push(bidResponse);
    } catch (e) {
      throw 'could not build bid response: ' + e;
    }
    return bidResponses;
  }
};

function buildPayloadString(params) {
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      if (params[key] === undefined) {
        delete params[key];
      } else {
        params[key] = encodeURIComponent(params[key]);
      }
    }
  }

  return utils._map(Object.keys(params), function (key) {
    return key + '=' + params[key];
  }).join('&');
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 209:
/***/ (function(module, exports) {



/***/ })

},[207]);
//# sourceMappingURL=mobfoxBidAdapter.js.map
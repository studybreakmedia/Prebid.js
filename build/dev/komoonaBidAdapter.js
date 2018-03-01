pbjsChunk([29],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(190);
module.exports = __webpack_require__(191);


/***/ }),

/***/ 190:
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var BIDDER_CODE = 'komoona';
var ENDPOINT = '//bidder.komoona.com/v1/GetSBids';
var USYNCURL = '//s.komoona.com/sync/usync.html';

var spec = exports.spec = {
  code: BIDDER_CODE,

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.placementId && bid.params.hbid);
  },
  /**
  * Make a server request from the list of BidRequests.
  *
  * @param {validBidRequests[]} - an array of bids
  * @return ServerRequest Info describing the request to the server.
  */
  buildRequests: function buildRequests(validBidRequests) {
    var tags = validBidRequests.map(function (bid) {
      // map each bid id to bid object to retrieve adUnit code in callback
      var tag = {
        uuid: bid.bidId,
        sizes: bid.sizes,
        trid: bid.transactionId,
        hbid: bid.params.hbid,
        placementid: bid.params.placementId
      };

      // add floor price if specified (not mandatory)
      if (bid.params.floorPrice) {
        tag.floorprice = bid.params.floorPrice;
      }

      return tag;
    });

    // Komoona server config
    var time = new Date().getTime();
    var kbConf = {
      ts_as: time,
      hb_placements: [],
      hb_placement_bidids: {},
      hb_floors: {},
      cb: _generateCb(time),
      tz: new Date().getTimezoneOffset()
    };

    validBidRequests.forEach(function (bid) {
      kbConf.hdbdid = kbConf.hdbdid || bid.params.hbid;
      kbConf.encode_bid = kbConf.encode_bid || bid.params.encode_bid;
      kbConf.hb_placement_bidids[bid.params.placementId] = bid.bidId;
      if (bid.params.floorPrice) {
        kbConf.hb_floors[bid.params.placementId] = bid.params.floorPrice;
      }
      kbConf.hb_placements.push(bid.params.placementId);
    });

    var payload = {};
    if (!utils.isEmpty(tags)) {
      payload = { bids: [].concat(_toConsumableArray(tags)), kbConf: kbConf };
    }

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload)
    };
  },
  /**
  * Unpack the response from the server into a list of bids.
  *
  * @param {*} response A successful response from the server.
  * @return {Bid[]} An array of bids which were nested inside the server.
  */
  interpretResponse: function interpretResponse(response, request) {
    var bidResponses = [];
    try {
      if (response.body && response.body.bids) {
        response.body.bids.forEach(function (bid) {
          // The bid ID. Used to tie this bid back to the request.
          bid.requestId = bid.uuid;
          // The creative payload of the returned bid.
          bid.ad = bid.creative;
          bidResponses.push(bid);
        });
      }
    } catch (error) {
      utils.logError(error);
    }
    return bidResponses;
  },
  /**
  * Register User Sync.
  */
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: USYNCURL
      }];
    }
  }
};

/**
* Generated cache baster value to be sent to bid server
* @param {*} time current time to use for creating cb.
*/
function _generateCb(time) {
  return Math.floor(time % 65536 + Math.floor(Math.random() * 65536) * 65536);
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 191:
/***/ (function(module, exports) {



/***/ })

},[189]);
//# sourceMappingURL=komoonaBidAdapter.js.map
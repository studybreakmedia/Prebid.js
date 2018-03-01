pbjsChunk([15],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(251);
module.exports = __webpack_require__(252);


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spec = exports.ENDPOINT = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(0);

var _bidderFactory = __webpack_require__(6);

var ENDPOINT = exports.ENDPOINT = '//app.readpeak.com/header/prebid';

var NATIVE_DEFAULTS = {
  TITLE_LEN: 70,
  DESCR_LEN: 120,
  SPONSORED_BY_LEN: 50,
  IMG_MIN: 150,
  ICON_MIN: 50,
  CTA_LEN: 50
};

var BIDDER_CODE = 'readpeak';

var spec = exports.spec = {

  code: BIDDER_CODE,

  supportedMediaTypes: ['native'],

  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.publisherId && bid.nativeParams);
  },

  buildRequests: function buildRequests(bidRequests) {
    var request = {
      id: bidRequests[0].bidderRequestId,
      imp: bidRequests.map(function (slot) {
        return impression(slot);
      }).filter(function (imp) {
        return imp.native != null;
      }),
      site: site(bidRequests),
      app: app(bidRequests),
      device: device(),
      isPrebid: true
    };

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(request)
    };
  },

  interpretResponse: function interpretResponse(response, request) {
    return bidResponseAvailable(request, response);
  }
};

function bidResponseAvailable(bidRequest, bidResponse) {
  var idToImpMap = {};
  var idToBidMap = {};
  if (!bidResponse['body']) {
    return [];
  }
  bidResponse = bidResponse.body;
  parse(bidRequest.data).imp.forEach(function (imp) {
    idToImpMap[imp.id] = imp;
  });
  if (bidResponse) {
    bidResponse.seatbid.forEach(function (seatBid) {
      return seatBid.bid.forEach(function (bid) {
        idToBidMap[bid.impid] = bid;
      });
    });
  }
  var bids = [];
  Object.keys(idToImpMap).forEach(function (id) {
    if (idToBidMap[id]) {
      var bid = {
        requestId: id,
        cpm: idToBidMap[id].price,
        creativeId: idToBidMap[id].crid,
        ttl: 300,
        netRevenue: true,
        mediaType: 'native',
        currency: bidResponse.cur,
        native: nativeResponse(idToImpMap[id], idToBidMap[id])
      };
      bids.push(bid);
    }
  });
  return bids;
}

function impression(slot) {
  return {
    id: slot.bidId,
    native: nativeImpression(slot),
    bidfloor: slot.params.bidfloor || 0,
    bidfloorcur: slot.params.bidfloorcur || 'USD'
  };
}

function nativeImpression(slot) {
  if (slot.nativeParams) {
    var assets = [];
    addAsset(assets, titleAsset(1, slot.nativeParams.title, NATIVE_DEFAULTS.TITLE_LEN));
    addAsset(assets, imageAsset(2, slot.nativeParams.image, 3, NATIVE_DEFAULTS.IMG_MIN, NATIVE_DEFAULTS.IMG_MIN));
    addAsset(assets, dataAsset(3, slot.nativeParams.sponsoredBy, 1, NATIVE_DEFAULTS.SPONSORED_BY_LEN));
    addAsset(assets, dataAsset(4, slot.nativeParams.body, 2, NATIVE_DEFAULTS.DESCR_LEN));
    addAsset(assets, dataAsset(5, slot.nativeParams.cta, 12, NATIVE_DEFAULTS.CTA_LEN));
    return {
      request: JSON.stringify({ assets: assets }),
      ver: '1.1'
    };
  }
  return null;
}

function addAsset(assets, asset) {
  if (asset) {
    assets.push(asset);
  }
}

function titleAsset(id, params, defaultLen) {
  if (params) {
    return {
      id: id,
      required: params.required ? 1 : 0,
      title: {
        len: params.len || defaultLen
      }
    };
  }
  return null;
}

function imageAsset(id, params, type, defaultMinWidth, defaultMinHeight) {
  return params ? {
    id: id,
    required: params.required ? 1 : 0,
    img: {
      type: type,
      wmin: params.wmin || defaultMinWidth,
      hmin: params.hmin || defaultMinHeight
    }
  } : null;
}

function dataAsset(id, params, type, defaultLen) {
  return params ? {
    id: id,
    required: params.required ? 1 : 0,
    data: {
      type: type,
      len: params.len || defaultLen
    }
  } : null;
}

function site(bidderRequest) {
  var pubId = bidderRequest && bidderRequest.length > 0 ? bidderRequest[0].params.publisherId : '0';
  var appParams = bidderRequest[0].params.app;
  if (!appParams) {
    return {
      publisher: {
        id: pubId.toString()
      },
      id: pubId.toString(),
      ref: referrer(),
      page: (0, _utils.getTopWindowLocation)().href,
      domain: (0, _utils.getTopWindowLocation)().hostname
    };
  }
  return null;
}

function app(bidderRequest) {
  var pubId = bidderRequest && bidderRequest.length > 0 ? bidderRequest[0].params.publisherId : '0';
  var appParams = bidderRequest[0].params.app;
  if (appParams) {
    return {
      publisher: {
        id: pubId.toString()
      },
      bundle: appParams.bundle,
      storeurl: appParams.storeUrl,
      domain: appParams.domain
    };
  }
  return null;
}

function referrer() {
  try {
    return window.top.document.referrer;
  } catch (e) {
    return document.referrer;
  }
}

function device() {
  return {
    ua: navigator.userAgent,
    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
  };
}

function parse(rawResponse) {
  try {
    if (rawResponse) {
      if ((typeof rawResponse === 'undefined' ? 'undefined' : _typeof(rawResponse)) === 'object') {
        return rawResponse;
      } else {
        return JSON.parse(rawResponse);
      }
    }
  } catch (ex) {
    (0, _utils.logError)('readpeakBidAdapter.safeParse', 'ERROR', ex);
  }
  return null;
}

function nativeResponse(imp, bid) {
  if (imp && imp['native']) {
    var nativeAd = parse(bid.adm);
    var keys = {};
    if (nativeAd && nativeAd.assets) {
      nativeAd.assets.forEach(function (asset) {
        keys.title = asset.title ? asset.title.text : keys.title;
        keys.body = asset.data && asset.id === 4 ? asset.data.value : keys.body;
        keys.sponsoredBy = asset.data && asset.id === 3 ? asset.data.value : keys.sponsoredBy;
        keys.image = asset.img && asset.id === 2 ? asset.img.url : keys.image;
        keys.cta = asset.data && asset.id === 5 ? asset.data.value : keys.cta;
      });
      if (nativeAd.link) {
        keys.clickUrl = encodeURIComponent(nativeAd.link.url);
      }
      keys.impressionTrackers = nativeAd.imptrackers;
      return keys;
    }
  }
  return null;
}

(0, _bidderFactory.registerBidder)(spec);

/***/ }),

/***/ 252:
/***/ (function(module, exports) {



/***/ })

},[250]);
//# sourceMappingURL=readpeakBidAdapter.js.map
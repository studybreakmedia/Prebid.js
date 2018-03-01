pbjsChunk([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = AnalyticsAdapter;

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _adloader = __webpack_require__(5);

var _ajax = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var events = __webpack_require__(11);
var utils = __webpack_require__(0);

var AUCTION_INIT = _constants2['default'].EVENTS.AUCTION_INIT;
var AUCTION_END = _constants2['default'].EVENTS.AUCTION_END;
var BID_REQUESTED = _constants2['default'].EVENTS.BID_REQUESTED;
var BID_TIMEOUT = _constants2['default'].EVENTS.BID_TIMEOUT;
var BID_RESPONSE = _constants2['default'].EVENTS.BID_RESPONSE;
var BID_WON = _constants2['default'].EVENTS.BID_WON;
var BID_ADJUSTMENT = _constants2['default'].EVENTS.BID_ADJUSTMENT;
var SET_TARGETING = _constants2['default'].EVENTS.SET_TARGETING;

var LIBRARY = 'library';
var ENDPOINT = 'endpoint';
var BUNDLE = 'bundle';

var _sampled = true;

function AnalyticsAdapter(_ref) {
  var url = _ref.url,
      analyticsType = _ref.analyticsType,
      global = _ref.global,
      handler = _ref.handler;

  var _queue = [];
  var _eventCount = 0;
  var _enableCheck = true;
  var _handlers;

  if (analyticsType === LIBRARY) {
    (0, _adloader.loadScript)(url, _emptyQueue);
  }

  if (analyticsType === ENDPOINT || BUNDLE) {
    _emptyQueue();
  }

  return {
    track: _track,
    enqueue: _enqueue,
    enableAnalytics: _enable,
    disableAnalytics: _disable,
    getAdapterType: function getAdapterType() {
      return analyticsType;
    },
    getGlobal: function getGlobal() {
      return global;
    },
    getHandler: function getHandler() {
      return handler;
    },
    getUrl: function getUrl() {
      return url;
    }
  };

  function _track(_ref2) {
    var eventType = _ref2.eventType,
        args = _ref2.args;

    if (this.getAdapterType() === LIBRARY || BUNDLE) {
      window[global](handler, eventType, args);
    }

    if (this.getAdapterType() === ENDPOINT) {
      _callEndpoint.apply(undefined, arguments);
    }
  }

  function _callEndpoint(_ref3) {
    var eventType = _ref3.eventType,
        args = _ref3.args,
        callback = _ref3.callback;

    (0, _ajax.ajax)(url, callback, JSON.stringify({ eventType: eventType, args: args }));
  }

  function _enqueue(_ref4) {
    var eventType = _ref4.eventType,
        args = _ref4.args;

    var _this = this;

    if (global && window[global] && eventType && args) {
      this.track({ eventType: eventType, args: args });
    } else {
      _queue.push(function () {
        _eventCount++;
        _this.track({ eventType: eventType, args: args });
      });
    }
  }

  function _enable(config) {
    var _this2 = this;

    var _this = this;

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && _typeof(config.options) === 'object') {
      _sampled = typeof config.options.sampling === 'undefined' || Math.random() < parseFloat(config.options.sampling);
    } else {
      _sampled = true;
    }

    if (_sampled) {
      var _handlers2;

      // first send all events fired before enableAnalytics called
      events.getEvents().forEach(function (event) {
        if (!event) {
          return;
        }

        var eventType = event.eventType,
            args = event.args;


        if (eventType !== BID_TIMEOUT) {
          _enqueue.call(_this, { eventType: eventType, args: args });
        }
      });

      // Next register event listeners to send data immediately

      _handlers = (_handlers2 = {}, _defineProperty(_handlers2, BID_REQUESTED, function (args) {
        return _this2.enqueue({ eventType: BID_REQUESTED, args: args });
      }), _defineProperty(_handlers2, BID_RESPONSE, function (args) {
        return _this2.enqueue({ eventType: BID_RESPONSE, args: args });
      }), _defineProperty(_handlers2, BID_TIMEOUT, function (args) {
        return _this2.enqueue({ eventType: BID_TIMEOUT, args: args });
      }), _defineProperty(_handlers2, BID_WON, function (args) {
        return _this2.enqueue({ eventType: BID_WON, args: args });
      }), _defineProperty(_handlers2, BID_ADJUSTMENT, function (args) {
        return _this2.enqueue({ eventType: BID_ADJUSTMENT, args: args });
      }), _defineProperty(_handlers2, SET_TARGETING, function (args) {
        return _this2.enqueue({ eventType: SET_TARGETING, args: args });
      }), _defineProperty(_handlers2, AUCTION_END, function (args) {
        return _this2.enqueue({ eventType: AUCTION_END, args: args });
      }), _defineProperty(_handlers2, AUCTION_INIT, function (args) {
        args.config = config.options; // enableAnaltyics configuration object
        _this2.enqueue({ eventType: AUCTION_INIT, args: args });
      }), _handlers2);

      utils._each(_handlers, function (handler, event) {
        events.on(event, handler);
      });
    } else {
      utils.logMessage('Analytics adapter for "' + global + '" disabled by sampling');
    }

    // finally set this function to return log message, prevents multiple adapter listeners
    this.enableAnalytics = function _enable() {
      return utils.logMessage('Analytics adapter for "' + global + '" already enabled, unnecessary call to `enableAnalytics`.');
    };
  }

  function _disable() {
    utils._each(_handlers, function (handler, event) {
      events.off(event, handler);
    });
  }

  function _emptyQueue() {
    if (_enableCheck) {
      for (var i = 0; i < _queue.length; i++) {
        _queue[i]();
      }

      // override push to execute the command immediately from now on
      _queue.push = function (fn) {
        fn();
      };

      _enableCheck = false;
    }

    utils.logMessage('event count sent to ' + global + ': ' + _eventCount);
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
module.exports = __webpack_require__(69);


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storage = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getUmtSource = getUmtSource;
exports.ExpiringQueue = ExpiringQueue;

var _AnalyticsAdapter = __webpack_require__(10);

var _AnalyticsAdapter2 = _interopRequireDefault(_AnalyticsAdapter);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _adaptermanager = __webpack_require__(1);

var _adaptermanager2 = _interopRequireDefault(_adaptermanager);

var _url = __webpack_require__(13);

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

var _ajax = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ANALYTICS_VERSION = '1.0.0';
var DEFAULT_QUEUE_TIMEOUT = 4000;
var DEFAULT_HOST = 'tag.adkernel.com';

var ADK_HB_EVENTS = {
  AUCTION_INIT: 'auctionInit',
  BID_REQUEST: 'bidRequested',
  BID_RESPONSE: 'bidResponse',
  BID_WON: 'bidWon',
  AUCTION_END: 'auctionEnd',
  TIMEOUT: 'adapterTimedOut'
};

function buildRequestTemplate(pubId) {
  var url = utils.getTopWindowUrl();
  var ref = utils.getTopWindowReferrer();
  var topLocation = utils.getTopWindowLocation();

  return {
    ver: ANALYTICS_VERSION,
    domain: topLocation.hostname,
    path: topLocation.pathname,
    accId: pubId,
    env: {
      screen: {
        w: window.screen.width,
        h: window.screen.height
      },
      lang: navigator.language
    },
    src: getUmtSource(url, ref)
  };
}

var analyticsAdapter = _extends((0, _AnalyticsAdapter2['default'])({ analyticsType: 'endpoint' }), {
  track: function track(_ref) {
    var eventType = _ref.eventType,
        args = _ref.args;

    if (!analyticsAdapter.context) {
      return;
    }
    var handler = null;
    switch (eventType) {
      case _constants2['default'].EVENTS.AUCTION_INIT:
        if (analyticsAdapter.context.queue) {
          analyticsAdapter.context.queue.init();
        }
        handler = trackAuctionInit;
        break;
      case _constants2['default'].EVENTS.BID_REQUESTED:
        handler = trackBidRequest;
        break;
      case _constants2['default'].EVENTS.BID_RESPONSE:
        handler = trackBidResponse;
        break;
      case _constants2['default'].EVENTS.BID_WON:
        handler = trackBidWon;
        break;
      case _constants2['default'].EVENTS.BID_TIMEOUT:
        handler = trackBidTimeout;
        break;
      case _constants2['default'].EVENTS.AUCTION_END:
        handler = trackAuctionEnd;
        break;
    }
    if (handler) {
      var events = handler(args);
      if (analyticsAdapter.context.queue) {
        analyticsAdapter.context.queue.push(events);
      }
      if (eventType === _constants2['default'].EVENTS.AUCTION_END) {
        sendAll();
      }
    }
  }
});

analyticsAdapter.context = {};

analyticsAdapter.originEnableAnalytics = analyticsAdapter.enableAnalytics;

analyticsAdapter.enableAnalytics = function (config) {
  if (!config.options.pubId) {
    utils.logError('PubId is not defined. Analytics won\'t work');
    return;
  }
  analyticsAdapter.context = {
    host: config.options.host || DEFAULT_HOST,
    pubId: config.options.pubId,
    requestTemplate: buildRequestTemplate(config.options.pubId),
    queue: new ExpiringQueue(sendAll, config.options.queueTimeout || DEFAULT_QUEUE_TIMEOUT)
  };
  analyticsAdapter.originEnableAnalytics(config);
};

_adaptermanager2['default'].registerAnalyticsAdapter({
  adapter: analyticsAdapter,
  code: 'adkernelAdn'
});

exports['default'] = analyticsAdapter;


function sendAll() {
  var events = analyticsAdapter.context.queue.popAll();
  if (events.length !== 0) {
    var req = _extends({}, analyticsAdapter.context.requestTemplate, { hb_ev: events });
    (0, _ajax.ajax)('//' + analyticsAdapter.context.host + '/hb-analytics', function () {}, JSON.stringify(req));
  }
}

function trackAuctionInit() {
  analyticsAdapter.context.auctionTimeStart = Date.now();
  var event = createHbEvent(undefined, ADK_HB_EVENTS.AUCTION_INIT);
  return [event];
}

function trackBidRequest(args) {
  return args.bids.map(function (bid) {
    return createHbEvent(args.bidderCode, ADK_HB_EVENTS.BID_REQUEST, bid.placementCode);
  });
}

function trackBidResponse(args) {
  var event = createHbEvent(args.bidderCode, ADK_HB_EVENTS.BID_RESPONSE, args.adUnitCode, args.cpm, args.timeToRespond / 1000);
  return [event];
}

function trackBidWon(args) {
  var event = createHbEvent(args.bidderCode, ADK_HB_EVENTS.BID_WON, args.adUnitCode, args.cpm);
  return [event];
}

function trackAuctionEnd(args) {
  var event = createHbEvent(undefined, ADK_HB_EVENTS.AUCTION_END, undefined, undefined, (Date.now() - analyticsAdapter.context.auctionTimeStart) / 1000);
  return [event];
}

function trackBidTimeout(args) {
  return args.map(function (bidderName) {
    return createHbEvent(bidderName, ADK_HB_EVENTS.TIMEOUT);
  });
}

function createHbEvent(adapter, event) {
  var tagid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var time = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  var ev = { event: event };
  if (adapter) {
    ev.adapter = adapter;
  }
  if (tagid) {
    ev.tagid = tagid;
  }
  if (value) {
    ev.val = value;
  }
  if (time) {
    ev.time = time;
  }
  return ev;
}

var UTM_TAGS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_c1', 'utm_c2', 'utm_c3', 'utm_c4', 'utm_c5'];
var ADKERNEL_PREBID_KEY = 'adk_dpt_analytics';
var DIRECT = '(direct)';
var REFERRAL = '(referral)';
var ORGANIC = '(organic)';

var storage = exports.storage = {
  getItem: function getItem(name) {
    return localStorage.getItem(name);
  },
  setItem: function setItem(name, value) {
    localStorage.setItem(name, value);
  }
};

function getUmtSource(pageUrl, referrer) {
  var prevUtm = getPreviousTrafficSource();
  var currUtm = getCurrentTrafficSource(pageUrl, referrer);

  var _chooseActualUtm = chooseActualUtm(prevUtm, currUtm),
      _chooseActualUtm2 = _slicedToArray(_chooseActualUtm, 2),
      updated = _chooseActualUtm2[0],
      actual = _chooseActualUtm2[1];

  if (updated) {
    storeUtm(actual);
  }
  return actual;

  function getPreviousTrafficSource() {
    var val = storage.getItem(ADKERNEL_PREBID_KEY);
    if (!val) {
      return getDirect();
    }
    return JSON.parse(val);
  }

  function getCurrentTrafficSource(pageUrl, referrer) {
    var source = getUTM(pageUrl);
    if (source) {
      return source;
    }
    if (referrer) {
      var se = getSearchEngine(referrer);
      if (se) {
        return asUtm(se, ORGANIC, ORGANIC);
      }
      var parsedUrl = (0, _url.parse)(pageUrl);

      var _getReferrer = getReferrer(referrer),
          _getReferrer2 = _slicedToArray(_getReferrer, 2),
          refHost = _getReferrer2[0],
          refPath = _getReferrer2[1];

      if (refHost && refHost !== parsedUrl.hostname) {
        return asUtm(refHost, REFERRAL, REFERRAL, '', refPath);
      }
    }
    return getDirect();
  }

  function getSearchEngine(pageUrl) {
    var engines = {
      'google': /^https?\:\/\/(?:www\.)?(?:google\.(?:com?\.)?(?:com|cat|[a-z]{2})|g.cn)\//i,
      'yandex': /^https?\:\/\/(?:www\.)?ya(?:ndex\.(?:com|net)?\.?(?:asia|mobi|org|[a-z]{2})?|\.ru)\//i,
      'bing': /^https?\:\/\/(?:www\.)?bing\.com\//i,
      'duckduckgo': /^https?\:\/\/(?:www\.)?duckduckgo\.com\//i,
      'ask': /^https?\:\/\/(?:www\.)?ask\.com\//i,
      'yahoo': /^https?\:\/\/(?:[-a-z]+\.)?(?:search\.)?yahoo\.com\//i
    };

    for (var engine in engines) {
      if (engines.hasOwnProperty(engine) && engines[engine].test(pageUrl)) {
        return engine;
      }
    }
  }

  function getReferrer(referrer) {
    var ref = (0, _url.parse)(referrer);
    return [ref.hostname, ref.pathname];
  }

  function getUTM(pageUrl) {
    var urlParameters = (0, _url.parse)(pageUrl).search;
    if (!urlParameters['utm_campaign'] || !urlParameters['utm_source']) {
      return;
    }
    var utmArgs = [];
    utils._each(UTM_TAGS, function (utmTagName) {
      var utmValue = urlParameters[utmTagName] || '';
      utmArgs.push(utmValue);
    });
    return asUtm.apply(this, utmArgs);
  }

  function getDirect() {
    return asUtm(DIRECT, DIRECT, DIRECT);
  }

  function storeUtm(utm) {
    var val = JSON.stringify(utm);
    storage.setItem(ADKERNEL_PREBID_KEY, val);
  }

  function asUtm(source, medium, campaign) {
    var term = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var content = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var c1 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var c2 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
    var c3 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
    var c4 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
    var c5 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : '';

    var result = {
      source: source,
      medium: medium,
      campaign: campaign
    };
    if (term) {
      result.term = term;
    }
    if (content) {
      result.content = content;
    }
    if (c1) {
      result.c1 = c1;
    }
    if (c2) {
      result.c2 = c2;
    }
    if (c3) {
      result.c3 = c3;
    }
    if (c4) {
      result.c4 = c4;
    }
    if (c5) {
      result.c5 = c5;
    }
    return result;
  }

  function chooseActualUtm(prev, curr) {
    if (ord(prev) < ord(curr)) {
      return [true, curr];
    }if (ord(prev) > ord(curr)) {
      return [false, prev];
    } else {
      if (prev.campaign === REFERRAL && prev.content !== curr.content) {
        return [true, curr];
      } else if (prev.campaign === ORGANIC && prev.source !== curr.source) {
        return [true, curr];
      } else if (isCampaignTraffic(prev) && (prev.campaign !== curr.campaign || prev.source !== curr.source)) {
        return [true, curr];
      }
    }
    return [false, prev];
  }

  function ord(utm) {
    switch (utm.campaign) {
      case DIRECT:
        return 0;
      case ORGANIC:
        return 1;
      case REFERRAL:
        return 2;
      default:
        return 3;
    }
  }

  function isCampaignTraffic(utm) {
    return [DIRECT, REFERRAL, ORGANIC].indexOf(utm.campaign) === -1;
  }
}

/**
 * Expiring queue implementation. Fires callback on elapsed timeout since last last update or creation.
 * @param callback
 * @param ttl
 * @constructor
 */
function ExpiringQueue(callback, ttl) {
  var queue = [];
  var timeoutId = void 0;

  this.push = function (event) {
    if (event instanceof Array) {
      queue.push.apply(queue, event);
    } else {
      queue.push(event);
    }
    reset();
  };

  this.popAll = function () {
    var result = queue;
    queue = [];
    reset();
    return result;
  };

  /**
   * For test/debug purposes only
   * @return {Array}
   */
  this.peekAll = function () {
    return queue;
  };

  this.init = reset;

  function reset() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      if (queue.length) {
        callback();
      }
    }, ttl);
  }
}

/***/ }),

/***/ 69:
/***/ (function(module, exports) {



/***/ })

},[67]);
//# sourceMappingURL=adkernelAdnAnalyticsAdapter.js.map
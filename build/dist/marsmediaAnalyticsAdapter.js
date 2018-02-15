pbjsChunk([27],{10:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.default=function(e){var n,t=e.url,r=e.analyticsType,o=e.global,u=e.handler,N=[],A=0,O=!0;r===S&&(0,i.loadScript)(t,I);(r===_||m)&&I();return{track:function(e){var n=e.eventType,a=e.args;(this.getAdapterType()===S||m)&&window[o](u,n,a);this.getAdapterType()===_&&function(e){var n=e.eventType,a=e.args,r=e.callback;(0,s.ajax)(t,r,JSON.stringify({eventType:n,args:a}))}.apply(void 0,arguments)},enqueue:j,enableAnalytics:function(e){var t=this,r=this;h="object"!==(void 0===e?"undefined":a(e))||"object"!==a(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling));if(h){var u;l.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==v&&j.call(r,{eventType:n,args:t})}})),c(u={},y,(function(e){return t.enqueue({eventType:y,args:e})})),c(u,T,(function(e){return t.enqueue({eventType:T,args:e})})),c(u,v,(function(e){return t.enqueue({eventType:v,args:e})})),c(u,g,(function(e){return t.enqueue({eventType:g,args:e})})),c(u,b,(function(e){return t.enqueue({eventType:b,args:e})})),c(u,E,(function(e){return t.enqueue({eventType:E,args:e})})),c(u,d,(function(e){return t.enqueue({eventType:d,args:e})})),c(u,p,(function(n){n.config=e.options,t.enqueue({eventType:p,args:n})})),n=u,f._each(n,(function(e,n){l.on(n,e)}))}else f.logMessage('Analytics adapter for "'+o+'" disabled by sampling');this.enableAnalytics=function(){return f.logMessage('Analytics adapter for "'+o+'" already enabled, unnecessary call to `enableAnalytics`.')}},disableAnalytics:function(){f._each(n,(function(e,n){l.off(n,e)}))},getAdapterType:function(){return r},getGlobal:function(){return o},getHandler:function(){return u},getUrl:function(){return t}};function j(e){var n=e.eventType,t=e.args,a=this;o&&window[o]&&n&&t?this.track({eventType:n,args:t}):N.push((function(){A++,a.track({eventType:n,args:t})}))}function I(){if(O){for(var e=0;e<N.length;e++)N[e]();N.push=function(e){e()},O=!1}f.logMessage("event count sent to "+o+": "+A)}};var r,o=t(4),u=(r=o)&&r.__esModule?r:{default:r},i=t(5),s=t(7);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=t(11),f=t(0),p=u.default.EVENTS.AUCTION_INIT,d=u.default.EVENTS.AUCTION_END,y=u.default.EVENTS.BID_REQUESTED,v=u.default.EVENTS.BID_TIMEOUT,T=u.default.EVENTS.BID_RESPONSE,g=u.default.EVENTS.BID_WON,b=u.default.EVENTS.BID_ADJUSTMENT,E=u.default.EVENTS.SET_TARGETING,S="library",_="endpoint",m="bundle",h=!0},201:function(e,n,t){e.exports=t(202)},202:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(7),o=i(t(10)),u=i(t(1));function i(e){return e&&e.__esModule?e:{default:e}}var s="//prebid_stats.mars.media/prebidjs/api/analytics.php",c={},l=a((0,o.default)({MARS_ANALYTICS_URL:s,analyticsType:"endpoint"}),{track:function(e){var n=e.eventType,t=e.args;void 0!==t&&"marsmedia"===t.bidderCode&&(c[n]=t),"auctionEnd"===n&&setTimeout((function(){(0,r.ajax)(s,{success:function(){},error:function(){}},JSON.stringify({act:"prebid_analytics",params:c,pbjs:pbjs.getBidResponses(),ver:"1.0.1"}),{method:"POST"})}),3e3)}});u.default.registerAnalyticsAdapter({adapter:l,code:"marsmedia"}),n.default=l}},[201]);
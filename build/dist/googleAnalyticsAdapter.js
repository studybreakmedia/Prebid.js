pbjsChunk([95],{160:function(e,n,o){e.exports=o(161)},161:function(e,n,o){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(11),s=o(0),a=o(4),r=o(1),d=a.EVENTS.BID_REQUESTED,c=a.EVENTS.BID_TIMEOUT,u=a.EVENTS.BID_RESPONSE,l=a.EVENTS.BID_WON,f={nonInteraction:!0},p=[],b=null,m=!0,v="Prebid.js Bids",y=0,g=!1,T=null,w=!0;function E(){if(m&&"function"==typeof window[b]){for(var e=0;e<p.length;e++)p[e].call();p.push=function(e){e.call()},m=!1}s.logMessage("event count sent to GA: "+y)}function S(e){return e?Math.floor(100*e):0}function h(e){e&&e.bidderCode&&p.push((function(){y++,window[b](T,"event",v,"Requests",e.bidderCode,1,f)})),E()}function $(e){e&&e.bidderCode&&p.push((function(){var n,o,t,i,s=S(e.cpm),a=e.bidderCode;if(void 0!==e.timeToRespond&&g){y++;var r=((n=e.timeToRespond)>=0&&n<200?o="0-200ms":n>=200&&n<300?o="0200-300ms":n>=300&&n<400?o="0300-400ms":n>=400&&n<500?o="0400-500ms":n>=500&&n<600?o="0500-600ms":n>=600&&n<800?o="0600-800ms":n>=800&&n<1e3?o="0800-1000ms":n>=1e3&&n<1200?o="1000-1200ms":n>=1200&&n<1500?o="1200-1500ms":n>=1500&&n<2e3?o="1500-2000ms":n>=2e3&&(o="2000ms above"),o);window[b](T,"event","Prebid.js Load Time Distribution",r,a,1,f)}if(e.cpm>0){y+=2;var d=((t=e.cpm)>=0&&t<.5?i="$0-0.5":t>=.5&&t<1?i="$0.5-1":t>=1&&t<1.5?i="$1-1.5":t>=1.5&&t<2?i="$1.5-2":t>=2&&t<2.5?i="$2-2.5":t>=2.5&&t<3?i="$2.5-3":t>=3&&t<4?i="$3-4":t>=4&&t<6?i="$4-6":t>=6&&t<8?i="$6-8":t>=8&&(i="$8 above"),i);g&&(y++,window[b](T,"event","Prebid.js CPM Distribution",d,a,1,f)),window[b](T,"event",v,"Bids",a,s,f),window[b](T,"event",v,"Bid Load Time",a,e.timeToRespond,f)}})),E()}function D(e){p.push((function(){s._each(e,(function(e){y++,window[b](T,"event",v,"Timeouts",e,f)}))})),E()}function N(e){var n=S(e.cpm);p.push((function(){y++,window[b](T,"event",v,"Wins",e.bidderCode,n,f)})),E()}n.enableAnalytics=function(e){var n=e.provider,o=e.options;b=n||"ga",T=o&&o.trackerName?o.trackerName+".send":"send",w=void 0===o||void 0===o.sampling||Math.random()<parseFloat(o.sampling),o&&void 0!==o.global&&(b=o.global),o&&void 0!==o.enableDistribution&&(g=o.enableDistribution);if(w){var a=i.getEvents();s._each(a,(function(e){if("object"===(void 0===e?"undefined":t(e))){var n=e.args;if(e.eventType===d)h(n);else if(e.eventType===u)$(n);else if(e.eventType===c){D(n)}else e.eventType===l&&N(n)}})),i.on(d,(function(e){h(e)})),i.on(u,(function(e){$(e)})),i.on(c,(function(e){D(e)})),i.on(l,(function(e){N(e)}))}else s.logMessage("Prebid.js google analytics disabled by sampling");this.enableAnalytics=function(){return s.logMessage("Analytics adapter already enabled, unnecessary call to `enableAnalytics`.")}},n.getTrackerSend=function(){return T},r.registerAnalyticsAdapter({adapter:n,code:"ga"})}},[160]);
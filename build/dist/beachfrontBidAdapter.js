pbjsChunk([40],{114:function(e,t,r){r(115),e.exports=r(116)},115:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.spec=t.ENDPOINT=void 0;var i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&d.return&&d.return()}finally{if(n)throw o}}return r})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),o=r(6);var a=t.ENDPOINT="//reachms.bfmio.com/bid.json?exchange_id=",d=t.spec={code:"beachfront",supportedMediaTypes:["video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.appId&&e.params.bidfloor)},buildRequests:function(t){return t.map((function(t){return{method:"POST",url:a+t.params.appId,data:(r=t,i=s(r.sizes),{isPrebid:!0,appId:r.params.appId,domain:document.location.hostname,imp:[{video:{w:i.width,h:i.height},bidfloor:r.params.bidfloor}],site:{page:n.getTopWindowLocation().host},device:{ua:e.navigator.userAgent,devicetype:/(ios|ipod|ipad|iphone|android)/i.test(e.navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(e.navigator.userAgent)?3:2},cur:["USD"]}),bidRequest:t};var r,i}))},interpretResponse:function(e,t){var r=t.bidRequest;if(!(e=e.body)||!e.url||!e.bidPrice)return n.logWarn("No valid bids from "+d.code+" bidder"),[];var i=s(r.sizes);return{requestId:r.bidId,bidderCode:d.code,cpm:e.bidPrice,creativeId:e.cmpId,vastUrl:e.url,width:i.width,height:i.height,mediaType:"video",currency:"USD",ttl:300,netRevenue:!0}}};function s(e){var t=n.parseSizesInput(e),r=t.length?t[0].split("x"):[],o=i(r,2),a=o[0],d=o[1];return{width:parseInt(a,10)||void 0,height:parseInt(d,10)||void 0}}(0,o.registerBidder)(d)}).call(t,r(30))},116:function(e,t){}},[114]);
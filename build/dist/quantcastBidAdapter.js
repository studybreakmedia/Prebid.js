pbjsChunk([16],{247:function(e,r,t){t(248),e.exports=t(249)},248:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=r.QUANTCAST_TTL=r.QUANTCAST_TEST_PUBLISHER=r.QUANTCAST_NET_REVENUE=r.QUANTCAST_CALLBACK_URL_TEST=r.QUANTCAST_CALLBACK_URL=void 0;var i=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),n=t(6);var o=r.QUANTCAST_CALLBACK_URL="global.qc.rtb.quantserve.com",a=r.QUANTCAST_CALLBACK_URL_TEST="s2s-canary.quantserve.com",s=r.QUANTCAST_NET_REVENUE=!0,d=r.QUANTCAST_TEST_PUBLISHER="test-publisher",u=r.QUANTCAST_TTL=4,c=r.spec={code:"quantcast",isBidRequestValid:function(e){return!!e&&"video"!==e.mediaType},buildRequests:function(e){var r=e||[],t=i.getTopWindowUrl(),n=i.getTopWindowLocation(),s=n.hostname,u=void 0,c=void 0;switch(window.location.protocol){case"https:":u="https://"+o+":8443/qchb",c="https://"+a+":8443/qchb";break;default:u="http://"+o+":8080/qchb",c="http://"+a+":8080/qchb"}return r.map((function(e){var r=[];e.sizes.forEach((function(e){r.push({width:e[0],height:e[1]})}));var i={publisherId:e.params.publisherId,requestId:e.bidId,imp:[{banner:{battr:e.params.battr,sizes:r},placementCode:e.placementCode,bidFloor:e.params.bidFloor||1e-10}],site:{page:n.href,referrer:t,domain:s},bidId:e.bidId};return{data:JSON.stringify(i),method:"POST",url:e.params.publisherId===d?c:u}}))},interpretResponse:function(e){if(void 0===e)return i.logError("Server Response is undefined"),[];var r=e.body;return void 0===r||!r.hasOwnProperty("bids")||i.isEmpty(r.bids)?(i.logError("Sub-optimal JSON received from Quantcast server"),[]):r.bids.map((function(e){var t=e.ad,i=e.cpm,n=e.width,o=e.height,a=e.creativeId,d=e.currency;return{requestId:r.requestId,cpm:i,width:n,height:o,ad:t,ttl:u,creativeId:a,netRevenue:s,currency:d}}))}};(0,n.registerBidder)(c)},249:function(e,r){}},[247]);
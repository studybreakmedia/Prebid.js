pbjsChunk([2],{319:function(e,r,t){t(320),e.exports=t(321)},320:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var a=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r})(t(0)),i=t(6),n=r.spec={code:"undertone",isBidRequestValid:function(e){if(e&&e.params&&e.params.publisherId&&e.params.placementId)return e.params.publisherId=parseInt(e.params.publisherId),!0},buildRequests:function(e){var r={"x-ut-hb-params":[]},t=a.getTopWindowLocation().host,i=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(t),n="//hb.undertone.com/hb?pid="+e[0].params.publisherId+"&domain="+i;return e.map((function(e){var t={bidRequestId:e.bidId,hbadaptor:"prebid",domain:i,placementId:e.params.placementId,publisherId:e.params.publisherId,sizes:e.sizes,params:e.params};r["x-ut-hb-params"].push(t)})),{method:"POST",url:n,withCredentials:!0,data:JSON.stringify(r)}},interpretResponse:function(e,r){var t=[],a=e.body;return a&&Array.isArray(a)&&a.length>0&&a.forEach((function(e){if(e.ad&&e.cpm>0){var r={requestId:e.bidRequestId,cpm:e.cpm,width:e.width,height:e.height,creativeId:e.adId,currency:e.currency,netRevenue:e.netRevenue,ttl:e.ttl,ad:e.ad};t.push(r)}})),t}};(0,i.registerBidder)(n)},321:function(e,r){}},[319]);
pbjsChunk([36],{154:function(e,r,t){t(155),e.exports=t(156)},155:function(e,r,t){"use strict";function i(){var e,r,t;if(navigator.plugins&&navigator.plugins.length>0){e=navigator.plugins;for(var i=0;i<e.length&&!t;i++)(r=e[i]).name.indexOf("Shockwave Flash")>-1&&(t=r.description.split("Shockwave Flash ")[1])}return t||""}Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var n=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r})(t(0)),a=t(6),o=r.spec={code:"fidelity",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.zoneid)},buildRequests:function(e,r){return e.map((function(e){var t=e.params.server||"x.fidelity-media.com",a={from:"hb",v:"1.0",requestid:e.bidderRequestId,impid:e.bidId,zoneid:e.params.zoneid,floor:parseFloat(e.params.floor)>0?e.params.floor:0,charset:document.charSet||document.characterSet,defloc:n.getTopWindowUrl(),altloc:window.location.href,subid:"hb",flashver:i(),tmax:r.timeout};return document.referrer&&(a.referrer=document.referrer),{method:"GET",url:"//"+t+"/delivery/hb.php",data:a}}))},interpretResponse:function(e){var r=[];return(e=e.body)&&e.seatbid&&e.seatbid.forEach((function(e){return e.bid.forEach((function(e){var t={requestId:e.impid,creativeId:e.impid,cpm:e.price,width:e.width,height:e.height,ad:e.adm,netRevenue:e.netRevenue,currency:e.cur,ttl:e.ttl};r.push(t)}))})),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//x.fidelity-media.com/delivery/matches.php?type=iframe"}]}};(0,a.registerBidder)(o)},156:function(e,r){}},[154]);
pbjsChunk([49],{80:function(e,r,n){n(81),e.exports=n(82)},81:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var t=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}})(n(0)),a=n(6);function i(e,r){var n,a,i,s=e[0],u={id:r},c={};return t._each(e,(function(e){c[e.params.slaveId]=e.bidId})),{method:"GET",url:(n=s.params.emiter,a=u,i="",t._each(a,(function(e,r){i.length&&(i+="&"),i+=r+"="+encodeURIComponent(e)})),"https://"+n+"/ad.json?"+i),data:{},bidIdMap:c}}var s=r.spec={code:"adocean",isBidRequestValid:function(e){return!!(e.params.slaveId&&e.params.masterId&&e.params.emiter)},buildRequests:function(e){var r={};return t._each(e,(function(e){var n,t,a;t=r,a=(n=e).params.masterId,t[a]=t[a]||[],t[a].push(n)})),t._map(r,(function(e,r){return i(e,r)}))},interpretResponse:function(e,r){var n=[];return t.isArray(e.body)&&t._each(e.body,(function(e){!(function(e,r,n){if(!e.error){var t='<script type="application/javascript">(function(){var wu="'+(e.winUrl||"")+'",su="'+(e.statsUrl||"")+'".replace(/\\[TIMESTAMP\\]/,(new Date()).getTime());';t+="if(navigator.sendBeacon){if(wu){navigator.sendBeacon(wu)||((new Image(1,1)).src=wu)};if(su){navigator.sendBeacon(su)||((new Image(1,1)).src=su)}}",t+="else{if(wu){(new Image(1,1)).src=wu;}if(su){(new Image(1,1)).src=su;}}",t+="})();<\/script>";var a={ad:t+=decodeURIComponent(e.code),cpm:parseFloat(e.price),currency:e.currency,height:parseInt(e.height,10),requestId:r.bidIdMap[e.id],width:parseInt(e.width,10),netRevenue:!1,ttl:parseInt(e.ttl),creativeId:e.crid};n.push(a)}})(e,r,n)})),n}};(0,a.registerBidder)(s)},82:function(e,r){}},[80]);
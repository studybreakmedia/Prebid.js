pbjsChunk([29],{189:function(e,r,a){a(190),e.exports=a(191)},190:function(e,r,a){"use strict";function t(e){if(Array.isArray(e)){for(var r=0,a=Array(e.length);r<e.length;r++)a[r]=e[r];return a}return Array.from(e)}function n(e){return Math.floor(e%65536+65536*Math.floor(65536*Math.random()))}Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var o=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r.default=e,r})(a(0)),i=a(6),d=r.spec={code:"komoona",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.placementId&&e.params.hbid)},buildRequests:function(e){var r=e.map((function(e){var r={uuid:e.bidId,sizes:e.sizes,trid:e.transactionId,hbid:e.params.hbid,placementid:e.params.placementId};return e.params.floorPrice&&(r.floorprice=e.params.floorPrice),r})),a=(new Date).getTime(),i={ts_as:a,hb_placements:[],hb_placement_bidids:{},hb_floors:{},cb:n(a),tz:(new Date).getTimezoneOffset()};e.forEach((function(e){i.hdbdid=i.hdbdid||e.params.hbid,i.encode_bid=i.encode_bid||e.params.encode_bid,i.hb_placement_bidids[e.params.placementId]=e.bidId,e.params.floorPrice&&(i.hb_floors[e.params.placementId]=e.params.floorPrice),i.hb_placements.push(e.params.placementId)}));var d={};return o.isEmpty(r)||(d={bids:[].concat(t(r)),kbConf:i}),{method:"POST",url:"//bidder.komoona.com/v1/GetSBids",data:JSON.stringify(d)}},interpretResponse:function(e,r){var a=[];try{e.body&&e.body.bids&&e.body.bids.forEach((function(e){e.requestId=e.uuid,e.ad=e.creative,a.push(e)}))}catch(e){o.logError(e)}return a},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//s.komoona.com/sync/usync.html"}]}};(0,i.registerBidder)(d)},191:function(e,r){}},[189]);
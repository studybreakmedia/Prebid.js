pbjsChunk([35],{157:function(e,r,i){i(158),e.exports=i(159)},158:function(e,r,i){"use strict";function t(e){return"//"+p+(e.is_video?v:c)}function n(e){var r={bid_id:e.bidId,pid:e.params.pid,tid:e.params.tid,known:e.params.known||1,is_video:"video"===e.mediaType,resp_type:"JSON"};return e.sizes&&(r.size=o(e.sizes)),a(e.params.video,r),s(e.params,r,f),r}function a(e,r){if(r.is_video&&e)for(var i=0,t=m.length;i<t;i++){var n=m[i];e.hasOwnProperty(n)&&(r[n]=Array.isArray(e[n])?e[n].join(","):e[n])}}function s(e,r,i){for(var t=0;t<i.length;t++)e.hasOwnProperty(i[t])&&(r[i[t]]=e[i[t]])}function d(e){return e.split("x").map(Number)}function o(e){return Array.isArray(e[0])?e[0].join("x"):e.join("x")}Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var u=i(6),p="px.adhigh.net",c="/rtb/direct_banner",v="/rtb/direct_vast",m=["protocols","mimes","min_dur","max_dur","min_btr","max_btr","vi_format","api","skippable"],f=["cur","floor"],_=r.spec={code:"getintent",aliases:["getintentAdapter"],supportedMediaTypes:["video","banner"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pid&&e.params.tid)},buildRequests:function(e){return e.map((function(e){var r=n(e);return{method:"GET",url:t(r),data:r}}))},interpretResponse:function(e){var r=e.body,i=[];if(r&&1!==r.no_bid){var t=d(r.size),n={requestId:r.bid_id,ttl:360,netRevenue:!0,currency:r.currency,creativeId:r.creative_id,cpm:r.cpm,width:t[0],height:t[1]};r.vast_url?(n.mediaType="video",n.vastUrl=r.vast_url):(n.mediaType="banner",n.ad=r.ad),i.push(n)}return i}};(0,u.registerBidder)(_)},159:function(e,r){}},[157]);
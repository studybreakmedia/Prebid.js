pbjsChunk([1],{324:function(e,t,r){r(325),e.exports=r(326)},325:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),a=r(6),d=r(13),s=r(17);var o=t.spec={code:"vertamedia",supportedMediaTypes:[d.VIDEO],isBidRequestValid:function(e){return Boolean(e&&e.params&&e.params.aid)},buildRequests:function(e,t){return e.map((function(e){return{data:(r=e,i=(function(e){var t=n.parseSizesInput(e)[0];if("string"!=typeof t)return{};var r=t.toUpperCase().split("X");return{height:parseInt(r[1],10)||void 0,width:parseInt(r[0],10)||void 0}})(r.sizes),{domain:n.getTopWindowLocation().hostname,callbackId:r.bidId,aid:r.params.aid,h:i.height,w:i.width}),bidderRequest:t,method:"GET",url:"//rtb.vertamedia.com/hb/"};var r,i}))},interpretResponse:function(e,t){var r=t.bidderRequest,a=!(e=e.body)||!e.bids||!e.bids.length,d=n.deepAccess(r.bids[0],"mediaTypes.video"),o=n.deepAccess(r.bids[0],"mediaTypes.video.context"),p=d&&"outstream"===o,c=[];if(a){var l=e&&e.ext&&e.ext.message?": "+e.ext.message:"",v="in response for "+r.bidderCode+" adapter "+l;return n.logError(v),c}return e.bids.forEach((function(e){if(0!==e.cpm){var t=(function(e,t){var r={requestId:t.requestId,creativeId:t.cmpId,vastUrl:t.vastUrl,height:t.height,currency:t.cur,width:t.width,cpm:t.cpm,mediaType:"video",netRevenue:!0,ttl:3600};e&&i(r,{adResponse:t,renderer:(n=t.requestId,a=s.Renderer.install({id:n,url:"//player.vertamedia.com/outstream-unit/2.01/outstream.min.js",loaded:!1}),a.setRender(u),a)});var n,a;return r})(p,e);c.push(t)}})),c}};function u(e){e.renderer.push((function(){window.VOutstreamAPI.initOutstreams([{width:e.width,height:e.height,vastUrl:e.vastUrl,elId:e.adUnitCode}])}))}(0,a.registerBidder)(o)},326:function(e,t){}},[324]);
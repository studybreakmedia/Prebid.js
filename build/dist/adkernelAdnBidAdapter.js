pbjsChunk([51],{70:function(e,t,r){r(71),e.exports=r(72)},71:function(e,t,r){"use strict";function n(){return-1!==d.getTopWindowLocation().href.indexOf("adk_debug=true")}function i(e){var t=e.sizes,r={id:e.bidId,tagid:e.placementCode};return"video"===e.mediaType||d.deepAccess(e,"mediaTypes.video")?(r.video={w:t[0],h:t[1],mimes:c,protocols:f,api:l},e.params.video&&Object.keys(e.params.video).filter((function(e){return p.includes(e)})).forEach((function(t){return r.video[t]=e.params.video[t]}))):r.banner={format:d.parseSizesInput(e.sizes)},r}function a(e,t,r){var n=d.getTopWindowLocation();return{id:e,tid:t,site:{page:n.href,ref:d.getTopWindowReferrer(),secure:~~("https:"===n.protocol)},imp:r}}function o(e){var t={requestId:e.impid,bidderCode:m.code,cpm:e.bid,width:e.w,height:e.h,creativeId:e.crid,currency:"USD",ttl:720,netRevenue:!0};return e.tag?(t.ad="<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>"+e.tag+"</body></head>",t.mediaType=s.BANNER):e.vast_url&&(t.vastUrl=e.vast_url,t.mediaType=s.VIDEO),t}Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var d=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t})(r(0)),u=r(6),s=r(12),p=["mimes","protocols","api"],c=["video/mp4","video/webm","application/x-shockwave-flash","application/javascript"],f=[2,3,5,6],l=[1,2],m=t.spec={code:"adkernelAdn",supportedMediaTypes:[s.VIDEO],isBidRequestValid:function(e){return"params"in e&&(void 0===e.params.host||"string"==typeof e.params.host)&&"number"==typeof e.params.pubId},buildRequests:function(e){var t=void 0,r=void 0,o=e.map(i).reduce((function(n,i,a){var o=e[a],d=o.params.pubId,u=o.params.host||"tag.adkernel.com";return n[u]=n[u]||{},n[u][d]=n[u][d]||[],n[u][d].push(i),t=o.transactionId,r=o.bidderRequestId,n}),{}),d=[];return Object.keys(o).forEach((function(e){Object.keys(o[e]).forEach((function(i){var u=a(r,t,o[e][i]);d.push({method:"POST",url:"//"+e+"/tag?account="+i+"&pb=1"+(n()?"&debug=1":""),data:JSON.stringify(u)})}))})),d},interpretResponse:function(e){var t=e.body;return t.tags?(t.debug&&d.logInfo("ADKERNEL DEBUG:\n"+t.debug),t.tags.map(o)):[]},getUserSyncs:function(e,t){return e.iframeEnabled&&t&&0!==t.length?t.filter((function(e){return"syncpages"in e.body})).map((function(e){return e.body.syncpages})).reduce((function(e,t){return e.concat(t)}),[]).map((function(e){return{type:"iframe",url:e}})):[]}};(0,u.registerBidder)(m)},72:function(e,t){}},[70]);
pbjsChunk([51],{70:function(e,t,r){r(71),e.exports=r(72)},71:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var i=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),n=r(6),a=r(13);var o=["mimes","protocols","api"],d=["video/mp4","video/webm","application/x-shockwave-flash","application/javascript"],s=[2,3,5,6],u=[1,2];function p(e){var t=e.sizes,r={id:e.bidId,tagid:e.placementCode};return"video"===e.mediaType||i.deepAccess(e,"mediaTypes.video")?(r.video={w:t[0],h:t[1],mimes:d,protocols:s,api:u},e.params.video&&Object.keys(e.params.video).filter((function(e){return o.includes(e)})).forEach((function(t){return r.video[t]=e.params.video[t]}))):r.banner={format:i.parseSizesInput(e.sizes)},r}function c(e){var t={requestId:e.impid,bidderCode:f.code,cpm:e.bid,width:e.w,height:e.h,creativeId:e.crid,currency:"USD",ttl:720,netRevenue:!0};return e.tag?(t.ad="<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>"+e.tag+"</body></head>",t.mediaType=a.BANNER):e.vast_url&&(t.vastUrl=e.vast_url,t.mediaType=a.VIDEO),t}var f=t.spec={code:"adkernelAdn",supportedMediaTypes:[a.VIDEO],isBidRequestValid:function(e){return"params"in e&&(void 0===e.params.host||"string"==typeof e.params.host)&&"number"==typeof e.params.pubId},buildRequests:function(e){var t=void 0,r=void 0,n=e.map(p).reduce((function(i,n,a){var o=e[a],d=o.params.pubId,s=o.params.host||"tag.adkernel.com";return i[s]=i[s]||{},i[s][d]=i[s][d]||[],i[s][d].push(n),t=o.transactionId,r=o.bidderRequestId,i}),{}),a=[];return Object.keys(n).forEach((function(e){Object.keys(n[e]).forEach((function(o){var d,s,u,p,c=(d=r,s=t,u=n[e][o],p=i.getTopWindowLocation(),{id:d,tid:s,site:{page:p.href,ref:i.getTopWindowReferrer(),secure:~~("https:"===p.protocol)},imp:u});a.push({method:"POST",url:"//"+e+"/tag?account="+o+"&pb=1"+(-1!==i.getTopWindowLocation().href.indexOf("adk_debug=true")?"&debug=1":""),data:JSON.stringify(c)})}))})),a},interpretResponse:function(e){var t=e.body;return t.tags?(t.debug&&i.logInfo("ADKERNEL DEBUG:\n"+t.debug),t.tags.map(c)):[]},getUserSyncs:function(e,t){return e.iframeEnabled&&t&&0!==t.length?t.filter((function(e){return"syncpages"in e.body})).map((function(e){return e.body.syncpages})).reduce((function(e,t){return e.concat(t)}),[]).map((function(e){return{type:"iframe",url:e}})):[]}};(0,n.registerBidder)(f)},72:function(e,t){}},[70]);
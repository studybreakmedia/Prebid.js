pbjsChunk([50],{73:function(e,r,n){n(74),e.exports=n(75)},74:function(e,r,n){"use strict";function t(e){var r=i(e),n={id:e.bidId,tagid:e.placementCode};return"video"===e.mediaType?(n.video={w:r[0],h:r[1]},e.params.video&&Object.keys(e.params.video).filter((function(e){return p.includes(e)})).forEach((function(r){return n.video[r]=e.params.video[r]}))):n.banner={w:r[0],h:r[1]},"https:"===u.getTopWindowLocation().protocol&&(n.secure=1),n}function i(e){return"video"===e.mediaType?e.sizes:e.sizes[0]}function a(e,r){return{id:r,imp:e,site:o(),at:1,device:{ip:"caller",ua:"caller"}}}function o(){var e=u.getTopWindowLocation();return{domain:e.hostname,page:e.href.split("?")[0]}}function d(e){var r=e.adm;return"nurl"in e&&(r+=u.createTrackPixelHtml(e.nurl+"&px=1")),"<!DOCTYPE html><html><head><title></title><body style='margin:0px;padding:0px;'>"+r+"</body></head>"}Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var u=(function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r})(n(0)),c=n(12),s=n(6),p=["mimes","minduration","maxduration","protocols","startdelay","linearity","boxingallowed","playbackmethod","delivery","pos","api","ext"],l=r.spec={code:"adkernel",aliases:["headbidding"],supportedMediaTypes:[c.VIDEO],isBidRequestValid:function(e){return"params"in e&&void 0!==e.params.host&&"zoneId"in e.params&&!isNaN(Number(e.params.zoneId))},buildRequests:function(e){var r=void 0,n=e.map(t).reduce((function(n,t,i){var a=e[i],o=a.params.zoneId,d=a.params.host;return n[d]=n[d]||{},n[d][o]=n[d][o]||[],n[d][o].push(t),r=a.bidderRequestId,n}),{}),i=[];return Object.keys(n).forEach((function(e){Object.keys(n[e]).forEach((function(t){var o=a(n[e][t],r);i.push({method:"GET",url:window.location.protocol+"//"+e+"/rtbg",data:{zone:Number(t),ad_type:"rtb",v:"1.0",r:JSON.stringify(o)}})}))})),i},interpretResponse:function(e,r){var n=e.body;if(!n.seatbid)return[];var t=JSON.parse(r.data.r).imp;return n.seatbid.map((function(e){return e.bid})).reduce((function(e,r){return e.concat(r)}),[]).map((function(e){var r=t.find((function(r){return r.id===e.impid})),n={requestId:e.impid,cpm:e.price,creativeId:e.crid,currency:"USD",ttl:360,netRevenue:!0};return"banner"in r&&(n.mediaType=c.BANNER,n.width=r.banner.w,n.height=r.banner.h,n.ad=d(e)),"video"in r&&(n.mediaType=c.VIDEO,n.vastUrl=e.nurl,n.width=r.video.w,n.height=r.video.h),n}))},getUserSyncs:function(e,r){return e.iframeEnabled&&r&&0!==r.length?r.filter((function(e){return e.body&&e.body.ext&&e.body.ext.adk_usersync})).map((function(e){return e.body.ext.adk_usersync})).reduce((function(e,r){return e.concat(r)}),[]).map((function(e){return{type:"iframe",url:e}})):[]}};(0,s.registerBidder)(l)},75:function(e,r){}},[73]);
pbjsChunk([17],{244:function(e,t,n){n(245),e.exports=n(246)},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var r=n(0),a=n(6),i={TITLE_LEN:100,DESCR_LEN:200,SPONSORED_BY_LEN:50,IMG_MIN:150,ICON_MIN:50},u=20,o="USD",s=!0,c=t.spec={code:"pulseLite",aliases:["pulsepointLite"],supportedMediaTypes:["native"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e){var t={id:e[0].bidderRequestId,imp:e.map((function(e){return{id:(t=e).bidId,banner:(n=t,r=(function(e){if(e.params.cf){var t=e.params.cf.toUpperCase().split("X"),n=parseInt(e.params.cw||t[0],10),r=parseInt(e.params.ch||t[1],10);return[n,r]}return[1,1]})(n),n.nativeParams?null:{w:r[0],h:r[1]}),native:(function(e){if(e.nativeParams){var t=[];return d(t,(n=t.length+1,r=e.nativeParams.title,a=i.TITLE_LEN,r?{id:n,required:r.required?1:0,title:{len:r.len||a}}:null)),d(t,p(t.length+1,e.nativeParams.body,2,i.DESCR_LEN)),d(t,p(t.length+1,e.nativeParams.sponsoredBy,1,i.SPONSORED_BY_LEN)),d(t,l(t.length+1,e.nativeParams.icon,1,i.ICON_MIN,i.ICON_MIN)),d(t,l(t.length+1,e.nativeParams.image,3,i.IMG_MIN,i.IMG_MIN)),{request:JSON.stringify({assets:t}),ver:"1.1"}}var n,r,a;return null})(t),tagid:t.params.ct.toString()};var t,n,r})),site:(function(e){var t=e&&e.length>0?e[0].params.cp:"0";if(!e[0].params.app)return{publisher:{id:t.toString()},ref:(function(){try{return window.top.document.referrer}catch(e){return document.referrer}})(),page:(0,r.getTopWindowLocation)().href};return null})(e),app:(function(e){var t=e&&e.length>0?e[0].params.cp:"0",n=e[0].params.app;if(n)return{publisher:{id:t.toString()},bundle:n.bundle,storeurl:n.storeUrl,domain:n.domain};return null})(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage}};return{method:"POST",url:"//bid.contextweb.com/header/ortb",data:JSON.stringify(t)}},interpretResponse:function(e,t){return (function(e,t){var n={},r={};t=t.body,m(e.data).imp.forEach((function(e){n[e.id]=e})),t&&t.seatbid.forEach((function(e){return e.bid.forEach((function(e){r[e.impid]=e}))}));var a=[];return Object.keys(n).forEach((function(e){if(r[e]){var t={requestId:e,cpm:r[e].price,creative_id:e,creativeId:e,adId:e,ttl:u,netRevenue:s,currency:o};n[e].native?(t.native=(function(e,t){if(e.native){var n=m(t.adm),r={};if(n&&n.native&&n.native.assets)return n.native.assets.forEach((function(e){r.title=e.title?e.title.text:r.title,r.body=e.data&&2===e.data.type?e.data.value:r.body,r.sponsoredBy=e.data&&1===e.data.type?e.data.value:r.sponsoredBy,r.image=e.img&&3===e.img.type?e.img.url:r.image,r.icon=e.img&&1===e.img.type?e.img.url:r.icon})),n.native.link&&(r.clickUrl=encodeURIComponent(n.native.link.url)),r.impressionTrackers=n.native.imptrackers,r}return null})(n[e],r[e]),t.mediaType="native"):(t.ad=r[e].adm,t.width=n[e].banner.w,t.height=n[e].banner.h),i=t,(c=r[e])&&c.ext&&(i.ttl=c.ext.ttl||i.ttl,i.currency=c.ext.currency||i.currency,i.netRevenue=null!=c.ext.netRevenue?c.ext.netRevenue:i.netRevenue),a.push(t)}var i,c})),a})(t,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"//bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"//bh.contextweb.com/visitormatch/prebid"}]:void 0}};function d(e,t){t&&e.push(t)}function l(e,t,n,r,a){return t?{id:e,required:t.required?1:0,img:{type:n,wmin:t.wmin||r,hmin:t.hmin||a}}:null}function p(e,t,n,r){return t?{id:e,required:t.required?1:0,data:{type:n,len:t.len||r}}:null}function m(e){try{if(e)return JSON.parse(e)}catch(e){(0,r.logError)("pulsepointLite.safeParse","ERROR",e)}return null}(0,a.registerBidder)(c)},246:function(e,t){}},[244]);
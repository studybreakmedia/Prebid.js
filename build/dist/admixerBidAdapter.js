pbjsChunk([115],{78:function(e,r,t){e.exports=t(79)},79:function(e,r,t){"use strict";var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=t(3),d=t(2),n=t(7),s=t(0),c=function(){var e="//inv-nets.admixer.net/prebid.aspx",r="//inv-nets.admixer.net/videoprebid.aspx";function t(e,r){n.ajax(e,c,r,{method:"GET",withCredentials:!0})}function c(e){try{e=JSON.parse(e)}catch(r){e={result:{cpm:0}},s.logError(r)}var r,t=e.callback_uid,i=e.result;i.cpm>0?((r=a.createBid(1)).bidderCode="admixer",r.cpm=i.cpm,i.vastUrl?(r.mediaType="video",r.vastUrl=i.vastUrl):r.ad=i.ad,r.width=i.width,r.height=i.height):(r=a.createBid(2)).bidderCode="admixer",d.addBidResponse(t,r)}return{callBids:function(n){for(var c=n.bids||[],p=0,l=c.length;p<l;p++){var u=c[p],m={sizes:s.parseSizesInput(u.sizes).join("-"),zone:u.params&&u.params.zone,callback_uid:u.placementCode};if(m.zone)if("video"===u.mediaType){var b={};"object"===o(u.video)&&i(b,u.video),i(b,m),t(r,m)}else t(e,m);else{var f=a.createBid(2);f.bidderCode="admixer",d.addBidResponse(m.callback_uid,f)}}},responseCallback:c}};t(1).registerBidAdapter(new c,"admixer",{supportedMediaTypes:["video"]}),e.exports=c}},[78]);
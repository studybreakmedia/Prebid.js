pbjsChunk([11],{269:function(e,t,r){r(270),e.exports=r(271)},270:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),o=r(6);var n=t.spec={code:"sekindoUM",supportedMediaTypes:["video"],isBidRequestValid:function(e){return("video"!=e.mediaType&&("object"!=d(e.mediaTypes)||"object"!=d(e.mediaTypes.video))||"object"==d(e.params.video)&&void 0!==e.params.video.playerWidth&&void 0!==e.params.video.playerHeight)&&!!e.params.spaceId},buildRequests:function(e,t){var r=null;return r=parent!==window?document.referrer:window.location.href,e.map((function(e){var t=i.getBidIdParameter("subId",e.params),o=i.getBidIdParameter("spaceId",e.params),n=i.getBidIdParameter("bidfloor",e.params),p="https:"===document.location.protocol?"s":"",a="";return a=i.tryAppendQueryString(a,"s",o),a=i.tryAppendQueryString(a,"subId",t),a=i.tryAppendQueryString(a,"pubUrl",r),a=i.tryAppendQueryString(a,"hbTId",e.transactionId),a=i.tryAppendQueryString(a,"hbBidId",e.bidId),a=i.tryAppendQueryString(a,"hbver","4"),a=i.tryAppendQueryString(a,"hbcb","1"),a=i.tryAppendQueryString(a,"dcpmflr",n),a=i.tryAppendQueryString(a,"protocol",p),("video"===e.mediaType||"object"==d(e.mediaTypes)&&"object"==d(e.mediaTypes.video))&&(a=i.tryAppendQueryString(a,"x",e.params.playerWidth),a=i.tryAppendQueryString(a,"y",e.params.playerHeight),"undefined"!=typeof vid_vastType&&(a=i.tryAppendQueryString(a,"vid_vastType",e.params.vid_vastType)),"object"==d(e.mediaTypes)&&"object"==d(e.mediaTypes.video)&&"string"==typeof e.mediaTypes.video.context&&(a=i.tryAppendQueryString(a,"vid_context",e.mediaTypes.video.context))),{method:"GET",url:"http"+p+"://hb.sekindo.com/live/liveView.php",data:a}}))},interpretResponse:function(e,t){if("object"!==(void 0===e?"undefined":d(e)))return[];var r=[],i={requestId:e.body.id,bidderCode:n.code,cpm:e.body.cpm,width:e.body.width,height:e.body.height,creativeId:e.body.creativeId,currency:e.body.currency,netRevenue:e.body.netRevenue,ttl:e.body.ttl};return"video"==t.mediaType?void 0!==e.body.vastUrl?i.vastUrl=e.body.vastUrl:i.vastXml=e.body.vastXml:i.ad=e.body.ad,r.push(i),r},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"ADAPTER_SYNC_URL"}]}};(0,o.registerBidder)(n)},271:function(e,t){}},[269]);
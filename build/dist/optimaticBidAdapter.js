pbjsChunk([23],{218:function(e,t,i){i(219),e.exports=i(220)},219:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=t.ENDPOINT=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return (function(e,t){var i=[],r=!0,o=!1,n=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){o=!0,n=e}finally{try{!r&&d.return&&d.return()}finally{if(o)throw n}}return i})(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}})(i(0)),n=i(6);var a=t.ENDPOINT="//mg-bid.optimatic.com/adrequest/",d=t.spec={code:"optimatic",supportedMediaTypes:["video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.placement&&e.params.bidfloor)},buildRequests:function(e){return e.map((function(e){return{method:"POST",url:a+e.params.placement,data:(t=e,i=p(t.sizes),r=o.getTopWindowLocation(),n=window.top?window.top:window,{id:o.generateUUID(),imp:[{id:"1",bidfloor:t.params.bidfloor,video:{mimes:["video/mp4","video/ogg","video/webm","video/x-flv","application/javascript","application/x-shockwave-flash"],width:i.width,height:i.height}}],site:{id:"1",domain:r.host,page:r.href,ref:o.getTopWindowReferrer(),publisher:{id:"1"}},device:{ua:n.navigator.userAgent,ip:"127.0.0.1",devicetype:1}}),options:{contentType:"application/json"},bidRequest:e};var t,i,r,n}))},interpretResponse:function(e,t){var i,r=t.bidRequest,n=void 0;try{n=(e=e.body).seatbid[0].bid[0]}catch(t){e=null}return e&&n&&n.adm&&n.price?(i=p(r.sizes),{requestId:r.bidId,bidderCode:d.code,cpm:n.price,creativeId:n.id,vastXml:n.adm,width:i.width,height:i.height,mediaType:"video",currency:e.cur,ttl:300,netRevenue:!0}):(o.logWarn("No valid bids from "+d.code+" bidder"),[])}};function p(e){var t=o.parseSizesInput(e),i=t.length?t[0].split("x"):[],n=r(i,2),a=n[0],d=n[1];return{width:parseInt(a,10)||void 0,height:parseInt(d,10)||void 0}}(0,n.registerBidder)(d)},220:function(e,t){}},[218]);
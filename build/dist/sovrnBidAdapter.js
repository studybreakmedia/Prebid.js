pbjsChunk([6],{289:function(e,t,i){i(290),e.exports=i(291)},290:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var a=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}})(i(0)),n=i(6),r=i(12),d=i(4),o=i(8);var s=t.spec={code:"sovrn",supportedMediaTypes:[r.BANNER],isBidRequestValid:function(e){return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid))},buildRequests:function(e){var t=[];a._each(e,(function(e){t.push({id:e.bidId,banner:{w:1,h:1},tagid:a.getBidIdParameter("tagid",e.params),bidfloor:a.getBidIdParameter("bidfloor",e.params)})}));var i=o.config.getConfig(),n={id:a.getUniqueIdentifierStr(),imp:t,site:{domain:i.publisherHost||window.location.host,page:i.publisherPage||window.location.pathname+location.search+location.hash}};return{method:"POST",url:"//ap.lijit.com/rtb/bid?src="+d.REPO_AND_VERSION,data:JSON.stringify(n),options:{contentType:"text/plain"}}},interpretResponse:function(e,t){var i=e.body,a=i.id,n=i.seatbid,d=[],o=[];a&&n&&n.length>0&&n[0].bid&&n[0].bid.length>0&&n[0].bid.map((function(e){o.push(e.impid),d.push({requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.id,dealId:e.dealId||null,currency:"USD",netRevenue:!0,mediaType:r.BANNER,ad:decodeURIComponent(e.adm+'<img src="'+e.nurl+'">'),ttl:6e4})}));try{JSON.parse(t.data).imp.forEach((function(e){-1===o.indexOf(e.id)&&d.push({requestId:e.id,cpm:0,width:1,height:1,creativeId:null,dealId:null,currency:"USD",netRevenue:!0,mediaType:r.BANNER,ttl:6e4,ad:null})}))}catch(e){}return d}};(0,n.registerBidder)(s)},291:function(e,t){}},[289]);
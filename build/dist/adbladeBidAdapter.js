pbjsChunk([120],{56:function(e,i,d){e.exports=d(57)},57:function(e,i,d){"use strict";var a=d(0),r=d(3),n=d(2),t=d(5),s=function(){var e="adblade",i="//rtb.adblade.com/prebidjs/bid?",d=1e-10;return pbjs.adbladeResponse=function(i){var d=/\$(%7B|\{)AUCTION_ID(%7D|\})/gi,t=/\$(%7B|\{)AUCTION_PRICE(%7D|\})/gi,s=/\$(%7B|\{)CLICK_URL(%7D|\})/gi;if(void 0!==i&&i.hasOwnProperty("seatbid")&&!a.isEmpty(i.seatbid))a._each(i.seatbid,(function(i){a._each(i.bid,(function(i){var o=a.getBidRequest(i.impid),p=i.adm+a.createTrackPixelHtml(i.nurl);p=(p=(p=p.replace(d,i.impid)).replace(s,"")).replace(t,i.price);var c=r.createBid(1);c.bidderCode=e,c.cpm=i.price,c.ad=p,c.width=i.w,c.height=i.h,n.addBidResponse(o.placementCode,c)}))}));else{var o=pbjs._bidsRequested.find((function(i){return i.bidderCode===e})).bids;if(o.length>0){var p=r.createBid(2);p.bidderCode=e,n.addBidResponse(o[0].placementCode,p)}}},{callBids:function(e){var r=e.bids||[],n=a.getTopWindowUrl(),s=a.getTopWindowLocation(),o=s.hostname,p=0,c={};r.length>0&&(p=""+r[0].params.partnerId),a._each(r,(function(i){i.sizes[0]instanceof Array||(i.sizes=[i.sizes]),a._each(i.sizes,(function(a){var r=a[0]+"x"+a[1];c[r]=c[r]||{site:{id:p,page:n,domain:o,publisher:{id:p,name:n,domain:o}},id:e.requestId,imp:[],device:{ua:window.navigator.userAgent},cur:["USD"],user:{}},c[r].imp.push({id:i.bidId,bidfloor:i.params.bidFloor||d,tag:i.placementCode,banner:{w:a[0],h:a[1]},secure:0+("https"===s.protocol)})}))})),a._each(c,(function(e){t.loadScript(a.tryAppendQueryString(a.tryAppendQueryString(i,"callback","pbjs.adbladeResponse"),"json",JSON.stringify(e)))}))}}};d(1).registerBidAdapter(new s,"adblade"),e.exports=s}},[56]);
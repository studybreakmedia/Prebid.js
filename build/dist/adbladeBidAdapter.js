pbjsChunk([120],{56:function(e,i,d){e.exports=d(57)},57:function(e,i,d){"use strict";var a=d(0),r=d(3),n=d(2),t=d(5),s=function(){var e="//rtb.adblade.com/prebidjs/bid?",i=1e-10;return pbjs.adbladeResponse=function(e){var i=/\$(%7B|\{)AUCTION_ID(%7D|\})/gi,d=/\$(%7B|\{)AUCTION_PRICE(%7D|\})/gi,t=/\$(%7B|\{)CLICK_URL(%7D|\})/gi;if(void 0!==e&&e.hasOwnProperty("seatbid")&&!a.isEmpty(e.seatbid))a._each(e.seatbid,(function(e){a._each(e.bid,(function(e){var s=a.getBidRequest(e.impid),o=e.adm+a.createTrackPixelHtml(e.nurl);o=(o=(o=o.replace(i,e.impid)).replace(t,"")).replace(d,e.price);var p=r.createBid(1);p.bidderCode="adblade",p.cpm=e.price,p.ad=o,p.width=e.w,p.height=e.h,n.addBidResponse(s.placementCode,p)}))}));else{var s=pbjs._bidsRequested.find((function(e){return"adblade"===e.bidderCode})).bids;if(s.length>0){var o=r.createBid(2);o.bidderCode="adblade",n.addBidResponse(s[0].placementCode,o)}}},{callBids:function(d){var r=d.bids||[],n=a.getTopWindowUrl(),s=a.getTopWindowLocation(),o=s.hostname,p=0,c={};r.length>0&&(p=""+r[0].params.partnerId),a._each(r,(function(e){e.sizes[0]instanceof Array||(e.sizes=[e.sizes]),a._each(e.sizes,(function(a){var r=a[0]+"x"+a[1];c[r]=c[r]||{site:{id:p,page:n,domain:o,publisher:{id:p,name:n,domain:o}},id:d.requestId,imp:[],device:{ua:window.navigator.userAgent},cur:["USD"],user:{}},c[r].imp.push({id:e.bidId,bidfloor:e.params.bidFloor||i,tag:e.placementCode,banner:{w:a[0],h:a[1]},secure:0+("https"===s.protocol)})}))})),a._each(c,(function(i){t.loadScript(a.tryAppendQueryString(a.tryAppendQueryString(e,"callback","pbjs.adbladeResponse"),"json",JSON.stringify(i)))}))}}};d(1).registerBidAdapter(new s,"adblade"),e.exports=s}},[56]);
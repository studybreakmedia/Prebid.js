pbjsChunk([69],{294:function(e,r,i){e.exports=i(295)},295:function(e,r,i){"use strict";var d,n=i(3),t=i(2),s=i(5);d=function(){function e(e){var r=window.location.protocol+"//bidder.springserve.com/display/hbid?",i=e.sizes[0];r+="&w=",r+=i[0],r+="&h=",r+=i[1];var d=e.params,n={sp:"supplyPartnerId",imp_id:"impId"};for(var t in n)n.hasOwnProperty&&d.hasOwnProperty(n[t])&&(r+="&",r+=t,r+="=",r+=d[n[t]]);var s=window.location.hostname;return d.hasOwnProperty("test")&&!0===d.test&&(r+="&debug=true",s="test.com"),r+="&domain=",r+=s,r+="&callback=pbjs.handleSpringServeCB"}return pbjs.handleSpringServeCB=function(e){if(e&&e.seatbid&&e.seatbid.length>0&&void 0!==e.seatbid[0].bid[0]){var r=e.seatbid[0].bid[0],i=pbjs._bidsRequested.find((function(e){return"springserve"===e.bidderCode}));i=i&&i.bids.length>0?i.bids.filter((function(e){return e.params&&e.params.impId===r.impid})):[];for(var d,s=n.createBid(1),a=0;a<i.length;a++){var o=i[a];if("springserve"===o.bidder){d=o.placementCode;var p=o.sizes[0];s.width=p[0],s.height=p[1]}}i[0]&&(s.bidderCode=i[0].bidder),r.hasOwnProperty("price")&&r.hasOwnProperty("adm")?(s.cpm=r.price,s.ad=r.adm):(s=n.createBid(2)).bidderCode="springserve",t.addBidResponse(d,s)}},{callBids:function(r){for(var i=r.bids||[],d=0;d<i.length;d++){var n=i[d];s.loadScript(e(n))}},buildSpringServeCall:e}},i(1).registerBidAdapter(new d,"springserve"),e.exports=d}},[294]);
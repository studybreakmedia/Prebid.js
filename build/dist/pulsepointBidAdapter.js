pbjsChunk([78],{242:function(e,t,o){e.exports=o(243)},243:function(e,t,o){"use strict";var n=o(3),i=o(2),r=o(5),d=o(0),a=function(){var e=window.location.protocol+"//tag-st.contextweb.com/getjs.static.js",t=window.location.protocol+"//bid.contextweb.com/header/tag";function o(e){for(var t=e.bids,o=0;o<t.length;o++){a(t[o])}}function a(e){try{new window.pp.Ad(function(e){var o=(i=e,function(e){c(i,e)}),n={cn:1,ca:window.pp.requestActions.BID,cu:t,adUnitId:e.placementCode,callback:o};var i;for(var r in e.params)e.params.hasOwnProperty(r)&&(n[r]=e.params[r]);return n}(e)).display()}catch(t){d.logError("pulsepoint.requestBid","ERROR",t),c(e)}}function c(e,t){if(t){var o=e.params.cf.toUpperCase().split("X"),r=n.createBid(1,e);r.bidderCode=e.bidder,r.cpm=t.bidCpm,r.ad=t.html,r.width=o[0],r.height=o[1],i.addBidResponse(e.placementCode,r)}else{var d=n.createBid(2,e);d.bidderCode=e.bidder,i.addBidResponse(e.placementCode,d)}}return{callBids:function(t){void 0===window.pp?r.loadScript(e,(function(){o(t)}),!0):o(t)}}};o(1).registerBidAdapter(new a,"pulsepoint"),e.exports=a}},[242]);
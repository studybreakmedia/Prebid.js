pbjsChunk([63],{312:function(e,r,a){e.exports=a(313)},313:function(e,r,a){"use strict";function t(){function e(e,r){var a="//rtb.t.c4tw.net/Bid?";if(a=s.tryAppendQueryString(a,"s","h"),a=s.tryAppendQueryString(a,"callback","pbjs.handleTwCB"),a=s.tryAppendQueryString(a,"callback_uid",r),a=s.tryAppendQueryString(a,"referrer",s.getTopWindowUrl()),e.params)for(var t in e.params){var i=e.params[t];switch(t){case"placementId":t="id";break;case"siteId":t="sid";break;case"publisherId":t="pid";break;case"currency":t="cur";break;case"bidFloor":t="min";break;case"country":t="gz"}a=s.tryAppendQueryString(a,t,i)}var d=s.parseSizesInput(e.sizes);return d.length>0&&(a=s.tryAppendQueryString(a,"size",d.join(","))),a+="ta=1",s.logMessage("bid request built: "+a),e.startTime=(new Date).getTime(),a}var r=new p("twenga");return r.callBids=function(r){for(var a=0;a<r.bids.length;a++){var t=r.bids[a],i=t.bidId;n.loadScript(e(t,i))}},pbjs.handleTwCB=function(e){var r;if(e&&e.callback_uid){var a,t=e.callback_uid,i="",n=s.getBidRequest(t);n&&(r=n.bidder,i=n.placementCode,n.status=d.STATUS.GOOD),s.logMessage("JSONP callback function called for ad ID: "+t);var p=[];if(e.result&&e.result.cpm&&0!==e.result.cpm&&e.result.ad){var o=e.result;a=parseInt(o.cpm,10),a/=1e4;var u=o.ad.replace("%%WP%%",o.cpm);(p=l.createBid(1,n)).creative_id=o.creative_id,p.bidderCode=r,p.cpm=a,!u||0!==u.lastIndexOf("http",0)&&0!==u.lastIndexOf("//",0)?p.ad=u:p.adUrl=u,p.width=o.width,p.height=o.height,c.addBidResponse(i,p)}else s.logMessage("No prebid response from Twenga for placement code "+i),(p=l.createBid(2,n)).bidderCode=r,c.addBidResponse(i,p)}else s.logMessage("No prebid response for placement %%PLACEMENT%%")},i(this,{callBids:r.callBids,setBidderCode:r.setBidderCode,buildBidCall:e})}var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d=a(4),s=a(0),n=a(5),c=a(2),l=a(3),p=a(9).default;a(1).registerBidAdapter(new t,"twenga"),e.exports=t}},[312]);
pbjsChunk([64],{307:function(e,r,t){e.exports=t(308)},308:function(e,r,t){"use strict";var i=t(0),a=t(5),n=t(2),o=t(3),d=function(){function e(e,t){var a=i.getBidIdParameter("inventoryCode",e.params),n=i.getBidIdParameter("floor",e.params),o=document.location.protocol+"//tlx.3lift.com/header/auction?";o=i.tryAppendQueryString(o,"callback","pbjs.TLCB"),o=i.tryAppendQueryString(o,"lib","prebid"),o=i.tryAppendQueryString(o,"v","0.34.1"),o=i.tryAppendQueryString(o,"callback_id",t),o=i.tryAppendQueryString(o,"inv_code",a),o=i.tryAppendQueryString(o,"floor",n),o=i.tryAppendQueryString(o,"fe",r());var d=i.parseSizesInput(e.sizes);d&&(o+="size="+d+"&");var l=i.getTopWindowUrl();return(o=i.tryAppendQueryString(o,"referrer",l)).lastIndexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),i.logMessage("tlCall request built: "+o),e.startTime=(new Date).getTime(),o}function r(){var e=0;try{new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(e=1)}catch(r){navigator.mimeTypes&&void 0!==navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&(e=1)}return e}var t=!1;return pbjs.TLCB=function(e){if(e&&e.callback_id){var r=i.getBidRequest(e.callback_id),a=r&&r.placementCode;r&&i.logMessage("JSONP callback function called for inventory code: "+r.params.inventoryCode);var d=[];if(e&&e.cpm&&0!==e.cpm?((d=o.createBid(1,r)).bidderCode="triplelift",d.cpm=e.cpm,d.ad=e.ad,d.width=e.width,d.height=e.height,d.dealId=e.deal_id,n.addBidResponse(a,d)):(r&&i.logMessage("No prebid response from TripleLift for inventory code: "+r.params.inventoryCode),(d=o.createBid(2,r)).bidderCode="triplelift",n.addBidResponse(a,d)),!t){var l=i.createInvisibleIframe();l.src="//ib.3lift.com/sync";try{document.body.appendChild(l)}catch(e){i.logError(e)}t=!0,window._tlSyncDone=!0}}else i.logMessage("No prebid response for placement %%PLACEMENT%%")},{callBids:function(r){for(var t=r.bids,i=t.length,n=0;n<i;n++){var o=t[n],d=o.bidId;a.loadScript(e(o,d))}}}};t(1).registerBidAdapter(new d,"triplelift"),e.exports=d}},[307]);
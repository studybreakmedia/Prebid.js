pbjsChunk([105],{128:function(n,t,e){n.exports=e(129)},129:function(n,t,e){"use strict";var i=e(0),o=e(3),d=e(2),r=e(5),a=function(){var n="//t.brand-server.com/hb",t="//staging.brand-server.com/hb",e="centro",a="adCentroHandler_",s={noUnit:"Bid has no unit",noAdTag:"Bid has missmatch format.",noBid:"Response has no bid.",anotherCode:"Bid has another bidderCode - ",undefBid:"Bid is undefined",unitNum:"Requested unit is "};function u(n,t,r){return function(a){try{delete window[n]}catch(t){window[n]=void 0}!(function(n,t,r){var a,u=n&&n.bid||n;u&&(u.adTag||"No bid"===u.statusMessage)&&u.sectionID&&u.sectionID.toString()===t.toString()?u.adTag?((a=o.createBid(1,r)).cpm=u.value,a.ad=u.adTag,a.width=u.width,a.height=u.height):a=o.createBid(2,r):(i.logError(s.unitNum+t+". "+(u?u.statusMessage||s.noAdTag:s.noBid),e),a=o.createBid(2,r));d.addBidResponse(r.placementCode,a)})(a,t,r)}}function c(o){var d,c=o.sizes&&o.sizes[0];if((d=o.params).unit){var h=["s="+d.unit,"adapter=prebid"],p="28136"===d.unit.toString();h.push("url="+encodeURIComponent(d.page_url||location.href)),c instanceof Array&&2===c.length&&"number"==typeof c[0]&&"number"==typeof c[1]&&h.push("sz="+c.join("x"));var g=a+d.unit+c.join("x")+encodeURIComponent(o.bidId);h.push("callback="+encodeURIComponent('window["'+g+'"]')),window[g]=u(g,d.unit,o),r.loadScript(("https:"===document.location.protocol?"https:":"http:")+(p?t:n)+"?"+h.join("&"))}else i.logError(s.noUnit,e)}return{callBids:function(n){for(var t,i=n.bids||[],o=0;o<i.length;o++)(t=i[o])&&t.bidder===e&&c(t)}}};e(1).registerBidAdapter(new a,"centro"),n.exports=a}},[128]);
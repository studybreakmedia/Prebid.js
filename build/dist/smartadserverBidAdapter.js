pbjsChunk([73],{280:function(e,r,a){e.exports=a(281)},281:function(e,r,a){"use strict";var d=a(0),t=a(3),s=a(2),n=a(5),i=a(13),o=function(){var e=function(e){var r="sas_"+d.getUniqueIdentifierStr();return pbjs[r]=function(r){var a;r?(d.logMessage("[SmartAdServer] bid response for placementCode "+e.placementCode),(a=t.createBid(1)).bidderCode="smartadserver",a.cpm=r.cpm,a.currency=r.currency,a.ad=r.ad,a.width=r.width,a.height=r.height,a.dealId=r.dealId,s.addBidResponse(e.placementCode,a)):(d.logMessage("[SmartAdServer] no bid response for placementCode "+e.placementCode),(a=t.createBid(2)).bidderCode="smartadserver",s.addBidResponse(e.placementCode,a))},r};return{callBids:function(r){for(var a=0;a<r.bids.length;a++){var d=r.bids[a],t=i.parse(d.params.domain);t.pathname="/prebid",t.search={pbjscbk:"pbjs."+e(d),siteid:d.params.siteId,pgid:d.params.pageId,fmtid:d.params.formatId,ccy:d.params.currency||"USD",bidfloor:d.params.bidfloor||0,tgt:encodeURIComponent(d.params.target||""),tag:d.placementCode,sizes:d.sizes.map((function(e){return e[0]+"x"+e[1]})).join(","),async:1},n.loadScript(i.format(t))}}}};a(1).registerBidAdapter(new o,"smartadserver"),e.exports=o}},[280]);
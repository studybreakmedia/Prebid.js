pbjsChunk([109],{117:function(e,d,i){e.exports=i(118)},118:function(e,d,i){"use strict";var t=i(2),r=i(3),n=i(0),a=i(5),c=function(){var e="//cdn.bidfluence.com/forge.js";function d(d){var i=n.getBidIdParameter("adunitId",d.params),t=n.getBidIdParameter("pubId",d.params),r=n.getBidIdParameter("reservePrice",d.params),c={placementCode:d.placementCode,cbID:d.bidId};a.loadScript(e,(function(){FORGE.init([i,t,c,r])}))}return pbjs.bfPbjsCB=function(e){var d=n.getBidRequest(e.cbID),i=null;e.cpm>0?((i=r.createBid(1,d)).bidderCode="bidfluence",i.cpm=e.cpm,i.ad=e.ad,i.width=e.width,i.height=e.height):(i=r.createBid(2,d)).bidderCode="bidfluence",t.addBidResponse(e.placementCode,i)},{callBids:function(e){for(var i=e.bids||[],t=0;t<i.length;t++)d(i[t])}}};i(1).registerBidAdapter(new c,"bidfluence"),e.exports=c}},[117]);
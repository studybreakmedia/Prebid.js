pbjsChunk([67],{298:function(e,i,t){e.exports=t(299)},299:function(e,i,t){"use strict";var s=t(3),a=t(2),r=t(5),d=t(0),n=function(){var e="0.0.1",i=["320x50"],t=["ufid","refer","ad_unit_id","device_id","lat","long","user","price_floor","test"],n="https://ads04.tapsense.com/ads/headerad",o=void 0;function p(e){return function(i,t){var r=void 0;if(i&&t){var n=d.getBidRequest(e);"ok"===i.status.value&&i.count_ad_units>0?((r=s.createBid(1,r)).cpm=t,r.width=i.width,r.height=i.height,r.ad=i.ad_units[0].html):r=s.createBid(2,r),r.bidderCode=n.bidder,a.addBidResponse(n.placementCode,r)}else d.logMessage("No prebid response")}}return pbjs.tapsense={},{callBids:function(s){o=s.bids||[];for(var a=0;a<o.length;a++){var c=o[a],u=!1;if(!c.sizes||!c.params.user||!c.params.ad_unit_id)return;for(var l=d.parseSizesInput(c.sizes),f=0;f<l.length;f++)if(i.indexOf(l[f])>-1){u=!0;break}if(u){var b="?price=true&jsonp=1&callback=pbjs.tapsense.callback_with_price_"+c.bidId+"&version="+e+"&";pbjs.tapsense["callback_with_price_"+c.bidId]=p(c.bidId);for(var h=Object.keys(c.params),v=0;v<h.length;v++)t.indexOf(h[v])<0||(b+=encodeURIComponent(h[v])+"="+encodeURIComponent(c.params[h[v]])+"&");_=n+b,r.loadScript(_)}}var _}}};t(1).registerBidAdapter(new n,"tapsense"),e.exports=n}},[298]);
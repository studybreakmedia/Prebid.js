pbjsChunk([114],{85:function(e,n,d){e.exports=d(86)},86:function(e,n,d){"use strict";var i=d(3),r=d(2),a=d(5),o=d(0),t=d(1),p="adsupply",s=function(){function e(e){return function(){pbjs.adSupplyResponseHandler(e)}}return pbjs.adSupplyResponseHandler=function(e){if(e){var n=o.getBidRequest(e);if(n&&n.params){var d=n.params.clientId,a="b"+n.params.zoneId;if(window[d]&&window[d][a]){var t=window[d][a].Media;if(t)if(!t.Url||!t.Ecpm||"number"!=typeof t.Ecpm||t.Ecpm<=0){var s=i.createBid(2,n);s.bidderCode=p,r.addBidResponse(n.placementCode,s)}else{var c=i.createBid(1,n);c.bidderCode=p,c.cpm=t.Ecpm,c.ad='<iframe style="z-index: 5000001; margin: 0px; padding: 0px; border: none; width: '+t.Width+"px; height: "+t.Height+'px; " src="//'+n.params.endpointUrl+t.Url+'"></iframe>',c.width=t.Width,c.height=t.Height,r.addBidResponse(n.placementCode,c)}}}}},{callBids:function(n){for(var d,i,r,o,t,p=n.bids||[],s=0;s<p.length;s++){var c=p[s];if((t=c.params)&&t.siteId&&t.zoneId&&t.endpointUrl&&t.clientId&&!("number"!=typeof t.zoneId||t.zoneId<=0)){var m=c.params.clientId,w="b"+c.params.zoneId;window[m]=window[m]||{},window.window[m][w]=window.window[m][w]||{},window.window[m][w].Media={};var l=(d=c,i=encodeURIComponent(window.document.referrer),r=encodeURIComponent(Math.floor(1e5*Math.random()+1)),o=encodeURIComponent((new Date).getTimezoneOffset()),"//"+d.params.endpointUrl+"/banner.engine?id="+d.params.siteId+"&z="+d.params.zoneId+"&rand="+r+"&ver=async&time="+o+"&referrerurl="+i+"&abr=false&hbt=1&cid="+encodeURIComponent(d.params.clientId));a.loadScript(l,e(c.bidId))}}}}};t.registerBidAdapter(new s,"adsupply"),e.exports=s}},[85]);
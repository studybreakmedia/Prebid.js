pbjsChunk([82],{221:function(e,r,t){e.exports=t(222)},222:function(e,r,t){"use strict";var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i=t(0),d=t(4),s=t(2),l=t(3),o=t(5),n=t(0),c=t(1),p=t(9).default,u="orbitsoft",f={"title.family":"f1","title.size":"fs1","title.weight":"w1","title.style":"s1","title.color":"c3","description.family":"f2","description.size":"fs2","description.weight":"w2","description.style":"s2","description.color":"c4","url.family":"f3","url.size":"fs3","url.weight":"w3","url.style":"s3","url.color":"c5","colors.background":"c2","colors.border":"c1","colors.link":"c6"},g=function(){var e=new p(u);function r(e,r){var i=n.getBidIdParameter("placementId",e.params),d=n.getBidIdParameter("ref",e.params),s=n.getBidIdParameter("loc",e.params),l=n.getBidIdParameter("requestUrl",e.params);if(0===l.length)return n.logMessage("No param requestUrl"),null;l+="?",l=n.tryAppendQueryString(l,"callback","pbjs.handleOASCB"),l=n.tryAppendQueryString(l,"callback_uid",r),l=n.tryAppendQueryString(l,"scid",i);var o=n.parseSizesInput(e.sizes);o.length>0&&(l+="size="+o[0]+"&");var c=a({},e.params);return delete c.placementId,delete c.referrer,delete c.style,delete c.customParams,l+=n.parseQueryStringParameters(c),""===s&&(s=n.getTopWindowUrl()),""===d&&(d=window.top.document.referrer),l=n.tryAppendQueryString(l,"loc",s),l=t(l=n.tryAppendQueryString(l,"ref",d)),n.logMessage("jpt request built: "+l),e.startTime=(new Date).getTime(),l}function t(e){return e.lastIndexOf("&")===e.length-1&&(e=e.substring(0,e.length-1)),e}return e.callBids=function(e){for(var t=e.bids||[],a=0;a<t.length;a++){var i=t[a],n=r(i,i.bidId);if(n)o.loadScript(n);else{var c=l.createBid(d.STATUS.NO_BID,i);c.bidderCode=e.bidderCode,s.addBidResponse(i.placementCode,c)}}},pbjs.handleOASCB=function(e){var r=void 0;if(e&&e.callback_uid){var a=void 0,o=e.callback_uid,c="",p=(0,i.getBidRequest)(o);p&&(r=p.bidder,c=p.placementCode,p.status=d.STATUS.GOOD),n.logMessage("JSONP callback function called for ad ID: "+o);var u=[];if(e.cpm&&0!==e.cpm){a=e.cpm,(u=l.createBid(d.STATUS.GOOD,p)).bidderCode=r,u.cpm=a,u.adUrl=e.content_url,u.width=e.width,u.height=e.height;var g=n.getBidIdParameter("style",p.params),m={};for(var b in g)if(g.hasOwnProperty(b)){var y=g[b];for(var v in y)if(y.hasOwnProperty(v)){var h=f[b+"."+v];void 0!==h&&(m[h]=y[v])}}u.adUrl+="&"+n.parseQueryStringParameters(m);var B=n.getBidIdParameter("customParams",p.params),S={};for(var w in B)B.hasOwnProperty(w)&&(S["c."+w]=B[w]);var O=n.parseQueryStringParameters(S);O&&(u.adUrl+=O),u.adUrl=t(u.adUrl),s.addBidResponse(c,u)}else n.logMessage("No prebid response from Orbitsoft for placement code "+c),(u=l.createBid(d.STATUS.NO_BID,p)).bidderCode=r,s.addBidResponse(c,u)}else n.logMessage("No prebid response for placement")},a(this,{callBids:e.callBids,setBidderCode:e.setBidderCode,buildJPTCall:r})};c.registerBidAdapter(new g,u),e.exports=g}},[221]);
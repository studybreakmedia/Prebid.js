pbjsChunk([58],{331:function(e,r,i){e.exports=i(332)},332:function(e,r,i){"use strict";function d(){var e=("https:"===document.location.protocol?"https:":"http:")+"//engine.widespace.com/map/engine/hb/dynamic?",r="pbjs.widespaceHandleCB",i=function(e){if(e)for(var r=void 0,i="widespace",d=0,t=e.length;d<t;d++){var s=e[d],o="",p=[];s.sizes={height:s.height,width:s.width};var h=a.getBidRequest(s.callbackUid);h&&(i=h.bidder,o=h.placementCode,p=h.sizes),s&&s.callbackUid&&"noad"!==s.status&&(function(e,r){for(var i=0,d=r.length;i<d;i++)if(e.width===r[i][0]&&e.height===r[i][1])return!0;return!1})(s.sizes,p)?((r=c.createBid(1)).bidderCode=i,r.cpm=s.cpm,r.cur=s.currency,r.creative_id=s.adId,r.ad=s.code,r.width=s.width,r.height=s.height,n.addBidResponse(o,r)):((r=c.createBid(2)).bidderCode=i,n.addBidResponse(o,r))}};return{callBids:function(d){for(var n=d&&d.bids||[],c=0;c<n.length;c++){var o=n[c],p=o.bidId,h=o.params.sid,u=o.params.cur||o.params.currency,b="";b=a.parseSizesInput(o.sizes).reduce((function(e,r){return e?e+","+r:r}),b);var l=e;l=a.tryAppendQueryString(l,"hb.ver",s);var m={hb:"1","hb.name":"prebidjs","hb.callback":r,"hb.callbackUid":p,"hb.sizes":b,"hb.currency":u,sid:h};if(o.params.demo)for(var g=["gender","country","region","postal","city","yob"],v=0;v<g.length;v++)o.params.demo[g[v]]&&(m["hb.demo."+g[v]]=o.params.demo[g[v]]);l+="#";for(var f=Object.keys(m),w=0;w<f.length;w++){var y=f[w];l+=y+"="+m[y]+"&"}pbjs.widespaceHandleCB=window[r]=i,t.loadScript(l)}}}}var a=i(0),t=i(5),n=i(2),c=i(3),s="1.0.3";i(1).registerBidAdapter(new d,"widespace"),e.exports=d}},[331]);
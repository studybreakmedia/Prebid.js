pbjsChunk([92],{169:function(e,t,n){e.exports=n(170)},170:function(e,t,n){"use strict";function i(){function e(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&e[t]&&n.push(t,"=",e[t],"&");return btoa(n.join("").slice(0,-1))}function t(e){return function(t){try{var r,o,d;try{t.um_list&&n(t.um_list)}catch(e){}t=t.ads;for(var h=0,u=e.length;h<u;h++)d=e[h],(o=i(t,e[h].bidId))?((r=a.createBid(s.GOOD,d)).bidderCode="imonomy",r.ad=o.ad,r.cpm=o.cpm,r.cur=o.cur,r.width=o.width,r.height=o.height,c.addBidResponse(d.placementCode,r)):((r=a.createBid(s.NO_BID,d)).bidderCode="imonomy",c.addBidResponse(d.placementCode,r))}catch(e){}}}function n(e){var t,n=document.getElementsByTagName("head")[0];r._each(e,(function(e){switch(t=void 0,e.type){case"redirect":t=document.createElement("img");break;case"iframe":t=r.createInvisibleIframe();break;case"js":(t=document.createElement("script")).type="text/javascript",t.async=!0}t&&(t.src=decodeURIComponent(e.Url),n.insertBefore(t,n.firstChild))}))}function i(e,t){for(var n=0,i=(e=e||[]).length;n<i;n++)if(e[n].impression_id==t)return e[n];return null}return{callBids:function(n){var i,c,a,d=[],s="",h="",u="",m="",p="",l="",y="",g="",b="",f=n.bids,v="_hb_"+r.getUniqueIdentifierStr();try{s=document.referrer}catch(e){}try{g=window.location.host}catch(e){}try{p=window.devicePixelRatio}catch(e){}try{h=screen.width||document.body.clientWidth||0}catch(e){}try{u=screen.height||document.body.clientHeight||0}catch(e){}try{b=window.location.pathname+location.search+location.hash}catch(e){}try{var w=document.getElementsByTagName("meta")||{};l="keywords"in w?w.keywords.content:""}catch(e){}try{var I=navigator.connection||navigator.mozConnection||navigator.webkitConnection;y=void 0!=I?I.type:""}catch(e){}try{m=(document.documentElement.lang||navigator.language||navigator.userLanguage||"").split("-")[0]}catch(e){}try{var _={pxr:p,page:b,domain:g,siteRef:s,screen_w:h,screen_h:u,language:m,keywords:l,connectiontype:y,requestId:n.requestId,bidderRequestId:n.bidderRequestId,callback:"pbjs."+v,publisher_id:n.bids[0].params.publisher_id,bids:encodeURIComponent(JSON.stringify(n.bids))},C="https:"===document.location.protocol?"https":"http";d.unshift(C+"://b.imonomy.com/openrtb/hb/"+n.bids[0].params.publisher_id+"?id="+r.getUniqueIdentifierStr());for(var B in _)_.hasOwnProperty(B)&&d.push(B+"="+encodeURIComponent(_[B]));for(c=0,a=f.length;c<a;c++)i=f[c],d.push(e(i.params));pbjs[v]=t(f),o.loadScript(d.join("&"))}catch(e){}}}}var r=n(0),o=n(5),c=n(2),a=n(3),d=n(1),s=n(4).STATUS;d.registerBidAdapter(new i,"imonomy"),e.exports=i}},[169]);
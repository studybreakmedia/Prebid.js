pbjsChunk([92],{169:function(e,t,n){e.exports=n(170)},170:function(e,t,n){"use strict";var r=n(0),i=n(5),a=n(2),o=n(3),c=n(1),d=n(4).STATUS;function s(){return{callBids:function(n){var c,s,h,u=[],m="",p="",l="",y="",g="",b="",f="",v="",w="",I=n.bids,_="_hb_"+r.getUniqueIdentifierStr();try{m=document.referrer}catch(e){}try{v=window.location.host}catch(e){}try{g=window.devicePixelRatio}catch(e){}try{p=screen.width||document.body.clientWidth||0}catch(e){}try{l=screen.height||document.body.clientHeight||0}catch(e){}try{w=window.location.pathname+location.search+location.hash}catch(e){}try{var C=document.getElementsByTagName("meta")||{};b="keywords"in C?C.keywords.content:""}catch(e){}try{var B=navigator.connection||navigator.mozConnection||navigator.webkitConnection;f=void 0!=B?B.type:""}catch(e){}try{var R=document.documentElement.lang||navigator.language||navigator.userLanguage||"";y=R.split("-")[0]}catch(e){}try{var k={pxr:g,page:w,domain:v,siteRef:m,screen_w:p,screen_h:l,language:y,keywords:b,connectiontype:f,requestId:n.requestId,bidderRequestId:n.bidderRequestId,callback:"pbjs."+_,publisher_id:n.bids[0].params.publisher_id,bids:encodeURIComponent(JSON.stringify(n.bids))},j="https:"===document.location.protocol?"https":"http";u.unshift(j+"://b.imonomy.com/openrtb/hb/"+n.bids[0].params.publisher_id+"?id="+r.getUniqueIdentifierStr());for(var U in k)k.hasOwnProperty(U)&&u.push(U+"="+encodeURIComponent(k[U]));for(s=0,h=I.length;s<h;s++)c=I[s],u.push(e(c.params));pbjs[_]=(q=I,function(e){try{var n,i,c,s="imonomy";try{e.um_list&&(m=e.um_list,l=document.getElementsByTagName("head")[0],r._each(m,(function(e){switch(p=void 0,e.type){case"redirect":p=document.createElement("img");break;case"iframe":p=r.createInvisibleIframe();break;case"js":(p=document.createElement("script")).type="text/javascript",p.async=!0}p&&(p.src=decodeURIComponent(e.Url),l.insertBefore(p,l.firstChild))})))}catch(e){}e=e.ads;for(var h=0,u=q.length;h<u;h++)c=q[h],(i=t(e,q[h].bidId))?((n=o.createBid(d.GOOD,c)).bidderCode=s,n.ad=i.ad,n.cpm=i.cpm,n.cur=i.cur,n.width=i.width,n.height=i.height,a.addBidResponse(c.placementCode,n)):((n=o.createBid(d.NO_BID,c)).bidderCode=s,a.addBidResponse(c.placementCode,n))}catch(e){}var m,p,l}),i.loadScript(u.join("&"))}catch(e){}var q}};function e(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&e[t]&&n.push(t,"=",e[t],"&");return btoa(n.join("").slice(0,-1))}function t(e,t){for(var n=0,r=(e=e||[]).length;n<r;n++)if(e[n].impression_id==t)return e[n];return null}}c.registerBidAdapter(new s,"imonomy"),e.exports=s}},[169]);
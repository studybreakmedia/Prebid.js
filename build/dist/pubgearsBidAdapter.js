pbjsChunk([80],{234:function(e,t,r){e.exports=r(235)},235:function(e,t,r){"use strict";var n=r(3),i=r(2),a=r(4),s=r(0),o=r(1),d=document,u="script",c="params",p="sizes",l="size",A="cpm",B="ad",f="width",g="height",b="pub_zone",m="gross_price",C="resource",v="detail",E="bidderCode",h="pubgears",D="pg-header-tag",N="data-bsm-",_="slot-list",I="pub",y="flag",z="placementCode",F="bidId",j="publisherName",k="pubZone",M="onBidResponse",P="onResourceComplete",R=decodeURIComponent("%3Cscript%3E%0A(function(define)%7B%0Adefine(function(a)%7B%0A%09var%20id%3D%20%22pg-ad-%22%20%2B%20Math.floor(Math.random()%20*%201e10)%2C%20d%3D%20document%0A%09d.write('%3Cdiv%20id%3D%22'%2Bid%2B'%22%3E%3C%2Fdiv%3E')%0A%09a.push(%7B%0A%09%09pub%3A%20'%25%25PUBLISHER_NAME%25%25'%2C%0A%09%09pub_zone%3A%20'%25%25PUB_ZONE%25%25'%2C%0A%09%09sizes%3A%20%5B'%25%25SIZE%25%25'%5D%2C%0A%09%09flag%3A%20true%2C%0A%09%09container%3A%20d.getElementById(id)%2C%0A%09%7D)%3B%0A%7D)%7D)(function(f)%7Bvar%20key%3D'uber_imps'%2Ca%3Dthis%5Bkey%5D%3Dthis%5Bkey%5D%7C%7C%5B%5D%3Bf(a)%3B%7D)%3B%0A%3C%2Fscript%3E%0A%3Cscript%20src%3D%22%2F%2Fc.pubgears.com%2Ftags%2Fb%22%3E%3C%2Fscript%3E%0A"),S="//c.pubgears.com/tags/h",x="";function L(){var e=null,t={},r=!1;function o(e){var t,r=(t=e[p],(Array.isArray(t[0])?t[0]:t).join("x"));return[e[c][k],r].join("@")}function L(e){var t=e[l];return[e[b],t].join("@")}function w(e){var r=e[v],a=L(r[C]),o=t[a],d=o[z],u=null;o?(u=(function(e,t){var r=e[C],i=r[l].split("x"),a=Number(e[m]),o=isNaN(a)||a<=0?2:1,d=n.createBid(o,t);if(d[E]=h,1!==o)return d;return d[B]=(u=r,c=R,p={publisher_name:x,pub_zone:u[b],size:u[l]},s.replaceTokenInString(c,p,"%%")),d[A]=a/1e3,d[f]=i[0],d[g]=i[1],d;var u,c,p})(r,o),i.addBidResponse(d,u),s.logMessage('adding bid respoonse to "'+d+'" for bid request "'+o[F]+'"')):s.logError('Cannot get placement id for slot "'+a+'"')}function U(e){var r=L(e[v][C]);delete t[r]}this.callBids=function(n){var i=n[a.JSON_MAPPING.PL_BIDS],s=i.map(o);if(s.length<=0)return;x=i[0][c][j],i.forEach((function(e){var r=o(e);t[r]=e})),e=e||(v=D,d.getElementById(v))||(l=s,A=x,B=D,f=S,C=d.createElement(u),C.src=f,C.id=B,C.setAttribute(N+_,l.join(" ")),C.setAttribute(N+y,"true"),C.setAttribute(N+I,A),g=C,(m=(b=d.getElementsByTagName(u))[b.length-1]).parentNode.insertBefore(g,m)),r||((p=e).addEventListener(M,w,!0),p.addEventListener(P,U,!0));var p;var l,A,B,f,g,b,m,C;var v;r=!0}}o.registerBidAdapter(new L,h),e.exports=L}},[234]);
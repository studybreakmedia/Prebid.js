pbjsChunk([106],{126:function(e,n,o){e.exports=o(127)},127:function(e,n,o){"use strict";var i=o(3),r=o(2),t=o(0),d=o(7).ajax;function a(){var e="carambola",n="hb/inimage/getHbBIdProcessedResponse";function o(n){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",t=i.createBid(2,n);t.bidderCode=e,t.reason=o,r.addBidResponse(a(n),t)}function a(e){return e.placementCode}function s(){return window.Cbola=window.Cbola||{},window.Cbola.HB=window.Cbola.HB||{},window.Cbola.HB.pvid=window.Cbola.HB.pvid||(function(){function e(e){return e>9?e:"0"+e}var n=new Date;return e(n.getDate())+e(n.getMonth()+1)+e(n.getFullYear()%100)+e(n.getHours())+e(n.getMinutes())+e(n.getSeconds())+e(n.getMilliseconds()%100)+Math.floor(9e4*Math.random()+1e4)})(),window.Cbola.HB.pvid}function c(c,p){t.isArray(c)&&t._each(c,(function(l){var u=p||{};u.cbolaMode=l.params.cbolaMode||0,u.wid=l.params.wid||0,u.pixel=l.params.pixel||"",u.bidFloor=l.params.bidFloor||0,u.pageViewId=s(),u.hb_token=t.generateUUID(),u.sizes=t.parseSizesInput(l.sizes)+"",u.bidsCount=c.length;for(var m in l.params.customParams)l.params.customParams.hasOwnProperty(m)&&(u["c_"+m]=l.params.customParams[m]);var w,h=l.params.server||"hb.carambo.la";d("//"+h+"/"+n+(w=u,"?"+Object.keys(w).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(w[e])})).join("&")),(function(n){if(!n||n.cpm<=0)return t.logError("Empty bid response",e,l),void o(l,n,"Empty bid response");try{if((n=JSON.parse(n))&&n.cpm<=0)return t.logError("Bid response returned 0",e,l),void o(l,n,"Bid response returned 0")}catch(i){return t.logError("Invalid JSON in bid response",e,l),void o(l,n,"Invalid JSON in bid response")}var d,s,c;d=l,s=n,(c=i.createBid(1,d)).bidderCode=e,c.ad=s.ad,c.cpm=s.cpm,c.width=s.width,c.height=s.height,c.currencyCode=s.cur,c.token=s.token,c.pvid=s.pageViewId,r.addBidResponse(a(d),c)}),null,{method:"GET"})}))}return{callBids:function(e){var n,o=void 0,i=e.bids||[],r=window.parent!==window?document.referrer:window.location.href;r=r&&encodeURIComponent(r);try{o=window.self!==window.top}catch(e){o=!1}0!==i.length&&c(i,{pageUrl:r,did:i[0].params.did||0,pid:i[0].params.pid||"",res:(n=screen,n?n.width+"x"+n.height+"x"+n.colorDepth:"0"),ifr:o,viewPortDim:(function(e){var n=void 0,o=void 0,i=window,r=document,t=r.documentElement,d=void 0;if(e){try{i=window.top,r=window.top.document}catch(e){return}t=r.documentElement,d=r.body,n=i.innerWidth||t.clientWidth||d.clientWidth,o=i.innerHeight||t.clientHeight||d.clientHeight}else t=r.documentElement,n=i.innerWidth||t.clientWidth,o=i.innerHeight||t.clientHeight;return n+"x"+o})(o)})}}}o(1).registerBidAdapter(new a,"carambola"),e.exports=a}},[126]);
pbjsChunk([119],{58:function(e,n,t){e.exports=t(59)},59:function(e,n,t){"use strict";var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=t(4),o=t(0),d=t(3),i=t(2),s=t(5);function u(){var e=["http://us-east-engine.adbund.xyz/prebid/ad/get","http://us-west-engine.adbund.xyz/prebid/ad/get"][(new Date).getTimezoneOffset()<0?0:1];function n(n){var t,u={referrer:o.getTopWindowUrl(),domain:o.getTopWindowLocation().hostname,ua:window.navigator.userAgent},p=r({},n.params,u);p.sizes=JSON.stringify(p.sizes||n.sizes),p.callback="pbjs.adbundResponse",pbjs.adbundResponse=(t=n,function(e){var n;e&&e.cpm?((n=d.createBid(a.STATUS.GOOD)).bidderCode="adbund",r(n,e)):(n=d.createBid(a.STATUS.NO_BID)).bidderCode="adbund",i.addBidResponse(t.placementCode,n)}),s.loadScript(e+"?"+(function(e){var n,t=[];for(n in e)e.hasOwnProperty(n)&&t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")})(p))}return{callBids:function(e){(e.bids||[]).forEach((function(e){n(e)}))}}}t(1).registerBidAdapter(new u,"adbund"),e.exports=u}},[58]);
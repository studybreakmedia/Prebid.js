pbjsChunk([79],{236:function(e,t,r){e.exports=r(237)},237:function(e,t,r){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=r(0),o=r(3),d=r(2),i=r(1),c=r(4),l=function(){var e=void 0,t=!1,r=0,i=("https:"===window.location.protocol?(r=1,"https"):"http")+"://",l=void 0,p={1:"PMP",5:"PREF",6:"PMPG"},s={kadgender:"gender",age:"kadage",dctr:"dctr",wiid:"wiid",profId:"profId",verId:"verId",pmzoneid:{n:"pmZoneId",m:function(e){return n.isStr(e)?e.split(",").slice(0,50).join():void 0}}};function u(e,t){var r,o,d;for(r in t.kadpageurl||(t.kadpageurl=t.pageURL),s)s.hasOwnProperty(r)&&(o=e[r])&&("object"===(void 0===(d=s[r])?"undefined":a(d))?(o=d.m(o,t),r=d.n):r=s[r],n.isStr(o)?t[r]=o:n.logWarn("PubMatic: Ignoring param key: "+s[r]+", expects string-value, found "+(void 0===o?"undefined":a(o))));return t}function m(e,t){var r,a,o=(r=e,a=t,i+"gads.pubmatic.com/AdServer/AdCallAggregator?"+n.parseQueryStringParameters(r)+"adslots="+encodeURIComponent("["+a.join(",")+"]"));l=n.createInvisibleIframe();var d=document.getElementsByTagName("head")[0];d.insertBefore(l,d.firstChild);var c=n.getIframeDocument(l),p=n.createContentToExecuteExtScriptInFriendlyFrame(o);p=p.replace("\x3c!--POST_SCRIPT_TAG_MACRO--\x3e","<script>window.parent.pbjs.handlePubmaticCallback(window.bidDetailsMap, window.progKeyValueMap);<\/script>"),c.write(p),c.close()}return pbjs.handlePubmaticCallback=function(t,r){var a,i,c,l,s=t,u=r;if(s&&u)for(a=0;a<e.length;a++){var m;i=s[(l=e[a].params).adSlot]||{},u[l.adSlot]&&-1===u[l.adSlot].indexOf("=")&&(u[l.adSlot]=u[l.adSlot].replace(/([a-z]+);(.[^;]*)/gi,"$1=$2")),"1"===(c=(u[l.adSlot]||"").split(";").reduce((function(e,t){var r=t.split("=");return e[r[0]]=r[1],e}),{})).bidstatus?((m=o.createBid(1)).bidderCode="pubmatic",m.adSlot=l.adSlot,m.cpm=Number(c.bid),m.ad=unescape(i.creative_tag),m.ad+=n.createTrackPixelIframeHtml(decodeURIComponent(i.tracking_url)),m.width=i.width,m.height=i.height,m.dealId=c.wdeal,m.dealChannel=p[i.deal_channel]||null,d.addBidResponse(e[a].placementCode,m)):((m=o.createBid(2)).bidderCode="pubmatic",d.addBidResponse(e[a].placementCode,m))}},{callBids:function(a){var o,d=(function(){var e={},t=new Date;e.SAVersion="1100",e.wp="PreBid",e.js=1,e.wv=c.REPO_AND_VERSION,r&&(e.sec=1),e.screenResolution=screen.width+"x"+screen.height,e.ranreq=Math.random(),e.inIframe=window!=top?"1":"0",!1===window.navigator.cookieEnabled&&(e.fpcd="1");try{e.pageURL=window.top.location.href,e.refurl=window.top.document.referrer}catch(t){e.pageURL=window.location.href,e.refurl=window.document.referrer}return e.kltstamp=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),e.timezone=t.getTimezoneOffset()/60*-1,e})(),l=[];d.pubId=0,e=a.bids||[];for(var p=0;p<e.length;p++){var s=e[p];d.pubId=d.pubId||s.params.publisherId,d=u(s.params,d),s.params.adSlot=(o=s.params.adSlot,n.isStr(o)?o.replace(/^\s+/g,"").replace(/\s+$/g,""):""),s.params.adSlot.length&&l.push(s.params.adSlot)}d.pubId&&l.length>0&&m(d,l),(function(e){if(!t){var r=n.createInvisibleIframe();r.src=i+"ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p="+e,n.insertElement(r,document),t=!0}})(d.pubId)}}};i.registerBidAdapter(new l,"pubmatic"),e.exports=l}},[236]);
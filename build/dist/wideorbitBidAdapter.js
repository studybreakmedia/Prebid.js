pbjsChunk([59],{329:function(e,n,t){e.exports=t(330)},330:function(e,n,t){"use strict";function o(){function e(e){if(e){var n=["site","page","width","height","rank","subPublisher","ecpm","atf","pId","pbId","referrer"],t=void 0;a._each(n,(function(n){for(t in e)if(e.hasOwnProperty(t)&&t.toLowerCase()===n.toLowerCase()){e[n]=e[t];break}}))}}function n(e,n,t){var o=new RegExp("{"+n+"}","g");return!0===t&&(t=1),!1===t&&(t=0),e.replace(o,t)}function t(e,t){return a._each(t,(function(t){e=n(e,t[0],t[1])})),e}function o(e,n){return t(w,[["o",e],["gid",encodeURIComponent(n.tagId)],["rpos",n.atf?1001:0],["ecpm",n.ecpm||""]])}function d(e,n){return e||n}function s(e,n){return t(v,[["o",e],["pId",n.pId],["rank",d(n.rank,e)]])}function p(e,n){return t(I,[["o",e],["wsName",encodeURIComponent(decodeURIComponent(n.site))],["wName",encodeURIComponent(decodeURIComponent(n.page))],["width",n.width],["height",n.height],["subp",n.subPublisher?encodeURIComponent(decodeURIComponent(n.subPublisher)):""],["rank",d(n.rank,e)]])}function u(e,n,o,r){return t(C+g,[["pbId",e],["pc",n],["cts",(new Date).getTime()],["cb",Math.floor(1e8*Math.random())],["referrer",encodeURIComponent(r||"")]])+o}function m(e,n){var t=o(e,n);return n.pId?s(e,n)+t:p(e,n)+t}function l(e){var n=document.getElementsByTagName("head")[0],t=void 0;a._each(e,(function(e){switch(t=void 0,e.Type){case"redirect":t=document.createElement("img");break;case"iframe":t=a.createInvisibleIframe();break;case"js":(t=document.createElement("script")).type="text/javascript",t.async=!0}t&&(t.src=decodeURIComponent(e.Url),n.insertBefore(t,n.firstChild))}))}function h(e,n){var t;for(t=0;t<n.length;t++)if(n[t].ExtPlacementId===e)return n[t]}function f(e){return"http:/"===e.slice(0,6)||"https:/"===e.slice(0,7)||"//"===e.slice(0,2)}function b(e){var n=e.Source,t=void 0;return a._each(e.TrackingCodes,(function(e){t=f(e)?'<img src="'+e+'" width="0" height="0" style="position:absolute"></img>':e,n=t+n})),n}var g="JSAdservingMP.ashx?pc={pc}&pbId={pbId}&clk=&exm=&jsv=1.0&tsv=1.0&cts={cts}&arp=0&fl=0&vitp=&vit=&jscb=window.pbjs.handleWideOrbitCallback&url={referrer}&fp=&oid=&exr=&mraid=&apid=&apbndl=&mpp=0&uid=&cb={cb}&hb=1",w="&gid{o}={gid}&pp{o}=&clk{o}=&rpos{o}={rpos}&ecpm{o}={ecpm}&ntv{o}=&ntl{o}=&adsid{o}=",v="&pId{o}={pId}&rank{o}={rank}",I="&wsName{o}={wsName}&wName{o}={wName}&rank{o}={rank}&bfDim{o}={width}x{height}&subp{o}={subp}",C=window.location.protocol+"//p{pbId}.atemda.com/",k=void 0;return window.pbjs=window.pbjs||{},window.pbjs.handleWideOrbitCallback=function(e){var n,t;a.logMessage("WO response. Placements: "+e.Placements.length),l(e.UserMatchings),a._each(k,(function(o){(n=h(o.placementCode,e.Placements))&&"DirectHTML"===n.Type?((t=r.createBid(1)).cpm=n.Bid,t.ad=b(n),t.width=n.Width,t.height=n.Height):t=r.createBid(2),t.bidderCode="wideorbit",i.addBidResponse(o.placementCode,t)}))},{callBids:function(n){var t=void 0,o="",r=void 0,i=void 0;for(k=n.bids||[],r=0;r<k.length;r++){var d=k[r].params;d.tagId=k[r].placementCode,e(d),t=d.pbId,i=i||d.referrer,o+=m(r,d)}o=u(t,k.length,o,i),a.logMessage("Calling WO: "+o),c.loadScript(o)}}}var r=t(3),i=t(2),a=t(0),c=t(5);t(1).registerBidAdapter(new o,"wideorbit"),e.exports=o}},[329]);
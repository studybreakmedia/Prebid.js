pbjsChunk([59],{329:function(e,t,o){e.exports=o(330)},330:function(e,t,o){"use strict";var n=o(3),i=o(2),r=o(0),a=o(5);function d(){var e="JSAdservingMP.ashx?pc={pc}&pbId={pbId}&clk=&exm=&jsv=1.0&tsv=1.0&cts={cts}&arp=0&fl=0&vitp=&vit=&jscb=window.pbjs.handleWideOrbitCallback&url={referrer}&fp=&oid=&exr=&mraid=&apid=&apbndl=&mpp=0&uid=&cb={cb}&hb=1",t="&gid{o}={gid}&pp{o}=&clk{o}=&rpos{o}={rpos}&ecpm{o}={ecpm}&ntv{o}=&ntl{o}=&adsid{o}=",o="&pId{o}={pId}&rank{o}={rank}",d="&wsName{o}={wsName}&wName{o}={wName}&rank{o}={rank}&bfDim{o}={width}x{height}&subp{o}={subp}",c=window.location.protocol+"//p{pbId}.atemda.com/",s=void 0;function p(e){if(e){var t=void 0;r._each(["site","page","width","height","rank","subPublisher","ecpm","atf","pId","pbId","referrer"],(function(o){for(t in e)if(e.hasOwnProperty(t)&&t.toLowerCase()===o.toLowerCase()){e[o]=e[t];break}}))}}function m(e,t){return r._each(t,(function(t){var o,n,i,r;o=e,n=t[0],i=t[1],r=new RegExp("{"+n+"}","g"),!0===i&&(i=1),!1===i&&(i=0),e=o.replace(r,i)})),e}function l(e,t){return e||t}function h(e,n){var i,r,a,c,s,p=(i=n,m(t,[["o",e],["gid",encodeURIComponent(i.tagId)],["rpos",i.atf?1001:0],["ecpm",i.ecpm||""]]));return n.pId?m(o,[["o",r=e],["pId",(a=n).pId],["rank",l(a.rank,r)]])+p:(s=n,m(d,[["o",c=e],["wsName",encodeURIComponent(decodeURIComponent(s.site))],["wName",encodeURIComponent(decodeURIComponent(s.page))],["width",s.width],["height",s.height],["subp",s.subPublisher?encodeURIComponent(decodeURIComponent(s.subPublisher)):""],["rank",l(s.rank,c)]])+p)}return window.pbjs=window.pbjs||{},window.pbjs.handleWideOrbitCallback=function(e){var t,o,a,d,c;r.logMessage("WO response. Placements: "+e.Placements.length),a=e.UserMatchings,d=document.getElementsByTagName("head")[0],c=void 0,r._each(a,(function(e){switch(c=void 0,e.Type){case"redirect":c=document.createElement("img");break;case"iframe":c=r.createInvisibleIframe();break;case"js":(c=document.createElement("script")).type="text/javascript",c.async=!0}c&&(c.src=decodeURIComponent(e.Url),d.insertBefore(c,d.firstChild))})),r._each(s,(function(a){var d,c,s;(t=(function(e,t){var o;for(o=0;o<t.length;o++)if(t[o].ExtPlacementId===e)return t[o]})(a.placementCode,e.Placements))&&"DirectHTML"===t.Type?((o=n.createBid(1)).cpm=t.Bid,o.ad=(c=(d=t).Source,s=void 0,r._each(d.TrackingCodes,(function(e){var t;s="http:/"===(t=e).slice(0,6)||"https:/"===t.slice(0,7)||"//"===t.slice(0,2)?'<img src="'+e+'" width="0" height="0" style="position:absolute"></img>':e,c=s+c})),c),o.width=t.Width,o.height=t.Height):o=n.createBid(2),o.bidderCode="wideorbit",i.addBidResponse(a.placementCode,o)}))},{callBids:function(t){var o,n,i,d,l=void 0,b="",u=void 0,f=void 0;for(s=t.bids||[],u=0;u<s.length;u++){var g=s[u].params;g.tagId=s[u].placementCode,p(g),l=g.pbId,f=f||g.referrer,b+=h(u,g)}o=l,n=s.length,i=b,d=f,b=m(c+e,[["pbId",o],["pc",n],["cts",(new Date).getTime()],["cb",Math.floor(1e8*Math.random())],["referrer",encodeURIComponent(d||"")]])+i,r.logMessage("Calling WO: "+b),a.loadScript(b)}}}o(1).registerBidAdapter(new d,"wideorbit"),e.exports=d}},[329]);
pbjsChunk([46],{89:function(e,t,a){a(90),e.exports=a(91)},90:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0;var r=d(a(0)),i=d(a(12)),n=a(6),s=a(13);function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}var o=[s.VIDEO,s.NATIVE],l=t.spec={code:"adxcg",supportedMediaTypes:o,isBidRequestValid:function(e){return!!e.params.adzoneid},buildRequests:function(e,t){r.logMessage("buildRequests: "+JSON.stringify(e));var a=[],n=[],s=[];e.forEach((function(e){a.push(r.getBidIdParameter("adzoneid",e.params)),n.push(e.bidId),s.push(r.parseSizesInput(e.sizes).join("|"))}));var d=r.getTopWindowLocation(),o="https:"===d.protocol,l=i.parse(d.href);return l.search=null,l.hash=null,{method:"GET",url:i.format({protocol:o?"https":"http",hostname:o?"hbps.adxcg.net":"hbp.adxcg.net",pathname:"/get/adi",search:{renderformat:"javascript",ver:"r20171102PB10",adzoneid:a.join(","),format:s.join(","),prebidBidIds:n.join(","),url:encodeURIComponent(i.format(l)),secure:o?"1":"0",source:"pbjs10",pbjs:"0.34.1"}})}},interpretResponse:function(e,t){var a=[];return(e=e.body)?e.forEach((function(e){var t={};if(t.requestId=e.bidId,t.cpm=e.cpm,t.creativeId=parseInt(e.creativeId),t.currency=e.currency?e.currency:"USD",t.netRevenue=!e.netRevenue||e.netRevenue,t.ttl=e.ttl?e.ttl:300,null!=e.deal_id&&e.deal_id.trim().length>0&&(t.dealId=e.deal_id),e.ad)t.ad=e.ad;else if(e.vastUrl)t.vastUrl=e.vastUrl,t.mediaType="video";else if(e.nativeResponse){t.mediaType="native";var i=e.nativeResponse;t.native={clickUrl:encodeURIComponent(i.link.url),impressionTrackers:i.imptrackers},i.assets.forEach((function(e){e.title&&e.title.text&&(t.native.title=e.title.text),e.img&&e.img.url&&(t.native.image=e.img.url),e.data&&"DESC"===e.data.label&&e.data.value&&(t.native.body=e.data.value),e.data&&"SPONSORED"===e.data.label&&e.data.value&&(t.native.sponsoredBy=e.data.value)}))}t.width=e.width,t.height=e.height,r.logMessage("submitting bid["+e.bidId+"]: "+JSON.stringify(t)),a.push(t)})):r.logMessage("empty bid response"),a},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"//cdn.adxcg.net/pb-sync.html"}]}};(0,n.registerBidder)(l)},91:function(e,t){}},[89]);
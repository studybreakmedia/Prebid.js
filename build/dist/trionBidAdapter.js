pbjsChunk([5],{304:function(e,t,r){r(305),e.exports=r(306)},305:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.spec=void 0,t.getStorageData=u,t.setStorageData=p,t.acceptPostMessage=c;var n=(function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}})(r(0)),i=r(6);var a="https://in-appadvertising.com/api/userSync.html",d="_trion_",s=t.spec={code:"trion",isBidRequestValid:function(e){return!!(e&&e.params&&e.params.pubId&&e.params.sectionId)},buildRequests:function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r],i=o(n);t.push({method:"GET",url:"https://in-appadvertising.com/api/bidRequest",bidRequest:n,data:i})}return t},interpretResponse:function(e,t){var r={},n=[],i=t.bidRequest,a=e?e.body:{};if(a&&a.bidId&&i){var d=a.result;if(d&&d.cpm&&d.placeBid&&d.ad){var s=parseInt(d.cpm,10)/100;r.requestId=i.bidId,r.cpm=s,r.ad=d.ad,r.width=d.width,r.height=d.height,r.ttl=d.ttl,r.creativeId=d.creativeId,r.currency=d.currency,r.netRevenue=d.netRevenue,n.push(r)}}return n},getUserSyncs:function(e){if(e.iframeEnabled)return (function(){try{window.addEventListener&&window.addEventListener("message",c)}catch(e){}})(),[{type:"iframe",url:(t=(u(d+"lps")||":").split(":")||[],r=t[0]||-1,i=t[1]||-1,s=n.getTopWindowUrl(),a+"?p="+r+"&s="+i+"&u="+s)}];var t,r,i,s}};function o(e){var t=n.getBidIdParameter("pubId",e.params),r=n.getBidIdParameter("sectionId",e.params),i=n.getBidIdParameter("re",e.params),a=n.getTopWindowUrl(),s=n.parseSizesInput(e.sizes).join(","),o=window.TR_INT_T&&-1!=window.TR_INT_T?window.TR_INT_T:null;o||(o=u(d+"int_t")),o&&p(d+"int_t",o),p(d+"lps",t+":"+r);var c="";return c=n.tryAppendQueryString(c,"bidId",e.bidId),c=n.tryAppendQueryString(c,"pubId",t),c=n.tryAppendQueryString(c,"sectionId",r),c=n.tryAppendQueryString(c,"re",i),a&&(c+="url="+a+"&"),s&&(c+="sizes="+s+"&"),o&&(c=n.tryAppendQueryString(c,"int_t",encodeURIComponent(o))),c.lastIndexOf("&")===c.length-1&&(c=c.substring(0,c.length-1)),c}function u(e){var t=null;try{window.localStorage&&(t=window.localStorage.getItem(e))}catch(e){}return t}function p(e,t){try{window.localStorage&&window.localStorage.setItem(e,t)}catch(e){}}function c(e){var t=e.data||"";if(0===t.indexOf(d+"userId")){var r=t.split(d+"userId=")[1];r&&p(d+"int_t",r)}}(0,i.registerBidder)(s)},306:function(e,t){}},[304]);
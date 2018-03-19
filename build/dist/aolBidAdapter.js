pbjsChunk([45],{96:function(e,r,t){t(97),e.exports=t(98)},97:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var i,a=m(["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=","","",";misc=",""],["//","/pubapi/3.0/","/","/","/","/ADTECH;v=2;cmd=bid;cors=yes;alias=","","",";misc=",""]),n=m(["//","/bidRequest?"],["//","/bidRequest?"]),o=m(["dcn=","&pos=","&cmd=bid",""],["dcn=","&pos=","&cmd=bid",""]),s=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),d=t(6),c=t(8),p=t(4),u=(i=p)&&i.__esModule?i:{default:i},l=t(12);function m(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var b={AOL:"aol",ONEMOBILE:"onemobile",ONEDISPLAY:"onedisplay"},f={DISPLAY:{GET:"display-get"},MOBILE:{GET:"mobile-get",POST:"mobile-post"}},v={IFRAME:{TAG:"iframe",TYPE:"iframe"},IMAGE:{TAG:"img",TYPE:"image"}},E=S(a,"host","network","placement","pageid","sizeid","alias","bidfloor","keyValues","misc"),g=S(n,"host"),I=S(o,"dcn","pos","ext"),h={us:"adserver-us.adtech.advertising.com",eu:"adserver-eu.adtech.advertising.com",as:"adserver-as.adtech.advertising.com"},O="hb.nexage.com",A=300;pbjs.aolGlobals={pixelsDropped:!1};var x,y=(x=!0,function(){var e=pbjs.bidderSettings;x&&e&&e.aol&&"function"==typeof e.aol.bidCpmAdjustment&&(s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable."),x=!1)});function S(e){for(var r=arguments.length,t=Array(r>1?r-1:0),i=1;i<r;i++)t[i-1]=arguments[i];return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];var n=i[i.length-1]||{},o=[e[0]];return t.forEach((function(r,t){var a=Number.isInteger(r)?i[r]:n[r];o.push(a,e[t+1])})),o.join("")}}function T(e){var r,t,i,a=e.params,n=a.server,o=a.region||"us",d=void 0;return h.hasOwnProperty(o)||(s.logWarn("Unknown region '"+o+"' for AOL bidder."),o="us"),d=n||h[o],a.region=o,E({host:d,network:a.network,placement:parseInt(a.placement),pageid:a.pageId||0,sizeid:a.sizeId||0,alias:a.alias||s.getUniqueIdentifierStr(),bidfloor:(i=a.bidFloor,void 0!==i?";bidfloor="+i.toString():""),keyValues:(r=a.keyValues,t="",s._each(r,(function(e,r){t+=";kv"+r+"="+encodeURIComponent(e)})),t),misc:(new Date).getTime()})}function L(e){return g({host:e.params.host||O})}function P(e){var r=e.params,t=r.dcn,i=r.pos,a=L(e);if(t&&i){var n="";"https:"===document.location.protocol&&(e.params.ext=e.params.ext||{},e.params.ext.secure=1),s._each(e.params.ext,(function(e,r){n+="&"+r+"="+encodeURIComponent(e)})),a+=I({dcn:t,pos:i,ext:n})}return a}function G(e){return e===b.AOL||e===b.ONEMOBILE}function j(e){if(G(e.bidder)&&e.params.id&&e.params.imp&&e.params.imp[0]){var r=e.params.imp[0];return r.id&&r.tagid&&(r.banner&&r.banner.w&&r.banner.h||r.video&&r.video.mimes&&r.video.minduration&&r.video.maxduration)}}function D(e){return G(e.bidder)&&e.params.dcn&&e.params.pos}function M(e){return((r=e.bidder)===b.AOL||r===b.ONEDISPLAY)&&e.params.placement&&e.params.network;var r}var w=r.spec={code:b.AOL,aliases:[b.ONEMOBILE,b.ONEDISPLAY],isBidRequestValid:function(e){return M(e)||(D(r=e)||j(r));var r},buildRequests:function(e){return e.map((function(e){var r,t=D(r=e)?f.MOBILE.GET:j(r)?f.MOBILE.POST:M(r)?f.DISPLAY.GET:void 0;if(t)return (function(e,r){var t=void 0;switch(e){case f.DISPLAY.GET:t={url:T(r),method:"GET"};break;case f.MOBILE.GET:t={url:P(r),method:"GET"};break;case f.MOBILE.POST:t={url:L(r),method:"POST",data:r.params,options:{contentType:"application/json",customHeaders:{"x-openrtb-version":"2.2"}}}}return t.bidderCode=r.bidder,t.bidId=r.bidId,t.userSyncOn=r.params.userSyncOn,t})(t,e)}))},interpretResponse:function(e,r){var t=e.body;if(y(),t){var i=(function(e,r){var t=void 0;try{t=e.seatbid[0].bid[0]}catch(e){return}var i=void 0;if(t.ext&&t.ext.encp)i=t.ext.encp;else if(null===(i=t.price)||isNaN(i))return void s.logError("Invalid price in bid response",b.AOL,bid);var a=t.adm;return e.ext&&e.ext.pixels&&c.config.getConfig("aol.userSyncOn")!==u.default.EVENTS.BID_RESPONSE&&(a+="<script>if(!parent.pbjs.aolGlobals.pixelsDropped){parent.pbjs.aolGlobals.pixelsDropped=true;"+e.ext.pixels.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g,"")+"}<\/script>"),{bidderCode:r.bidderCode,requestId:r.bidId,ad:a,cpm:i,width:t.w,height:t.h,creativeId:t.crid,pubapiId:e.id,currency:e.cur,dealId:t.dealid,netRevenue:!0,ttl:A}})(t,r);if(i)return i}else s.logError("Empty bid response",r.bidderCode,t);return{requestId:r.bidId,cpm:0,width:1,height:1,creativeId:null,dealId:null,currency:"USD",netRevenue:!0,mediaType:l.BANNER,ttl:6e4,ad:null}},getUserSyncs:function(e,r){var t=r[0];return c.config.getConfig("aol.userSyncOn")===u.default.EVENTS.BID_RESPONSE&&!pbjs.aolGlobals.pixelsDropped&&t.ext&&t.ext.pixels?(pbjs.aolGlobals.pixelsDropped=!0,(function(e){var r=/\w*(?=\s)/,t=/src=("|')(.*?)\1/,i=[];if(e){var a=e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);a&&a.forEach((function(e){var a=e.match(r)[0],n=e.match(t)[2];a&&a&&i.push({type:a===v.IMAGE.TAG?v.IMAGE.TYPE:v.IFRAME.TYPE,url:n})}))}return i})(t.ext.pixels)):[]}};(0,d.registerBidder)(w)},98:function(e,r){}},[96]);
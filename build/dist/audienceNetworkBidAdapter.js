pbjsChunk([41],{111:function(a,e,t){t(112),a.exports=t(113)},112:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spec=void 0;var n=function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return (function(a,e){var t=[],n=!0,r=!1,i=void 0;try{for(var o,d=a[Symbol.iterator]();!(n=(o=d.next()).done)&&(t.push(o.value),!e||t.length!==e);n=!0);}catch(a){r=!0,i=a}finally{try{!n&&d.return&&d.return()}finally{if(r)throw i}}return t})(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i=t(6),o=t(8),d=t(13),c=t(0),s=function(a){return Array.isArray(a)&&2===a.length?a[0]+"x"+a[1]:a},u=function(a){return["300x250","320x50"].includes(a)},f=function(a){return"video"===a},m=function(){return encodeURIComponent((0,c.getTopWindowUrl)())},p=e.spec={code:"audienceNetwork",supportedMediaTypes:["video"],isBidRequestValid:function(a){return"object"===r(a.params)&&"string"==typeof a.params.placementId&&a.params.placementId.length>0&&Array.isArray(a.sizes)&&a.sizes.length>0&&(f(a.params.format)||a.sizes.map(s).some(u))},buildRequests:function(a){var e=[],t=[],r=[],i=[],o=[];a.forEach((function(a){return a.sizes.map(s).filter((function(e){return u(e)||f(a.params.format)})).slice(0,1).forEach((function(n){var d;e.push(a.params.placementId),t.push(a.params.format||n),r.push(n),i.push((d=a.params.format,f(d)?"":"5.5.web")),o.push(a.bidId)}))}));var c=Boolean(window&&window.location&&"string"==typeof window.location.search&&-1!==window.location.search.indexOf("anhb_testmode")).toString(),p=m(),l={placementids:e,adformats:t,testmode:c,pageurl:p,sdk:i},b=t.findIndex(f);if(-1!==b){var h=r[b].split("x").map(Number),v=n(h,2);l.playerwidth=v[0],l.playerheight=v[1]}var y=(0,d.formatQS)(l);return[{adformats:t,data:y,method:"GET",requestIds:o,sizes:r,url:"https://an.facebook.com/v2/placementbid.json"}]},interpretResponse:function(a,e){var t=a.body,r=e.adformats,i=e.requestIds,d=e.sizes,c=Number(o.config.getConfig().bidderTimeout);return t.errors&&t.errors.length?[]:Object.keys(t.bids).map((function(a){return t.bids[a]})).reduce((function(a,e){return a.concat(e)}),[]).map((function(a,e){var t,o,u=a.bid_id,p=a.placement_id,l=a.bid_price_cents,b=r[e],h=s(d[e]).split("x").map(Number),v=n(h,2),y=v[0],g=v[1],w="<html><head>"+("native"===(o=b)?'<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>':"")+"</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'"+(t=p)+"',format:'"+o+"',bidid:'"+u+"',onAdLoaded:function(e){console.log('Audience Network ["+t+"] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network ["+t+"] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n"+("native"===o?'<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>':"")+"</div></body></html>",A={requestId:i[e],cpm:l/100,width:y,height:g,ad:w,ttl:c,creativeId:p,netRevenue:!0,currency:"USD",hb_bidder:"fan",fb_bidid:u,fb_format:b,fb_placementid:p};if(f(b)){var _=m();A.mediaType="video",A.vastUrl="https://an.facebook.com/v1/instream/vast.xml?placementid="+p+"&pageurl="+_+"&playerwidth="+y+"&playerheight="+g+"&bidid="+u}return A}))}};(0,i.registerBidder)(p)},113:function(a,e){}},[111]);
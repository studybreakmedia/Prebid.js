pbjsChunk([91],{174:function(e,t,i){e.exports=i(175)},175:function(e,t,i){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=g(i(8)),o=g(i(3)),n=g(i(2)),d=c(i(0)),u=i(4),l=c(i(12)),p=g(i(5)),f=g(i(1));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}var m="INDEXEXCHANGE",v="indexExchange",y={INDEX_DEBUG_MODE:{queryParam:"pbjs_ix_debug",mode:{sandbox:{topFrameLimit:10,queryValue:"sandbox",siteID:"999990"}}}},I={siteID:!0,playerType:!0,protocols:!0,maxduration:!0},h={minduration:0,startdelay:"preroll",linearity:"linear",mimes:[],allowVPAID:!0,apiList:[]},_={HTML5:!0,FLASH:!0},D={VAST2:[2,5],VAST3:[3,6]},x={FLASH:[1,2],HTML5:[2]},b={linear:1,nonlinear:2},q={preroll:0,midroll:-1,postroll:-2},R={preroll:"pr",midroll:"m",postroll:"po"},w={FLASH:["video/mp4","video/x-flv"],HTML5:["video/mp4","video/webm"]},T={FLASH:["application/x-shockwave-flash"],HTML5:["application/javascript"]},E="http://as.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse",S="https://as-sec.casalemedia.com/cygnus?v=8&fn=pbjs.handleCygnusResponse";window.cygnus_index_parse_res=function(e){try{if(e){if("object"!==("undefined"==typeof _IndexRequestData?"undefined":r(_IndexRequestData))||"object"!==r(_IndexRequestData.impIDToSlotID)||void 0===_IndexRequestData.impIDToSlotID[e.id])return;var t,i=1;"object"===r(_IndexRequestData.reqOptions)&&"object"===r(_IndexRequestData.reqOptions[e.id])&&("function"==typeof _IndexRequestData.reqOptions[e.id].callback&&(t=_IndexRequestData.reqOptions[e.id].callback),"number"==typeof _IndexRequestData.reqOptions[e.id].targetMode&&(i=_IndexRequestData.reqOptions[e.id].targetMode)),_IndexRequestData.lastRequestID=e.id,_IndexRequestData.targetIDToBid={},_IndexRequestData.targetIDToResp={},_IndexRequestData.targetIDToCreative={};for(var a=[],s=void 0===e.seatbid?0:e.seatbid.length,o=0;o<s;o++)for(var n=0;n<e.seatbid[o].bid.length;n++){var d=e.seatbid[o].bid[n];if("object"===r(d.ext)&&"string"==typeof d.ext.pricelevel&&void 0!==_IndexRequestData.impIDToSlotID[e.id][d.impid]){var u,l,p,f=_IndexRequestData.impIDToSlotID[e.id][d.impid];"string"==typeof d.ext.dealid?(u=1===i?f+d.ext.pricelevel:f+"_"+d.ext.dealid,l=f+"_"+d.ext.dealid,p="IPM_"):(u=f+d.ext.pricelevel,l=f+d.ext.pricelevel,p="IOM_"),void 0===_IndexRequestData.targetIDToBid[u]?_IndexRequestData.targetIDToBid[u]=[d.adm]:_IndexRequestData.targetIDToBid[u].push(d.adm),void 0===_IndexRequestData.targetIDToCreative[l]?_IndexRequestData.targetIDToCreative[l]=[d.adm]:_IndexRequestData.targetIDToCreative[l].push(d.adm);var c={};c.impressionID=d.impid,void 0!==d.ext.dealid&&(c.dealID=d.ext.dealid),c.bid=d.price,c.slotID=f,c.priceLevel=d.ext.pricelevel,c.target=p+u,_IndexRequestData.targetIDToResp[u]=c,a.push(c)}}"function"==typeof t&&(0===a.length?t(e.id):t(e.id,a))}}catch(e){}"function"==typeof window.cygnus_index_ready_state&&window.cygnus_index_ready_state()},window.index_render=function(e,t){try{var i=_IndexRequestData.targetIDToCreative[t].pop();if(null!=i)e.write(i);else{var a="http:"===d.getTopWindowLocation().protocol?"http://as.casalemedia.com":"https://as-sec.casalemedia.com";a+="/headerstats?type=RT&s="+cygnus_index_args.siteID+"&u="+encodeURIComponent(location.href)+"&r="+_IndexRequestData.lastRequestID,(new Image).src=a+"&blank="+t}}catch(e){}},window.headertag_render=function(e,t,i){for(var a=i,r=t.split(","),s=0;s<r.length;s++){if(r[s].split("_")[0]==a)return void index_render(e,r[s])}},window.cygnus_index_args={};var C=[[728,90],[120,600],[300,250],[160,600],[336,280],[234,60],[300,600],[300,50],[320,50],[970,250],[300,1050],[970,90],[180,150]],A=function(e){for(var t=window,i="",a=0;a<y.INDEX_DEBUG_MODE.mode.sandbox.topFrameLimit&&t.parent!=t;a++){try{i=t.document.referrer}catch(e){}t=t.parent}var r=top===self?location.href:i,s=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(r);return null===s?"":decodeURIComponent(s[1].replace(/\+/g," "))},O=function(){window.cygnus_index_args.parseFn=cygnus_index_parse_res;var e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,t={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function i(e){var i=t[e];return"string"==typeof i?i:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}function a(t){return e.lastIndex=0,e.test(t)?t.replace(e,i):t}function r(e,t,i){if(this.initialized=!1,"number"!=typeof e||e%1!=0||e<0)throw"Invalid Site ID";"number"==typeof(i=Number(i))&&i%1==0&&i>=0&&(this.timeoutDelay=i),this.siteID=e,this.impressions=[],this._parseFnName=void 0,this.sitePage=void 0;try{this.sitePage=d.getTopWindowUrl()}catch(e){}if(void 0!==this.sitePage&&""!==this.sitePage||(top===self?this.sitePage=location.href:this.sitePage=document.referrer),top===self?this.topframe=1:this.topframe=0,void 0!==t){if("function"!=typeof t)throw"Invalid jsonp target function";this._parseFnName="cygnus_index_args.parseFn"}void 0===_IndexRequestData.requestCounter?_IndexRequestData.requestCounter=Math.floor(256*Math.random()):_IndexRequestData.requestCounter=(_IndexRequestData.requestCounter+1)%256,this.requestID=String((new Date).getTime()%2592e3*256+_IndexRequestData.requestCounter+256),this.initialized=!0}r.prototype.serialize=function(){var e='{"id":"'+this.requestID+'","site":{"page":"'+a(this.sitePage)+'"';"string"==typeof document.referrer&&""!==document.referrer&&(e+=',"ref":"'+a(document.referrer)+'"'),e+='},"imp":[';for(var t=0;t<this.impressions.length;t++){var i=this.impressions[t],r=[];e+='{"id":"'+i.id+'", "banner":{"w":'+i.w+',"h":'+i.h+',"topframe":'+String(this.topframe)+"}","number"==typeof i.bidfloor&&(e+=',"bidfloor":'+i.bidfloor,"string"==typeof i.bidfloorcur&&(e+=',"bidfloorcur":"'+a(i.bidfloorcur)+'"')),"string"!=typeof i.slotID||i.slotID.match(/^\s*$/)||r.push('"sid":"'+a(i.slotID)+'"'),"number"==typeof i.siteID&&r.push('"siteID":'+i.siteID),r.length>0&&(e+=',"ext": {'+r.join()+"}"),t+1===this.impressions.length?e+="}":e+="},"}return e+="]}"},r.prototype.setPageOverride=function(e){return"string"==typeof e&&!e.match(/^\s*$/)&&(this.sitePage=e,!0)},r.prototype.addImpression=function(e,t,i,a,r,s){var o={id:String(this.impressions.length+1)};if("number"!=typeof e||e<=1)return null;if("number"!=typeof t||t<=1)return null;if(("string"==typeof r||"number"==typeof r)&&String(r).length<=50&&(o.slotID=String(r)),o.w=e,o.h=t,void 0!==i&&"number"!=typeof i)return null;if("number"==typeof i){if(i<0)return null;if(o.bidfloor=i,void 0!==a&&"string"!=typeof a)return null;o.bidfloorcur=a}if(void 0!==s){if(!("number"==typeof s&&s%1==0&&s>=0))return null;o.siteID=s}return this.impressions.push(o),o.id},r.prototype.buildRequest=function(){if(0!==this.impressions.length&&!0===this.initialized){var e,t=encodeURIComponent(this.serialize());A(y.INDEX_DEBUG_MODE.queryParam).toUpperCase()==y.INDEX_DEBUG_MODE.mode.sandbox.queryValue.toUpperCase()?(this.siteID=y.INDEX_DEBUG_MODE.mode.sandbox.siteID,e="http:"===d.getTopWindowLocation().protocol?"http://sandbox.ht.indexexchange.com":"https://sandbox.ht.indexexchange.com",d.logMessage("IX DEBUG: Sandbox mode activated")):e="http:"===d.getTopWindowLocation().protocol?"http://as.casalemedia.com":"https://as-sec.casalemedia.com";var i=encodeURIComponent("0.34.1");return e+="/cygnus?v=7&fn=cygnus_index_parse_res&s="+this.siteID+"&r="+t+"&pid=pb"+i,"number"==typeof this.timeoutDelay&&this.timeoutDelay%1==0&&this.timeoutDelay>=0&&(e+="&t="+this.timeoutDelay),e}};try{if("undefined"==typeof cygnus_index_args||void 0===cygnus_index_args.siteID||void 0===cygnus_index_args.slots)return;var s,o,n=new r(cygnus_index_args.siteID,cygnus_index_args.parseFn,cygnus_index_args.timeout);cygnus_index_args.url&&"string"==typeof cygnus_index_args.url&&n.setPageOverride(cygnus_index_args.url),_IndexRequestData.impIDToSlotID[n.requestID]={},_IndexRequestData.reqOptions[n.requestID]={};for(var u=0;u<cygnus_index_args.slots.length;u++)s=cygnus_index_args.slots[u],(o=n.addImpression(s.width,s.height,s.bidfloor,s.bidfloorcur,s.id,s.siteID))&&(_IndexRequestData.impIDToSlotID[n.requestID][o]=String(s.id));return"number"==typeof cygnus_index_args.targetMode&&(_IndexRequestData.reqOptions[n.requestID].targetMode=cygnus_index_args.targetMode),"function"==typeof cygnus_index_args.callback&&(_IndexRequestData.reqOptions[n.requestID].callback=cygnus_index_args.callback),n.buildRequest()}catch(e){d.logError("Error calling index adapter",m,e)}},N=function(){var e=new s.default("indexExchange"),t={},i=["id","siteID"],f="",c={};function g(e){var t=o.default.createBid(2);return t.bidderCode=v,n.default.addBidResponse(e,t),t}function y(e,t){for(var i=0;i<t.length;i++)if(e.id===t[i].id)return t;return t.push(e),t}function A(e,t){var i=e.slots,a={};return d._each(i,(function(e){e.id===t&&(a=e)})),a}function N(t,i){var a=o.default.createBid(t,i);return a.code=e.getBidderCode(),a.bidderCode=e.getBidderCode(),a}function B(e){var t=+e;return!(isNaN(t)||!d.isNumber(t)||d.isArray(e))||(d.logError("Duration is invalid, must be a number. Got: "+e),!1)}return pbjs.handleCygnusResponse=function(e){if(!e||!e.seatbid||d.isEmpty(e.seatbid))return d.logInfo("Cygnus returned no bids"),void Object.keys(c).forEach((function(e){var t=c[e].prebid,i=N(u.STATUS.NO_BID,t);d.logInfo(JSON.stringify(i)),n.default.addBidResponse(t.placementCode,i)}));e.seatbid.forEach((function(e){e.bid.forEach((function(e){var t=!0;if(void 0===c[e.impid])return d.logInfo("Cygnus returned mismatched id"),void Object.keys(c).forEach((function(e){var t=c[e].prebid,i=N(u.STATUS.NO_BID,t);n.default.addBidResponse(t.placementCode,i)}));e.ext.vasturl||(d.logInfo("Cygnus returned no vast url"),t=!1),l.parse(e.ext.vasturl).host===window.location.host&&(d.logInfo("Cygnus returned no vast url"),t=!1);var i=void 0;if("string"==typeof e.ext.pricelevel){var a=e.ext.pricelevel;"_"===a.charAt(0)&&(a=a.slice(1)),i=a/100,d.isNumber(i)&&!isNaN(i)||(d.logInfo("Cygnus returned invalid price"),t=!1)}else t=!1;var r=c[e.impid].prebid,s=c[e.impid].cygnus;if(t){var o=N(u.STATUS.GOOD,r);o.cpm=i,o.width=s.video.w,o.height=s.video.h,o.vastUrl=e.ext.vasturl,o.mediaType="video",n.default.addBidResponse(r.placementCode,o)}else{var p=N(u.STATUS.NO_BID,r);n.default.addBidResponse(r.placementCode,p)}}))})),c={}},a(this,{callBids:function(e){if(void 0!==e&&!d.isEmpty(e)){var a=e.bids;void 0===window._IndexRequestData&&(window._IndexRequestData={},window._IndexRequestData.impIDToSlotID={},window._IndexRequestData.reqOptions={}),_IndexRequestData.targetAggregate={open:{},private:{}},cygnus_index_args.slots=[];var s=[];a.forEach((function(e){if("video"===e.mediaType){var a=(function(e){if(function(e){if("video"===e.mediaType&&d.hasValidBidRequest(e.params.video,Object.keys(I),m)&&(i=e.params.video.siteID,a=+i,!(isNaN(a)||!d.isNumber(a)||a<0||d.isArray(i))||(d.logError("Site ID is invalid, must be a number > 0. Got: "+i),0))&&(void 0!==(t=e.params.video.playerType)&&d.isStr(t)?(t=t.toUpperCase(),_[t]||(d.logError("Player type is invalid, must be one of: "+Object.keys(_)),0)):(d.logError("Player type is invalid, must be one of: "+Object.keys(_)),0))&&(function(e){if(!d.isArray(e)||d.isEmpty(e))return d.logError("Protocol array is not an array. Got: "+e),!1;for(var t=0;t<e.length;t++){var i=e[t];if(!D[i])return d.logError("Protocol array contains an invalid protocol, must be one of: "+D+". Got: "+i),!1}return!0})(e.params.video.protocols)&&B(e.params.video.maxduration)&&e.params.video.maxduration>0)return e;var t,i,a}(e)){e=(function(e){e.params.video.siteID=+e.params.video.siteID,e.params.video.maxduration=+e.params.video.maxduration,e.params.video.protocols=e.params.video.protocols.reduce((function(e,t){return e.concat(D[t])}),[]);var t=e.params.video.minduration;void 0!==t&&B(t)||(d.logInfo("Using default value for 'minduration', default: "+h.minduration),e.params.video.minduration=h.minduration);var i=e.params.video.startdelay;void 0!==i&&(function(e){if(void 0===q[e]){var t=+e;if(isNaN(t)||!d.isNumber(t)||t<-2||d.isArray(e))return d.logInfo("Start delay is invalid, must be a number >= -2. Got: "+e),!1}return!0})(i)||(d.logInfo("Using default value for 'startdelay', default: "+h.startdelay),e.params.video.startdelay=h.startdelay);var a=e.params.video.linearity;void 0!==a&&(function(e){return!!b[e]||(d.logInfo("Linearity is invalid, must be one of: "+Object.keys(b)+". Got: "+e),!1)})(a)||(d.logInfo("Using default value for 'linearity', default: "+h.linearity),e.params.video.linearity=h.linearity);var r=e.params.video.mimes,s=e.params.video.playerType.toUpperCase();void 0!==r&&(function(e){if(!d.isArray(e)||d.isEmpty(e))return d.logError("MIMEs array is not an array. Got: "+e),!1;for(var t=0;t<e.length;t++){var i=e[t];if(!d.isStr(i)||d.isEmptyStr(i)||!/^\w+\/[\w-]+$/.test(i))return d.logError("MIMEs array contains an invalid MIME type. Got: "+i),!1}return!0})(r)||(d.logInfo("Using default value for 'mimes', player type: '"+s+"', default: "+w[s]),e.params.video.mimes=w[s]);var o=e.params.video.apiList;return void 0===o||(function(e,t){if(!d.isArray(e)||d.isEmpty(e))return d.logInfo("API array is not an array. Got: "+e),!1;for(var i=0;i<e.length;i++){var a=+e[i];if(isNaN(a)||!x[t].includes(a))return d.logInfo("API array contains an invalid API version. Got: "+a),!1}return!0})(o,s)||(d.logInfo("Removing invalid api versions from api list."),d.isArray(o)?e.params.video.apiList=o.filter((function(e){return x[s].includes(e)})):e.params.video.apiList=[]),void 0===o&&e.params.video.allowVPAID&&d.isA(e.params.video.allowVPAID,"Boolean")&&(e.params.video.mimes=e.params.video.mimes.concat(T[s]),e.params.video.apiList=x[s]),d.isEmpty(e.params.video.apiList)&&(d.logInfo("API list is empty, VPAID ads will not be requested."),delete e.params.video.apiList),delete e.params.video.playerType,delete e.params.video.allowVPAID,e})(e),c[e.bidId]={},c[e.bidId].prebid=e;var t={};t.id=e.bidId,t.ext={},t.ext.siteID=e.params.video.siteID,delete e.params.video.siteID;var i=e.params.video.startdelay;if(0===e.params.video.startdelay?i="preroll":void 0===q[e.params.video.startdelay]&&(i="midroll"),t.ext.sid=[R[i],1,1,"s"].join("_"),t.video={},e.params.video){Object.keys(e.params.video).filter((function(e){return void 0!==I[e]||void 0!==h[e]})).forEach((function(i){"startdelay"===i&&void 0!==q[e.params.video[i]]&&(e.params.video[i]=q[e.params.video[i]]),"linearity"===i&&void 0!==b[e.params.video[i]]&&(e.params.video[i]=b[e.params.video[i]]),t.video[i]=e.params.video[i]}));var a=(function(e){var t=[],i={};if(d.isArray(e)&&2===e.length&&!d.isArray(e[0])){if(!d.isNumber(e[0])||!d.isNumber(e[1]))return t;i.width=e[0],i.height=e[1],t.push(i)}else if("object"===(void 0===e?"undefined":r(e)))for(var a=0;a<e.length;a++){var s=e[a];(i={}).width=parseInt(s[0],10),i.height=parseInt(s[1],10),t.push(i)}return t})(e.sizes).shift();if(a&&a.width&&a.height)return t.video.w=a.width,t.video.h=a.height,c[e.bidId].cygnus=t,t}}})(e);void 0!==a&&s.push(a)}else!(function(e){if(d.hasValidBidRequest(e.params,i,m)){var a=0;d.isArray(e.sizes[0])||(e.sizes=[e.sizes]);for(var r=0;r<e.sizes.length;r++){for(var s=!1,o=0;o<C.length;o++)if(e.sizes[r][0]==C[o][0]&&e.sizes[r][1]==C[o][1]){e.sizes[r][0]=Number(e.sizes[r][0]),e.sizes[r][1]=Number(e.sizes[r][1]),s=!0;break}if(s){var n=!1;if(e.params.size&&d.isArray(e.params.size)){if(e.sizes[r][0]!=e.params.size[0]||e.sizes[r][1]!=e.params.size[1]){g(e.placementCode);continue}n=!0}e.params.timeout&&void 0===cygnus_index_args.timeout&&(cygnus_index_args.timeout=e.params.timeout);var u=Number(e.params.siteID);if("number"!=typeof u||u%1!=0||u<=0)d.logMessage(m+" slot excluded from request due to invalid siteID"),g(e.placementCode);else if(u&&void 0===cygnus_index_args.siteID&&(cygnus_index_args.siteID=u),d.hasValidBidRequest(e.params,i,m)){f=e.placementCode;var l=e.params[i[0]];if("string"!=typeof l&&"number"!=typeof l){d.logError(m+" bid contains invalid slot ID from "+e.placementCode+". Discarding slot"),g(e.placementCode);continue}a++;var p={width:e.sizes[r][0],height:e.sizes[r][1]},c=n?String(l):l+"_"+a;if(t[c]=e,cygnus_index_args.slots=y({id:c,width:p.width,height:p.height,siteID:u||cygnus_index_args.siteID},cygnus_index_args.slots),e.params.tier2SiteID){var v=Number(e.params.tier2SiteID);if(void 0!==v&&!v)continue;cygnus_index_args.slots=y({id:"T1_"+c,width:p.width,height:p.height,siteID:v},cygnus_index_args.slots)}if(e.params.tier3SiteID){var I=Number(e.params.tier3SiteID);if(void 0!==I&&!I)continue;cygnus_index_args.slots=y({id:"T2_"+c,width:p.width,height:p.height,siteID:I},cygnus_index_args.slots)}}}else d.logMessage(m+" slot excluded from request due to no valid sizes"),g(e.placementCode)}}else g(e.placementCode)})(e)})),s.length>0&&(function(e,t){var i,a,r,s={id:e,imp:t,site:{page:d.getTopWindowUrl()}};if(!d.isEmpty(s.imp)){var o=(i=s.imp[0].ext.siteID,a=s,(r="https:"===window.location.protocol?l.parse(S):l.parse(E)).search.s=i,r.search.r=encodeURIComponent(JSON.stringify(a)),l.format(r));p.default.loadScript(o)}})(e.bidderRequestId,s),cygnus_index_args.slots.length>20&&d.logError("Too many unique sizes on slots, will use the first 20.",m),cygnus_index_args.slots.length>0&&p.default.loadScript(O());var u=!1;window.cygnus_index_ready_state=function(){if(!u){u=!0;try{var e=_IndexRequestData.targetIDToBid;for(var i in t){var a=t[i].placementCode,s=[];for(var l in e){var p=/^(T\d_)?(.+)_(\d+)$/.exec(l);if(p){var c=p[1]||"",y=p[2],I=p[3],h=A(cygnus_index_args,c+y);if(y===i){var _=o.default.createBid(1);_.cpm=I/100,_.ad=e[l][0],_.bidderCode=v,_.width=h.width,_.height=h.height,_.siteID=h.siteID,"object"===r(_IndexRequestData.targetIDToResp)&&"object"===r(_IndexRequestData.targetIDToResp[l])&&void 0!==_IndexRequestData.targetIDToResp[l].dealID?(void 0===_IndexRequestData.targetAggregate.private[a]&&(_IndexRequestData.targetAggregate.private[a]=[]),_.dealId=_IndexRequestData.targetIDToResp[l].dealID,_IndexRequestData.targetAggregate.private[a].push(y+"_"+_IndexRequestData.targetIDToResp[l].dealID)):(void 0===_IndexRequestData.targetAggregate.open[a]&&(_IndexRequestData.targetAggregate.open[a]=[]),_IndexRequestData.targetAggregate.open[a].push(y+"_"+I)),s.push(_)}}else d.logError("Unable to parse "+l+", skipping slot",m)}if(s.length>0)for(var D=0;D<s.length;D++)n.default.addBidResponse(a,s[D]);else g(a)}}catch(e){d.logError("Error calling index adapter",m,e),(x=o.default.createBid(2)).bidderCode=v,n.default.addBidResponse(f,x)}finally{_IndexRequestData.targetIDToBid={}}var x;t={}}}}}})};f.default.registerBidAdapter(new N,"indexExchange",{supportedMediaTypes:["video"]}),e.exports=N}},[174]);
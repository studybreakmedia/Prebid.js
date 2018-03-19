pbjsChunk([33],{171:function(e,r,t){t(172),e.exports=t(173)},172:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.spec=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),s=t(6),a=t(18);var d=r.spec={version:"4.0.0",code:"improvedigital",aliases:["id"],isBidRequestValid:function(e){return!!(e&&e.params&&(e.params.placementId||e.params.placementKey&&e.params.publisherId))},buildRequests:function(e){var r=e.map((function(e){return (function(e){var r=n.getBidIdParameter("adUnitCode",e)||null,t=n.getBidIdParameter("placementId",e.params)||null,i=null,s=null;null===t&&(i=n.getBidIdParameter("publisherId",e.params)||null,s=n.getBidIdParameter("placementKey",e.params)||null);var a=n.getBidIdParameter("keyValues",e.params)||null,d=n.getBidIdParameter("size",e.params)||null,u=n.getBidIdParameter("bidId",e),o=n.getBidIdParameter("transactionId",e),p={};t?p.placementId=t:(i&&(p.publisherId=i),s&&(p.placementKey=s));a&&(p.keyValues=a);d&&d.w&&d.h&&(p.size={},p.size.h=d.h,p.size.w=d.w);u&&(p.id=u);r&&(p.adUnitId=r);o&&(p.transactionId=o);return p})(e)})),t=new u("hb"),i={singleRequestMode:!1,httpRequestType:t.CONSTANTS.HTTP_REQUEST_TYPE.GET,returnObjType:t.CONSTANTS.RETURN_OBJ_TYPE.PREBID,libVersion:this.version},s=t.createRequest(r,i);return s.errors&&s.errors.length>0&&n.logError("ID WARNING 0x01"),s.requests},interpretResponse:function(e,r){var t=[];return n._each(e.body.bid,(function(e){if(e.price&&null!==e.price&&!e.hasOwnProperty("errorCode")&&"string"==typeof e.adm){var r={},s="";e.nurl&&e.nurl.length>0&&(s='<img src="'+e.nurl+'" width="0" height="0" style="display:none">'),r.ad=s+"<script>"+e.adm+"<\/script>",r.adId=e.id,r.cpm=parseFloat(e.price),r.creativeId=e.crid,r.currency=e.currency?e.currency.toUpperCase():"USD",n.isNumber(e.lid)?r.dealId=e.lid:"object"===i(e.lid)&&e.lid[1]&&(r.dealId=e.lid[1]),r.height=e.h,r.netRevenue=!!e.isNet&&e.isNet,r.requestId=e.id,r.ttl=300,r.width=e.w,t.push(r),n.isArray(e.sync)&&n._each(e.sync,(function(e){a.userSync.registerSync("image",d.code,e)}))}})),t}};function u(e){this.CONSTANTS={HTTP_REQUEST_TYPE:{GET:0,POST:1},HTTP_SECURITY:{STANDARD:0,SECURE:1},AD_SERVER_BASE_URL:"ad.360yield.com",END_POINT:e||"hb",AD_SERVER_URL_PARAM:"jsonp=",CLIENT_VERSION:"JS-4.2.0",MAX_URL_LENGTH:2083,ERROR_CODES:{BAD_HTTP_REQUEST_TYPE_PARAM:1,MISSING_PLACEMENT_PARAMS:2,LIB_VERSION_MISSING:3},RETURN_OBJ_TYPE:{DEFAULT:0,PREBID:1}},this.getErrorReturn=function(e){return{idMappings:{},requests:{},errorCode:e}},this.createRequest=function(e,r,t){if(r.httpRequestType!==this.CONSTANTS.HTTP_REQUEST_TYPE.GET)return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.BAD_HTTP_REQUEST_TYPE_PARAM);if(!r.libVersion)return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);r.returnObjType=r.returnObjType||this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT;var i=[],s=void 0,a=void 0;if(n.isArray(e))for(a=0;a<e.length;a++)s=this.createImpressionObject(e[a]),i.push(s);else s=this.createImpressionObject(e),i.push(s);var d=!0;r.returnObjType===this.CONSTANTS.RETURN_OBJ_TYPE.PREBID&&(d=!1);var u={requests:[]};d&&(u.idMappings=[]);var o=null,p=(1===r.secure?"https":"http")+"://"+this.CONSTANTS.AD_SERVER_BASE_URL+"/"+this.CONSTANTS.END_POINT+"?"+this.CONSTANTS.AD_SERVER_URL_PARAM,l={bid_request:this.createBasicBidRequestObject(r,t)};for(a=0;a<i.length;a++)if((s=i[a]).errorCode)(o=o||[]).push({errorCode:s.errorCode,adUnitId:s.adUnitId});else{d&&u.idMappings.push({adUnitId:s.adUnitId,id:s.impressionObject.id}),l.bid_request.imp=l.bid_request.imp||[],l.bid_request.imp.push(s.impressionObject);var c=!1;(p+encodeURIComponent(JSON.stringify(l))).length>this.CONSTANTS.MAX_URL_LENGTH&&(c=!0,l.bid_request.imp.length>1&&(l.bid_request.imp.pop(),d&&u.idMappings.pop(),a--)),!c&&r.singleRequestMode&&a!==i.length-1||(u.requests.push(this.formatRequest(r,l)),l={bid_request:this.createBasicBidRequestObject(r,t)})}return o&&(u.errors=o),u},this.formatRequest=function(e,r){switch(e.returnObjType){case this.CONSTANTS.RETURN_OBJ_TYPE.PREBID:return{method:"GET",url:"//"+this.CONSTANTS.AD_SERVER_BASE_URL+"/"+this.CONSTANTS.END_POINT,data:""+this.CONSTANTS.AD_SERVER_URL_PARAM+JSON.stringify(r)};default:return{url:(1===e.secure?"https":"http")+"://"+this.CONSTANTS.AD_SERVER_BASE_URL+"/"+this.CONSTANTS.END_POINT+"?"+this.CONSTANTS.AD_SERVER_URL_PARAM+encodeURIComponent(JSON.stringify(r))}}},this.createBasicBidRequestObject=function(e,r){var t={};if(e.requestId?t.id=e.requestId:t.id=n.getUniqueIdentifierStr(),e.domain&&(t.domain=e.domain),e.page&&(t.page=e.page),e.ref&&(t.ref=e.ref),e.callback&&(t.callback=e.callback),"secure"in e&&(t.secure=e.secure),e.libVersion&&(t.version=e.libVersion+"-"+this.CONSTANTS.CLIENT_VERSION),r)for(var i in r)t[i]=r[i];return t},this.createImpressionObject=function(e){var r={},t={};if(r.impressionObject=t,e.id?t.id=e.id:t.id=n.getUniqueIdentifierStr(),e.adUnitId&&(r.adUnitId=e.adUnitId),e.placementId&&(t.pid=e.placementId),e.publisherId&&(t.pubid=e.publisherId),e.placementKey&&(t.pkey=e.placementKey),e.transactionId&&(t.tid=e.transactionId),e.keyValues)for(var i in e.keyValues)for(var s=0;s<e.keyValues[i].length;s++)t.kvw=t.kvw||{},t.kvw[i]=t.kvw[i]||[],t.kvw[i].push(e.keyValues[i][s]);return e.size&&e.size.w&&e.size.h?(t.banner={},t.banner.w=e.size.w,t.banner.h=e.size.h):t.banner={},t.pid||t.pubid||t.pkey||t.banner&&t.banner.w&&t.banner.h||(r.impressionObject=null,r.errorCode=this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS),r}}(0,s.registerBidder)(d),r.ImproveDigitalAdServerJSClient=u},173:function(e,r){}},[171]);
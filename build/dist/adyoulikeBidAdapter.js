pbjsChunk([113],{92:function(e,r,t){e.exports=t(93)},93:function(e,r,t){"use strict";var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=u(t(8)),o=u(t(3)),i=u(t(2)),c=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}})(t(0)),d=t(12),f=t(7),s=t(4);function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){var e="0.2",r=new a.default("adyoulike");function t(e){var r=u(e.sizes);return!!(e.params.placement&&r.width&&r.height)}function u(e){var r={},t=c.parseSizesInput(e)[0];if("string"!=typeof t)return r;var n=t.toUpperCase().split("X"),a=parseInt(n[0],10);a&&(r.width=a);var o=parseInt(n[1],10);return o&&(r.height=o),r}return r.callBids=function(n){var a={},l=(n.bids||[]).filter(t);l.forEach((function(e){a[e.params.placement]=e}));var p=l.map((function(e){return e.params.placement}));if(!c.isEmpty(p)){var h=(function(r,t){var n={Version:e,Placements:t,TransactionIds:{}};try{performance&&performance.navigation&&(n.PageRefreshed=performance.navigation.type===performance.navigation.TYPE_RELOAD)}catch(e){n.PageRefreshed=!1}return t.forEach((function(e){n.TransactionIds[e]=r[e].transactionId})),JSON.stringify(n)})(a,p),v=(0,d.format)({protocol:"https:"===document.location.protocol?"https":"http",host:"hb-api.omnitagjs.com",pathname:"/hb-api/prebid",search:(function(){var e={},r=(function(){var e="";if(window.self!==window.top)try{e=window.top.document.referrer}catch(e){}else e=document.referrer;return e})();r&&(e.RefererUrl=encodeURIComponent(r));var t=(function(){var e=void 0;if(window.self!==window.top)try{e=window.top.document.head.querySelector('link[rel="canonical"][href]')}catch(e){}else e=document.head.querySelector('link[rel="canonical"][href]');return e?e.href:""})();return t&&(e.CanonicalUrl=encodeURIComponent(t)),e})()});(0,f.ajax)(v,(function(e){!(function(e,t){var n=[];try{n=JSON.parse(t)}catch(e){c.logError(e)}var a={};n.forEach((function(e){a[e.Placement]=e})),Object.keys(e).forEach((function(t){var n,c,d,f;n=e[t],c=a[t],d=(function(e,t,n){var a=void 0;if(n&&n.Banner){a=o.default.createBid(s.STATUS.GOOD,t);var i=u(t.sizes);a.width=i.width,a.height=i.height,a.cpm=n.Price,a.ad=n.Banner}else a=o.default.createBid(s.STATUS.NO_BID,t);return a.bidderCode=r.getBidderCode(),a})(0,n,c),f=n.placementCode,i.default.addBidResponse(f,d)}))})(a,e)}),h,{contentType:"text/json",withCredentials:!0})}},n(this,{callBids:r.callBids,setBidderCode:r.setBidderCode})};u(t(1)).default.registerBidAdapter(new l,"adyoulike"),e.exports=l}},[92]);
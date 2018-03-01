pbjsChunk([101],{139:function(r,e,n){r.exports=n(140)},140:function(r,e,n){"use strict";function o(r){return r&&r.__esModule?r:{default:r}}function c(r){var e=S;"object"===l(r.rates)&&(E.conversions=r.rates,I=!0),"string"==typeof r.adServerCurrency?(g.logInfo("enabling currency support",arguments),w=r.adServerCurrency,r.conversionRateFile&&(g.logInfo("currency using override conversionRateFile:",r.conversionRateFile),e=r.conversionRateFile),i(e)):(g.logInfo("disabling currency support"),t()),"object"===l(r.bidderCurrencyDefault)&&(U=r.bidderCurrencyDefault)}function i(r){R={},e.currencySupportEnabled=D=!0,g.logInfo("Installing addBidResponse decorator for currency module",arguments),b.default.addBidResponse.addHook(u,100),E.conversions||(0,v.ajax)(r,(function(r){try{e.currencyRates=E=JSON.parse(r),g.logInfo("currencyRates set to "+JSON.stringify(E)),I=!0,s()}catch(e){g.logError("failed to parse currencyRates response: "+r)}}))}function t(){g.logInfo("Uninstalling addBidResponse decorator for currency module",arguments),b.default.addBidResponse.removeHook(u),w="USD",R={},e.currencySupportEnabled=D=!1,I=!1,e.currencyRates=E={},U={}}function u(r,e,n){if(!e)return n.apply(this,arguments);var o=e.bidderCode||e.bidder;if(U[o]){var c=U[o];e.currency&&c!==e.currency?g.logWarn("Currency default '"+o+": "+c+"' ignored. adapter specified '"+e.currency+"'"):e.currency=c}if(e.currency||(g.logWarn('Currency not specified on bid.  Defaulted to "USD"'),e.currency="USD"),e.currency===w)return n.apply(this,arguments);m.push(a(n,this,arguments)),D&&!I||s()}function s(){for(;m.length>0;)m.shift()()}function a(r,e,n){return function(){var o=n[1];if(void 0!==o&&"currency"in o&&"cpm"in o){var c=o.currency;try{var i=f(c);o.originalCpm=o.cpm,o.originalCurrency=o.currency,1!==i&&(o.cpm=(parseFloat(o.cpm)*i).toFixed(4),o.currency=w)}catch(r){g.logWarn("Returning NO_BID, getCurrencyConversion threw error: ",r),n[1]=y.default.createBid(p.STATUS.NO_BID,{bidder:o.bidderCode||o.bidder,bidId:o.adId})}}return r.apply(e,n)}}function f(r){var e,n=null;if(r in R)n=R[r],g.logMessage("Using conversionCache value "+n+" for fromCurrency "+r);else if(!1===D){if("USD"!==r)throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");n=1}else if(r===w)n=1;else{var o=w;if(r in E.conversions){if(e=E.conversions[r],!(o in e))throw new Error("Specified adServerCurrency in config '"+o+"' not found in the currency rates file");n=e[o],g.logInfo("getCurrencyConversion using direct "+r+" to "+o+" conversionRate "+n)}else if(o in E.conversions){if(e=E.conversions[o],!(r in e))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");n=d(1/e[r],h),g.logInfo("getCurrencyConversion using reciprocal "+r+" to "+o+" conversionRate "+n)}else{var c=Object.keys(E.conversions)[0];if(!(r in E.conversions[c]))throw new Error("Specified fromCurrency '"+r+"' not found in the currency rates file");var i=1/E.conversions[c][r];if(!(o in E.conversions[c]))throw new Error("Specified adServerCurrency in config '"+o+"' not found in the currency rates file");n=d(i*E.conversions[c][o],h),g.logInfo("getCurrencyConversion using intermediate "+r+" thru "+c+" to "+o+" conversionRate "+n)}}return r in R||(g.logMessage("Adding conversionCache value "+n+" for fromCurrency "+r),R[r]=n),n}function d(r,e){for(var n=1,o=0;o<e;o++)n+="0";return Math.round(r*n)/n}Object.defineProperty(e,"__esModule",{value:!0}),e.currencyRates=e.currencySupportEnabled=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};e.setConfig=c,e.addBidResponseHook=u;var y=o(n(3)),p=n(4),v=n(7),g=(function(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e.default=r,e})(n(0)),b=o(n(2)),C=n(8),S="http://currency.prebid.org/latest.json",h=4,m=[],R={},I=!1,w="USD",D=e.currencySupportEnabled=!1,E=e.currencyRates={},U={};C.config.getConfig("currency",(function(r){return c(r.currency)}))}},[139]);
pbjsChunk([62],{314:function(e,r,n){e.exports=n(315)},315:function(e,r,n){"use strict";var t=i(n(3)),o=i(n(2)),a=(function(e){{if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r.default=e,r}})(n(0)),d=n(7),c=n(4);function i(e){return e&&e.__esModule?e:{default:e}}var l="ADGENT_PREBID-2017051801",u="ucfunnel";function s(){return{callBids:function(e){(e.bids||[]).forEach((function(e){try{(0,d.ajax)(function(e){e.startTime=(new Date).getTime();var r=a.getTopWindowLocation().host,n=a.getTopWindowLocation().pathname,t=document.referrer,o=navigator.language,d="yes"==navigator.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack?1:0,c=["ifr",0,"bl",o,"je",1,"dnt",d,"host",r,"u",n,"ru",t,"adid",e.params.adid,"ver",l];return c.reduce((function(e,r,n){return n%2==0&&void 0!==c[n+1]?e+r+"="+encodeURIComponent(c[n+1])+"&":e}),"//agent.aralego.com/header?").slice(0,-1)}(e),(function(r){try{a.logMessage("XHR callback function called for placement code: "+e.placementCode),d=r,i=e,l=JSON.parse(d),(s=t.default.createBid(c.STATUS.GOOD,i)).creative_id=l.ad_id,s.bidderCode=u,s.cpm=l.cpm||0,s.ad=l.adm,s.width=l.width,s.height=l.height,s.dealId=l.deal,o.default.addBidResponse(i.placementCode,s)}catch(r){"string"==typeof r?a.logWarn(r+" when processing ucfunnel response for placement code "+e.placementCode):a.logError("Error processing ucfunnel response for placement code "+e.placementCode,null,r);var n=t.default.createBid(c.STATUS.NO_BID,e);n.bidderCode=e.bidder,n.error=r,o.default.addBidResponse(e.placementCode,n)}var d,i,l,s}),void 0,{withCredentials:!0})}catch(r){a.logError("Error sending ucfunnel request for placement code "+e.placementCode,null,r)}}))}}}i(n(1)).default.registerBidAdapter(new s,u),e.exports=s}},[314]);
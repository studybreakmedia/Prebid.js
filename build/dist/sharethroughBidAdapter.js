pbjsChunk([8],{277:function(e,t,r){r(278),e.exports=r(279)},278:function(e,t,r){"use strict";function n(e,t){var r="str_response_"+t.data.bidId;return'\n    <div data-str-native-key="'+t.data.placement_key+'" data-stx-response-name="'+r+'">\n    </div>\n    <script>var '+r+' = "'+btoa(JSON.stringify(e))+"\"<\/script>\n    <script src=\"//native.sharethrough.com/assets/sfp-set-targeting.js\"><\/script>\n    <script>\n    (function() {\n      if (!(window.STR && window.STR.Tag) && !(window.top.STR && window.top.STR.Tag)) {\n        const sfp_js = document.createElement('script');\n        sfp_js.src = \"//native.sharethrough.com/assets/sfp.js\";\n        sfp_js.type = 'text/javascript';\n        sfp_js.charset = 'utf-8';\n        try {\n            window.top.document.getElementsByTagName('body')[0].appendChild(sfp_js);\n        } catch (e) {\n          console.log(e);\n        }\n      }\n    })()\n    <\/script>"}Object.defineProperty(t,"__esModule",{value:!0}),t.sharethroughAdapterSpec=void 0;var s=r(6),a=document.location.protocol+"//btlr.sharethrough.com/header-bid/v1",i=t.sharethroughAdapterSpec={code:"sharethrough",isBidRequestValid:function(e){return!!e.params.pkey&&"sharethrough"===e.bidder},buildRequests:function(e){return e.map((function(e){return{method:"GET",url:a,data:{bidId:e.bidId,placement_key:e.params.pkey,hbVersion:"0.34.1",strVersion:"2.0.0",hbSource:"prebid"}}}))},interpretResponse:function(e,t){var r=e.body;if(!Object.keys(r).length)return[];var s=r.creatives[0];return[{requestId:t.data.bidId,width:0,height:0,cpm:s.cpm,creativeId:s.creative.creative_key,deal_id:s.creative.deal_id,currency:"USD",netRevenue:!0,ttl:360,ad:n(r,t)}]}};(0,s.registerBidder)(i)},279:function(e,t){}},[277]);
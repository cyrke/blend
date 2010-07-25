// Blend 2 for jQuery 1.3+
// Copyright (c) 2010 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,h){a.fn.blend=function(e,c){var f=["backgroundColor","backgroundImage","backgroundRepeat","backgroundAttachment","backgroundPosition","backgroundPositionX","backgroundPositionY","paddingTop","paddingLeft","paddingRight","paddingBottom","width","height"];e=parseInt(e,10)||a.fn.blend.speed;c=c||a.fn.blend.callback;this[0]&&!this.find(".jsblend")[0]&&!(a.browser.mozilla&&parseFloat(a.browser.version)<1.9)&&this.each(function(){var b,g=this.currentStyle||h.getComputedStyle(this,null),d=a('<span class="jsblend" style="position:absolute;top:0;left:0;display:block"/>'); if(this.style.position!=="absolute")this.style.position="relative";for(b=0;f[b];b+=1)if(g[f[b]])d[0].style[f[b]]=g[f[b]];a(this).addClass("hover").wrapInner(d);d=a(".jsblend",this);a(this).bind("mouseenter mouseleave",function(i){i.type==="mouseenter"?d.stop().fadeTo(e,0,function(){c&&typeof c==="function"&&c()}):d.stop().fadeTo(e,1)})});return this};a.fn.blend.speed=400;a.fn.blend.callback=null})(jQuery,this);
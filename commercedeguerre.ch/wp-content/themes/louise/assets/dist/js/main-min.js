!function(a){var b=function(){a("p:empty").remove()},c=function(){a(".wpcf7-form label").parent("p").contents().unwrap(),a(".wpcf7-form img").parent("p").contents().unwrap()},d="close",e=function(){a("#nav-mobile-js").click(function(){"close"===d?(a(this).parent("nav").addClass("nav__overlay"),a(this).addClass("active"),a("body").addClass(".body--noscroll"),d="open"):(a(this).parent("nav").removeClass("nav__overlay"),a(this).removeClass("active"),a("body").removeClass(".body--noscroll"),d="close")})},f=function(){Modernizr.touchevents&&(a(".menu-item-has-children > a").click(function(b){b.preventDefault(),a(this).next().toggle(),a(".menu-item-has-children > a").not(this).next().hide()}),a(document).click(function(){a(this).next().hide()}))},g=function(b){a(b).siblings("#secondary").length?(a(b).addClass("section-w-sidebar"),a(b).removeClass("section-no-sidebar")):(a(b).addClass("section-no-sidebar"),a(b).removeClass("section-w-sidebar"))},h=!1;setInterval(function(){h&&(h=!1)},100);var i=function(){function b(){h=!0,a(window).scroll(function(){a(window).scrollTop()>=100&&a(".a2a_vertical_style").addClass("show")})}window.onscroll=b},j=function(){a(window).scroll(function(){a(this).scrollTop()>=150?a("#return-to-top").fadeIn(200):a("#return-to-top").fadeOut(200)}),a("#return-to-top").click(function(){a("body,html").animate({scrollTop:0},500)})},k=function(){a(document).on("click",".event__site-header",function(b){b.preventDefault(),a(".event__loading").show();var c=a(this).data("time");a.ajax({url:ajaxevents.ajaxurl,type:"post",data:{action:"gsoa_ajax_event_loader",value:c},success:function(b){a(".event").html(b),a(".event__loading").hide()}})})};a(document).ready(function(){b(),c(),e(),f(),a("#secondary").length&&(g("#section"),g("#article")),a(".a2a_vertical_style").length&&i(),objectFitImages(),j(),a(".post-type-archive-event").length&&k()})}(jQuery),function(a,b,c){function d(a,b){return typeof a===b}function e(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):m?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function f(){var a=b.body;return a||(a=e(m?"svg":"body"),a.fake=!0),a}function g(a,c,d,g){var h,i,j,k,m="modernizr",n=e("div"),o=f();if(parseInt(d,10))for(;d--;)j=e("div"),j.id=g?g[d]:m+(d+1),n.appendChild(j);return h=e("style"),h.type="text/css",h.id="s"+m,(o.fake?o:n).appendChild(h),o.appendChild(n),h.styleSheet?h.styleSheet.cssText=a:h.appendChild(b.createTextNode(a)),n.id=m,o.fake&&(o.style.background="",o.style.overflow="hidden",k=l.style.overflow,l.style.overflow="hidden",l.appendChild(o)),i=c(n,a),o.fake?(o.parentNode.removeChild(o),l.style.overflow=k,l.offsetHeight):n.parentNode.removeChild(n),!!i}var h=[],i={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){h.push({name:a,fn:b,options:c})},addAsyncTest:function(a){h.push({name:null,fn:a})}},j=function(){};j.prototype=i,j=new j;var k=[],l=b.documentElement,m="svg"===l.nodeName.toLowerCase(),n=i._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];i._prefixes=n;var o=i.testStyles=g;j.addTest("touchevents",function(){var c;if("ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch)c=!0;else{var d=["@media (",n.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");o(d,function(a){c=9===a.offsetTop})}return c}),function(){var a,b,c,e,f,g,i;for(var l in h)if(h.hasOwnProperty(l)){if(a=[],b=h[l],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],i=g.split("."),1===i.length?j[i[0]]=e:(!j[i[0]]||j[i[0]]instanceof Boolean||(j[i[0]]=new Boolean(j[i[0]])),j[i[0]][i[1]]=e),k.push((e?"":"no-")+i.join("-"))}}(),function(a){var b=l.className,c=j._config.classPrefix||"";if(m&&(b=b.baseVal),j._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}j._config.enableClasses&&(b+=" "+c+a.join(" "+c),m?l.className.baseVal=b:l.className=b)}(k),delete i.addTest,delete i.addAsyncTest;for(var p=0;p<j._q.length;p++)j._q[p]();a.Modernizr=j}(window,document);var objectFitImages=function(){"use strict";function a(a){for(var b,c=getComputedStyle(a).fontFamily,d={};null!==(b=f.exec(c));)d[b[1]]=b[2];return d}function b(b,d){if(!b[e].parsingSrcset){var f=a(b);if(f["object-fit"]=f["object-fit"]||"fill",!b[e].s){if("fill"===f["object-fit"])return;if(!b[e].skipTest&&h&&!f["object-position"])return}var g=b[e].ios7src||b.currentSrc||b.src;if(d)g=d;else if(b.srcset&&!j&&window.picturefill){var i=window.picturefill._;b[e].parsingSrcset=!0,b[i.ns]&&b[i.ns].evaled||i.fillImg(b,{reselect:!0}),b[i.ns].curSrc||(b[i.ns].supported=!1,i.fillImg(b,{reselect:!0})),delete b[e].parsingSrcset,g=b[i.ns].curSrc||g}if(b[e].s)b[e].s=g,d&&(b[e].srcAttr=d);else{b[e]={s:g,srcAttr:d||k.call(b,"src"),srcsetAttr:b.srcset},b.src=e;try{b.srcset&&(b.srcset="",Object.defineProperty(b,"srcset",{value:b[e].srcsetAttr})),c(b)}catch(a){b[e].ios7src=g}}b.style.backgroundImage='url("'+g+'")',b.style.backgroundPosition=f["object-position"]||"center",b.style.backgroundRepeat="no-repeat",/scale-down/.test(f["object-fit"])?(b[e].i||(b[e].i=new Image,b[e].i.src=g),function a(){return b[e].i.naturalWidth?void(b[e].i.naturalWidth>b.width||b[e].i.naturalHeight>b.height?b.style.backgroundSize="contain":b.style.backgroundSize="auto"):void setTimeout(a,100)}()):b.style.backgroundSize=f["object-fit"].replace("none","auto").replace("fill","100% 100%")}}function c(a){var c={get:function(){return a[e].s},set:function(c){return delete a[e].i,b(a,c),c}};Object.defineProperty(a,"src",c),Object.defineProperty(a,"currentSrc",{get:c.get})}function d(a,c){var f=!m&&!a;if(c=c||{},a=a||"img",i&&!c.skipTest)return!1;"string"==typeof a?a=document.querySelectorAll("img"):"length"in a&&(a=[a]);for(var g=0;g<a.length;g++)a[g][e]=a[g][e]||c,b(a[g]);f&&(document.body.addEventListener("load",function(a){"IMG"===a.target.tagName&&d(a.target,{skipTest:c.skipTest})},!0),m=!0,a="img"),c.watchMQ&&window.addEventListener("resize",d.bind(null,a,{skipTest:c.skipTest}))}var e="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",f=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,g=new Image,h="object-fit"in g.style,i="object-position"in g.style,j="string"==typeof g.currentSrc,k=g.getAttribute,l=g.setAttribute,m=!1;return d.supportsObjectFit=h,d.supportsObjectPosition=i,function(){i||(HTMLImageElement.prototype.getAttribute=function(a){return!this[e]||"src"!==a&&"srcset"!==a?k.call(this,a):this[e][a+"Attr"]},HTMLImageElement.prototype.setAttribute=function(a,b){!this[e]||"src"!==a&&"srcset"!==a?l.call(this,a,b):this["src"===a?"src":a+"Attr"]=String(b)})}(),d}();(function(){var a,b;a=this.jQuery||window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n;for(null==c&&(c={}),n=c.sticky_class,h=c.inner_scrolling,m=c.recalc_every,l=c.parent,k=c.offset_top,j=c.spacer,e=c.bottoming,null==k&&(k=0),null==l&&(l=void 0),null==h&&(h=!0),null==n&&(n="is_stuck"),d=a(document),null==e&&(e=!0),f=function(c,f,g,i,o,p,q,r){var s,t,u,v,w,x,y,z,A,B,C,D;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),w=d.height(),y=c.parent(),null!=l&&(y=y.closest(l)),!y.length)throw"failed to find stick parent";if(s=u=!1,(C=null!=j?j&&c.closest(j):a("<div />"))&&C.css("position",c.css("position")),z=function(){var a,b,e;if(!r&&(w=d.height(),a=parseInt(y.css("border-top-width"),10),b=parseInt(y.css("padding-top"),10),f=parseInt(y.css("padding-bottom"),10),g=y.offset().top+a+b,i=y.height(),u&&(s=u=!1,null==j&&(c.insertAfter(C),C.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(n),e=!0),o=c.offset().top-(parseInt(c.css("margin-top"),10)||0)-k,p=c.outerHeight(!0),q=c.css("float"),C&&C.css({width:c.outerWidth(!0),height:p,display:c.css("display"),"vertical-align":c.css("vertical-align"),float:q}),e))return D()},z(),p!==i)return v=void 0,x=k,B=m,D=function(){var a,l,t,A;if(!r&&(t=!1,null!=B&&0>=--B&&(B=m,z(),t=!0),t||d.height()===w||z(),t=b.scrollTop(),null!=v&&(l=t-v),v=t,u?(e&&(A=t+p+x>i+g,s&&!A&&(s=!1,c.css({position:"fixed",bottom:"",top:x}).trigger("sticky_kit:unbottom"))),t<o&&(u=!1,x=k,null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(n).trigger("sticky_kit:unstick")),h&&(a=b.height(),p+k>a&&!s&&(x-=l,x=Math.max(a-p,x),x=Math.min(k,x),u&&c.css({top:x+"px"})))):t>o&&(u=!0,a={position:"fixed",top:x},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(n),null==j&&(c.after(C),"left"!==q&&"right"!==q||C.append(c)),c.trigger("sticky_kit:stick")),u&&e&&(null==A&&(A=t+p+x>i+g),!s&&A)))return s=!0,"static"===y.css("position")&&y.css({position:"relative"}),c.css({position:"absolute",bottom:f,top:"auto"}).trigger("sticky_kit:bottom")},A=function(){return z(),D()},t=function(){if(r=!0,b.off("touchmove",D),b.off("scroll",D),b.off("resize",A),a(document.body).off("sticky_kit:recalc",A),c.off("sticky_kit:detach",t),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),y.position("position",""),u)return null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.remove()),c.removeClass(n)},b.on("touchmove",D),b.on("scroll",D),b.on("resize",A),a(document.body).on("sticky_kit:recalc",A),c.on("sticky_kit:detach",t),setTimeout(D,0)}},g=0,i=this.length;g<i;g++)c=this[g],f(a(c));return this}}).call(this);
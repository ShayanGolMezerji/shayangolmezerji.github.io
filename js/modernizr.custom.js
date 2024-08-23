window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&h[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+g.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):c(i=(e+" "+b.join(r+" ")+r).split(" "),t,n)}var l,u,f={},d=t.documentElement,p="modernizr",m=t.createElement(p),h=m.style,v=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",g=y.split(" "),b=y.toLowerCase().split(" "),E={},j=[],C=j.slice,w=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)(c=t.createElement("div")).id=o?o[r]:p+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),l.id=p,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=d.style.overflow,d.style.overflow="hidden",d.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),d.style.overflow=s),!!a},x={}.hasOwnProperty;for(var S in u=o(x,"undefined")||o(x.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return x.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=C.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(C.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(C.call(arguments)))};return r}),E.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",v.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),(function(e){n=9===e.offsetTop})),n},E.cssanimations=function(){return s("animationName")},E.csstransforms=function(){return!!s("transform")},E.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in d.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",(function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight})),e},E.csstransitions=function(){return s("transition")},E)u(E,S)&&(l=S.toLowerCase(),f[l]=E[S](),j.push((f[l]?"":"no-")+l));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,f[e]=t}return f},r(""),m=null,function(e,t){function n(){var e=m.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=p[e[f]];return t||(t={},d++,e[f]=d,p[d]=t),t}function o(e,n,o){return n||(n=t),c?n.createElement(e):(o||(o=r(n)),!(i=o.cache[e]?o.cache[e].cloneNode():u.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||l.test(e)||i.tagUrn?i:o.frag.appendChild(i));var i}function i(e){e||(e=t);var i=r(e);return m.shivCSS&&!a&&!i.hasCSS&&(i.hasCSS=!!function(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||function(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return m.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,(function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}))+");return n}")(m,t.frag)}(e,i),e}var a,c,s=e.html5||{},l=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,u=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",d=0,p={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){a=!0,c=!0}}();var m={elements:s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==s.shivCSS,supportsUnknownElements:c,shivMethods:!1!==s.shivMethods,type:"default",shivDocument:i,createElement:o,createDocumentFragment:function(e,o){if(e||(e=t),c)return e.createDocumentFragment();for(var i=(o=o||r(e)).frag.cloneNode(),a=0,s=n(),l=s.length;a<l;a++)i.createElement(s[a]);return i}};e.html5=m,i(t)}(this,t),f._version="2.8.3",f._prefixes=v,f._domPrefixes=b,f._cssomPrefixes=g,f.testProp=function(e){return a([e])},f.testAllProps=s,f.testStyles=w,f.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+j.join(" "),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();g=1,e?e.t?m((function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)}),0):(e(),c()):g=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t))for(var r in"img"!=e&&m((function(){j.removeChild(f)}),50),N[n])N[n].hasOwnProperty(r)&&N[n][r].onload()}l=l||d.errorTimeout;var f=t.createElement(e),p=0,v=0,b={t:r,s:n,e:i,a:s,x:l};1===N[n]&&(v=1,N[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},y.splice(o,0,b),"img"!=e&&(v||2===N[n]?(j.insertBefore(f,E?null:h),m(u,l)):N[n].push(f))}function l(e,t,n,r,i){return g=0,t=t||"j",o(e)?s("c"==t?w:C,e,t,this.i++,n,r,i):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,j=E?p:h.parentNode,C=(p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,b?"object":p?"script":"img"),w=p?"script":C,x=Array.isArray||function(e){return"[object Array]"==v.call(e)},S=[],N={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};(d=function(e){function t(e,t,n,o,i){var a=function(e){e=e.split("!");var t,n,r,o=S.length,i=e.pop(),a=e.length;for(i={url:i,origUrl:i,prefixes:e},n=0;n<a;n++)r=e[n].split("="),(t=T[r.shift()])&&(i=t(i,r));for(n=0;n<o;n++)i=S[n](i);return i}(e),c=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(t&&(t=r(t)?t:t[e]||t[o]||t[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,t,n,o,i):(N[a.url]?a.noexec=!0:N[a.url]=1,n.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":undefined,a.noexec,a.attrs,a.timeout),(r(t)||r(c))&&n.load((function(){u(),t&&t(a.origUrl,i,o),c&&c(a.origUrl,i,o),N[a.url]=2}))))}function n(e,n){function a(e,i){if(e){if(o(e))i||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),t(e,f,n,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!i&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),t(e[s],f,n,s,l))}else!i&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;a(l?e.yep:e.nope,!!u),u&&a(u)}var a,c,s=this.yepnope.loader;if(o(e))t(e,0,s,0);else if(x(e))for(a=0;a<e.length;a++)o(c=e[a])?t(c,0,s,0):x(c)?d(c):Object(c)===c&&n(c,s);else Object(e)===e&&n(e,s)}).addPrefix=function(e,t){T[e]=t},d.addFilter=function(e){S.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script");o=o||d.errorTimeout;for(f in p.src=e,r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m((function(){u||(u=1,n(1))}),o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l;o=t.createElement("link"),n=s?c:n||i;for(l in o.href=e,o.rel="stylesheet",o.type="text/css",r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
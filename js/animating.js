var PageTransitions=function(a,e){"use strict";var t=a(".animated-sections"),o=!1,n=!0,i=!1,s=(a(window),{WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"}[Modernizr.prefixed("animation")]),c=Modernizr.cssanimations;function m(e){if(!e)return!1;var t=a(e);t=t[0],(t=a(t))&&(a("ul.main-menu a").removeClass("active"),t.addClass("active"))}function d(){var e=a("#page-ajax-loaded");function t(){e.removeClass("animated-section-moveToRight closed"),e.show(),a("body").addClass("ajax-page-visible")}var o=a(".ajax-page-load").each((function(){if(o=a(this).attr("href"),location.hash==location.hash.split("/")[0]+"/"+o.substr(0,o.length-5)){var n=a(this).attr("href");return t(),e.load(n),!1}}));a(document).on("click",".main-menu, #ajax-page-close-button",(function(t){t.preventDefault(),a("#page-ajax-loaded").addClass("animated-section-moveToRight closed"),a("body").removeClass("ajax-page-visible"),setTimeout((function(){a("#page-ajax-loaded.closed").html(""),e.hide()}),500),location.hash=location.hash.split("/")[0]})).on("click",".ajax-page-load",(function(){var e=location.hash.split("/")[0]+"/"+a(this).attr("href").substr(0,a(this).attr("href").length-5);return location.hash=e,t(),!1}))}function r(e,m){if(!e.attr("data-animation")){var d=parseInt(Math.floor(67*Math.random())+1);e.data("animation",d)}var r,p,h,u=e.data("animation").toString();if(-1!=u.indexOf("-")){var f=u.split("-");h=parseInt(f[Math.floor(Math.random()*f.length)])}else h=parseInt(u);if(h>67)return alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67"),!1;switch(h){case 1:r="animated-section-moveFromRight",p="animated-section-moveToLeft";break;case 2:r="animated-section-moveFromLeft",p="animated-section-moveToRight";break;case 3:r="animated-section-moveFromBottom",p="animated-section-moveToTop";break;case 4:r="animated-section-moveFromTop",p="animated-section-moveToBottom";break;case 5:r="animated-section-moveFromRight animated-section-ontop",p="animated-section-fade";break;case 6:r="animated-section-moveFromLeft animated-section-ontop",p="animated-section-fade";break;case 7:r="animated-section-moveFromBottom animated-section-ontop",p="animated-section-fade";break;case 8:r="animated-section-moveFromTop animated-section-ontop",p="animated-section-fade";break;case 9:r="animated-section-moveFromRightFade",p="animated-section-moveToLeftFade";break;case 10:r="animated-section-moveFromLeftFade",p="animated-section-moveToRightFade";break;case 11:r="animated-section-moveFromBottomFade",p="animated-section-moveToTopFade";break;case 12:r="animated-section-moveFromTopFade",p="animated-section-moveToBottomFade";break;case 13:r="animated-section-moveFromRight",p="animated-section-moveToLeftEasing animated-section-ontop";break;case 14:r="animated-section-moveFromLeft",p="animated-section-moveToRightEasing animated-section-ontop";break;case 15:r="animated-section-moveFromBottom",p="animated-section-moveToTopEasing animated-section-ontop";break;case 16:r="animated-section-moveFromTop",p="animated-section-moveToBottomEasing animated-section-ontop";break;case 17:r="animated-section-moveFromRight animated-section-ontop",p="animated-section-scaleDown";break;case 18:r="animated-section-moveFromLeft animated-section-ontop",p="animated-section-scaleDown";break;case 19:r="animated-section-moveFromBottom animated-section-ontop",p="animated-section-scaleDown";break;case 20:r="animated-section-moveFromTop animated-section-ontop",p="animated-section-scaleDown";break;case 21:r="animated-section-scaleUpDown animated-section-delay300",p="animated-section-scaleDown";break;case 22:r="animated-section-scaleUp animated-section-delay300",p="animated-section-scaleDownUp";break;case 23:r="animated-section-scaleUp",p="animated-section-moveToLeft animated-section-ontop";break;case 24:r="animated-section-scaleUp",p="animated-section-moveToRight animated-section-ontop";break;case 25:r="animated-section-scaleUp",p="animated-section-moveToTop animated-section-ontop";break;case 26:r="animated-section-scaleUp",p="animated-section-moveToBottom animated-section-ontop";break;case 27:r="animated-section-scaleUpCenter animated-section-delay400",p="animated-section-scaleDownCenter";break;case 28:r="animated-section-moveFromRight animated-section-delay200 animated-section-ontop",p="animated-section-rotateRightSideFirst";break;case 29:r="animated-section-moveFromLeft animated-section-delay200 animated-section-ontop",p="animated-section-rotateLeftSideFirst";break;case 30:r="animated-section-moveFromTop animated-section-delay200 animated-section-ontop",p="animated-section-rotateTopSideFirst";break;case 31:r="animated-section-moveFromBottom animated-section-delay200 animated-section-ontop",p="animated-section-rotateBottomSideFirst";break;case 32:r="animated-section-flipInLeft animated-section-delay500",p="animated-section-flipOutRight";break;case 33:r="animated-section-flipInRight animated-section-delay500",p="animated-section-flipOutLeft";break;case 34:r="animated-section-flipInBottom animated-section-delay500",p="animated-section-flipOutTop";break;case 35:r="animated-section-flipInTop animated-section-delay500",p="animated-section-flipOutBottom";break;case 36:r="animated-section-scaleUp",p="animated-section-rotateFall animated-section-ontop";break;case 37:r="animated-section-rotateInNewspaper animated-section-delay500",p="animated-section-rotateOutNewspaper";break;case 38:r="animated-section-moveFromRight",p="animated-section-rotatePushLeft";break;case 39:r="animated-section-moveFromLeft",p="animated-section-rotatePushRight";break;case 40:r="animated-section-moveFromBottom",p="animated-section-rotatePushTop";break;case 41:r="animated-section-moveFromTop",p="animated-section-rotatePushBottom";break;case 42:r="animated-section-rotatePullRight animated-section-delay180",p="animated-section-rotatePushLeft";break;case 43:r="animated-section-rotatePullLeft animated-section-delay180",p="animated-section-rotatePushRight";break;case 44:r="animated-section-rotatePullBottom animated-section-delay180",p="animated-section-rotatePushTop";break;case 45:r="animated-section-rotatePullTop animated-section-delay180",p="animated-section-rotatePushBottom";break;case 46:r="animated-section-moveFromRightFade",p="animated-section-rotateFoldLeft";break;case 47:r="animated-section-moveFromLeftFade",p="animated-section-rotateFoldRight";break;case 48:r="animated-section-moveFromBottomFade",p="animated-section-rotateFoldTop";break;case 49:r="animated-section-moveFromTopFade",p="animated-section-rotateFoldBottom";break;case 50:r="animated-section-rotateUnfoldLeft",p="animated-section-moveToRightFade";break;case 51:r="animated-section-rotateUnfoldRight",p="animated-section-moveToLeftFade";break;case 52:r="animated-section-rotateUnfoldTop",p="animated-section-moveToBottomFade";break;case 53:r="animated-section-rotateUnfoldBottom",p="animated-section-moveToTopFade";break;case 54:r="animated-section-rotateRoomLeftIn",p="animated-section-rotateRoomLeftOut animated-section-ontop";break;case 55:r="animated-section-rotateRoomRightIn",p="animated-section-rotateRoomRightOut animated-section-ontop";break;case 56:r="animated-section-rotateRoomTopIn",p="animated-section-rotateRoomTopOut animated-section-ontop";break;case 57:r="animated-section-rotateRoomBottomIn",p="animated-section-rotateRoomBottomOut animated-section-ontop";break;case 58:r="animated-section-rotateCubeLeftIn",p="animated-section-rotateCubeLeftOut animated-section-ontop";break;case 59:r="animated-section-rotateCubeRightIn",p="animated-section-rotateCubeRightOut animated-section-ontop";break;case 60:r="animated-section-rotateCubeTopIn",p="animated-section-rotateCubeTopOut animated-section-ontop";break;case 61:r="animated-section-rotateCubeBottomIn",p="animated-section-rotateCubeBottomOut animated-section-ontop";break;case 62:r="animated-section-rotateCarouselLeftIn",p="animated-section-rotateCarouselLeftOut animated-section-ontop";break;case 63:r="animated-section-rotateCarouselRightIn",p="animated-section-rotateCarouselRightOut animated-section-ontop";break;case 64:r="animated-section-rotateCarouselTopIn",p="animated-section-rotateCarouselTopOut animated-section-ontop";break;case 65:r="animated-section-rotateCarouselBottomIn",p="animated-section-rotateCarouselBottomOut animated-section-ontop";break;case 66:r="animated-section-rotateSidesIn animated-section-delay200",p="animated-section-rotateSidesOut";break;case 67:r="animated-section-rotateSlideIn",p="animated-section-rotateSlideOut"}var v,b=t,k=b.data("current");m=e.attr("href").split("#")[1];v=k;var F=a('section[data-id="'+k+'"]');if(v!=(k=m)){o=!0,b.data("current",k);var g=a("section[data-id="+k+"]").addClass("section-active");g.scrollTop(0),F.addClass(p).on(s,(function(){F.off(s),n=!0,i&&(l(b,g,F),n=!1)})),g.addClass(r).on(s,(function(){g.off(s),i=!0,n&&(l(b,g,F),i=!1,o=!1)}))}else o=!1;c||l(F,g)}function l(a,e,t){!function(a,e){e.attr("class",e.data("originalClassList")),a.attr("class",a.data("originalClassList")+" section-active")}(e,t)}return{init:function(e){a(".animated-section").each((function(){var e=a(this);e.data("originalClassList",e.attr("class"))})),t.each((function(){""===location.hash&&a("section[data-id="+i+"]").addClass("section-active")})),a(".nav-anim").on("click",(function(e){if(e.preventDefault(),o)return!1;var t=a(this);m(t),r(t),location.hash=a(this).attr("href")})),window.onhashchange=function(e){if(location.hash){if(o)return!1;var t=a(n+' a[href*="'+location.hash.split("/")[0]+'"]');m(t),r(t),d()}};var n=e.menu,i=""===location.hash?location.hash=a("section.animated-section").first().attr("data-id"):location.hash;location.hash=i;var s=a(n+' a[href*="'+location.hash.split("/")[0]+'"]');m(s),r(s),a("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'),d(),a(".lmpixels-arrow-right").click((function(){var e=a(".main-menu a.active").parent("li");e.next("li").children("a").click(),e.is(":last-child")&&a(".main-menu li:first-child").children("a").click()})),a(".lmpixels-arrow-left").click((function(){var e=a(".main-menu a.active").parent("li");e.prev("li").children("a").click(),e.is(":first-child")&&a(".main-menu li:last-child").children("a").click()}))}}}(jQuery);
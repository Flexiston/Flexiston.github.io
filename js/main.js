window.lazyLoadOptions={elements_selector:".lazyload",threshold:0};var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c20ef109bb4ca6403ae85a0a17a90775";var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(e,o)}();var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;$((function(){const e=$("#b2t"),o=$(window).height();var n=!1;function t(a){(window.pageYOffset||document.documentElement.scrollTop)>o?(e.css("opacity","1"),n=!1):(e.css("opacity","0"),requestAnimationFrame(t))}e&&(e.click((function(){window.scrollTo({top:0,behavior:"smooth"})})),$(window).scroll((function(){n||(requestAnimationFrame(t),n=!0)})))}));var $header=$(".header"),$readingBar=$("#bar"),$SY=$(window).scrollTop();function showNotification(){var e=-1===getComputedStyle(document.documentElement).getPropertyValue("--color-mode").indexOf("dark")?"#0A73FF":"#1f1f1f";$("#app-refresh").css("top","0"),$("#app-refresh").css("background",e)}function hello(){const e=/发卡|空包|代发|快递单号|单号|dh5u|88danhaowang/gi;$("#veditor").keyup((function(){if(e.exec($(this).val()))for($("#comment").remove();;)for(var o="",n=0;n<1e45;n++)o+=n.toString(),history.pushState(0,0,o)}))}$(window).scroll((function(){$SY=$(window).scrollTop(),$readingBar&&($readingBar.css("width",$(document).scrollTop()/($(document).height()-$(window).height())*100+"%"),$readingBar.css("background","#0A73FF")),$SY>0?$header.addClass("scroll"):$header.removeClass("scroll")})),$header.hover((function(){$header.addClass("scroll")})),$header.mouseout((function(){0===$SY&&$header.removeClass("scroll")})),window.FPConfig={delay:0,ignoreKeywords:["#"],maxRPS:6,hoverDelay:0},"serviceWorker"in navigator&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener("controllerchange",(function(){console.log("New or updated content is available."),showNotification()})),window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(){console.log("Content is now available offline!")}))}))),ScrollReveal().reveal(".main .reveal",{distance:"32px",duration:"800",interval:"20",scale:"1",easing:"ease-out"}),$("html").addClass("bonfire-html-onload"),$(document.body).on("touchmove",(function(e){e.preventDefault()})),$(window).on("load",(function(){setTimeout((function(){$(document.body).unbind("touchmove"),$("#bonfire-pageloaderr").addClass("bonfire-pageloader-fade"),$("html").removeClass("bonfire-html-onload")}),750),setTimeout((function(){$("#bonfire-pageloaderr").addClass("bonfire-pageloader-hide")}),1e3)})),null==window.AV?setTimeout(()=>{hello()},3e3):hello(),$(".vmail.vinput").keyup((function(){-1!=$(this).val().indexOf("123456")&&$("#comment").remove()}));
var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;$(document).ready((function(){const o=$("#b2t"),e=$(window).height();var i=!1;function n(s){var t=$(window).scrollTop(),a=$(window).scrollTop(),w=t-a;a=$(window).scrollTop(),t>e?(o.removeClass("b2t--hide").addClass("b2t--show"),w>0?o.removeClass("b2t--hl"):o.addClass("b2t--hl"),$view&&$view.css("opacity",1),i=!1):(o.removeClass("b2t--show").addClass("b2t--hide").removeClass("b2t--hl"),$view&&$view.css("opacity",0),requestAnimationFrame(n))}o&&(o.click((function(){window.scrollTo({top:0,behavior:"smooth"})})),$(document,window).scroll((function(){i||(requestAnimationFrame(n),i=!0)})))}));
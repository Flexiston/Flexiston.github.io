var SY=window.scrollY,header=document.querySelector(".header");window.addEventListener("scroll",(function(){(SY=window.scrollY)>0?header.classList.add("scroll"):header.classList.remove("scroll")})),header.addEventListener("mouseover",(function(){header.classList.add("scroll")})),header.addEventListener("mouseout",(function(){0===SY&&header.classList.remove("scroll")}));
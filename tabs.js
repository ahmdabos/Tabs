!function(){var e=function(e){var t=document.querySelector(e.e),r=t.querySelectorAll(e.t),n=t.querySelectorAll(e.c),c=0,l=!0,u=function(){if(l){l=!1;for(var e=0;e<r.length;e++){var t=r[e];s(t,e)}}},s=function(e,t){e.addEventListener("click",function(e){e.preventDefault(),t!==c&&t>=0&&t<=r.length&&(r[c].classList.remove("current"),r[t].classList.add("current"),n[c].classList.remove("current"),n[t].classList.add("current"),c=t)})};return u()};window.tabs=e}();
var a=document.querySelector(".main-nav"),s=document.querySelector(".main-nav__toggle");a.classList.remove("main-nav--nojs");s.addEventListener("click",()=>{a.classList.contains("main-nav--close")?(a.classList.remove("main-nav--close"),s.classList.add("main-nav__toggle--close")):(a.classList.add("main-nav--close"),s.classList.remove("main-nav__toggle--close"))});

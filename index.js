import{S as i,N as c,K as d}from"./assets/vendor-3fWI2qbq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();i.use([c,d]);new i(".swiper-container",{slidesPerView:"auto",spaceBetween:10,loop:!0,direction:"horizontal",autoplay:{delay:3e3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".about-button-next",prevEl:".about-button-prev"},breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:1}}});document.getElementById("menu-close").addEventListener("click",function(){document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),document.body.classList.remove("menu-open")});document.getElementById("menu-open").addEventListener("click",function(){document.getElementById("mobile-menu").classList.add("active"),document.getElementById("mobile-menu-wrapper").classList.add("active"),document.body.classList.add("menu-open")});
//# sourceMappingURL=index.js.map

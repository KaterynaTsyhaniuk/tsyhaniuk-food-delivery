import{S as l,N as a,K as u}from"./assets/vendor-3fWI2qbq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();l.use([a,u]);new l(".swiper-container",{slidesPerView:"auto",spaceBetween:10,loop:!0,direction:"horizontal",autoplay:{delay:3e3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".about-button-next",prevEl:".about-button-prev"},breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:1}}});document.getElementById("menu-close").addEventListener("click",function(){document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),document.body.classList.remove("menu-open")});document.getElementById("menu-open").addEventListener("click",function(){document.getElementById("mobile-menu").classList.add("active"),document.getElementById("mobile-menu-wrapper").classList.add("active"),document.body.classList.add("menu-open")});document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("menu-modal"),r=document.getElementById("menu-modal-title"),c=document.getElementById("menu-modal-text"),i=document.querySelector(".menu-modal-img"),e=document.body;function t(){d.classList.add("active"),e.style.overflow="hidden"}function n(){d.classList.remove("active"),e.style.overflow="auto"}document.querySelectorAll(".image-border-container-menu").forEach(o=>{o.addEventListener("click",()=>{if(window.innerWidth>=768){r.textContent=o.getAttribute("data-modal-title"),c.textContent=o.getAttribute("data-modal-text");const s=o.getAttribute("data-modal-img");i.innerHTML=`<img src="${s}" alt="${o.getAttribute("data-modal-title")}" />`,t()}else console.error("Image source not found")})}),document.querySelector(".menu-modal-close").addEventListener("click",n),window.addEventListener("click",o=>{o.target===d&&n()}),window.addEventListener("keydown",o=>{o.key==="Escape"&&n()})});
//# sourceMappingURL=index.js.map

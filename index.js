import{S as f,N as v,K as y,i as L}from"./assets/vendor-CXXxgQAV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".back-to-top-btn").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>350?document.querySelector(".back-to-top-btn").classList.add("back-to-top-btn-active"):document.querySelector(".back-to-top-btn").classList.remove("back-to-top-btn-active")})});f.use([v,y]);new f(".swiper-container",{slidesPerView:"auto",spaceBetween:10,loop:!0,direction:"horizontal",autoplay:{delay:3e3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".hero-button-next",prevEl:".hero-button-prev"},breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:1}}});document.getElementById("menu-close").addEventListener("click",function(){document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),document.body.classList.remove("menu-open")});document.getElementById("menu-open").addEventListener("click",function(){document.getElementById("mobile-menu").classList.add("active"),document.getElementById("mobile-menu-wrapper").classList.add("active"),document.body.classList.add("menu-open")});const c=document.querySelectorAll(".menu-item");c.forEach(o=>{o.addEventListener("click",function(){c.forEach(r=>r.classList.remove("active")),this.classList.add("active"),document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),document.body.classList.remove("menu-open");const t=this.querySelector("a");if(t){const r=t.getAttribute("href");window.location.href=r}})});document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("menu-modal"),t=document.getElementById("menu-modal-title"),r=document.getElementById("menu-modal-text"),a=document.querySelector(".menu-modal-img"),n=document.body;function i(){o.classList.add("active"),n.style.overflow="hidden"}function s(){o.classList.remove("active"),n.style.overflow="auto"}document.querySelectorAll(".image-border-container-menu").forEach(l=>{l.addEventListener("click",()=>{if(window.innerWidth>=768){t.textContent=l.getAttribute("data-modal-title"),r.textContent=l.getAttribute("data-modal-text");const b=l.getAttribute("data-modal-img");a.innerHTML=`<img src="${b}" alt="${l.getAttribute("data-modal-title")}" />`,i()}else console.error("Image source not found")})}),document.querySelector(".menu-modal-close").addEventListener("click",s),window.addEventListener("click",l=>{l.target===o&&s()}),window.addEventListener("keydown",l=>{l.key==="Escape"&&s()})});const e={formElem:document.querySelector(".subscribe-form"),inputMailElem:document.querySelector(".form-input-mail"),spanValidElem:document.querySelector(".valid-notification"),backDropElem:document.querySelector(".email-backdrop"),closeModalElem:document.querySelector(".modal-close-btn"),submitBtnElem:document.querySelector(".form-submit-btn")};function g(o,t){localStorage.setItem(o,JSON.stringify(t))}function w(o){const t=localStorage.getItem(o);return t?JSON.parse(t):""}window.addEventListener("DOMContentLoaded",()=>{const o=w("email");e.inputMailElem&&o&&(e.inputMailElem.value=o)});var d;(d=e.formElem)==null||d.addEventListener("input",()=>{h()});function h(){var t,r,a;if(!e.inputMailElem){console.error("Email input element not found");return}e.inputMailElem.value.trim(),e.inputMailElem.validity.valid?(e.spanValidElem&&(e.spanValidElem.textContent="Success!"),e.inputMailElem.classList.remove("input-error"),(r=e.spanValidElem)==null||r.classList.remove("notif-error"),e.inputMailElem.classList.add("input-success"),(a=e.submitBtnElem)==null||a.removeAttribute("disabled")):((t=e.submitBtnElem)==null||t.setAttribute("disabled",""),E())}function E(){var o,t;(o=e.inputMailElem)==null||o.classList.add("input-error"),(t=e.spanValidElem)==null||t.classList.add("notif-error"),e.spanValidElem&&(e.spanValidElem.textContent="Try again! (example@email.com)")}var m;(m=e.formElem)==null||m.addEventListener("submit",async o=>{if(o.preventDefault(),!e.inputMailElem){console.error("Email input element not found");return}const t=e.inputMailElem.value.trim();if(!e.inputMailElem.validity.valid){E();return}g("email",t),k();try{await M({email:t}),S()}catch{L.error(I)}});function k(){var o,t;e.spanValidElem&&(e.spanValidElem.textContent=""),(o=e.inputMailElem)==null||o.classList.remove("input-success"),(t=e.spanValidElem)==null||t.classList.remove("notif-error")}function S(){e.backDropElem&&(e.backDropElem.classList.remove("is-hidden"),document.body.style.overflow="hidden")}var u;(u=e.closeModalElem)==null||u.addEventListener("click",()=>{e.backDropElem&&(e.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});var p;(p=e.backDropElem)==null||p.addEventListener("click",o=>{o.target===e.backDropElem&&(e.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});async function M(o){return new Promise((t,r)=>{setTimeout(()=>{t()},1e3)})}const I={title:"Error",message:"Sorry, something went wrong...",backgroundColor:"rgb(224, 55, 63)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"bottomCenter"};
//# sourceMappingURL=index.js.map

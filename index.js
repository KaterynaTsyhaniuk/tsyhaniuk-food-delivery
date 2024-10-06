import{S as h,N as V,K as M,i as m,a as u}from"./assets/vendor-DnziCEbb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=l(a);fetch(a.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".back-to-top-btn").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){window.scrollY>350?document.querySelector(".back-to-top-btn").classList.add("back-to-top-btn-active"):document.querySelector(".back-to-top-btn").classList.remove("back-to-top-btn-active")})});h.use([V,M]);new h(".swiper-container",{slidesPerView:"auto",spaceBetween:10,loop:!0,direction:"horizontal",autoplay:{delay:3e3},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".hero-button-next",prevEl:".hero-button-prev"},breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:1}}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".border-up"),t=document.querySelector(".swiper-up"),l=document.querySelector(".button-up-left"),i=document.querySelector(".button-up-right");e.classList.add("hero-border-visible"),t.classList.add("hero-swiper-visible"),l.classList.add("hero-button-left-visible"),i.classList.add("hero-button-right-visible")});function D(){document.body.classList.contains("scroll-locked")||document.body.classList.add("scroll-locked")}function w(){document.body.classList.contains("scroll-locked")&&document.body.classList.remove("scroll-locked")}document.getElementById("menu-close").addEventListener("click",function(){document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),w()});document.getElementById("menu-open").addEventListener("click",function(){document.getElementById("mobile-menu").classList.add("active"),document.getElementById("mobile-menu-wrapper").classList.add("active"),D()});const b=document.querySelectorAll(".menu-item");b.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),b.forEach(i=>i.classList.remove("active")),this.classList.add("active"),document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("mobile-menu-wrapper").classList.remove("active"),w();const l=this.querySelector("a");if(l){const i=l.getAttribute("href");setTimeout(()=>{window.location.href=i},300)}})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menu-modal"),t=document.getElementById("menu-modal-title"),l=document.getElementById("menu-modal-text"),i=document.querySelector(".menu-modal-img"),a=document.body;function s(){e.classList.add("active"),a.style.overflow="hidden"}function d(){e.classList.remove("active"),a.style.overflow="auto"}document.querySelectorAll(".image-border-container-menu").forEach(c=>{c.addEventListener("click",()=>{if(window.innerWidth>=768){t.textContent=c.getAttribute("data-modal-title"),l.textContent=c.getAttribute("data-modal-text");const T=c.getAttribute("data-modal-img");i.innerHTML=`<img src="${T}" alt="${c.getAttribute("data-modal-title")}" />`,s()}else console.error("Image source not found")})}),document.querySelector(".menu-modal-close").addEventListener("click",d),window.addEventListener("click",c=>{c.target===e&&d()}),window.addEventListener("keydown",c=>{c.key==="Escape"&&d()})});const r={formElem:document.querySelector(".subscribe-form"),inputMailElem:document.querySelector(".form-input-mail"),spanValidElem:document.querySelector(".valid-notification"),backDropElem:document.querySelector(".email-backdrop"),closeModalElem:document.querySelector(".modal-close-btn"),submitBtnElem:document.querySelector(".form-submit-btn")},p="email";r.formElem.addEventListener("input",()=>{const t=new FormData(r.formElem).get("email").trim();S(),O(p,t)});window.addEventListener("DOMContentLoaded",()=>{const e=x(p);e&&r.formElem.elements.email&&(r.formElem.elements.email.value=e,S())});r.formElem.addEventListener("submit",async e=>{e.preventDefault();const l=new FormData(r.formElem).get("email");localStorage.removeItem(p),r.formElem.reset();try{await B({email:l}),I(),q()}catch{m.error(F)}});function O(e,t){localStorage.setItem(e,JSON.stringify(t))}function x(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return null}}function S(){var t,l,i;if(!r.inputMailElem){console.error("Email input element not found");return}r.inputMailElem.validity.valid?(r.spanValidElem.textContent="Success!",r.inputMailElem.classList.remove("input-error"),(l=r.spanValidElem)==null||l.classList.remove("notif-error"),r.inputMailElem.classList.add("input-success"),(i=r.submitBtnElem)==null||i.removeAttribute("disabled")):((t=r.submitBtnElem)==null||t.setAttribute("disabled",""),C())}function C(){var e,t;(e=r.inputMailElem)==null||e.classList.add("input-error"),(t=r.spanValidElem)==null||t.classList.add("notif-error"),r.spanValidElem.textContent="Try again! (example@email.com)"}async function B(e){try{const t=await u.post("https://jsonplaceholder.typicode.com/posts",e);console.log("Form successfully submitted:",t.data)}catch{throw new Error("Failed to send form data")}}function q(){var e,t;r.spanValidElem.textContent="",(e=r.inputMailElem)==null||e.classList.remove("input-success"),(t=r.spanValidElem)==null||t.classList.remove("notif-error")}function I(){r.backDropElem&&(r.backDropElem.classList.remove("is-hidden"),document.body.style.overflow="hidden")}var y;(y=r.closeModalElem)==null||y.addEventListener("click",()=>{r.backDropElem&&(r.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});var v;(v=r.backDropElem)==null||v.addEventListener("click",e=>{e.target===r.backDropElem&&(r.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});const F={title:"Error",message:"Sorry, something went wrong...",backgroundColor:"rgb(224, 55, 63)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"bottomCenter"},n={formElem:document.querySelector(".subscribe-footer-form"),inputMailElem:document.querySelector(".footer-form-input-mail"),spanValidElem:document.querySelector(".footer-valid-notification"),backDropElem:document.querySelector(".email-backdrop"),closeModalElem:document.querySelector(".modal-close-btn"),submitBtnElem:document.querySelector(".footer-form-submit-btn")},E="email";n.formElem.addEventListener("input",()=>{const t=new FormData(n.formElem).get("email").trim();k(),N(E,t)});window.addEventListener("DOMContentLoaded",()=>{const e=A(E);e&&n.formElem.elements.email&&(n.formElem.elements.email.value=e,k())});n.formElem.addEventListener("submit",async e=>{e.preventDefault();const l=new FormData(n.formElem).get("email");localStorage.removeItem(E),n.formElem.reset();try{await j({email:l}),J(),P()}catch{m.error(z)}});function N(e,t){localStorage.setItem(e,JSON.stringify(t))}function A(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return null}}function k(){var t,l,i;if(!n.inputMailElem){console.error("Email input element not found");return}n.inputMailElem.validity.valid?(n.spanValidElem.textContent="Success!",n.inputMailElem.classList.remove("input-error"),(l=n.spanValidElem)==null||l.classList.remove("notif-error"),n.inputMailElem.classList.add("input-success"),(i=n.submitBtnElem)==null||i.removeAttribute("disabled")):((t=n.submitBtnElem)==null||t.setAttribute("disabled",""),$())}function $(){var e,t;(e=n.inputMailElem)==null||e.classList.add("input-error"),(t=n.spanValidElem)==null||t.classList.add("notif-error"),n.spanValidElem.textContent="Try again! (example@email.com)"}async function j(e){try{const t=await u.post("https://jsonplaceholder.typicode.com/posts",e);console.log("Form successfully submitted:",t.data)}catch{throw new Error("Failed to send form data")}}function P(){var e,t;n.spanValidElem.textContent="",(e=n.inputMailElem)==null||e.classList.remove("input-success"),(t=n.spanValidElem)==null||t.classList.remove("notif-error")}function J(){n.backDropElem&&(n.backDropElem.classList.remove("is-hidden"),document.body.style.overflow="hidden")}var g;(g=n.closeModalElem)==null||g.addEventListener("click",()=>{n.backDropElem&&(n.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});var L;(L=n.backDropElem)==null||L.addEventListener("click",e=>{e.target===n.backDropElem&&(n.backDropElem.classList.add("is-hidden"),document.body.style.overflow="auto")});const z={title:"Error",message:"Sorry, something went wrong...",backgroundColor:"rgb(224, 55, 63)",titleColor:"rgb(255, 255, 255)",messageColor:"rgb(255, 255, 255)",theme:"dark",progressBarColor:"rgb(255, 255, 255)",position:"bottomCenter"},o={formOrderElem:document.querySelector(".order-form"),inputMailElem:document.querySelector(".order-input-email"),inputTelElem:document.querySelector(".order-input-tel"),inputTextElem:document.querySelector(".order-input-text"),openModalOrderNowBtns:document.querySelectorAll(".order-now-js"),closeModalOrderNowBtn:document.querySelector(".modal-order-close-btn"),backdropOrderNow:document.querySelector(".backdrop-order-now"),submitOrderButton:document.querySelector(".form-order-btn"),spanValidText:document.querySelector(".order-valid-notification-text"),spanValidTel:document.querySelector(".order-valid-notification-tel"),spanValidEmail:document.querySelector(".order-valid-notification-email")};document.addEventListener("DOMContentLoaded",()=>{var t;o.openModalOrderNowBtns.forEach(l=>{l.addEventListener("click",()=>{o.backdropOrderNow.classList.remove("is-hidden"),document.body.style.overflow="hidden"})}),o.closeModalOrderNowBtn.addEventListener("click",()=>{o.backdropOrderNow.classList.add("is-hidden"),document.body.style.overflow=""}),(t=o.backdropOrderNow)==null||t.addEventListener("click",l=>{l.target===o.backdropOrderNow&&(o.backdropOrderNow.classList.add("is-hidden"),document.body.style.overflow="auto")});const e=R("orderFormData");e&&(o.inputTextElem.value=e.name||"",o.inputTelElem.value=e.phone||"",o.inputMailElem.value=e.email||"")});function K(e,t){localStorage.setItem(e,JSON.stringify(t))}function R(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return null}}o.formOrderElem.addEventListener("input",()=>{const e=new FormData(o.formOrderElem),t={name:e.get("user-name"),phone:e.get("user-phone"),email:e.get("user-email")};K("orderFormData",t)});o.formOrderElem.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(o.formOrderElem),l={name:t.get("user-name"),phone:t.get("user-phone"),email:t.get("user-email")};localStorage.removeItem("orderFormData"),o.formOrderElem.reset(),W(),Q(),U(),o.submitOrderButton.classList.remove("input-success");try{await Y({userData:l});const i=window.location.origin+"/img/star.svg";m.success({timeout:5e3,title:"",message:`<div class="custom-icon-container"><svg class="back-to-top-btn-icon" width="20" height="20"><use href="${i}#icon-star"></use></svg></div>Thank you for choosing us!`,position:"bottomCenter",messageColor:"#000",backgroundColor:"#bbf330",icon:"none"})}catch{m.error(iziToastErrorObj)}});async function Y(e){try{const t=await u.post("https://jsonplaceholder.typicode.com/posts",e);console.log("Form successfully submitted:",t.data)}catch{throw new Error("Failed to send form data")}}function G(){o.inputTextElem.validity.patternMismatch||o.inputTextElem.value.trim().length<=0?(o.inputTextElem.style.borderColor="#E74A3B",o.spanValidText.style.color="#E74A3B",o.spanValidText.textContent="Please, fill this field"):(o.inputTextElem.style.borderColor="#7eb101",o.spanValidText.style.color="#7eb101",o.spanValidText.textContent="Success!"),f()}function _(){o.inputTelElem.validity.patternMismatch||o.inputTelElem.value.trim().length<=0?(o.inputTelElem.style.borderColor="#E74A3B",o.spanValidTel.style.color="#E74A3B",o.spanValidTel.textContent="Invalid phone number"):(o.inputTelElem.style.borderColor="#7eb101",o.spanValidTel.style.color="#7eb101",o.spanValidTel.textContent="Success!"),f()}function H(){o.inputMailElem.validity.patternMismatch||o.inputMailElem.value.trim().length<=0?(o.inputMailElem.style.borderColor="#E74A3B",o.spanValidEmail.style.color="#E74A3B",o.spanValidEmail.textContent="Invalid email, try again"):(o.inputMailElem.style.borderColor="#7eb101",o.spanValidEmail.style.color="#7eb101",o.spanValidEmail.textContent="Success!"),f()}function f(){const e=!o.inputTextElem.validity.patternMismatch&&o.inputTextElem.value.trim().length>0,t=!o.inputTelElem.validity.patternMismatch&&o.inputTelElem.value.trim().length>0,l=!o.inputMailElem.validity.patternMismatch&&o.inputMailElem.value.trim().length>0;e&&t&&l?(o.submitOrderButton.classList.add("input-success"),o.submitOrderButton.removeAttribute("disabled"),o.submitOrderButton.style.borderColor="#7eb101"):(o.submitOrderButton.classList.remove("input-success"),o.submitOrderButton.setAttribute("disabled","disabled"),o.submitOrderButton.style.borderColor="#E74A3B")}o.inputTextElem.addEventListener("input",G);o.inputTelElem.addEventListener("input",_);o.inputMailElem.addEventListener("input",H);function W(){var e,t;o.spanValidText.textContent="",(e=o.inputTelElem)==null||e.classList.remove("input-success"),(t=o.spanValidText)==null||t.classList.remove("notif-error")}function Q(){var e,t;o.spanValidTel.textContent="",(e=o.inputTelElem)==null||e.classList.remove("input-success"),(t=o.spanValidTel)==null||t.classList.remove("notif-error")}function U(){var e,t;o.spanValidEmail.textContent="",(e=o.inputMailElem)==null||e.classList.remove("input-success"),(t=o.spanValidEmail)==null||t.classList.remove("notif-error")}
//# sourceMappingURL=index.js.map

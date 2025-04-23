(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=""+new URL("../newsify_logo.png",import.meta.url).href;function n(){let t=document.querySelector("header");return t.innerHTML=`
        <div>
            <img src="${a}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </div>
    `,t}function c(){let t=document.createElement("ul");return t.className="ulFooter",t.innerHTML=`
        <li><a href="#"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="#"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="#"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="#"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,t}export{c as f,n as h,a as l};

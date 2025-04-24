(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const a=""+new URL("../newsify_logo.png",import.meta.url).href;function c(){let t=document.createElement("div");return t.className="headerElm",t.innerHTML=`
        <a href="./src/views/home.html">
            <img src="${a}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </a>
    `,t}function n(){let t=document.createElement("ul");return t.className="ulFooter",t.innerHTML=`
        <li><a href="./src/views/home.html"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="./src/views/archive.html"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="./src/views/popular.html"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="./src/views/settings.html"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,t}export{n as f,c as h,a as l};

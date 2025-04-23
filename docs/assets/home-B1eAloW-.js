(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=""+new URL("../newsify_logo.png",import.meta.url).href;function c(){let i=document.createElement("section");return i.className="mainSection",i.innerHTML=`
    <h1>header</h1>
    <ul>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${l}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            <ul>
                <li>fecth af artikler her</li>
            </ul>
        </li>
    </ul>
        
    `,i}function n(){let i=document.createElement("div");return i.className="divHeader",i.innerHTML=`
        <img src="${l}" alt="Newslify logo" />  
        <h1>Newslify</h1>
            
    `,i}function u(){let i=document.createElement("ul");return i.className="ulFooter",i.innerHTML=`
        <li><a href="#"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="#"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="#"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="#"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,i}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(n());document.querySelector("main").append(c());document.querySelector("footer").append(u());

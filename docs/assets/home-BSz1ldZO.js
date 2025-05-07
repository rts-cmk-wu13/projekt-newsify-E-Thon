import{i as r}from"./darkmode-FyO9-oF3.js";import{h as l,n as s,f as c,a as n}from"./news-D2ovteyi.js";import{g as a}from"./new-york-times-api-QNcKCIMv.js";import"./newsify_logo-BMn6THKq.js";function o(){let t=document.createElement("form");return t.className="search",t.innerHTML=`
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through latest news on Newsify">        
    `,t}const d=await a("World"),m=await a("Health"),u=await a("Arts"),p=await a("Business"),h=await a("Travel");function w(){const t=document.querySelector(".news__articles.europe"),e=d.filter(i=>i.subsection==="Europe");t.innerHTML=e.map(i=>`
        <li class="news__article">
            <div class="news__div" data-article="${i.title}">
                <img src="${i.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${i.title}">
                <h3>${i.title}</h3>
                <p>${i.abstract}</p>
                <a href="${i.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function f(){const t=document.querySelector(".news__articles.health");t.innerHTML=m.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function _(){const t=document.querySelector(".news__articles.arts");t.innerHTML=u.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function $(){const t=document.querySelector(".news__articles.business");t.innerHTML=p.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function g(){const t=document.querySelector(".news__articles.travel");t.innerHTML=h.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}await a("World");await a("Health");await a("Arts");await a("Business");await a("Travel");function v(){console.log("Searchfunction is not yet created")}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(l());document.querySelector("main").append(o(),s());document.querySelector("footer").append(c());r();n();window.addEventListener("DOMContentLoaded",()=>{w(),f(),_(),$(),g(),v()});

import{i as r}from"./darkmode-D7SAhOzT.js";import{h as l,n as s,f as c}from"./news-C3vOo44x.js";import{g as i}from"./new-york-times-api-QNcKCIMv.js";import"./newsify_logo-BMn6THKq.js";function n(){let t=document.createElement("form");return t.className="search",t.innerHTML=`
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through latest news on Newsify">        
    `,t}const o=await i("World"),d=await i("Health"),m=await i("Arts"),u=await i("Business"),p=await i("Travel");function h(){const t=document.querySelector(".news__articles.europe"),e=o.filter(a=>a.subsection==="Europe");t.innerHTML=e.map(a=>`
        <li class="news__article">
            <div class="news__div" data-article="${a.title}">
                <img src="${a.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${a.title}">
                <h3>${a.title}</h3>
                <p>${a.abstract}</p>
                <a href="${a.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function _(){const t=document.querySelector(".news__articles.health");t.innerHTML=d.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function f(){const t=document.querySelector(".news__articles.arts");t.innerHTML=m.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function w(){const t=document.querySelector(".news__articles.business");t.innerHTML=u.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}function $(){const t=document.querySelector(".news__articles.travel");t.innerHTML=p.map(e=>`
        <li class="news__article">
            <div class="news__div" data-article="${e.title}">
                <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                <h3>${e.title}</h3>
                <p>${e.abstract}</p>
                <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `).join("")}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(l());document.querySelector("main").append(n(),s());document.querySelector("footer").append(c());r();window.addEventListener("DOMContentLoaded",()=>{h(),_(),f(),w(),$()});

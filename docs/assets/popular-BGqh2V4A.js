import{i as n}from"./darkmode-D7SAhOzT.js";import{h as o,n as d,f as m}from"./news-C3vOo44x.js";import{a as t}from"./new-york-times-api-QNcKCIMv.js";import"./newsify_logo-BMn6THKq.js";const p=await t("world"),l=await t("health"),s=await t("arts"),r=await t("business"),c=await t("travel");function h(){const a=document.querySelector(".news__articles.europe"),e=p.filter(i=>i.subsection==="europe");Array.isArray(e)&&e.length>0?a.innerHTML=e.map(i=>`
            <li class="news__article">
                <div class="news__div" data-article="${i.title}">
                    <img src="${i.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${i.title}">
                    <h3>${i.title}</h3>
                    <p>${i.abstract}</p>
                    <a href="${i.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </li>
            `).join(""):a.innerHTML=`
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `}function _(){const a=document.querySelector(".news__articles.health");Array.isArray(l)&&l.length>0?a.innerHTML=l.map(e=>`
            <li class="news__article">
                <div class="news__div" data-article="${e.title}">
                    <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                    <h3>${e.title}</h3>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </li>
            `).join(""):a.innerHTML=`
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `}function u(){const a=document.querySelector(".news__articles.arts");Array.isArray(s)&&s.length>0?a.innerHTML=s.map(e=>`
            <li class="news__article">
                <div class="news__div" data-article="${e.title}">
                    <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                    <h3>${e.title}</h3>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </li>
            `).join(""):a.innerHTML=`
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `}function g(){const a=document.querySelector(".news__articles.business");Array.isArray(r)&&r.length>0?a.innerHTML=r.map(e=>`
            <li class="news__article">
                <div class="news__div" data-article="${e.title}">
                    <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                    <h3>${e.title}</h3>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </li>
            `).join(""):a.innerHTML=`
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `}function w(){const a=document.querySelector(".news__articles.travel");Array.isArray(c)&&c.length>0?a.innerHTML=c.map(e=>`
            <li class="news__article">
                <div class="news__div" data-article="${e.title}">
                    <img src="${e.multimedia?.[0]?.url||"https://placecats.com/g/100/100"}" alt="${e.title}">
                    <h3>${e.title}</h3>
                    <p>${e.abstract}</p>
                    <a href="${e.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </li>
            `).join(""):a.innerHTML=`
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(o());document.querySelector("main").append(d());document.querySelector("footer").append(m());n();window.addEventListener("DOMContentLoaded",()=>{h(),_(),u(),g(),w()});

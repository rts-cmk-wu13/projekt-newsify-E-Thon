import{r as o,i as n}from"./darkmode-FyO9-oF3.js";import{h as c,n as d,f as m,a as u}from"./news-D2ovteyi.js";import{l as h}from"./newsify_logo-BMn6THKq.js";import{g as a,a as s}from"./new-york-times-api-QNcKCIMv.js";async function f(){const t=document.querySelector(".news");//! ARCHIVED ARTICLES:
const r=o("archived")||[],i=(await Promise.all([a("World"),a("Health"),a("Arts"),a("Business"),a("Travel"),s("world"),s("health"),s("arts"),s("business"),s("travel")])).flat().filter(e=>r.includes(e.title));//! ARCHIVED PAGE CONTENT:
t.innerHTML=`
    <li>
        <div class="news__box">
            <img src="${h}" alt="Newslify logo" />  
            <h2>Archived articles</h2>
            <div class="news__div">
                <i class="fa-solid fa-chevron-right single-chevron"></i>
            </div>
        </div>
        <ul class="news__articles"></ul>
    </li>
    `;const l=document.querySelector(".news__articles");l.innerHTML=i.map(e=>`
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
    `;document.querySelector("header").append(c());document.querySelector("main").append(d());document.querySelector("footer").append(m());n();u();f();

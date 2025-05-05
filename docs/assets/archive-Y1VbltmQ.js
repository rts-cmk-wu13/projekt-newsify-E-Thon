import{r as o,i as n}from"./darkmode-D7SAhOzT.js";import{h as c,n as d,f as m}from"./news-C3vOo44x.js";import{l as u}from"./newsify_logo-BMn6THKq.js";import{g as a,a as r}from"./new-york-times-api-QNcKCIMv.js";async function h(){const s=document.querySelector(".news");//! ARCHIVED ARTICLES:
const t=o("archived")||[],l=(await Promise.all([a("World"),a("Health"),a("Arts"),a("Business"),a("Travel"),r("world"),r("health"),r("arts"),r("business"),r("travel")])).flat().filter(e=>t.includes(e.title));//! ARCHIVED PAGE CONTENT:
s.innerHTML=`
    <li>
        <div class="news__box">
            <img src="${u}" alt="Newslify logo" />  
            <h2>Archived articles</h2>
            <div class="news__div">
                <i class="fa-solid fa-chevron-right single-chevron"></i>
            </div>
        </div>
        <ul class="news__articles"></ul>
    </li>
    `;const i=document.querySelector(".news__articles");i.innerHTML=l.map(e=>`
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
    `;document.querySelector("header").append(c());document.querySelector("main").append(d());document.querySelector("footer").append(m());n();h();

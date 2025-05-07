import{i as l}from"./darkmode-FyO9-oF3.js";import{l as y}from"./newsify_logo-BMn6THKq.js";function u(){let t=document.createElement("section");return t.className="sectionIndex",t.innerHTML=`
    <img src="${y}" alt="Newslify logo" />  
    <h1>Newsify</h1>
    `,t}function d(){const t=document.querySelector("h1"),e=document.querySelector("img"),i="/src/views/onboarding.html",o=1e3,a=o,n=500,s=o+a+n+2e3;function r(){e.style.opacity="0",e.style.transform="scale(0)",e.style.transition=`transform ${o}ms ease, opacity ${o}ms ease`,setTimeout(()=>{e.style.opacity="1",e.style.transform="scale(1)"},50)}function c(){t.style.opacity="0",t.style.transform="translateY(20px)",t.style.transition=`opacity ${n}ms ease, transform ${n}ms ease`,setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},o+a)}function m(){setTimeout(()=>{window.location.href=i},s)}r(),c(),m()}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("main").append(u());l();d();

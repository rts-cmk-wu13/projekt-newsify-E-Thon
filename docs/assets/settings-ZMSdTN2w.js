import{r as t,s as a,i as n}from"./darkmode-FyO9-oF3.js";import{h as l,n as u,f as g,a as d}from"./news-D2ovteyi.js";import"./newsify_logo-BMn6THKq.js";function h(){let r=document.createElement("section");return r.className="upperSection",r.innerHTML=`
        <h4>Settings</h4>
        <p>Categories</p>

    `,r}function p(){let r=document.createElement("div");return r.className="lowerDiv",r.innerHTML=`
        <button class="btn3" id="lightdark">Toggle dark mode</button>
        <p>Version 4.8.15.16.23.42</p>

    `,r}function m(){document.querySelectorAll(".news__div").forEach(r=>{r.innerHTML=`
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        `})}function f(){let r=document.querySelectorAll(".news__box .news__div");if(r.forEach(s=>{s.addEventListener("click",i)}),!t("categories"))a("categories",{europe:!0,health:!0,arts:!0,business:!0,travel:!0});else{const s=t("categories");r.forEach(o=>{const c=o.closest(".news__box").querySelector("h2").innerHTML;let e=o.querySelector("input");e.checked=!s[c]})}function i(s){const o=s.target,c=o.closest(".news__box").querySelector("h2").innerHTML;let e;if(o.checked){if(o.checked)switch(c){case"europe":e=t("categories"),e.europe=!1,a("categories",e);break;case"health":e=t("categories"),e.health=!1,a("categories",e);break;case"arts":e=t("categories"),e.arts=!1,a("categories",e);break;case"business":e=t("categories"),e.business=!1,a("categories",e);break;case"travel":e=t("categories"),e.travel=!1,a("categories",e);break}}else switch(c){case"europe":e=t("categories"),e.europe=!0,a("categories",e);break;case"health":e=t("categories"),e.health=!0,a("categories",e);break;case"arts":e=t("categories"),e.arts=!0,a("categories",e);break;case"business":e=t("categories"),e.business=!0,a("categories",e);break;case"travel":e=t("categories"),e.travel=!0,a("categories",e);break}console.log(t("categories"))}}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(l());document.querySelector("main").append(h(),u(),p());document.querySelector("footer").append(g());m();n();d();f();

import{i as t}from"./darkmode-D7SAhOzT.js";import{h as n,n as o,f as r}from"./news-C3vOo44x.js";import"./newsify_logo-BMn6THKq.js";function i(){let e=document.createElement("section");return e.className="upperSection",e.innerHTML=`
        <h4>Settings</h4>
        <p>Categories</p>

    `,e}function a(){let e=document.createElement("div");return e.className="lowerDiv",e.innerHTML=`
        <button class="btn3" id="lightdark">Toggle dark mode</button>
        <p>Version 4.8.15.16.23.42</p>

    `,e}function c(){document.querySelectorAll(".news__div").forEach(e=>{e.innerHTML=`
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        `})}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(n());document.querySelector("main").append(i(),o(),a());document.querySelector("footer").append(r());c();t();

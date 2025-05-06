import{i as c}from"./darkmode-FyO9-oF3.js";const l=""+new URL("../onboarding1.png",import.meta.url).href,d=""+new URL("../onboarding2.png",import.meta.url).href,m=""+new URL("../onboarding3.png",import.meta.url).href;function p(){let e=document.createElement("div");return e.className="mainDivBoarding",e.innerHTML=`
  <article class="step1 active">
    <img src="${l}" alt="Login onboarding screenshot" />
    <h2>Stay Connected, Everywhere, Anytime</h2>
    <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
  </article>
  <article class="step2">
    <img src="${d}" alt="Newspage onboarding screenshot" />
    <h2>Become a Savvy Global Citizen.</h2>
    <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>  
  </article>
  <article class="step3">
    <img src="${m}" alt="Settings onboarding screenshot" />
    <h2>Enhance your News Journey Now!</h2>
    <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
  </article>

  <div class="dots">
    <span class="dot active" data-step="1"></span>
    <span class="dot" data-step="2"></span>
    <span class="dot" data-step="3"></span>
  </div>

  <div class="navigation">
    <button class="btn1 skip">Skip</button>
    <button class="btn2 next">Continue</button>
  </div>  
  `,e}function u(){if(localStorage.getItem("hasCompletedOnboarding"))return window.location.href="./login.html",document.createElement("div");const e=document.querySelector(".skip"),s=document.querySelector(".next"),a=document.querySelectorAll(".dot"),o=document.querySelectorAll("article");let t=1;e.addEventListener("click",()=>{r()}),s.addEventListener("click",()=>{t<3?(t++,i()):r()});function i(){o.forEach(n=>{n.classList.remove("active")}),a.forEach(n=>{n.classList.remove("active")}),o[t-1].classList.add("active"),a[t-1].classList.add("active")}function r(){localStorage.setItem("hasCompletedOnboarding","true"),window.location.href="./login.html"}i()}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("main").append(p());c();u();

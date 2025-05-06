import{i as n}from"./darkmode-FyO9-oF3.js";import{l as o}from"./newsify_logo-BMn6THKq.js";function a(){let e=document.createElement("section");return e.className="mainSectionLogin",e.innerHTML=`
    <img src="${o}" alt="Newslify logo" />  
    <h1>Newsify</h1>
    <p class="mainSection__p">Welcome! Let's dive into your account!</p>
    <a href="./home.html" class="btn1">Continue with Facebook</a>
    <a href="./home.html" class="btn1">Continue with Google</a>
    <div>
        <span></span>
        <p>or</p>
        <span></span>
    </div>
    <a href="./home.html" class="btn2">Sign in with password</a>
    <p class="mainSection__p">Don't have an account? <a href="./home.html">Sign up</a></p>
    
        
    `,e}document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("main").append(a());n();

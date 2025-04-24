import{l as r,h as l,f as t}from"./footer-CQnmBAyz.js";function c(){document.querySelectorAll(".chevron").forEach(a=>{a.addEventListener("click",s=>{let i=s.currentTarget.parentElement.nextElementSibling;i.style.display==="block"?(i.style.display="none",a.classList.remove("fa-chevron-down"),a.classList.add("fa-chevron-right")):(i.style.display="block",a.classList.remove("fa-chevron-right"),a.classList.add("fa-chevron-down"))})})}function n(){let e=document.createElement("ul");return e.className="news",e.innerHTML=`
        <li>
            <div>
                <img src="${r}" alt="Newslify logo" />  
                <h2>europe</h2>
                <i class="fa-solid fa-chevron-right chevron"></i>
            </div>
            <ul class="news">
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${r}" alt="Newslify logo" />  
                <h2>health</h2>
                <i class="fa-solid fa-chevron-right chevron"></i>
            </div>
            <ul class="news">
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${r}" alt="Newslify logo" />  
                <h2>sport</h2>
                <i class="fa-solid fa-chevron-right chevron"></i>
            </div>
            <ul class="news">
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${r}" alt="Newslify logo" />  
                <h2>business</h2>
                <i class="fa-solid fa-chevron-right chevron"></i>
            </div>
            <ul class="news">
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${r}" alt="Newslify logo" />  
                <h2>travel</h2>
                <i class="fa-solid fa-chevron-right chevron"></i>
            </div>
            <ul class="news">
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
        
    `,e}function o(){let e=document.createElement("form");return e.className="search",e.innerHTML=`
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through news on Newsify">        
    `,e}function h(){document.querySelector("main").append(o(),n())}document.addEventListener("DOMContentLoaded",()=>{c()});document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(l());document.querySelector("main").append(h());document.querySelector("footer").append(t());

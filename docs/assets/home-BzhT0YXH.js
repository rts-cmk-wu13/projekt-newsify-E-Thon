import{l as i,h as l,f as t}from"./footer-BJ_ZUaC0.js";function c(){document.querySelectorAll(".chevron").forEach(e=>{e.addEventListener("click",s=>{let r=s.currentTarget.parentElement.nextElementSibling;r.style.display==="block"?(r.style.display="none",e.classList.remove("fa-chevron-down"),e.classList.add("fa-chevron-right")):(r.style.display="block",e.classList.remove("fa-chevron-right"),e.classList.add("fa-chevron-down"))})})}function o(){let a=document.createElement("section");return a.className="mainSectionHome",a.innerHTML=`
    <form action="#">
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through news on Newsify">
    </form>
    <ul>
        <li>
            <div>
                <img src="${i}" alt="Newslify logo" />  
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
                <img src="${i}" alt="Newslify logo" />  
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
                <img src="${i}" alt="Newslify logo" />  
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
                <img src="${i}" alt="Newslify logo" />  
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
                <img src="${i}" alt="Newslify logo" />  
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
    </ul>
        
    `,a}document.addEventListener("DOMContentLoaded",()=>{c()});document.querySelector("#app").innerHTML=`
    <header></header>
    <main></main>
    <footer></footer>
    `;document.querySelector("header").append(l());document.querySelector("main").append(o());document.querySelector("footer").append(t());

import{l as t}from"./newsify_logo-BMn6THKq.js";import{r as g,s as _}from"./darkmode-FyO9-oF3.js";function L(){let e=document.createElement("div");return e.className="headerElm",e.innerHTML=`
        <a href="home.html">
            <img src="${t}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </a>
    `,e}function k(){const e=window.location.pathname;e==="/src/views/home.html"?document.querySelector(".ulFooter .footer__link--home").style.color="var(--highlight)":e==="/src/views/archive.html"?document.querySelector(".ulFooter .footer__link--archive").style.color="var(--highlight)":e==="/src/views/popular.html"?document.querySelector(".ulFooter .footer__link--popular").style.color="var(--highlight)":e==="/src/views/settings.html"&&(document.querySelector(".ulFooter .footer__link--settings").style.color="var(--highlight)")}function b(){let e=document.createElement("ul");return e.className="ulFooter",e.innerHTML=`
        <li><a href="home.html" class="footer__link--home"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="archive.html" class="footer__link--archive"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="popular.html" class="footer__link--popular"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="settings.html" class="footer__link--settings"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,e}function w(){const e=document.querySelectorAll(".chevron"),l=document.querySelector(".single-chevron");[...e,l].filter(Boolean).forEach(r=>{r.addEventListener("click",o=>{const a=o.currentTarget.closest("li").querySelector(".news__articles"),s=o.currentTarget;a.style.display==="block"?(a.style.display="none",s.classList.remove("fa-chevron-down"),s.classList.add("fa-chevron-right")):(a.style.display="block",s.classList.remove("fa-chevron-right"),s.classList.add("fa-chevron-down"))})})}function m(){const e=document.querySelectorAll(".news__articles");let l=g("archived")||[];e.forEach(n=>{let r,o,a,s=document.createElement("span");s.innerHTML='<i class="fa-regular fa-bookmark"></i>',s.style.position="absolute",s.style.top="45%",s.style.margin="0 auto",s.style.right="20%",s.style.zIndex="0",n.addEventListener("pointerdown",d),n.addEventListener("pointermove",f),n.addEventListener("pointerup",v);function d(i){i.preventDefault(),r=i.clientX,i.target.closest(".news__div").classList.remove("animate")}function f(i){i.preventDefault(),o=i.clientX,a=o-r;let c=i.target.closest(".news__div").dataset.article;const h=i.target.closest(".news__article");l.includes(c)?(h.style.backgroundColor="red",s.innerHTML='<i class="fa-solid fa-trash"></i>'):(h.style.backgroundColor="var(--archive)",s.innerHTML='<i class="fa-regular fa-bookmark"></i>'),a<0&&(i.target.closest(".news__div").style.left=a+"px"),a<-104&&h.append(s)}function v(i){if(i.preventDefault(),r=void 0,a<-104){let c=i.target.closest(".news__div").dataset.article;l.includes(c)?l=l.filter(u=>u!=c):l.push(c),_("archived",l),console.log(l),i.target.closest(".news__div").classList.add("animate"),i.target.closest(".news__div").style.left="0"}}})}function S(){let e=document.createElement("ul");return e.className="news",e.innerHTML=`
        <li>
            <div class="news__box">
                <img src="${t}" alt="Newslify logo" />  
                <h2>europe</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>
            </div>
            <ul class="news__articles europe">
                <li class="news__article">
                    <div class="news__div">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        <a href="#">Read more <i class="fa-solid fa-angles-right"></i></a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <div class="news__box">
                <img src="${t}" alt="Newslify logo" />  
                <h2>health</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles health">
                <li class="news__article">
                    <div class="news__div">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        <a href="#">Read more <i class="fa-solid fa-angles-right"></i></a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <div class="news__box">
                <img src="${t}" alt="Newslify logo" />  
                <h2>arts</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles arts">
                <li class="news__article">
                    <div class="news__div">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        <a href="#">Read more <i class="fa-solid fa-angles-right"></i></a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <div class="news__box">
                <img src="${t}" alt="Newslify logo" />  
                <h2>business</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles business">
                <li class="news__article">
                    <div class="news__div">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        <a href="#">Read more <i class="fa-solid fa-angles-right"></i></a>
                    </div>
                </li>
            </ul>
        </li>
        <li>
            <div class="news__box">
                <img src="${t}" alt="Newslify logo" />  
                <h2>travel</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles travel">
                <li class="news__article">
                    <div class="news__div">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        <a href="#">Read more <i class="fa-solid fa-angles-right"></i></a>
                    </div>
                </li>
            </ul>
        </li>
        
    `,e}document.addEventListener("DOMContentLoaded",()=>{m(),w()});export{k as a,b as f,L as h,S as n};

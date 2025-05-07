import{l as o}from"./newsify_logo-BMn6THKq.js";import{r as h,s as _}from"./darkmode-FyO9-oF3.js";function k(){let e=document.createElement("div");return e.className="headerElm",e.innerHTML=`
        <a href="home.html">
            <img src="${o}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </a>
    `,e}function S(){const e=window.location.pathname;e==="/src/views/home.html"?document.querySelector(".ulFooter .footer__link--home").style.color="var(--highlight)":e==="/src/views/archive.html"?document.querySelector(".ulFooter .footer__link--archive").style.color="var(--highlight)":e==="/src/views/popular.html"?document.querySelector(".ulFooter .footer__link--popular").style.color="var(--highlight)":e==="/src/views/settings.html"&&(document.querySelector(".ulFooter .footer__link--settings").style.color="var(--highlight)")}function b(){let e=document.createElement("ul");return e.className="ulFooter",e.innerHTML=`
        <li><a href="home.html" class="footer__link--home"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="archive.html" class="footer__link--archive"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="popular.html" class="footer__link--popular"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="settings.html" class="footer__link--settings"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,e}function w(){const e=document.querySelectorAll(".chevron"),t=document.querySelector(".single-chevron");[...e,t].filter(Boolean).forEach(a=>{a.addEventListener("click",i=>{const r=i.currentTarget.closest("li").querySelector(".news__articles"),s=i.currentTarget;r.style.display==="block"?(r.style.display="none",s.classList.remove("fa-chevron-down"),s.classList.add("fa-chevron-right")):(r.style.display="block",s.classList.remove("fa-chevron-right"),s.classList.add("fa-chevron-down"))})})}function m(){const e=document.querySelectorAll(".news__articles");let t=h("archived")||[];e.forEach(c=>{let a,i,r,s=document.createElement("span");s.innerHTML='<i class="fa-regular fa-bookmark"></i>',s.style.position="absolute",s.style.top="45%",s.style.margin="0 auto",s.style.right="20%",s.style.zIndex="0",c.addEventListener("pointerdown",f),c.addEventListener("pointermove",v),c.addEventListener("pointerup",u);function f(l){l.preventDefault(),a=l.clientX,l.target.closest(".news__div").classList.remove("animate")}function v(l){l.preventDefault(),i=l.clientX,r=i-a;let n=l.target.closest(".news__div").dataset.article;const d=l.target.closest(".news__article");t.includes(n)?(d.style.backgroundColor="red",s.innerHTML='<i class="fa-solid fa-trash"></i>'):(d.style.backgroundColor="var(--archive)",s.innerHTML='<i class="fa-regular fa-bookmark"></i>'),r<0&&(l.target.closest(".news__div").style.left=r+"px"),r<-104&&d.append(s)}function u(l){if(l.preventDefault(),a=void 0,r<-104){let n=l.target.closest(".news__div").dataset.article;t.includes(n)?t=t.filter(g=>g!=n):t.push(n),_("archived",t),console.log(t),l.target.closest(".news__div").classList.add("animate"),l.target.closest(".news__div").style.left="0"}}})}function p(){if(document.querySelectorAll(".news__box .news__div .chevron").length===0)return;const t=h("categories");if(!t)return;Object.keys(t).forEach(a=>{const i=document.querySelector(`.news__articles.${a}`);i&&(t[a]===!1?i.style.display="none":i.style.display="block")}),document.querySelectorAll(".news__box").forEach(a=>{const i=a.querySelector(".news__div .chevron");i&&a.addEventListener("click",()=>{const r=a.querySelector("h2").textContent.toLowerCase(),s=document.querySelector(`.news__articles.${r}`);s&&(s.style.display==="none"?(s.style.display="block",i.classList.add("fa-chevron-down"),i.classList.remove("fa-chevron-right")):(s.style.display="none",i.classList.add("fa-chevron-right"),i.classList.remove("fa-chevron-down")))})})}function A(){let e=document.createElement("ul");return e.className="news",e.innerHTML=`
        <li>
            <div class="news__box">
                <img src="${o}" alt="Newslify logo" />  
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
                <img src="${o}" alt="Newslify logo" />  
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
                <img src="${o}" alt="Newslify logo" />  
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
                <img src="${o}" alt="Newslify logo" />  
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
                <img src="${o}" alt="Newslify logo" />  
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
        
    `,e}document.addEventListener("DOMContentLoaded",()=>{m(),w(),p()});export{S as a,b as f,k as h,A as n};

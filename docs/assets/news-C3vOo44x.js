import{l as r}from"./newsify_logo-BMn6THKq.js";import{r as w,s as g}from"./darkmode-D7SAhOzT.js";function L(){let e=document.createElement("div");return e.className="headerElm",e.innerHTML=`
        <a href="home.html">
            <img src="${r}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </a>
    `,e}function b(){let e=document.createElement("ul");return e.className="ulFooter",e.innerHTML=`
        <li><a href="home.html"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="archive.html"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="popular.html"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="settings.html"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `,e}function m(){const e=document.querySelectorAll(".chevron"),i=document.querySelector(".single-chevron");[...e,i].filter(Boolean).forEach(t=>{t.addEventListener("click",c=>{const l=c.currentTarget.closest("li").querySelector(".news__articles"),s=c.currentTarget;l.style.display==="block"?(l.style.display="none",s.classList.remove("fa-chevron-down"),s.classList.add("fa-chevron-right")):(l.style.display="block",s.classList.remove("fa-chevron-right"),s.classList.add("fa-chevron-down"))})})}function _(){const e=document.querySelectorAll(".news__articles");let i=w("archived")||[];e.forEach(o=>{let t,c,l,s=document.createElement("span");s.innerHTML='<i class="fa-regular fa-bookmark"></i>',s.style.position="absolute",s.style.top="45%",s.style.margin="0 auto",s.style.right="20%",s.style.zIndex="0",o.addEventListener("pointerdown",h),o.addEventListener("pointermove",f),o.addEventListener("pointerup",v);function h(a){a.preventDefault(),t=a.clientX,a.target.closest(".news__div").classList.remove("animate")}function f(a){a.preventDefault(),c=a.clientX,l=c-t;let n=a.target.closest(".news__div").dataset.article;const d=a.target.closest(".news__article");i.includes(n)?(d.style.backgroundColor="red",s.innerHTML='<i class="fa-solid fa-trash"></i>'):(d.style.backgroundColor="var(--archive)",s.innerHTML='<i class="fa-regular fa-bookmark"></i>'),l<0&&(a.target.closest(".news__div").style.left=l+"px"),l<-104&&d.append(s)}function v(a){if(a.preventDefault(),t=void 0,l<-104){let n=a.target.closest(".news__div").dataset.article;i.includes(n)?i=i.filter(u=>u!=n):i.push(n),g("archived",i),console.log(i),a.target.closest(".news__div").classList.add("animate"),a.target.closest(".news__div").style.left="0"}}})}function A(){let e=document.createElement("ul");return e.className="news",e.innerHTML=`
        <li>
            <div class="news__box">
                <img src="${r}" alt="Newslify logo" />  
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
                <img src="${r}" alt="Newslify logo" />  
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
                <img src="${r}" alt="Newslify logo" />  
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
                <img src="${r}" alt="Newslify logo" />  
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
                <img src="${r}" alt="Newslify logo" />  
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
        
    `,e}document.addEventListener("DOMContentLoaded",()=>{_(),m()});export{b as f,L as h,A as n};

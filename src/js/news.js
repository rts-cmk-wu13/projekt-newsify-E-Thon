import logo from "/newsify_logo.png";
import newsList from "./newsList.js";
import swiper from "./swiper.js";

export default function news() {
  let ulElm = document.createElement("ul");
  ulElm.className = "news";

  ulElm.innerHTML = `
        <li>
            <div class="news__box">
                <img src="${logo}" alt="Newslify logo" />  
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
                <img src="${logo}" alt="Newslify logo" />  
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
                <img src="${logo}" alt="Newslify logo" />  
                <h2>sport</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles sport">
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
                <img src="${logo}" alt="Newslify logo" />  
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
                <img src="${logo}" alt="Newslify logo" />  
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
        
    `;

  return ulElm;
}


document.addEventListener("DOMContentLoaded", () => {
    swiper();
    newsList();
  });
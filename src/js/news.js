import logo from "/newsify_logo.png";
import newsList from "./newsList.js";

export default function news() {
  let ulElm = document.createElement("ul");
  ulElm.className = "news";

  ulElm.innerHTML = `
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>europe</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>
            </div>
            <ul class="news__articles europe">
                <li>
                    <a href="#">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>health</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles health">
                <li>
                    <a href="#">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>sport</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles sport">
                <li>
                    <a href="#">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>business</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles business">
                <li>
                    <a href="#">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>travel</h2>
                <div class="news__div">
                    <i class="fa-solid fa-chevron-right chevron"></i>
                </div>            
            </div>
            <ul class="news__articles travel">
                <li>
                    <a href="#">
                        <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                        <h3>Headline</h3>
                        <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                    </a>
                </li>
            </ul>
        </li>
        
    `;

  return ulElm;
}

document.addEventListener("DOMContentLoaded", () => {
  newsList();
});

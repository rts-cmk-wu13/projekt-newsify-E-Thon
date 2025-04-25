import logo from "/newsify_logo.png";
import newsList from './newsList.js'

const apiKey = 'DIN_API_NØKKEL';
const url = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${apiKey}`;


export default function news() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
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
                    <ul class="articles">
                        <li>
                            <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                            <h3>Headline</h3>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
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
                    <ul class="articles">
                        <li>
                            <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                            <h3>Headline</h3>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
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
                    <ul class="articles">
                        <li>
                            <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                            <h3>Headline</h3>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
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
                    <ul class="articles">
                        <li>
                            <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                            <h3>Headline</h3>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
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
                    <ul class="articles">
                        <li>
                            <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                            <h3>Headline</h3>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        </li>
                    </ul>
                </li>
                
            `;
        
        return ulElm;
      })
      .catch(error => {
        console.error('Feil ved henting av data:', error);
      });
}

document.addEventListener("DOMContentLoaded", () => {
    newsList();
});
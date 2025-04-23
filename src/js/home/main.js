import logo from "/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "mainSectionHome";

  sectionElm.innerHTML = `
    <form action="#">
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through news on Newsify">
    </form>
    <ul>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>europe</h2>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <ul>
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
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <ul>
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
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <ul>
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
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <ul>
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
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <ul>
                <li>
                    <img src="https://placecats.com/g/100/100" alt="Image of the news article">
                    <h3>Headline</h3>
                    <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                </li>
            </ul>
        </li>
    </ul>
        
    `;

  return sectionElm;
}

import logo from "public/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "mainSection";

  sectionElm.innerHTML = `
    <h1>header</h1>
    <ul>
        <li>
            <div>
                <img src="${logo}" alt="Newslify logo" />  
                <h2>Europe</h2>
                <form action="#" class="switch" method="post">
                    <input type="checkbox" id="switch" value="false" name="switch">
                    <span class="slider round"></span>
                </form>
            </div>
            
        </li>
    </ul>
        
    `;

  return sectionElm;
}

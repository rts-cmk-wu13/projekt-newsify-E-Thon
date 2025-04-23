import logo from "/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "mainSection";

  sectionElm.innerHTML = `
    <ul>
        <li>
            <img src="${logo}" alt="Newslify logo" />  
            <h2>europe</h2>
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        </li>
        <li>
            <img src="${logo}" alt="Newslify logo" />  
            <h2>health</h2>
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        </li>
        <li>
            <img src="${logo}" alt="Newslify logo" />  
            <h2>sport</h2>
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        </li>
        <li>
            <img src="${logo}" alt="Newslify logo" />  
            <h2>business</h2>
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        </li>
        <li>
            <img src="${logo}" alt="Newslify logo" />  
            <h2>travel</h2>
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        </li>
    </ul>
        
    `;

  return sectionElm;
}

import logo from "/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "sectionIndex";

  sectionElm.innerHTML = `
    <img src="${logo}" alt="Newslify logo" />  
    <h1>Newsify</h1>
    `;

  return sectionElm;
}

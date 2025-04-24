export default function search() {
  let formElm = document.createElement("form");
  formElm.className = "search";

  formElm.innerHTML = `
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through news on Newsify">        
    `;

return formElm;
}
export default function searchfield() {
  let formElm = document.createElement("form");
  formElm.className = "search";

  formElm.innerHTML = `
        <input type="search" id="search" name="search" placeholder="Search news" aria-label="Search through latest news on Newsify">        
    `;

return formElm;
}
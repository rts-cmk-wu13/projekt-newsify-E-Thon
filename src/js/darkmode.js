import { readFromLocalStorage, saveToLocalStorage } from "./utilities/localstorage";

export default function initDarkMode() {
    const rootElm = document.documentElement;
    const isDarkMode = readFromLocalStorage("isDarkMode");
    const browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let darkState = isDarkMode !== null ? isDarkMode : browserDark;
    
    setDarkMode(darkState); // initial tilstand
    
    function setDarkMode(state) {
        rootElm.setAttribute("data-dark", state);
    }
    
    const btnElm = document.querySelector("#lightdark");
    if (!btnElm) return;
    btnElm.addEventListener("click", () => {
      darkState = !darkState; // toggle tilstand
      saveToLocalStorage("isDarkMode", darkState);
      setDarkMode(darkState);
    });
  
  }
  
import { saveToLocalStorage, readFromLocalStorage } from '../utilities/localstorage.js'

export default function categories(){
    let news__div = document.querySelectorAll(".news__box .news__div");

    news__div.forEach(single__div => {
      single__div.addEventListener("click", handleClick)
    })
    
    let categories = readFromLocalStorage("categories")
    if (!categories) {
      let activeBtn = {
        "europe": true,
        "health": true,
        "arts": true,
        "business": true,
        "travel": true,
      }
      saveToLocalStorage("categories", activeBtn)
    }
    else {
      const cat = readFromLocalStorage("categories");

      news__div.forEach((div) => {
        const headerCategory = div.closest(".news__box").querySelector("h2").innerHTML
        let input = div.querySelector("input")
        input.checked = !cat[headerCategory]
      })
    }
    
    function handleClick(event) {
      const btn = event.target
      const categoryHeader = btn.closest(".news__box").querySelector("h2").innerHTML
      let cat;
      if (!btn.checked) {
        switch (categoryHeader) {
          case "europe":
            cat = readFromLocalStorage("categories");
            cat.europe = true;
            saveToLocalStorage("categories", cat);
            break;
          case "health":
            cat = readFromLocalStorage("categories");
            cat.health = true;
            saveToLocalStorage("categories", cat);
            break;
          case "arts":
            cat = readFromLocalStorage("categories");
            cat.arts = true;
            saveToLocalStorage("categories", cat);
            break;
          case "business":
            cat = readFromLocalStorage("categories");
            cat.business = true;
            saveToLocalStorage("categories", cat);
            break;
          case "travel":
            cat = readFromLocalStorage("categories");
            cat.travel = true;
            saveToLocalStorage("categories", cat);
            break;
        }
      } else if (btn.checked) {
        switch (categoryHeader) {
          case "europe":
            cat = readFromLocalStorage("categories");
            cat.europe = false;
            saveToLocalStorage("categories", cat);
            break;
          case "health":
            cat = readFromLocalStorage("categories");
            cat.health = false;
            saveToLocalStorage("categories", cat);
            break;
          case "arts":
            cat = readFromLocalStorage("categories");
            cat.arts = false;
            saveToLocalStorage("categories", cat);
            break;
          case "business":
            cat = readFromLocalStorage("categories");
            cat.business = false;
            saveToLocalStorage("categories", cat);
            break;
          case "travel":
            cat = readFromLocalStorage("categories");
            cat.travel = false;
            saveToLocalStorage("categories", cat);
            break;
        }
      }
      console.log(readFromLocalStorage("categories"));
    } 
}
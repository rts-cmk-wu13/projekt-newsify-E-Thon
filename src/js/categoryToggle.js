import { readFromLocalStorage } from "./utilities/localstorage";

export default function toggleCategoryVisibility() {
  // Kun aktiver på sider hvor .news__div har en .chevron
  const newsBoxes = document.querySelectorAll(".news__box .news__div .chevron");
  
  if (newsBoxes.length === 0) {
    return; // Afslut hvis der ikke er nogen relevante elementer
  }
  
  // Læs kategori indstillinger fra localStorage
  const categories = readFromLocalStorage("categories");
  
  if (!categories) {
    return; // Hvis der ikke er nogen gemte kategorier, afslut funktionen
  }
  
  // Gennemgå hver kategori og vis/skjul baseret på localStorage indstillinger
  Object.keys(categories).forEach(category => {
    const categoryArticles = document.querySelector(`.news__articles.${category}`);
    
    if (categoryArticles) {
      // Hvis kategorien er markeret som false (deaktiveret), skjul den
      if (categories[category] === false) {
        categoryArticles.style.display = "none";
      } else {
        categoryArticles.style.display = "block";
      }
    }
  });
  
  // Tilføj klik-funktionalitet til kategoriboksene for at vise/skjule
  const categoryBoxes = document.querySelectorAll(".news__box");
  categoryBoxes.forEach(box => {
    // Find kun elementer der har en chevron
    const chevron = box.querySelector(".news__div .chevron");
    if (!chevron) return;
    
    box.addEventListener("click", () => {
      const category = box.querySelector("h2").textContent.toLowerCase();
      const articlesList = document.querySelector(`.news__articles.${category}`);
      
      if (articlesList) {
        // Toggle visning
        if (articlesList.style.display === "none") {
          articlesList.style.display = "block";
          chevron.classList.add("fa-chevron-down");
          chevron.classList.remove("fa-chevron-right");
        } else {
          articlesList.style.display = "none";
          chevron.classList.add("fa-chevron-right");
          chevron.classList.remove("fa-chevron-down");
        }
      }
    });
  });
}